"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: "dark" | "light";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"dark" | "light" | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
        setTheme(storedTheme || "dark");
    }, []);

    useEffect(() => {
        if (!mounted || theme === null) return;
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.remove("light");
            root.classList.add("dark");
            root.style.colorScheme = "dark";
        } else {
            root.classList.remove("dark");
            root.classList.add("light");
            root.style.colorScheme = "light";
        }

        localStorage.setItem("theme", theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
    };
    const contextValue = {
        theme: theme || "dark",
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    return context as ThemeContextType;
} 
