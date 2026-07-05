"use client";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-surface2 text-text-muted transition-colors hover:border-accent-blue-500/50 hover:text-text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -60, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 60, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
