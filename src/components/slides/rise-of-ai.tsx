import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function RiseOfAI() {
  return (
    <div className="slide relative bg-gradient-to-b from-background to-background/10">
      <div className="slide-content">
        <motion.h2
          className="slide-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Rise of AI – From Excitement to Uncertainty
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <img
              src="/chatGPT.gif"
              alt="AI coding assistant showing code suggestions"
              className="w-full object-cover rounded-lg"
            />
          </motion.div>

          <Card className="h-full">
            <CardContent className="p-6">
              <motion.p
                className="text-xl mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="highlight text-zinc-400 font-extrabold">
                  Initial excitement:
                </span>{" "}
                ChatGPT amazed the world with its ability to write, code, and
                solve problems instantly.
              </motion.p>

              <motion.p
                className="text-xl mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="highlight text-zinc-400 font-extrabold">
                  Business transformation:{" "}
                </span>
                Companies used AI to speed up tasks, reduce costs, and automate
                operations.
              </motion.p>

              <motion.p
                className="text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="highlight text-zinc-400 font-extrabold">
                  Rising fear:{" "}
                </span>
                As AI advanced, people started worrying — could it take over my
                job? Especially in tech and software fields.
              </motion.p>
            </CardContent>
          </Card>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-6">
              <p className="text-lg">
                As AI tools continued to evolve at a rapid pace, students found
                themselves at a<span className="highlight">Rising fear: </span>.
                Should they embrace these new tools and integrate them into
                their learning process, or would relying on AI hinder their
                ability to develop fundamental programming skills?
              </p>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </div>
  );
}
