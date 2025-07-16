from app.config import MODEL_NAME, TEMPERATURE, MAX_TOKENS
from langchain_groq import ChatGroq
import os
from dotenv import load_dotenv
from app.graph_builder import build_graph
import asyncio
from app.client.mcp_client import load_tools_from_mcp

load_dotenv()
api_key=os.getenv("YOUR_GROQ_API_KEY")

# Initialize LLM
llm = ChatGroq(
    model=MODEL_NAME,
    temperature=TEMPERATURE,
    max_tokens=MAX_TOKENS,
    api_key=api_key
)

app = build_graph(llm)


def main():
    # Ask user for input
    user_question = input("Enter your question: ")

    # Initial state
    state = {
        "user_prompt": user_question,
        "retrieved_answer": "",
        "final_answer": "",
        "llm": llm  # include llm in state
    }

    # Run the graph
    final_state = app.invoke(state)

    # Print the polished answer
    print("\n✅ Final Answer:")
    print(final_state["final_answer"])

if __name__ == "__main__":
    main()