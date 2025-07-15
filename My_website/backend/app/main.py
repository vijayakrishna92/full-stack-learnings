from config import PROMPTS, MODEL_NAME, TEMPERATURE, MAX_TOKENS
from langchain_groq import ChatGroq
import os
from dotenv import load_dotenv
from graph_builder import build_graph

load_dotenv()
api_key=os.getenv("YOUR_GROQ_API_KEY")

# Initialize LLM
llm = ChatGroq(
    model=MODEL_NAME,
    temperature=TEMPERATURE,
    max_tokens=MAX_TOKENS,
    api_key=api_key
)

app = build_graph()