import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function SydneyTech() {
  return (
    <div className="slide relative bg-gradient-to-b from-background to-background/90">
      <div className="slide-content">
        <motion.h2
          className="slide-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          AI is Already Changing How Sydney Developers Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent>
                <ul className="list-disc p-6">
                  <li>
                    <p className="text-lg mb-4">
                      AI tools like ChatGPT, GitHub Copilot, Bard in daily use
                    </p>
                  </li>
                  <li>
                    <p className="text-lg mb-4">
                      Sydney tech companies rely on AI for faster dev cycles
                    </p>
                  </li>
                  <li>
                    <p className="text-lg">
                      Developers expected to use AI for 30% of coding by 2025
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <img
              src="https://luongvankiet.github.io/will-ai-replace-programmers/github-copilot.gif"
              alt="Sydney skyline with tech overlay"
              className="object-cover rounded-lg w-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-6 relative">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
              <div className="pl-10 pt-6">
                <p className="text-lg italic mb-2">
                  "Industry trends suggest that AI coding assistants like GitHub
                  Copilot are contributing up to 30% of developers’ code — a
                  number expected to grow. But the remaining 70% still requires
                  critical human thinking."
                </p>
                <p className="text-sm text-muted-foreground text-right">
                  — Addy Osmani, Beyond the 70%: Maximizing the Human 30% of
                  AI-Assisted Coding, 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
