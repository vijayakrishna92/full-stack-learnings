from app.config import PROMPTS

def retrieve_answer(state, llm):
    question = state["user_prompt"]
    prompt = PROMPTS["retrieve_answer_prompt"].format(question=question)
    response = llm.invoke(prompt)
    return {
        "user_prompt": question,
        "retrieved_answer": response.content,
        "final_answer": ""
    }