def retrieve_answer(state, llm, config):
    question = state["user_prompt"]
    prompt = f"""
    Role: Knowledge Retriever
    Task: Retrieve a raw answer from your knowledge base for the question: "{question}".
    Output: Short, direct answer without polishing.
    """
    response = llm.invoke(prompt)
    return {"user_prompt": question, "retrieved_answer": response.content, "final_answer": ""}