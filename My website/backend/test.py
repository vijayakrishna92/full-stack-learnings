import asyncio
from llama_index.llms.groq import Groq
from llama_index.core.agent.workflow import FunctionAgent


# Define a simple tool (for demo)
def multiply(a: float, b: float) -> float:
    """Multiply two numbers."""
    return a * b

# Initialize Groq LLM
llm = Groq(
    model="llama3-8b-8192",  # pick supported Groq model
    api_key="YOUR_GROQ_API_KEY"
)

# Create agent with tool
agent = FunctionAgent(
    tools=[multiply],
    llm=llm,
    system_prompt="You are a helpful assistant that can multiply numbers and chat."
)



async def main():
    print("🤖 Groq agent with memory! Type 'exit' to quit.")
    while True:
        user_input = input("\nUser: ")
        if user_input.lower() in {"exit", "quit"}:
            break

        # Pass memory so agent keeps context
        response = await agent.run(user_input)
        print(f"Agent: {response}")

if __name__ == "__main__":
    asyncio.run(main())
