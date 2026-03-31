"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" centerContent={true}>
      <motion.div
        className="max-w-3xl w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I am a Computer Science student passionate about solving real-world problems
          through code. I enjoy building scalable applications and exploring new
          technologies. With experience in full-stack development, I focus on creating
          user-centric solutions that make an impact.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <div className="bg-gray-900 p-4 rounded-lg flex-1 min-w-40">
            <p className="text-2xl font-bold">5+</p>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg flex-1 min-w-40">
            <p className="text-2xl font-bold">2+</p>
            <p className="text-gray-400">Years of Experience</p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
