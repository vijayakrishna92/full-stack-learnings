from chromadb import PersistentClient
from chromadb.utils import embedding_functions
from pathlib import Path

def query_vectordb(db_path: str, query_text: str, n_results: int = 3):
    # Reconnect to your local ChromaDB
    client = PersistentClient(path=db_path)
    collection = client.get_collection(name="knowledge")

    # Use the same embedder you used to store documents
    emb_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name="all-MiniLM-L6-v2"
    )
    query_vec = emb_fn([query_text])[0]

    # Perform the similarity search
    return collection.query(
        query_embeddings=[query_vec],
        n_results=n_results
    )

if __name__ == "__main__":
    db_path = str(Path(__file__).parent.parent / "data" / "chroma_db")
    query = "get skills"
    results = query_vectordb(db_path, query, n_results=1)

    for doc, dist in zip(results['documents'][0], results['distances'][0]):
        print(f"- {doc[:200]}… (distance: {dist:.4f})")
