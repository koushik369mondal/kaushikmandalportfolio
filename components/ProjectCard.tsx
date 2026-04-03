"use client";

import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  featured?: boolean;
  featureLabel?: string;
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
  featured = false,
  featureLabel = "Featured",
  index = 0,
}: ProjectCardProps) {
  const secondaryButtonClass =
    "inline-flex items-center gap-2 rounded-lg border border-white/20 bg-zinc-900/70 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition-all duration-300 ease-out hover:scale-[1.02] hover:brightness-110 hover:border-blue-400/60";

  const primaryButtonClass =
    "inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/35 transition-all duration-300 ease-out hover:scale-[1.02] hover:brightness-110";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`project-shine group relative isolate h-full w-full min-h-75 overflow-hidden rounded-2xl border bg-zinc-900 p-8 shadow-lg shadow-black/30 transition-all duration-300 ease-out hover:border-blue-400/50 hover:shadow-[0_18px_38px_-18px_rgba(99,102,241,0.48)] hover:ring-1 hover:ring-blue-400/40 ${
        featured ? "border-blue-400/40" : "border-white/10"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-b from-white/4 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 [background:radial-gradient(90%_70%_at_10%_0%,rgba(59,130,246,0.16),transparent_60%),radial-gradient(90%_80%_at_100%_100%,rgba(139,92,246,0.16),transparent_60%)]" />
      <div className="project-noise pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        {featured ? (
          <div className="inline-flex w-fit items-center rounded-full border border-blue-300/40 bg-blue-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100">
            {featureLabel}
          </div>
        ) : null}

        <div className="space-y-3">
          <h3 className="text-2xl font-bold leading-tight tracking-wide text-white md:text-[1.7rem]">
            {title}
          </h3>
          <p className="max-w-[56ch] overflow-hidden text-sm leading-relaxed text-gray-300 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] md:text-base">
            {description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2.5" aria-label={`${title} tech stack`}>
          {techStack.map((tech) => (
            <li key={tech}>
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-200">
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
            className={secondaryButtonClass}
          >
            <GitHubIcon />
            View Code
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live demo for ${title}`}
            className={primaryButtonClass}
          >
            <ExternalLinkIcon />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}