"use client";

import React from "react";
import { motion } from "framer-motion";
import experiencesData from "@/data/experiencesData";

export default function About() {
    return (
        <motion.section
            className="grid grid-cols-2 justify-between h-screen ml-10"
        >
            <motion.div>
                <h2 className="font-extrabold text-3xl">About Me</h2>
                <p>
                    A passionate Data Enthusiast, AI Enthusiast, and Web Developer with a strong foundation in Computer Science.
                    Currently pursuing my B.E. in Computer Science at BITS Pilani, Dubai Campus, I have developed deep interest in data science, machine learning, and web development. 
                </p>
            </motion.div>

            <motion.div>
                <h2 className="font-bold text-2xl">Experiences Timeline</h2>
                <div>
                    {experiencesData.map((exp, index) => (
                        <motion.div key={index}>
                            <div></div>
                            <motion.div>
                                <h3>{exp.position}</h3>
                                <p>{exp.company}</p>
                                <p>{exp.duration}</p>
                                <p>{exp.type}</p>
                                <p>{exp.location}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    )
}