from app.config import PROMPTS

def polish_answer(state, llm):
    question = state["user_prompt"]
    raw = state["retrieved_answer"]
    prompt = PROMPTS["polish_answer_prompt"].format(question=question, raw=raw)
    response = llm.invoke(prompt)
    return {
        "user_prompt": question,
        "retrieved_answer": raw,
        "final_answer": response.content
    }
