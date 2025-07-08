from mcp.server.lowlevel import Server
import mcp.types as types
import mcp.server.stdio
from mcp.server.models import InitializationOptions
from mcp.server.lowlevel import NotificationOptions
from typing import Any
import asyncio

# Simulated corpus
DOCUMENTS = [
    {"id": 1, "text": "MCP is a protocol for exposing tools and resources."},
    {"id": 2, "text": "RAG stands for Retrieval-Augmented Generation."},
    {"id": 3, "text": "You can implement RAG as an MCP tool."},
    {"id": 4, "text": "MCP servers can provide prompts, tools, and resources."},
]

# Simple "vector search" stub: returns docs containing query words
async def simple_vector_search(query: str):
    query_lower = query.lower()
    return [
        doc for doc in DOCUMENTS
        if any(word in doc["text"].lower() for word in query_lower.split())
    ]

# Create MCP server
server = Server("rag-mcp-server")

# MCP tool: retrieve_docs
@server.list_tools()
async def list_tools() -> list[types.Tool]:
    return [
        types.Tool(
            name="retrieve_docs",
            description="Retrieve relevant documents based on user query",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "User search query"}
                },
                "required": ["query"]
            },
            outputSchema={
                "type": "object",
                "properties": {
                    "documents": {
                        "type": "array",
                        "items": {"type": "string"},
                        "description": "List of retrieved document texts"
                    }
                },
                "required": ["documents"]
            }
        )
    ]

@server.call_tool()
async def call_tool(name: str, arguments: dict[str, Any]) -> dict[str, Any]:
    if name == "retrieve_docs":
        query = arguments["query"]
        results = await simple_vector_search(query)
        return {"documents": [doc["text"] for doc in results]}
    else:
        raise ValueError(f"Unknown tool: {name}")

# Add a simple prompt so client can list prompts
@server.list_prompts()
async def list_prompts() -> list[types.Prompt]:
    return [
        types.Prompt(
            name="rag-demo-prompt",
            description="Prompt to demonstrate calling retrieve_docs",
            arguments=[]
        )
    ]

@server.get_prompt()
async def get_prompt(name: str, arguments: dict[str, str] | None) -> types.GetPromptResult:
    if name != "rag-demo-prompt":
        raise ValueError(f"Unknown prompt: {name}")
    return types.GetPromptResult(
        description="Example prompt to test RAG tool",
        messages=[
            types.PromptMessage(
                role="user",
                content=types.TextContent(type="text", text="What is RAG?")
            )
        ]
    )

# Run the MCP server
async def run():
    async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            InitializationOptions(
                server_name="rag-mcp-server",
                server_version="0.1.0",
                capabilities=server.get_capabilities(
                    notification_options=NotificationOptions(),
                    experimental_capabilities={},
                ),
            ),
        )

if __name__ == "__main__":
    asyncio.run(run())
