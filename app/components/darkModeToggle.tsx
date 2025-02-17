"use client";

import { useTheme } from "./theme";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-5 right-5 border-2 p-2 rounded-full bg-black dark:bg-gray-800 dark:border-yellow-400 transition-all duration-300"
        >
            {darkMode ? <Sun className="text-yellow-400"/> : <Moon className="text-white"/>}
        </button>
    )
}