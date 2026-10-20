import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("chaiui-theme");
      if (saved === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      } else {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    } catch {
      // Safe fallback if localStorage is restricted
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("chaiui-theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("chaiui-theme", "light");
      } catch {}
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "group relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card/60 transition-colors hover:bg-card",
        className
      )}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* ChaiUI signature half-shaded theme circle */}
      <div className="relative size-4.5 overflow-hidden rounded-full border border-foreground/30 transition-transform duration-300 group-hover:scale-105">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-foreground" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-transparent" />
      </div>
    </button>
  );
}
