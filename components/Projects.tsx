"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Compiler Platform",
    desc: "Online judge with test case execution",
    tech: ["Next.js", "Judge0", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    desc: "Modern animated personal portfolio",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionWrapper id="projects" centerContent={false}>
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="border border-gray-800 p-8 rounded-2xl bg-gray-950 hover:border-gray-700 transition-all cursor-pointer group"
            >
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300" />
                <h3 className="text-2xl font-bold text-white relative z-10">
                  {p.title}
                </h3>
                <p className="text-gray-400 mt-3 text-sm">{p.desc}</p>
                <div className="flex gap-2 mt-6 flex-wrap relative z-10">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
