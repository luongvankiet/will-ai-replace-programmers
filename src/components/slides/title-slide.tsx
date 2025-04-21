import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function TitleSlide() {
  return (
    <div className="slide relative overflow-hidden bg-gradient-to-b from-background to-background/10">
      <div className="slide-content flex flex-col items-center justify-center text-center z-10">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Will AI <span className="text-primary">Replace</span> Programmers?
        </motion.h1>

        <motion.h2
          className="text-xl md:text-3xl font-medium text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Van Kiet Luong - 202400983
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="text-lg"
            onClick={() => {
              document
                .getElementById("rise-of-ai")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Scroll to Begin
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
