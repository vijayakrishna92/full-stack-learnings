import sys
from fastmcp import FastMCP , Context
from chromadb import PersistentClient
from chromadb.utils import embedding_functions
from pathlib import Path

# This is the crucial part: Initialize the embedder once when the server starts
print("DEBUG: Initializing SentenceTransformerEmbeddingFunction...", file=sys.stderr)
emb_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
    model_name="all-MiniLM-L6-v2"
)
print("DEBUG: SentenceTransformerEmbeddingFunction initialized.", file=sys.stderr)

mcp = FastMCP(name="LocalChroma", request_timeout=300)

@mcp.tool()
async def search_similar(query: str, ctx: Context, num_results: int = 3) -> dict:
    # ... (rest of your code)
    db_path = str(Path(__file__).parent.parent / "data" / "chroma_db")
    client = PersistentClient(path=db_path)
    coll = client.get_collection(name="knowledge")

    await ctx.report_progress(0, 1)

    # Use the pre-initialized embedder
    query_vec = emb_fn([query])[0] # This call will now be fast after the first startup

    # ... (rest of your code)
    res = coll.query(
        query_embeddings=[query_vec],
        n_results=num_results,
        include=["documents", "distances"]
    )

    await ctx.report_progress(1, 1)

    return {"documents": res["documents"][0], "distances": res["distances"][0]}

if __name__ == "__main__":
    print("✅ Starting LocalChroma MCP server…", file=sys.stderr)
    mcp.run()