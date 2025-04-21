import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function StudentB() {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState("/coding.gif");

  const studentB = [
    "Used v0 to create a dashboard UI",
    "Deployed but ran into errors",
    "Didn't understand what the error meant",
    "Kept copy-pasting suggestions from AI",
    "Outcome: App never worked",
  ];

  const challengePoints = [
    "Relied heavily on AI to generate complete solutions without understanding the code",
    "Struggled to debug issues when AI-generated code didn't work as expected",
    "Had difficulty adapting to new problems that required novel approaches",
    "Developed dependency on AI for even simple programming tasks",
    "Gaps in fundamental knowledge became apparent during technical interviews",
  ];

  //change image in 5 seconds and cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prevImg) =>
        prevImg === "/coding.gif" ? "/error-windows.gif" : "/coding.gif"
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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
          Student B: The Over-Reliance
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
                <h3 className="text-2xl font-semibold mb-4">Student B</h3>
                <div className="relative w-full h-[250px] rounded-md overflow-hidden mb-4">
                  <img
                    src={img}
                    alt="Student working with both AI tools and manual coding"
                    className="object-fill w-full h-full"
                  />
                </div>
                <ul className="list-disc p-4 space-y-4 text-xl">
                  {studentB.map((studentB, index) => (
                    <li key={index}>{studentB}</li>
                  ))}
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
                    <h3 className="text-2xl font-semibold mb-8">
                      Challenges Faced
                    </h3>
                    <ul className="text-xl space-y-6">
                      {challengePoints.map((point, index) => (
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
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
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
