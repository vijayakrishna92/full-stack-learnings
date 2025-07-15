import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langgraph.graph import StateGraph, START, END
from typing import TypedDict

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
    
# First agent: retrieve raw answer from LLM
def retrieve_answer(state: AgentState) -> AgentState:
    question = state["user_prompt"]
    prompt = f"""
    Role: Knowledge Retriever
    Task: Retrieve a raw answer from your knowledge base for the question: "{question}".
    Output: Short, direct answer without polishing.
    """
    response = llm.invoke(prompt)
    return {"user_prompt": question, "retrieved_answer": response.content, "final_answer": ""}

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

# Build graph
workflow = StateGraph(AgentState)
workflow.add_node("retriever", retrieve_answer)
workflow.add_node("polisher", polish_answer)

workflow.set_entry_point("retriever")
workflow.add_edge("retriever", "polisher")
workflow.set_finish_point("polisher")

# Compile
app = workflow.compile()

# Simple test
def benchmark(user_query): 
    state = {"user_prompt": user_query, "retrieved_answer": "", "final_answer": ""}
    result = app.invoke(state)
    print("\nRaw retrieved answer:", result["retrieved_answer"])
    print("\nPolished final answer:", result["final_answer"])

if __name__ == "__main__":
    test_query = "Explain how photosynthesis works in simple terms"
    benchmark(test_query)