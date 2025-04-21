import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Title", href: "#title" },
  { name: "Rise of AI", href: "#rise-of-ai" },
  { name: "Sydney Tech", href: "#sydney-tech" },
  { name: "Chart", href: "#chart" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "v0.dev & Vercel", href: "#v0-vercel" },
  { name: "Student A", href: "#student-a" },
  { name: "Student B", href: "#student-b" },
  { name: "Types of AI Coders", href: "#types-of-ai-coders" },
  { name: "Lessons", href: "#lessons-learned" },
  { name: "Future-Proof", href: "#future-proof" },
  { name: "Thank You", href: "#thank-you" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("title");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set sidebar background when scrolled
      setIsScrolled(window.scrollY > 10);

      // Find active section based on scroll position
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sidebar toggle button */}
      <motion.div
        className="fixed top-4 left-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
          className={`bg-background/80 backdrop-blur-md ${
            isScrolled ? "shadow-md" : ""
          }`}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </motion.div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 h-full z-40 bg-background/95 backdrop-blur-md shadow-xl"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="h-full w-64 py-16 px-4 flex flex-col">
              <h2 className="text-primary font-bold text-lg mb-8 px-3">
                AI & Programming
              </h2>

              <div className="flex-1 overflow-y-auto">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === item.href.substring(1)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 5 }}
                    >
                      {activeSection === item.href.substring(1) && (
                        <ChevronRight className="h-4 w-4 mr-2" />
                      )}
                      <span
                        className={
                          activeSection === item.href.substring(1)
                            ? "ml-0"
                            : "ml-6"
                        }
                      >
                        {item.name}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="pt-4 pb-2 border-t border-border/30">
                <p className="text-xs text-muted-foreground px-3">
                  Press ? for keyboard shortcuts
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
