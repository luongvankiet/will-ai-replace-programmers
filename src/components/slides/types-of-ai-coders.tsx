import { Card, CardContent } from "@/components/ui/card";
import { animate, hover, motion, useMotionValue } from "framer-motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function TypesOfAICoders() {
  const containerRef = useRef<HTMLDivElement>(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);
  useEffect(() => {
    if (!containerRef.current) return;

    const { chars } = splitText(containerRef.current.querySelector("li")!);
    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000; // seconds
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    hover(chars, (element) => {
      // Calculate the speed of the pointer movement
      // and use that to calculate the distance the character should move
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);
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
          The 3 Types of AI Coders You'll Meet
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
                <h3 className="text-2xl font-semibold mb-4">
                  The Collaborator
                </h3>
                <ul className="text-xl list-disc p-6 space-y-5">
                  <li>
                    <p className="mb-4">Uses AI like a teammate</p>
                  </li>
                  <li>
                    <p className="mb-4">Understands the code</p>
                  </li>
                  <li>
                    <p className="mb-4">Debugs before asking for help</p>
                  </li>
                  <li>
                    <p className="">Always learning from the AI output</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-4">The Copy-Paster</h3>
                <ul className="text-xl list-disc p-6 space-y-5">
                  <li>
                    <p className="mb-4">Asks AI for code, pastes it in</p>
                  </li>
                  <li>
                    <p className="mb-4">
                      Doesn't always understand what it does
                    </p>
                  </li>
                  <li>
                    <p className="">Gets stuck when bugs appear</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-primary/10 border-primary/20" ref={containerRef}>
            <CardContent className="p-6 relative">
              <h3 className="text-2xl font-semibold mb-4">
                The Confused Prompt-Spammer
              </h3>

              <ul className="text-xl list-disc p-6 space-y-5">
                <li>
                  <p className="mb-4">
                    Keeps asking the AI “fix it” or “why broken”
                  </p>
                </li>
                <li>
                  <p className="mb-4">Doesn’t check errors or console</p>
                </li>
                <li>
                  <p className="">Relies totally on AI to think for them</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
