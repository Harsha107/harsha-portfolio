from typing import Dict, List, TypedDict, Union
from langchain_openai import ChatOpenAI
from langgraph.graph import START, END, StateGraph
from langchain.schema import HumanMessage, AIMessage, SystemMessage
import json
import os
from dotenv import load_dotenv
from portfolio_data import portfolio_data

load_dotenv()

class ChatState(TypedDict):
    messages: List[Union[HumanMessage, AIMessage, SystemMessage]]
    portfolio_context: str
    current_topic: str

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7)

def classify_topic(state: ChatState) -> ChatState:
    last_message = state["messages"][-1]
    if not isinstance(last_message, HumanMessage):
        return {**state, "current_topic": "general"}
    
    classification_prompt = f"""
    Classify the following message into one of these categories:
    - education
    - skills
    - projects
    - experience
    - certifications
    - publications
    - contact
    - socials
    - general

    Only return the category name as output.

    Message: {last_message}

    Category:
    """

    classification_result = llm.invoke([HumanMessage(content=classification_prompt)])
    topic = classification_result.content.strip().lower()

    allowed_topics = ["education", "skills", "projects", "experience", "certifications", "publications", "contact", "socials", "general"]

    if topic not in allowed_topics:
        topic = "general"
    
    return {**state, "current_topic": topic}

def retreive_context(state: ChatState) -> ChatState:
    topic = state["current_topic"]
    topic_mapping = {
        "education": "education",
        "skills": "skills",
        "projects": "projects",
        "experience": "experience",
        "certifications": "certifications",
        "publications": "publications",
        "contact": "contact",
        "socials": "socials"
    }

    if topic in topic_mapping:
        context = f"{topic.capitalize()}: {json.dumps(portfolio_data[topic])}"
    else:
        context = f"General info: {portfolio_data['name']} is a {json.dumps(portfolio_data['title'])}"

    return {**state, "portfolio_context": context}

def generate_response(state: ChatState) -> ChatState:
    system_message = SystemMessage(content=f"""
    You are a helpful assistant for a portfolio website.
                                   
    Portfolio information:
    Name: {portfolio_data['name']}
    Title: {', '.join(portfolio_data['title'])}

    Context related to the user's query:
    {state['portfolio_context']}

    Respond in a friendly, and professional manner.
    """)

    messages = [system_message] + state["messages"]
    ai_response = llm.invoke(messages)

    updated_messages = state["messages"] + [ai_response]
    return {**state, "messages": updated_messages}

def create_chat_graph():
    builder = StateGraph(ChatState)

    builder.add_node("classify_topic", classify_topic)
    builder.add_node("retrieve_context", retreive_context)
    builder.add_node("generate_response", generate_response)

    builder.add_edge(START, "classify_topic")
    builder.add_edge("classify_topic", "retrieve_context")
    builder.add_edge("retrieve_context", "generate_response")
    builder.add_edge("generate_response", END)

    graph = builder.compile()
    return graph

chat_graph = create_chat_graph()