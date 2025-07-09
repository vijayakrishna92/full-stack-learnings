from langchain.text_splitter import RecursiveCharacterTextSplitter
# or from langgraph, llamaindex etc., depending on your stack

with open("backend/data/knowledge.md", "r", encoding="utf-8") as f:
    raw_text = f.read()

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)
docs = splitter.create_documents([raw_text])

# Then embed and store into vector DB
