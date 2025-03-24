"use client";

import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function Chatbot() {
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;
        setLoading(true);

        setMessages([...messages, { user: input, bot: "..." }]);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();

            setMessages((prev) => [
                ...prev.slice(0, -1),
                { user: input, bot: data.response },
            ]);
        } catch (error) {
            console.error("Error:", error);
        }

        setLoading(false);
        setInput("");
    };

    return (
        <div className="fixed bottom-5 right-5 bg-white shadow-lg p-4 rounded-lg w-80">
            <div className="h-64 overflow-y-auto">
                {messages.map((msg, idx) => (
                    <div key={idx} className="mb-2">
                        <p className="text-blue-600 font-semibold">User: {msg.user}</p>
                        <p className="text-gray-700">Bot: {msg.bot}</p>
                    </div>
                ))}
            </div>
            
            <div className="flex items-center border-t pt-2">
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-grow border rounded-md p-2"
                />
                <button
                    onClick={sendMessage}
                    disabled={loading}
                    className="ml-2 bg-blue-500 text-white p-2 rounded"
                >
                    <PaperAirplaneIcon className="h-5 w-5"/>
                </button>
            </div>
        </div>
    )
}