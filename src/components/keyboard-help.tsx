import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Keyboard, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function KeyboardHelp() {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: "→ / ↓ / Space", description: "Next slide" },
    { key: "← / ↑", description: "Previous slide" },
    { key: "Home", description: "First slide" },
    { key: "End", description: "Last slide" },
    { key: "F", description: "Toggle fullscreen" },
    { key: "?", description: "Show/hide this help" },
  ];

  // Toggle help when ? key is pressed
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "?" || e.key === "/") {
      setIsOpen(!isOpen);
    } else if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    } else if (e.key === "f" || e.key === "F") {
      // Handle fullscreen toggle
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable fullscreen: ${err.message}`
          );
        });
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  };

  useState(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <motion.div
        className="fixed bottom-8 left-8 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          variant="outline"
          size="icon"
          className="bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Keyboard shortcuts"
        >
          <Keyboard className="h-5 w-5" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md"
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Keyboard Shortcuts</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {shortcuts.map((shortcut, index) => (
                      <div key={index} className="flex justify-between">
                        <code className="bg-muted px-2 py-1 rounded text-sm">
                          {shortcut.key}
                        </code>
                        <span>{shortcut.description}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
