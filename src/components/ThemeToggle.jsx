"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-neutral-300 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300/80 bg-white/80 text-neutral-700 shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:border-purple-500 hover:text-purple-600 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:border-purple-400 dark:hover:text-purple-400"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="h-4 w-4 text-neutral-700 transition-transform duration-300 rotate-0 hover:-rotate-45" />
      )}
    </button>
  );
}
