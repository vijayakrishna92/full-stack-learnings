# graph_builder.py
from langgraph.graph import StateGraph
from app.agents.retriever import retrieve_answer
from app.agents.answer import polish_answer
from app.models.state import AgentState

def build_graph():
    workflow = StateGraph(AgentState)
    workflow.add_node("retriever", retrieve_answer)
    workflow.add_node("polisher", polish_answer)

    workflow.set_entry_point("retriever")
    workflow.add_edge("retriever", "polisher")
    workflow.set_finish_point("polisher")

    return workflow.compile()
