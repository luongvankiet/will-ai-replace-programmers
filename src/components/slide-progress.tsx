import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SlideProgress() {
  const [progress, setProgress] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    // Count total slides
    const sections = document.querySelectorAll("section");
    setTotalSlides(sections.length);

    const handleScroll = () => {
      // Calculate overall scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setProgress(scrollPercent * 100);

      // Find current slide
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = 1;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          current = index + 1;
        }
      });

      setCurrentSlide(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize values

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-8 right-20 z-40 flex items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="text-sm font-medium text-muted-foreground">
        {currentSlide} / {totalSlides}
      </div>
      <div className="w-32 h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>
    </motion.div>
  );
}
