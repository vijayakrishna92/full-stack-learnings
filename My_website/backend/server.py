# server.py
from mcp.server.fastmcp import FastMCP
from typing import Any

mcp = FastMCP("rag-mcp-server")
DOCUMENTS = [
    {"id": 1, "text": "MCP is a protocol for exposing tools and resources."},
    {"id": 2, "text": "RAG stands for Retrieval-Augmented Generation."},
    {"id": 3, "text": "You can implement RAG as an MCP tool."},
    {"id": 4, "text": "MCP servers can provide prompts, tools, and resources."},
]
# Tools
@mcp.tool()
def retrieve_docs(query: str) -> dict[str, list[str]]:
    # Simple search
    docs = [doc["text"] for doc in DOCUMENTS if query.lower() in doc["text"].lower()]
    return {"documents": docs}

# Prompts
@mcp.prompt()
def rag_demo_prompt():
    return "What is RAG?"

if __name__ == "__main__":
    mcp.run()
