"use client";

import React from "react";
import { motion } from "framer-motion";
import contactData from "@/data/contactData";

export default function ContactComp() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-4">
            <div className="flex flex-col rounded-lg gap-8 md:gap-16 p-8 md:p-16 dark:bg-gray-900 w-full max-w-2xl">
                <motion.h1 
                    className="text-2xl md:text-4xl font-extrabold text-gray-800 dark:text-white text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Contact Me!!
                </motion.h1>
                <motion.div 
                    className="flex flex-col gap-4 md:gap-8 p-4 md:p-8 rounded-lg dark:bg-gray-800"
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
                                <Icon
                                    className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${styling} transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-100`}
                                />

                            </a>
                            <p className="text-xs md:text-lg font-medium text-gray-700 dark:text-white">{display}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
