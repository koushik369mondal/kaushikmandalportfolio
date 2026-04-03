"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "WanderLust",
    description:
      "A full-stack travel listing platform where users can explore destinations, apply filters, and manage listings with an intuitive and responsive UI.",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Map API",
    ],
    githubLink: "https://github.com/koushik369mondal/WanderLust",
    liveLink: "https://wanderlust-fofm.onrender.com/listings",
  },
  {
    title: "K Mondal Store 🛒",
    description:
      "A full-stack grocery e-commerce platform with category-based browsing, cart functionality, and responsive shopping flows.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/koushik369mondal/k-mondal-store",
    liveLink: "https://k-mondal-store-frontend.onrender.com/",
  },
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
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[92%] -translate-x-1/2 rounded-full opacity-65 [background:radial-gradient(ellipse_at_center,rgba(37,99,235,0.22),rgba(15,23,42,0)_70%)]" />
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">
          {projects.map((p, i) => (
            <div key={p.title} className="h-full w-full">
              <ProjectCard index={i} {...p} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
