import { PROJECTS } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-border/40">
      <div className="space-y-3">
        <h2 className="text-2xl font-medium sm:text-[30px] text-foreground">
          Featured projects
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Selected work focused on{" "}
          <span className="highlight">practical product applications</span> with
          real-world utility.
        </p>
      </div>

      {/* ChaiUI Toolbar */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border/40 pb-4">
        <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
          <p>
            Showing <span className="font-semibold text-foreground">{PROJECTS.length}</span> projects
          </p>
          <span className="h-4 w-px bg-border" />
          <span>Full-stack web, tooling & concepts</span>
        </div>
      </div>

      {/* Grid of Cards: 1 col on mobile, 2 cols on desktop, 3 cols on large screens */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
