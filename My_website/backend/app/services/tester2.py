import sys
from fastmcp import FastMCP
from chromadb import PersistentClient
from chromadb.utils import embedding_functions

mcp = FastMCP("LocalChroma")

@mcp.tool()
def search_similar(query: str, num_results: int = 3) -> dict:
    client = PersistentClient(path="./data/chroma_db")
    coll = client.get_collection(name="knowledge")

    emb = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name="all-MiniLM-L6-v2"
    )
    vec = emb([query])[0]
    res = coll.query(query_embeddings=[vec], n_results=num_results)
    return {"documents": res["documents"][0], "distances": res["distances"][0]}

if __name__ == "__main__":
    # Ensure banner or logs go to stderr
    print("Starting LocalChroma MCP server...", file=sys.stderr)
    mcp.run()
