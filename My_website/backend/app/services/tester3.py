from chromadb import PersistentClient
from pathlib import Path # Import Path

# Calculate the correct database path, just like in tester.py
db_path = str(Path(__file__).parent.parent / "data" / "chroma_db")

client = PersistentClient(path=db_path) # Use the calculated path
print("Collections:", client.list_collections())
coll = client.get_collection("knowledge")
print("Total documents:", coll.count())