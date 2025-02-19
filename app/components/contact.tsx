"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, GitHub, Instagram, Phone, Linkedin } from "react-feather";

export default function ContactComp() {
    return (
        <section id="contact" className="flex mt-10 md:mt-20 items-center justify-center dark:bg-gray-900 py-10">
            <div className="max-w-6xl mx-auto px-6 sm:px-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">Contact Me</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg mt-4">
                        I&apos;m always excited to connect with professionals, recruiters, and mentors! Feel free to reach out for potential internships, collaborations, or any opportunities to work together.
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.form
                        action="#"
                        method="POST"
                        className="w-full sm:w-2/3 lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="grid gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Your message here..."
                                    required
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                ></textarea>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-center mt-6"
                            >
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </motion.div>
                        </div>
                    </motion.form>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center gap-6 mt-12"
                >
                    <a href="https://github.com/Harsha107" target="_blank" className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
                        <GitHub className="w-8 h-8" />
                    </a>
                    <a href="https://instagram.com/k.harsha.10" target="_blank" className="text-gray-700 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition duration-300">
                        <Instagram className="w-8 h-8" />
                    </a>
                    <a href="tel:+971502846189" className="text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-400 transition duration-300">
                        <Phone className="w-8 h-8" />
                    </a>
                    <a href="mailto:f2021203@dubai.bits-pilani.ac.in" className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
                        <Mail className="w-8 h-8" />
                    </a>
                    <a href="https://linkedin.com/in/harshadeep-chowdary-kommareddi-353027276/" target="_blank" className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
                        <Linkedin className="w-8 h-8" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}