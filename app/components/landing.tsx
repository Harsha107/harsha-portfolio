"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function LandingComp() {
    return (
        <section>
            <div>
                <p>Hey there! 👋</p>
                <span>
                    <p>I'm</p>
                    <p>Harshadeep Chowdary Kommareddi</p>
                </span>
            </div>

            <motion.div>
                <Typewriter
                    words={["Data Enthusiast", "AI Enthusiast", "Web Developer"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </motion.div>

            <motion.p>
                A passionate Data Enthusiast, AI Innovator, and Web Developer, driven by the power of
                technoloy to solve real-world problems. Loves transforming data into insights, building
                intelligent AI solutions, and crafting seamless digital experiences. Always learning, always creating.
            </motion.p>
        </section>
    )
}