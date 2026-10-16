import { ExternalLink } from "lucide-react";
import { Github } from "@/components/icons/Github";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return (
          <span className="rounded border border-emerald-500/30 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            Completed
          </span>
        );
      case "In Development":
        return (
          <span className="rounded border border-amber-500/30 px-2 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-400">
            In development
          </span>
        );
      case "Concept":
        return (
          <span className="rounded border border-purple-500/30 px-2 py-0.5 text-[11px] font-medium text-purple-600 dark:text-purple-400">
            Concept & design
          </span>
        );
    }
  };

  return (
    <article className="card-chai group flex flex-col overflow-hidden sm:opacity-90 sm:hover:opacity-100">
      {/* Real project image if available */}
      {project.image ? (
        <div className="relative aspect-video w-full overflow-hidden border-b border-border/40 bg-neutral-900">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="flex aspect-video w-full flex-col justify-between border-b border-border/40 bg-card/60 p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              {project.category}
            </span>
            {getStatusBadge(project.status)}
          </div>
          <div>
            <span className="font-brand text-2xl font-bold tracking-tight text-neutral-700 dark:text-neutral-300">
              {project.title}
            </span>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              {project.tagline}
            </p>
          </div>
        </div>
      )}

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-montserrat text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {project.tagline}
            </p>
          </div>
          {project.image && getStatusBadge(project.status)}
        </div>

        <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
          {project.description}
        </p>

        {/* Implemented features list */}
        <div className="mt-4 space-y-1.5 border-t border-border/50 pt-3">
          <p className="font-montserrat text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
            Key capabilities
          </p>
          <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-neutral-400">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 text-[11px] text-neutral-500 dark:border-neutral-800 dark:text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer Actions */}
        <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
                className="flex items-center gap-1.5 text-xs text-neutral-400 transition-colors hover:text-foreground"
              >
                <Github className="size-3.5" />
                <span>Source code</span>
              </a>
            )}
          </div>

          <div>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <span>Live demo</span>
                <ExternalLink className="size-3" aria-hidden="true" />
              </a>
            ) : (
              <span className="text-[11px] text-neutral-500">
                {project.status === "Concept" ? "Documentation only" : "Demo in progress"}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
