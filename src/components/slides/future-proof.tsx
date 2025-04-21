import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function FutureProof() {
  const bulletPoints = [
    "Develop strong problem-solving skills that transcend specific technologies",
    "Focus on understanding concepts rather than memorizing syntax",
    "Practice debugging and troubleshooting without AI assistance",
    "Learn how to effectively prompt and collaborate with AI tools",
    "Build projects that demonstrate your unique thinking and creativity",
    "Stay curious and maintain a growth mindset",
  ];

  return (
    <div className="slide relative">
      <div className="slide-content">
        <motion.h2
          className="slide-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How to Future-Proof Your Career
        </motion.h2>

        <Card className="mb-8">
          <CardContent className="p-6">
            <ul className="space-y-4">
              {bulletPoints.map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
