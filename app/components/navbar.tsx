"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import menuItems from "@/data/menuItems";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavigation = (href: string) => (event: React.MouseEvent) => {
    const targetSection = document.getElementById(href.substring(1));
    if(targetSection) {
      event.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <motion.div
      animate={{ width: expanded ? "10rem" : "4rem" }}
      className={`fixed z-10 top-0 left-0 h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col py-4 transition-all ${expanded ? "shadow-lg" : ""}`}
    >
      <div className="flex justify-end p-2">
        <button
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          onClick={() => setExpanded(!expanded)}
        >
          <ChevronRight
            className={`size-6 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div className="flex-grow flex items-center">
        <nav className="flex flex-col gap-4 w-full">
          {menuItems.map(({ name, icon: Icon, href }) => (
            <Link
              href={href}
              key={name}
              onClick={handleNavigation(href)}
              className="group flex items-center gap-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
            >
              <Icon className="size-6 mx-2" />
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: expanded ? 1 : 0, width: expanded ? "auto" : 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden whitespace-nowrap"
              >
                {name}
              </motion.span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}