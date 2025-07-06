import { useState, useEffect } from "react";
import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [isDark]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 z-50 bg-background/80 backdrop-blur-md border border-border/50 hover:scale-110 transition-all duration-300"
    >
      <Sun className={`h-5 w-5 transition-transform duration-300 ${isDark ? 'rotate-180' : 'rotate-0'}`} />
    </Button>
  );
};