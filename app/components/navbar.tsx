"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import menuItems from "@/data/menuItems";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleNavigation = (href: string) => (event: React.MouseEvent) => {
    const targetSection = document.getElementById(href.substring(1));
    if (targetSection) {
      event.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 800) setIsMobile(true);
      else setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      animate={{ width: expanded ? "10rem" : "4rem" }}
      className={`fixed -z-10 md:z-10 top-0 left-0 h-screen bg-white dark:bg-cursed-black md:dark:bg-black text-black dark:text-white flex flex-col py-4 transition-all ${expanded ? "shadow-lg z-10" : ""}`}
    >
      <div className="flex justify-between p-2">
        {isMobile && (
          <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setExpanded(!expanded)}
          >
            <Menu className={`size-6 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}

        {!isMobile && (
          <button
            className="p-2 rounded-full z-10 hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setExpanded(!expanded)}
          >
            <ChevronRight
              className={`size-6 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      <div className="flex-grow flex items-center">
        <nav className={`flex flex-col gap-4 w-full ${isMobile && !expanded ? "hidden" : ""}`}>
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
