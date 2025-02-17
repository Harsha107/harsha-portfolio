"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import skills from "@/data/skillsData";

export default function SkillsComp() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="skills" className="py-16 text-black dark:text-white dark:bg-gray-900 rounded-lg">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">My Skills</h2>
        <p className="text-gray-400 mb-12">Key technologies I use in data analytics and web development.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center p-4 rounded-lg dark:bg-gray-800 shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isClient ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill && (
              <>
                <img src={skill.icon} alt={skill.name} className="w-14 h-14 mb-2" />
                <span className="text-lg font-semibold">{skill.name}</span>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}