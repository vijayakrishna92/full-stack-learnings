import os
import json
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langgraph.graph import StateGraph, START, END
from typing import TypedDict
from langchain_mcp_adapters.client import MultiServerMCPClient
import asyncio

# Load environment variables
load_dotenv()

# Initialize LLM
llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("YOUR_GROQ_API_KEY"),
    temperature=0.1,
    max_tokens=1000,
)
class AgentState(TypedDict):
    user_prompt: str
    retrieved_answer: str
    final_answer: str

# Load MCP tool asynchronously
async def load_search_tool():
    with open("../services/mcp_config.json", "r") as f:
        config_dict = json.load(f)
    client = MultiServerMCPClient(connections=config_dict["mcpServers"])
    tools = await client.get_tools()
    return {tool.name: tool for tool in tools}["search_similar"]

# Sync wrapper to call the async tool
def run_tool_sync(tool, query: str) -> dict:
    async def _run():
        res = await tool.ainvoke({"query": query})
        print("📥 Raw call_tool result object:", res)
        try:
            data = json.loads(res)
        except json.JSONDecodeError:
            # fallback: treat as raw text
            data = {"documents": [res]}
        return data
    return asyncio.run(_run())

# First agent: retrieve raw answer from LLM
def retrieve_answer(state: AgentState) -> AgentState:
    question = state["user_prompt"]
    result = run_tool_sync(retrieve_answer.tool, question)  # `retrieve_answer.tool` is set later
    documents = result.get("documents", [])
    combined = "\n".join(documents)
    return {"user_prompt": question, "retrieved_answer": combined, "final_answer": ""}

# Second agent: polish and rephrase
def polish_answer(state: AgentState) -> AgentState:
    question = state["user_prompt"]
    raw = state["retrieved_answer"]
    prompt = f"""
    Role: Expert Writing Assistant
    Task: Rephrase and polish the retrieved answer to sound clear, correct, and engaging.
    User question: "{question}"
    Retrieved answer: "{raw}"
    Output: Final, well-structured answer.
    """
    response = llm.invoke(prompt)
    return {"user_prompt": question, "retrieved_answer": raw, "final_answer": response.content}

def build_graph():
    graph = StateGraph(AgentState)
    graph.add_node("retriever", retrieve_answer)
    graph.add_node("polisher", polish_answer)
    graph.set_entry_point("retriever")
    graph.add_edge("retriever", "polisher")
    graph.set_finish_point("polisher")
    return graph.compile()

# Simple test
def benchmark(app, user_query): 
    state = {"user_prompt": user_query, "retrieved_answer": "", "final_answer": ""}
    result = app.invoke(state)
    print("\nRaw retrieved answer:", result["retrieved_answer"])
    print("\nPolished final answer:", result["final_answer"])

if __name__ == "__main__":
    import nest_asyncio
    nest_asyncio.apply()

    # Load tool and assign to retriever before running
    tool = asyncio.run(load_search_tool())
    retrieve_answer.tool = tool  # Attach tool to function
    app = build_graph()

    test_query = "skills"
    benchmark(app, test_query)