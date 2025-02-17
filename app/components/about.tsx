"use client";

import React from "react";
import { motion } from "framer-motion";
import experiencesData from "@/data/experiencesData";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="">
        <div className="px-8 py-8 dark:bg-gray-900">
            <motion.div 
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="dark:bg-gray-800 mb-8 p-8 rounded-lg"
            >
                <h2 className="text-4xl font-extrabold mb-6 text-black dark:text-white">About Me</h2>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
                  I am a passionate <span className="font-semibold text-blue-500">Data Enthusiast, AI Enthusiast, and Web Developer</span> dedicated to building intelligent solutions that merge data, AI, and modern web technologies. 
                  Currently pursuing a <span className="font-semibold text-blue-500">Bachelor of Engineering (Hons.) in Computer Science</span> at BITS Pilani, Dubai Campus, I have developed a strong foundation in 
                    <span className="font-semibold text-blue-500"> machine learning, deep learning, cryptography, and data science</span>.
                </p>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg mt-6">
                  My journey in <span className="font-semibold text-blue-500">web development</span> has been enhanced through hands-on experience, including internships at Hashgate Technology and KPTAC Technologies. 
                  At Hashgate, I worked as a <span className="font-semibold text-blue-500">junior front-end developer</span>, building websites with Shopify, HTML, CSS, and React.js. Now, at KPTAC Technologies, I continue expanding my expertise in <span className="font-semibold text-blue-500">Next.js, TypeScript, FastAPI, and TailwindCSS</span>, focusing on creating seamless, high-performance web applications.
                </p>
            </motion.div>

            <div className="py-16 px-6 max-w-6xl mx-auto dark:bg-gray-800 rounded-lg">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
                    Experience Timeline
                </h2>

                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300"></div>

                    <div className="flex flex-col md:flex-row md:justify-between items-center">
                        {experiencesData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative flex flex-col items-center md:w-1/4 text-center group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-200 text-white font-bold text-xl flex items-center justify-center rounded-full border-4 border-white relative z-10 shadow-lg group-hover:shadow-2xl"
                                >
                                    <Image src={exp.pic} alt="img1" className="w-full h-full rounded-full object-cover" width={64} height={64} />
                                </motion.div>

                                <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-gray-300 rounded-full transform -translate-x-1/2"></div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 p-6 bg-white shadow-lg rounded-lg w-64 border dark:bg-gray-700 border-gray-200 transform group-hover:shadow-2xl transition-all duration-300"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-500 transition-all duration-300">
                                        {exp.position}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-200">{exp.company}</p>
                                    <p className="text-gray-500 dark:text-gray-300 text-sm">{exp.duration}</p>
                                    <p className="text-gray-400 text-xs">
                                        {exp.location} • {exp.type}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
