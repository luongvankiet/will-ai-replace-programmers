import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CaseStudies() {
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
          Introduction to the Case Studies
        </motion.h2>
        

        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          To better understand the impact of AI on programming education, we
          followed two students with different approaches to using AI tools in
          their learning journey.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Student A: The Balanced Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Used AI as a learning tool, focusing on understanding concepts
                  and writing code manually before using AI to verify or
                  optimize solutions.
                </p>
                <Button
                  onClick={() => {
                    document
                      .getElementById("student-a")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Student B: The Over-Reliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Heavily relied on AI for code generation without developing a
                  strong understanding of fundamental concepts, leading to
                  difficulties when debugging or solving novel problems.
                </p>
                <Button
                  onClick={() => {
                    document
                      .getElementById("student-b")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
