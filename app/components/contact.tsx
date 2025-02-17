"use client";

import React from "react";
import { motion } from "framer-motion";
import contactData from "@/data/contactData";

export default function ContactComp() {
    return (
        <section id="contact" className="h-screen flex flex-col gap-16 justify-center items-center p-10">
            <motion.h1 
                className="text-5xl font-extrabold text-gray-800"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Contact Me!!
            </motion.h1>
            <motion.div 
                className="flex flex-col gap-8 p-8 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {contactData.map(({ name, icon: Icon, reach, display, styling }) => (
                    <motion.div 
                        key={name} 
                        className="flex flex-row gap-4 items-center hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.1 }}
                    >
                        <a href={reach} target="_blank" rel="noopener noreferrer">
                            <Icon size={40} className={`${styling} transition-colors duration-300 hover:text-gray-600`} />
                        </a>
                        <p className="text-lg font-medium text-gray-700">{display}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
