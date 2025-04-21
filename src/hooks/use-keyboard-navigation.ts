import { useEffect } from "react";

export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Get all section elements
      const sections = Array.from(document.querySelectorAll("section"));

      // Find the current active section
      const currentSectionIndex = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      console.log(123123123);
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        // Navigate to next slide
        if (currentSectionIndex < sections.length - 1) {
          sections[currentSectionIndex + 1].scrollIntoView({
            behavior: "smooth",
          });
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        // Navigate to previous slide
        if (currentSectionIndex > 0) {
          sections[currentSectionIndex - 1].scrollIntoView({
            behavior: "smooth",
          });
        }
      } else if (e.key === "Home") {
        // Navigate to first slide
        sections[0].scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "End") {
        // Navigate to last slide
        sections[sections.length - 1].scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
