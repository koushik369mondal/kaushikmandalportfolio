"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skills = ["Java", "DSA", "React", "Next.js", "MongoDB"];

export default function Skills() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 px-4 py-2 rounded-lg"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
