import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTheme } from "../theme-provider";

export default function V0Vercel() {
  const v0 = [
    "An AI-powered UI code generator",
    "Turns natural language prompts into production-ready code",
    "Built for React + TailwindCSS",
    "Great for wireframes, dashboards, and quick prototypes",
    "Created by Vercel to speed up frontend development",
  ];

  const vercel = [
    "A cloud platform to deploy frontend apps instantly",
    "Optimized for frameworks like Next.js, React, and static sites",
    "Offers seamless CI/CD, preview deployments, and edge performance",
    "Used by teams like Notion, OpenAI, and many startups",
  ];

  const { theme } = useTheme();

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
          What Are v0.dev and Vercel?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">v0.dev</h3>
                <div className="w-full h-[200px] rounded-md overflow-hidden mb-4">
                  <img
                    src={
                      theme === "dark"
                        ? "https://luongvankiet.github.io/will-ai-replace-programmers/v0-dark.png"
                        : "https://luongvankiet.github.io/will-ai-replace-programmers/v0-light.png"
                    }
                    alt="Student working with both AI tools and manual coding"
                    className="object-fit w-50 mx-auto"
                  />
                </div>
                <ul className="list-disc p-4 space-y-4 text-xl">
                  {v0.map((v, index) => (
                    <li key={index}>{v}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Vercel</h3>
                <div className="relative w-full h-[200px] rounded-md mb-4 pt-13">
                  <img
                    src="https://luongvankiet.github.io/will-ai-replace-programmers/vercel.png"
                    alt="Student working with both AI tools and manual coding"
                    className="object-cover rounded-md w-70 mx-auto"
                  />
                </div>
                <ul className="list-disc p-4 space-y-4 text-xl">
                  {vercel.map((ver, vindex) => (
                    <li key={vindex}>{ver}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
