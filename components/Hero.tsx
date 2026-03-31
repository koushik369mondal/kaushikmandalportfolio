"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <SectionWrapper id="home" centerContent={true}>
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Hi, I'm Koushik
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Building scalable and modern web applications
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
