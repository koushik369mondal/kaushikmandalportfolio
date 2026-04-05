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
  backgroundImage?: string;
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
  backgroundImage,
}: ProjectCardProps) {
  const hasBackgroundImage = Boolean(backgroundImage);
  const visibleTechStack = techStack.slice(0, 4);
  const hiddenTechCount = Math.max(techStack.length - visibleTechStack.length, 0);

  const secondaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-3 py-1.5 text-sm font-medium text-zinc-100 transition-all duration-300 ease-in-out hover:border-blue-400/60 hover:bg-white/5";

  const primaryButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_10px_26px_-12px_rgba(56,189,248,0.7)] transition-all duration-300 ease-in-out hover:brightness-110";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      className={`project-shine group relative isolate h-full min-h-90 w-full overflow-hidden rounded-2xl border bg-linear-to-br from-gray-900 to-gray-800 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg ${
        featured ? "border-blue-400/40" : "border-white/10"
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="relative h-44 overflow-hidden border-b border-white/10">
          {hasBackgroundImage ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out group-hover:scale-105"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.85))",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-black/60" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_10%,rgba(56,189,248,0.18),transparent_62%),radial-gradient(80%_80%_at_95%_100%,rgba(59,130,246,0.2),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
            </>
          )}
          {featured ? (
            <div className="relative z-10 m-4 inline-flex w-fit items-center rounded-full border border-blue-300/40 bg-blue-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur-md">
              {featureLabel}
            </div>
          ) : null}
        </div>

        <div className="relative z-10 flex h-full flex-1 flex-col justify-between gap-3 bg-white/5 p-4 backdrop-blur-md">
          <div className="space-y-3">
            <h3 className="max-w-[90%] wrap-break-word text-lg font-semibold text-white">
              {title}
            </h3>
            <p
              className="max-w-[90%] overflow-hidden text-ellipsis wrap-break-word text-sm leading-relaxed text-gray-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]"
              title={description}
            >
              {description}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2" aria-label={`${title} tech stack`}>
            {visibleTechStack.map((tech) => (
              <li key={tech}>
                <span className="max-w-28 wrap-break-word rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs font-medium tracking-wide text-gray-300/90">
                  {tech}
                </span>
              </li>
            ))}
            {hiddenTechCount > 0 ? (
              <li>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-gray-500">
                  +{hiddenTechCount} more
                </span>
              </li>
            ) : null}
          </ul>

          <div className="mt-auto pt-3">
            <div className="flex flex-wrap gap-2">
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
        </div>
      </div>
    </motion.article>
  );
}