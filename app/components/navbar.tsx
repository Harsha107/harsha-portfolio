"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import menuItems from "@/data/menuItems";

export default function Navbar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            animate={{ width: expanded ? "16rem" : "4rem"}}
            className="fixed top-0 left-0 h-screen bg-white dark:bg-black text-black dark:text-white shadow-lg flex flex-col py-4 transition-all"
        >
            <button
                className="mb-6 p-2 self-end mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                onClick={() => setExpanded(!expanded)}
            >
                <ChevronRight
                    className={`size-6 transition-transform ${expanded ? "rotate-180" : "" }`}
                />
            </button>

            <nav className="flex flex-col gap-4">
                {menuItems.map(({name, icon: Icon, href}) => (
                    <Link href={href} key={name} className="group flex items-center gap-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md">
                        <Icon className="size-6 mx-2"/>
                        <motion.span
                            initial={{ opacity: 0, width: 0}}
                            animate={{ opacity: expanded ? 1 : 0, width: expanded ? "auto" : 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden whitespace-nowrap"
                        >
                            {name}
                        </motion.span>
                    </Link>
                ))}
            </nav>
        </motion.div>
    )
}