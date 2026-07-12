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
    backgroundImage: "/wanderlust.png",
    featured: true,
    status: "Completed",
    category: "Full-Stack Web App",
    year: "2024",
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
    backgroundImage: "/kMondalStore.png",
    featured: true,
    status: "Completed",
    category: "E-Commerce System",
    year: "2024",
  },
  {
    title: "Compiler Platform",
    description:
      "A full-stack coding platform with secure runtime execution, custom test cases, and near real-time submission insights.",
    techStack: ["Next.js", "Judge0", "MongoDB", "TypeScript"],
    githubLink: "https://github.com/koushik369mondal/compiler-platform",
    liveLink: "https://compiler-platform-demo.vercel.app",
    backgroundImage: "/compiler.png",
    featured: false,
    status: "Completed",
    category: "Developer Tooling",
    year: "2025",
  },
  {
    title: "Premium Portfolio",
    description:
      "A performance-focused portfolio with smooth animations, refined visual hierarchy, and responsive section transitions.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    githubLink: "https://github.com/koushik369mondal/kaushikmandalportfolio",
    liveLink: "https://kaushikmandalportfolio.vercel.app",
    backgroundImage: "/portfolio.png",
    featured: false,
    status: "In Progress",
    category: "Creative Frontend",
    year: "2026",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" centerContent={false} className="relative overflow-hidden">
      {/* Decorative background glow elements for premium depth */}
      <div className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px] opacity-70 animate-pulse duration-[8s]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[100px] opacity-70 animate-pulse duration-[10s]" />

      <div className="relative mx-auto w-full max-w-7xl px-4">
        {/* Premium Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Featured Work
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight md:text-6xl bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent pb-2 font-sans"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-4 mb-6 origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-sm text-slate-400 md:text-base leading-relaxed"
          >
            Selected work crafted with an emphasis on performance, interaction
            quality, and clean product design.
          </motion.p>
        </div>

        {/* Staggered grid container for cards */}
        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} index={i} {...p} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
