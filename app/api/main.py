from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from langchain.schema import HumanMessage, AIMessage, SystemMessage
from chatbot import chat_graph, ChatState

app = FastAPI(title="Portfolio Chatbot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

class ChatResponse(BaseModel):
    response: str

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    try:
        langchain_messages = []
        for msg in request.messages:
            if msg.role == "human":
                langchain_messages.append(HumanMessage(content=msg.content))
            elif msg.role == "ai":
                langchain_messages.append(AIMessage(content=msg.content))

        state: ChatState = {
            "messages": langchain_messages,
            "portfolio_context": "",
            "current_topic": ""
        }

        result = chat_graph.invoke(state)

        last_message = result["messages"][-1]

        return ChatResponse(response=last_message.content)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/")
def read_root():
    return {"message": "Portfolio Chatbot API is running!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)