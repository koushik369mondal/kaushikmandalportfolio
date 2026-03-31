
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between py-6">
      <h1 className="text-xl font-bold">Koushik</h1>
      <div className="space-x-6">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
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

function About() {
  return (
    <section className="mt-32 max-w-3xl">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-400">
        I am a Computer Science student passionate about solving real-world problems
        through code. I enjoy building scalable applications and exploring new
        technologies.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mt-32">
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
    </section>
  );
}

function Skills() {
  const skills = ["Java", "DSA", "React", "Next.js", "MongoDB"];

  return (
    <section className="mt-32">
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
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-32 mb-20">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-400">Email: koushik@example.com</p>
    </section>
  );
}
