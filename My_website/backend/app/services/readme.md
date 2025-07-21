LangChain + FastMCP Agent Pipeline  
This project demonstrates a multi-agent pipeline using LangChain, Groq's LLaMA model, and a custom search tool from FastMCP. It includes two agents: one for retrieving context using search_similar, and one for polishing the result using an LLM.  

Setup Instructions:  
Create and activate a virtual environment:  
python -m venv .venv  
source .venv/bin/activate  (on Windows use: .venv\Scripts\activate)  

Install dependencies:  
pip install langchain  
pip install tiktoken==0.1.1  
pip install fastmcp chromadb sentence-transformers  
pip install pyyaml  
pip install langchain-mcp-adapters  
pip install mcp  

Create a .env file in your project directory and add your Groq API key:  
YOUR_GROQ_API_KEY=your-groq-api-key-here  

Ensure the MCP config file exists at: ../services/mcp_config.json  



Run the application:  
Open Terminal 1 and run:  
fastmcp dev tester2.py  
OR  
fastmcp run tester2.py  

Open Terminal 2 and run:  
python tester4.py  

This will load the search_similar tool, retrieve relevant documents based on the user query, polish the results using Groq's LLaMA 3.3 model, and print both the raw and polished answers.  

Files in this project:  
tester2.py - Defines MCP tool logic  
tester4.py - Runs the LangGraph agent pipeline  
.env - Stores the Groq API key  
mcp_config.json - Defines MCP server connections  

Tech used: LangChain, LangGraph, FastMCP, Groq LLaMA 3.3-70B, ChromaDB, Sentence Transformers  


