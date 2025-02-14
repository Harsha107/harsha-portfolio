"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import pfp from '../../public/pfp.jpg';

export default function LandingComp() {
    return (
        <section id="harsha" className="ml-10 flex h-screen flex-row gap-10 items-center justify-center">
            <div>
                <div>
                    <p className="font-extralight text-2xl">Hey there! 👋</p>
                    <span className="flex flex-row gap-2 font-extrabold text-4xl">
                        <p>I&apos;m</p>
                        <p className="text-blue-500">Harshadeep Chowdary Kommareddi</p>
                    </span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xl md:text-3xl font-semibold mt-4"
                >
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

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl"
                >
                    A passionate Data Enthusiast, AI Innovator, and Web Developer, driven by the power of
                    technoloy to solve real-world problems. Loves transforming data into insights, building
                    intelligent AI solutions, and crafting seamless digital experiences. Always learning, always creating.
                </motion.p>
            </div>

            <Image src={pfp} alt="profile-pic" className="size-96 rounded-full"/>
        </section>
    );
}