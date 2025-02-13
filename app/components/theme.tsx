"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    darkMode: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode}) {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        setDarkMode((prev) => {
            const newTheme = !prev;
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newTheme);
            return newTheme;
        });
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}