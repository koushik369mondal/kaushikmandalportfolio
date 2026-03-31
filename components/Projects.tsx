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
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-800 p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {p.tech.map((t, i) => (
                <span key={i} className="text-sm bg-gray-800 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
