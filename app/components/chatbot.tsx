"use client";

import React, { useState, useRef, useEffect } from "react";
import { Message } from "@/types/message";

export default function Chatbot() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'ai', content: 'Hi! I can tell you about Harshadeep. What would you like to know about him?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: 'human', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('')
        setIsLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/chat', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });
            if (!response.ok) throw new Error('Failed to get response.');
            const data = await response.json();
            setMessages(prev => [...prev, { role: 'ai', content: data.response }]);
        } catch (error) {
            console.error('Error: ', error);
            setMessages(prev => [...prev, {
                role: 'ai', 
                content: 'Sorry, I encountered an error. Please try again.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-full max-w-md h-96 border rounded-lg bg-white">
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-4 ${
                            message.role === 'ai'
                            ? 'bg-blue-100 rounded-br-none'
                            : 'bg-gray-100 ml-auto rounded-bl-none'
                        } p-3 rounded-lg max-w-[80%] ${
                            message.role === 'human' ? 'ml-auto' : ''
                        }`}
                    >
                        {message.content}
                    </div>
                ))}

                {isLoading && (
                    <div className="bg-blue-100 p-3 rounded-lg rounded-br-none max-w-[80%] animate-pulse">
                        Thinking...
                    </div>
                )}
                <div ref={messagesEndRef}></div>
            </div>

            <div className="botrder-t p-2 flex">
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask me anything about Harshadeep..."
                    className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                />
                <button
                    onClick={sendMessage}
                    disabled={isLoading}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-blue-500 disabled:bg-blue-300"
                >
                    Send
                </button>
            </div>
        </div>
    )
};