"use client";

import React from "react";
import { motion } from "framer-motion";
import experiencesData from "@/data/experiencesData";

export default function About() {
    return (
        <motion.section
            className="grid grid-cols-2 justify-between h-screen"
        >
            <motion.div>
                <h2>About Me</h2>
                <p>

                </p>
            </motion.div>

            <motion.div>
                <h2>Experiences Timeline</h2>
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