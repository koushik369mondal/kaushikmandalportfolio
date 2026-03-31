"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <SectionWrapper id="contact" centerContent={true}>
      <motion.div
        className="text-center max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg mb-8"
        >
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:koushik@example.com"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            GitHub
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            © 2026 Koushik Mandal. Built with Next.js & Tailwind CSS.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
