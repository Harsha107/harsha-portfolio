import os
import json
from fastapi import FastAPI
from pydantic import BaseModel
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, START, END
from langchain.schema import HumanMessage, SystemMessage, AIMessage
from typing import List, TypedDict
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError("❌ OPENAI_API_KEY is missing! Add it to a .env file or environment variables.")

app = FastAPI()

portfolio_data = {
    "name": "Harshadeep Chowdary Kommareddi",
    "title": ["AI Enthusiast", "Data Enthusiast", "Web Developer"],
    "education": [
        {
            "institution": "Birla Institute of Technology and Sciences (BITS) Pilani, Dubai Campus",
            "location": "Dubai, UAE",
            "period": "September 2021 - Present",
            "edu": "Bachelor of Engineering (Hons.) Computer Science",
            "score": "CGPA: 8.6",
            "others": "Relevant coursework: Cryptography, Optimization, Deep Learning, Data Mining, Machine Learning, Neural Networks and Fuzzy Logic, Foundations in Data Science, Natural Language Processing."
        },
        {
            "institution": "FIITJEE, Vijayawada",
            "location": "Andhra Pradesh, India",
            "period": "June 2019 - March 2021",
            "edu": "12th grade",
            "score": "APBIE (12th Grade examination): 89.2% overall average",
            "others": None,
        },
        {
            "institution": "DR. K.K.R's GOWTHAM HIGH(E.M), Gudivada",
            "location": "Andhra Pradesh, India",
            "period": "June 2017 - March 2019",
            "edu": "10th grade",
            "score": "AISSE (10th Grade CBSE examination): 88.6% overall average",
            "others": None,
        },
    ],
    "skills": ["Python", "C", "C++", "TensorFlow", "PyTorch", "NumPy", "Pandas", "Power BI", "Microsoft Excel", "FastAPI", "JavaScript", "TypeScript", "Next JS", "React JS", "Node JS", "SQL", "MongoDB", "HTML", "CSS", "Tailwind CSS", "Java", "LangGraph"],
    "projects": [
        {
            "title": "Data Mining Project - Energy Demand Prediction Using Machine Learning Models",
            "description": "Developed an energy demand forecasting model using QLattice (XAI), outperforming traditional models like Random Forest and XGBoost with a superior R2 of 0.993 and optimized MAE (111) and MSE (21316). Utilized meteorological data (temperature, humidity, etc.) and interpretability tools (SHAP) to enhance model transparency and accuracy.",
            "tech stack": ["scikit-learn", "Python", "NumPy", "Pandas", "Gradio"],
        },
        {
            "title": "Neural Networks Project - Bankruptcy Prediction",
            "description": "Developed a deep learning model for bankruptcy prediction using CNN and LSTM networks, achieving 96.11% accuracy. Applied data preprocessing (PCA, SMOTE) to handle class imbalance and enhance performance. Contributed to model building, evaluation, and financial data analysis, demonstrating machine learning and neural network expertise.",
            "tech stack": ["Python", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
        },
        {
            "title": "Foundations in Data Science Project - Supply Chain Optimization using Machine Learning",
            "description": "Performed EDA on a dataset of skincare and healthcare products from a startup company and predicted the product's stock level and transportation costs based on various dependent variables using Machine Learning models. GUI was made using Streamlit.",
            "tech stack": ["Python", "NumPy", "scikit-learn", "Matplotlib", "Pandas", "Seaborn", "Streamlit"],
        },
        {
            "title": "Web Scraping Project - Amazon Product Price Watcher and Notification System",
            "description": "Implemented a web scraper and built a web application using Streamlit where the application asks the users to enter a product URL and specify a desired price threshold. The system scrapes the product's title, price, rating, and access date daily, storing this data in a CSV file. An email notification is sent if the price falls below the user’s threshold.",
            "tech stack": ["Python", "Streamlit", "BeautifulSoup"],
        },
    ],
    "experience": [
        {
            "company": "HashGate Technologies",
            "role": "Web Development Intern",
            "period": "June 2023 - August 2023",
            "location": "Dubai, UAE",
            "type": "on-site",
            "description": "Worked as a junior front-end developer for the web development team. Built multiple websites using Shopify, HTML, CSS, and React JS."
        },
        {
            "company": "KPTAC Techologies", 
            "role": "Web Development Intern",
            "period": "January 2025 - Present",
            "location": "Dubai, UAE",
            "type": "on-site",
            "description": "Working as a web development intern within the web development team. Developed and implemented various front-end components using Next.Js, Tailwind CSS, and TypeScript."
        },
    ],
    "certifications": [
        {
            "name": "Artificial Intelligence Fundamentals",
            "issued_by": "IBM",
            "issue_date": "February 2025",
            "expiry_date": "",
            "credential_id": "",
            "credential_url": "https://www.credly.com/badges/0b9e2d3c-45c4-4c51-a2a3-72cb74baf4d0/linked_in_profile",
        },
        {
            "name": "Goldman Sachs - Excell Skills for Business Job Simulation",
            "issued_by": "Forage",
            "issue_date": "November 2024",
            "expiry_date": "",
            "credential_id": "H46ofS6fTYdDoFc8Q",
            "credential_url": "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/eLeZHcwX7CqLhhps7_MBA4MnZTNFEoJZGnk_YMphQPNeNSbwKrBXq_1731576921706_completion_certificate.pdf",
        },
        {
            "name": "MongoDB Atlas Security",
            "issued_by": "MongoDB",
            "issue_date": "September 2024",
            "expiry_date": "",
            "credential_id": "MDB9ndqzytt1h",
            "credential_url": "https://learn.mongodb.com/c/OCk93R7FRO6gPuNoogpIKg",
        },
        {
            "name": "Project Management Essentials Certified (PMEC)™",
            "issued_by": "Management & Strategy Institute",
            "issue_date": "September 2024",
            "expiry_date": "",
            "credential_id": "",
            "credential_url": "https://www.proprofs.com/quiz-school/certificate/certificate.php?id=340571534&qid=3593197&uname=Harshadeep%20Chowdary%20Kommareddi",
        },
        {
            "name": "JavaScript Algorithms and Data Structures",
            "issued_by": "freeCodeCamp",
            "issue_date": "July 2023",
            "expiry_date": "",
            "credential_id": "",
            "credential_url": "https://freecodecamp.org/certification/Hrsh1007/javascript-algorithms-and-data-structures",
        },
        {
            "name": "Introduction to iot",
            "issued_by": "Cisco Networking Academy",
            "issue_date": "July 2021",
            "expiry_date": "",
            "credential_id": "d3c82184-465a-4fe3-a76c-ae99515ac888",
            "credential_url": "https://www.credly.com/badges/d3c82184-465a-4fe3-a76c-ae99515ac888/public_url",
        },
    ],
    "publications": [
        {
            "title": "Predicting Energy Demands with Interpretable Machine Learning Models",
            "publisher": "Institute of Electrical and Electronics Engineers (IEEE)",
            "publication_url": "https://ieeexplore.ieee.org/document/10829226",
            "published_date": "25th October, 2024",
        },
    ],
    "contact": {
        "mobile": "+971502846189",
        "gmail": "f20210203@dubai.bits-pilani.ac.in",
    },
    "socials": {
        "GitHub": "https://github.com/Harsha107",
        "Instagram": "https://instagram.com/k.harsha.10",
        "LinkedIn": "https://linkedin.com/in/harshadeep-chowdary-kommareddi-353027276",
    }
}

class ChatState(TypedDict):
    messages: List[HumanMessage | AIMessage | SystemMessage]
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

    allowed_categories = ["education", "skills", "projects", "experience", "certifications", "publications", "contact", "socials", "general"]

    if topic not in allowed_categories:
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
        context = f"{topic.capitalize()}: {json.dumps(portfolio_data[topic_mapping[topic]])}"
    else:
        context = f"General info: {portfolio_data['name']} is a {json.dumps(portfolio_data['title'])}"
    
    return {**state, "portfolio_context": context}

def generate_response(state: ChatState) -> ChatState:
    system_message = SystemMessage(content=f"""
    You are a helpful assistant for a portfolio website.
    
    Portfolio information:
    Name: {portfolio_data['name']}
    Title: {', '.join(portfolio_data['title'])}

    Context related to user's question:
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
    builder.add_node("retreive_context", retreive_context)
    builder.add_node("generate_response", generate_response)

    builder.add_edge(START, "classify_topic")
    builder.add_edge("classify_topic", "retreive_context")
    builder.add_edge("retreive_context", "generate_response")
    builder.add_edge("generate_response", END)

    graph = builder.compile()
    return graph

chat_graph = create_chat_graph()

class ChatInput(BaseModel):
    message: str

@app.post("./chat")
async def chat(input: ChatInput):
    initial_state = {
        "messages": [HumanMessage(content=input.message)],
        "portfolio_context": "",
        "current_topic": "" 
    }
    result = chat_graph.invoke(initial_state)
    return {"response": result["messages"][-1].content}