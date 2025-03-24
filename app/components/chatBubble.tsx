"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaComment, FaTimes } from 'react-icons/fa';

type Message = {
    role: 'human' | 'ai';
    content: string;
};

export default function ChatBubble() {
    const [isOpen, setIsOpen] = useState(false);
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
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

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
        <div className="fixed bottom-6 right-6 z-50">
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center"
                    aria-label="Open Chat"
                >
                    <FaComment size={24} />
                </button>
            )}

            {isOpen && (
                <div className="flex flex-col w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    <div className="flex flex-row justify-between py-2 px-4">
                        <h3 className="font-medium">Chat with Harshadeep's Portfolio Bot</h3>
                    
                        <button
                            onClick={toggleChat}
                            className="text-gray-500 hover:text-blue-500 transition-colors"
                            aria-label="Close chat"
                        >
                            <FaTimes size={18} />
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`mb-4 ${
                                    msg.role == 'ai'
                                    ? 'bg-blue-100 text-left rounded-br-none'
                                    : 'bg-gray-200 text-right rounded-bl-none ml-auto'
                                } p-3 rounded-lg max-w-[85%] ${
                                    msg.role == 'human' ? 'ml-auto': ''
                                }`}
                            >
                                {msg.content}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="bg-blue-100 p-3 rounded-lg rounded-br-none max-w-[85%] animate-pulse">
                                <div className="flex space-x-2">
                                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce"></div>
                                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef}></div>
                    </div>

                    <div className="border-t p-3 bg-white">
                        <div className="flex">
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                placeholder="Ask me anything about Harshadeep..."
                                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-blue-500"
                                disabled={isLoading}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={isLoading}
                                className="bg-blue-500 text-white p-4 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}