"use client";

import React from "react";
import projectsData from "@/data/projectsData";
import Link from "next/link";
import { Check, CircleEllipsis, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsComp() {
    return (
        <section id="projects" className="mt-10 md:mt-0 flex min-h-screen items-center justify-center">
            <div className="flex flex-col rounded-lg gap-10 dark:bg-gray-900 px-8 py-16 w-full max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap items-center justify-between gap-4"
                >
                    <h2 className="text2xl md:text-3xl font-extrabold">Projects</h2>
                    <Link 
                        href='https://github.com/Harsha107?tab=repositories' 
                        className="text-sm md:text-base ring-2 py-2 px-4 ring-blue-500 text-blue-500 hover:ring-0 hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        View More
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <motion.div 
                            key={index}
                            className="flex flex-col gap-6 shadow-lg p-6 text-center rounded-lg bg-white dark:bg-gray-800 transform hover:scale-105 transition duration-300 ease-in-out"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.4,
                                ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="-mt-8 -ml-8">
                                {project.status === "Completed" ? 
                                    <Check className="text-green-500 bg-green-100 p-1 rounded-full text-sm"/> 
                                    : 
                                    <CircleEllipsis className="text-yellow-500 bg-yellow-100 p-1 text-sm rounded-full"/>
                                }
                            </p>
                            <h3 className="font-semibold text-lg">{project.name}</h3>
                            <p className="font-light text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {project.stack.map((item, idx) => (
                                    <span key={idx} className="bg-gray-100 dark:text-black py-1 px-3 rounded-full text-xs">
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <a href={project.githubLink} className="flex justify-center">
                                <Github className="rounded-full p-1 bg-black text-white"/>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
