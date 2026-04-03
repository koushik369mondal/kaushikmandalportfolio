"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Compiler Platform",
    description:
      "A full-stack coding platform with secure runtime execution, custom test cases, and near real-time submission insights.",
    techStack: ["Next.js", "Judge0", "MongoDB", "TypeScript"],
    githubLink: "https://github.com/koushik369mondal/compiler-platform",
    liveLink: "https://compiler-platform-demo.vercel.app",
  },
  {
    title: "Premium Portfolio",
    description:
      "A performance-focused portfolio with smooth animations, refined visual hierarchy, and responsive section transitions.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    githubLink: "https://github.com/koushik369mondal/kaushikmandalportfolio",
    liveLink: "https://kaushikmandalportfolio.vercel.app",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" centerContent={false}>
      <div className="mx-auto w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center text-sm text-slate-300 md:text-base"
        >
          Selected work crafted with an emphasis on performance, interaction
          quality, and clean product design.
        </motion.p>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} index={i} {...p} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
