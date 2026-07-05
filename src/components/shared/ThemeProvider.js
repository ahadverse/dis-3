"use client";
import { useState, useEffect } from "react";
import { ThemeContext } from "@/lib/ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("dis-theme") || "dark";
    setTheme(saved);
    const el = document.documentElement;
    el.classList.remove("dark", "light");
    el.classList.add(saved);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("dis-theme", next);
    const el = document.documentElement;
    el.classList.remove("dark", "light");
    el.classList.add(next);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
