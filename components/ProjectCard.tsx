"use client";

import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  index?: number;
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 2A10 10 0 0 0 9 21.54c.47.08.64-.2.64-.46v-1.6c-2.61.57-3.16-1.11-3.16-1.11-.43-1.08-1.05-1.37-1.05-1.37-.86-.58.06-.57.06-.57.95.07 1.45.98 1.45.98.85 1.46 2.23 1.04 2.77.8.08-.62.33-1.04.6-1.28-2.08-.24-4.27-1.04-4.27-4.64 0-1.03.37-1.88.98-2.54-.1-.24-.43-1.22.1-2.54 0 0 .8-.26 2.62.97a9.15 9.15 0 0 1 4.78 0c1.82-1.23 2.62-.97 2.62-.97.53 1.32.2 2.3.1 2.54.6.66.97 1.5.97 2.54 0 3.6-2.2 4.4-4.29 4.63.34.29.64.86.64 1.75v2.59c0 .26.17.54.65.45A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v7h-7" />
      <path d="M3 10V3h7" />
      <path d="M3 21h7v-7" />
    </svg>
  );
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubLink,
  liveLink,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.01, rotateX: 1.2, rotateY: -1.2 }}
      className="project-shine group relative isolate overflow-hidden rounded-2xl border border-white/15 bg-white/6 p-7 backdrop-blur-lg transition-all duration-500 hover:border-blue-400/55 hover:shadow-[0_22px_70px_-24px_rgba(66,153,225,0.5)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="pointer-events-none absolute -left-12 -top-16 h-44 w-44 rounded-full bg-linear-to-br from-blue-500/35 to-violet-500/25 blur-3xl transition-opacity duration-500 group-hover:opacity-95" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            {description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label={`${title} tech stack`}>
          {techStack.map((tech) => (
            <li key={tech}>
              <span className="rounded-full border border-blue-300/35 bg-blue-500/10 px-3 py-1 text-xs font-medium tracking-wide text-blue-100">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`View code for ${title} on GitHub`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition-all duration-300 hover:scale-[1.03] hover:border-blue-300/70 hover:bg-blue-500/15"
          >
            <GitHubIcon />
            View Code
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live demo for ${title}`}
            className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-800/40 transition-all duration-300 hover:scale-[1.03] hover:from-blue-400 hover:to-violet-400"
          >
            <ExternalLinkIcon />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}