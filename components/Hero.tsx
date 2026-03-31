"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center mt-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Hi, I'm Koushik
      </motion.h1>
      <p className="mt-4 text-gray-400 text-lg">
        Building scalable and modern web applications
      </p>
    </section>
  );
}
