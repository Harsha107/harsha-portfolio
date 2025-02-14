'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Hashgate',
    role: 'Web Development Intern',
    startDate: 'June 2023',
    endDate: 'August 2023',
  },
  {
    company: 'KPTAC',
    role: 'Web Development Intern',
    startDate: 'February 2025',
    endDate: 'Present',
  },
];

const Random: React.FC = () => {
  return (
    <motion.section 
      className="max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-100 rounded-lg shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div 
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-blue-600">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          I am a passionate <span className="font-semibold text-blue-500">Data Enthusiast, AI Enthusiast, and Web Developer</span> dedicated to building intelligent solutions that merge data, AI, and modern web technologies. 
          Currently pursuing a <span className="font-semibold text-blue-500">Bachelor of Engineering (Hons.) in Computer Science</span> at BITS Pilani, Dubai Campus, I have developed a strong foundation in 
          <span className="font-semibold text-blue-500">machine learning, deep learning, cryptography, and data science</span>.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-6">
          My journey in <span className="font-semibold text-blue-500">web development</span> has been enriched through hands-on experience, including internships at Hashgate Technology and KPTAC Technologies. 
          At Hashgate, I worked as a <span className="font-semibold text-blue-500">junior front-end developer</span>, building websites with Shopify, HTML, CSS, and React.js. Now, at KPTAC Technologies, I continue expanding my expertise in <span className="font-semibold text-blue-500">Next.js, TypeScript, FastAPI, and TailwindCSS</span>, focusing on creating seamless, high-performance web applications.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-blue-600">Experience Timeline</h2>
        <div className="relative border-l-4 border-blue-500 pl-6">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="mb-10 relative group"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            >
              <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3 top-2 border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
              <motion.div 
                className="bg-white p-6 shadow-lg rounded-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800">{exp.company}</h3>
                <p className="text-blue-600 text-lg font-medium">{exp.role}</p>
                <p className="text-gray-500 text-md">{exp.startDate} - {exp.endDate}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Random;
