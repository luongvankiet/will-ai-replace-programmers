import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      whileTap={{
        rotate: 360,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Button
        variant="outline"
        size="icon"
        className="btn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
