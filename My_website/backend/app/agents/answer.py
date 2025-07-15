def polish_answer(state, llm) :
    question = state["user_prompt"]
    raw = state["retrieved_answer"]
    prompt = f"""
    Role: Expert Writing Assistant
    Task: Rephrase and polish the retrieved answer to sound clear, correct, and engaging.
    User question: "{question}"
    Retrieved answer: "{raw}"
    Output: Final, well-structured answer.
    """
    response = llm.invoke(prompt)
    return {"user_prompt": question, "retrieved_answer": raw, "final_answer": response.content}