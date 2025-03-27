"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaComment, FaTimes, FaPaperPlane } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Message } from "@/types/message";

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
            const response = await fetch('https://harsha-portfolio-p0vq.onrender.com/api/chat', {
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
        <div className="fixed bottom-6 right-8 z-50">
            {!isOpen && (
                <div className="relative">
                    <div className="absolute -top-20 -left-1 transform translate-x-[-20%] whitespace-nowrap pointer-events-none">
                        <div className="text-lg font-handwritting mb-2">Chat with me!!</div>
                        <div className="h-24 w-6 mx-auto relative">
                            <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 367.339 367.34" xmlSpace="preserve" transform="rotate(45)matrix(1, 0, 0, -1, 0, 0)" className="text-black dark:text-white pointer-events-none">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path d="M337.591,0.932c-13.464,6.12-26.315,12.852-39.168,20.196c-11.628,6.12-25.704,12.24-35.496,21.42 c-5.508,4.896,0,15.3,7.344,12.852c0,0,0.612,0,0.612-0.612c1.836,1.224,3.061,2.448,4.896,4.284c0,0.612,0.611,1.836,0.611,2.448 c0.612,1.224,1.836,2.448,3.061,3.672c-17.748,33.048-34.272,66.096-55.08,96.696c-6.12,9.18-12.853,17.748-20.808,25.704 c-19.584-31.212-51.409-67.32-89.965-60.588c-50.796,9.18-23.256,63.647,3.06,82.008c31.212,22.644,58.14,21.42,85.068,0 c12.24,20.808,20.809,44.063,19.584,66.708c-1.836,54.468-50.796,63.647-91.8,49.571c6.12-15.912,7.956-34.271,4.284-50.184 c-6.12-28.764-50.184-54.468-75.888-34.272c-25.092,20.196,22.032,71.604,37.332,82.009c4.284,3.06,9.18,6.119,14.076,8.567 c-0.612,0.612-0.612,1.225-1.224,1.836c-28.152,44.064-65.484,6.12-82.62-25.092c-2.448-4.896-9.18-0.612-7.344,4.284 c14.076,32.436,42.84,70.38,81.396,48.348c9.18-5.508,17.136-13.464,22.644-23.256c33.66,13.464,72.829,13.464,97.308-17.136 c29.376-36.72,11.017-84.456-8.567-119.952c0.611-0.612,0.611-0.612,1.224-1.224c34.884-33.66,56.304-81.396,78.336-124.236 c4.284,3.06,9.181,6.12,13.464,9.18c3.061,1.836,7.345,1.224,9.792-1.224c17.748-20.808,31.212-45.9,35.496-73.44 C351.055,2.768,344.324-2.128,337.591,0.932z M178.471,207.787c-23.256,13.464-46.512-3.06-63.648-18.972 c-22.644-20.808-16.524-54.468,18.36-47.735c17.748,3.672,31.824,19.584,43.452,32.436c6.12,6.732,12.241,14.687,17.749,23.255 C189.488,201.056,183.979,204.728,178.471,207.787z M116.047,319.171C116.047,319.171,115.435,319.171,116.047,319.171 c-16.524-8.567-28.764-20.808-38.556-36.107c-4.284-6.732-7.956-14.076-9.792-22.032c-6.12-20.808,26.928-10.404,35.496-6.12 C126.451,267.764,124.615,297.14,116.047,319.171z M306.379,67.028c-0.612,0-0.612-0.612-1.224-0.612 c0-1.836-1.225-3.672-3.672-4.896c-4.284-1.836-8.568-4.284-12.853-6.732c-1.836-1.224-5.508-4.896-5.508-3.672 c0-0.612-0.612-1.224-1.224-1.224c6.731-3.672,13.464-8.568,20.195-12.24c8.568-4.896,17.748-9.792,26.929-14.688 C324.74,38.264,316.784,53.564,306.379,67.028z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <button
                        onClick={toggleChat}
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer"
                        aria-label="Open Chat"
                    >
                        <FaComment size={24} />
                    </button>
                </div>
            )}

            {isOpen && (
                <div className="flex flex-col w-80 sm:w-96 h-[500px] bg-white rounded-xl shadow-2xl border-0 overflow-hidden transition-all duration-300 ease-in-out">
                    <div className="flex flex-row justify-between items-center py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        <h3 className="font-medium text-lg">Harshadeep&apos;s Portfolio Bot</h3>
                    
                        <button
                            onClick={toggleChat}
                            className="text-white hover:text-blue-100 transition-colors rounded-full hover:bg-blue-700/30 p-1.5"
                            aria-label="Close chat"
                        >
                            <FaTimes size={18} />
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`mb-4 ${
                                    msg.role == 'ai'
                                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white text-left rounded-br-none shadow-md'
                                    : 'bg-white border border-gray-200 text-gray-800 text-right rounded-bl-none shadow-sm ml-auto'
                                } p-3 rounded-2xl max-w-[85%] ${
                                    msg.role == 'human' ? 'ml-auto': ''
                                } transition-all duration-300 ease-in-out hover:shadow-lg`}
                            >
                                {msg.role === 'ai' ? (
                                    <div className="prose prose-sm max-w-none prose-invert text-white">
                                        <ReactMarkdown>
                                            {msg.content.replace(/(\d+\.)/g, '### $1')}
                                        </ReactMarkdown>
                                    </div>
                                ) : (msg.content)}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 rounded-2xl rounded-br-none max-w-[85%] shadow-md animate-pulse">
                                <div className="flex space-x-2 items-center">
                                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce"></div>
                                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                                    <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef}></div>
                    </div>

                    <div className="border-t border-gray-100 p-3 bg-white">
                        <div className="flex items-center bg-gray-50 rounded-xl shadow-inner">
                            <input 
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                placeholder="Ask me anything about Harshadeep..."
                                className="flex-1 p-3 bg-transparent border-0 rounded-l-xl focus:outline-none focus:ring-0"
                                disabled={isLoading}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={isLoading}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-xl mx-1 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-all duration-300 ease-in-out"
                            >
                                <FaPaperPlane size={16} className={`${isLoading ? 'opacity-50' : ''}`} />
                            </button>
                        </div>
                        <div className="text-xs text-center text-gray-400 mt-2">
                            Powered by Harshadeep&apos;s Portfolio
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}