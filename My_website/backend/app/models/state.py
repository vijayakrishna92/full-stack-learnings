from typing import TypedDict
class AgentState(TypedDict):
    user_prompt: str
    retrieved_answer: str
    final_answer: str