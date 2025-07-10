from pathlib import Path
from typing import List
import re
from sentence_transformers import SentenceTransformer
import numpy as np
import chromadb
from chromadb.utils import embedding_functions
# from langchain.text_splitter import RecursiveCharacterTextSplitter

REMOVE_CHARS = "()!|[]#:;*'\""
TRANSLATOR = str.maketrans('', '', REMOVE_CHARS)

def clean_text(text: str) -> str:
    cleaned = text.translate(TRANSLATOR)
    cleaned = re.sub(r"\s+", " ", cleaned)
    print('clean')
    return cleaned.strip()


def load_knowledge_md() -> str:
    current_dir = Path(__file__).parent
    knowledge_file = current_dir.parent / "data" / "knowledge.md"
    with knowledge_file.open('r', encoding='utf-8') as f:
        print('loaded')
        return f.read()

def split_and_clean_chunks() -> List[str]:
    """
    Load, clean, and split text into chunks using LangChain.
    """
    raw = load_knowledge_md()
    cleaned = clean_text(raw)

    parts = cleaned.split('---')  # split at delimiter
    chunks = [part.strip() for part in parts if part.strip()]
    print('splitted')
    return chunks


def convert_chunks_to_embeddings(chunks: List[str], model_name: str = "all-MiniLM-L6-v2") -> np.ndarray:
    """
    Convert list of text chunks to embeddings using sentence-transformers.
    """
    model = SentenceTransformer(model_name)
    embeddings = model.encode(chunks, convert_to_numpy=True)
    print('embedded')
    return embeddings

def store_embeddings_in_vectordb(chunks: List[str], embeddings: List[List[float]], db_path: str) -> None:
    """
    Store chunks and embeddings in ChromaDB.
    """
    from chromadb import PersistentClient
    client = PersistentClient(path=db_path)

    collection = client.get_or_create_collection(name="knowledge")
    print('storing')
    
    for idx, (text, embedding) in enumerate(zip(chunks, embeddings)):
        collection.add(
            ids=[f"chunk_{idx}"],
            embeddings=[embedding],
            documents=[text],
            metadatas=[{"source": "knowledge.md", "chunk_index": idx}]
        )
    
    print(f"Vector DB saved and persisted at: {db_path}")

if __name__ == "__main__":
    current_dir = Path(__file__).parent
    db_path = current_dir.parent / "data" / "chroma_db"
    chunks = split_and_clean_chunks()
    embeddings = convert_chunks_to_embeddings(chunks)
    store_embeddings_in_vectordb(chunks, embeddings, db_path=str(db_path))

# splitter = RecursiveCharacterTextSplitter(
#         chunk_size=300,           # adjust as needed
#         chunk_overlap=20,         # optional: small overlap
#         separators=["---", "\n\n", "\n", " "]  # tries to split at '---' first
#     )