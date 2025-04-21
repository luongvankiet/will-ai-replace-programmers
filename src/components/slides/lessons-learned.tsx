import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function LessonsLearned() {
  const lessons = [
    {
      title: "AI as a Tool, Not a Replacement",
      content:
        "AI should augment human skills, not replace the learning process. The most successful students use AI as one tool in their toolkit.",
    },
    {
      title: "Focus on Problem-Solving",
      content:
        "Understanding how to approach and solve problems is more valuable than knowing specific syntax or memorizing code patterns.",
    },
    {
      title: "Debugging Skills are Essential",
      content:
        "The ability to troubleshoot and fix issues is a critical skill that requires hands-on experience and cannot be fully outsourced to AI.",
    },
    {
      title: "Fundamentals Matter",
      content:
        "A strong foundation in programming concepts, data structures, and algorithms remains crucial, even in an AI-assisted world.",
    },
  ];

  return (
    <div className="slide relative bg-gradient-to-b from-background/90 to-background">

      <div className="slide-content">
        <motion.h2
          className="slide-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Lessons Learned
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {lessons.map((lesson, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{lesson.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{lesson.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
