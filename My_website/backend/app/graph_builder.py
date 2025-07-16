# graph_builder.py
from langgraph.graph import StateGraph
from app.models.state import AgentState
from app.agents.retriever import retrieve_answer as base_retrieve_answer
from app.agents.answer import polish_answer as base_polish_answer

def build_graph(llm):

    def retrieve_answer(state):
        return base_retrieve_answer(state, llm)

    def polish_answer(state):
        return base_polish_answer(state, llm)

    workflow = StateGraph(AgentState)
    workflow.add_node("retriever", retrieve_answer)
    workflow.add_node("polisher", polish_answer)

    workflow.set_entry_point("retriever")
    workflow.add_edge("retriever", "polisher")
    workflow.set_finish_point("polisher")

    return workflow.compile()
