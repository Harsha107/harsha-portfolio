"use client";

import React from "react";
import projectsData from "@/data/projectsData";
import Link from "next/link";
import { Check, CircleEllipsis, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsComp() {
    return (
        <section id="projects" className="flex h-screen items-center justify-center">
            <div className="flex flex-col rounded-lg gap-20 dark:bg-gray-900 px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-row gap-[905px]"
                >
                    <h2 className="text-3xl font-extrabold">Projects</h2>
                    <Link href='./projects' className="ring-2 py-2 px-4 ring-blue-500 text-blue-500 hover:ring-0 hover:bg-blue-500 hover:text-white duration-300">View More</Link>
                </motion.div>

                <div className="grid grid-cols-3 gap-10">
                    {projectsData.map((project, index) => (
                        <motion.div 
                            key={index}
                            className="flex flex-col gap-8 shadow-lg p-4 text-center rounded-lg bg-white dark:bg-gray-800 transform hover:scale-105 transition duration-300 ease-in-out"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.4,
                                ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <p className="-m-6">{project.status === "Completed" ? <Check className="text-green-500 bg-green-100 p-1 rounded-full text-sm"/> : <CircleEllipsis className="text-yellow-500 bg-yellow-100 p-1 text-sm rounded-full"/>}</p>
                            <h3 className="font-semibold text-xl">{project.name}</h3>
                            <p className="font-extralight text-sm">{project.description}</p>
                            <span className="grid grid-cols-3 gap-4">
                                {project.stack.map((item, idx) => (
                                    <span key={idx} className="bg-gray-100 dark:text-black py-1 rounded-full text-xs">{item}</span>
                                ))}
                            </span>
                            <a href={project.githubLink} className="flex justify-center"><Github className="rounded-full p-1 bg-black text-white"/></a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}