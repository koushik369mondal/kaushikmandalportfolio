"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skills = ["Java", "DSA", "React", "Next.js", "MongoDB", "TypeScript", "Tailwind CSS", "Git"];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionWrapper id="skills" centerContent={true}>
      <div className="w-full max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.15, 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 px-6 py-3 rounded-lg border border-gray-700 hover:border-blue-500 transition-all cursor-pointer font-semibold"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
