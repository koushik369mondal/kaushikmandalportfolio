import { ExternalLink, Layers } from "lucide-react";
import { Github } from "@/components/icons/Github";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
  featured?: boolean;
}) {
  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return (
          <span className="shrink-0 rounded border border-emerald-500/30 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
            Completed
          </span>
        );
      case "In Development":
        return (
          <span className="shrink-0 rounded border border-amber-500/30 px-1.5 py-0.5 text-[10px] font-medium text-amber-600 dark:text-amber-400">
            In development
          </span>
        );
      case "Concept":
        return (
          <span className="shrink-0 rounded border border-purple-500/30 px-1.5 py-0.5 text-[10px] font-medium text-purple-600 dark:text-purple-400">
            Concept
          </span>
        );
    }
  };

  return (
    <article
      className={cn(
        "card-chai group flex h-full flex-col overflow-hidden sm:opacity-90 sm:hover:opacity-100",
        className
      )}
    >
      {/* Screenshot / Media Display */}
      {project.image ? (
        <div className="relative flex h-40 sm:h-44 w-full shrink-0 items-center justify-center overflow-hidden border-b border-border/40 bg-neutral-100 dark:bg-neutral-950/80 p-2 sm:p-2.5">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="relative flex h-40 sm:h-44 w-full shrink-0 flex-col items-center justify-center border-b border-border/40 bg-neutral-100/60 dark:bg-neutral-950/60 p-4 text-center">
          <div className="rounded-lg border border-border/60 bg-background/80 p-2 text-neutral-500 dark:text-neutral-400">
            <Layers className="size-5" />
          </div>
          <span className="mt-2 font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
            {project.category}
          </span>
          <span className="mt-0.5 text-[10px] text-neutral-400 dark:text-neutral-500">
            {project.status === "Concept" ? "Architecture & UI Concept" : "System in Development"}
          </span>
        </div>
      )}

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4">
        <div>
          {/* Title, Tagline & Status */}
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="font-montserrat text-[15px] sm:text-base font-semibold text-foreground truncate">
                {project.title}
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                {project.tagline}
              </p>
            </div>
            {getStatusBadge(project.status)}
          </div>

          {/* Short Description */}
          <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 line-clamp-2 min-h-[2.5rem]">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="mt-3 flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border/70 dark:border-neutral-800 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500 dark:text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-3.5 flex items-center justify-between border-t border-border/40 pt-3">
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
                className="flex items-center gap-1 text-[11px] text-neutral-400 transition-colors hover:text-foreground"
              >
                <Github className="size-3" />
                <span>Source code</span>
              </a>
            ) : (
              <span className="text-[10px] text-neutral-500">Internal Repo</span>
            )}
          </div>

          <div>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-7 items-center gap-1 rounded-md bg-primary px-2.5 text-[11px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <span>Live demo</span>
                <ExternalLink className="size-3" aria-hidden="true" />
              </a>
            ) : (
              <span className="text-[10px] text-neutral-500">
                {project.status === "Concept" ? "Documentation only" : "Demo in progress"}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
