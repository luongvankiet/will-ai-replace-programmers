import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="slide relative">
      <div className="slide-content flex flex-col items-center justify-center text-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Thank You
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mb-10"
        >
          <Card>
            <CardContent className="p-6 relative">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
              <div className="pl-10 pt-6">
                <p className="text-lg italic mb-4">
                  "AI won’t replace you. But a developer who knows how to use AI
                  smarter — might."
                </p>
                <p className="text-sm text-muted-foreground text-right">
                  — Jensen Huang, CEO of NVIDIA.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="text-lg">
            Start Learning with AI — the Smart Way
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
