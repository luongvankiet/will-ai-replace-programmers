import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function StudentA() {
  const [isOpen, setIsOpen] = useState(false);

  const successPoints = [
    "Used AI to understand complex concepts and algorithms",
    "Always wrote initial code manually before using AI for optimization",
    "Focused on learning debugging skills independently",
    "Used AI-generated code as a learning resource, not a replacement",
    "Developed strong problem-solving skills by working through challenges first",
  ];

  return (
    <div className="slide relative bg-gradient-to-b from-background/30 to-background">
      <div className="slide-content">
        <motion.h2
          className="slide-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Student A: The Balanced Approach
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Student A</h3>
                <div className="relative w-full h-[250px] rounded-md overflow-hidden mb-4">
                  <img
                    src="https://luongvankiet.github.io/will-ai-replace-programmers/deploy.gif"
                    alt="Student working with both AI tools and manual coding"
                    className="object-fill w-full h-full"
                  />
                </div>
                <ul className="list-disc p-4 space-y-4 text-xl">
                  <li>Used v0 to generate app UI</li>
                  <li>Deployed using Vercel</li>
                  <li>Encountered bugs — used debugging skills</li>
                  <li>Used AI with context to fix code</li>
                  <li> Outcome: Successfully launched</li>
                </ul>
              </CardContent>

              <Button
                size="icon"
                className="absolute top-[45%] -right-12 rounded-full hidden md:block pl-2.5"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <ChevronLeft /> : <ChevronRight />}
              </Button>

              <Button
                size="icon"
                className="absolute -bottom-12 right-[50%] rounded-full block md:hidden pl-2.5"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </Card>
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold  mb-8">
                      Why Student A Succeeded
                    </h3>
                    <ul className="text-xl space-y-6">
                      {successPoints.map((point, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.4 + index * 0.1,
                          }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
