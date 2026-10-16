import { PERSONAL_INFO } from "@/data/portfolio";
import { BookOpen, Layers, Target, Compass } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 border-t border-border/40">
      <div className="space-y-3">
        <h2 className="text-2xl font-medium sm:text-[30px] text-foreground">
          About me
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          I am an undergraduate developer focusing on{" "}
          <span className="highlight">practical product development</span> and
          scalable web applications.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Education & Focus */}
        <div className="card-chai p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground">
              <BookOpen className="size-4" />
            </div>
            <div>
              <h3 className="font-montserrat text-base font-semibold text-foreground">
                Academic foundation
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Computer Science & Engineering
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            Currently pursuing a B.Tech in Computer Science and Engineering
            (Industry Integrated) at {PERSONAL_INFO.university}. My curriculum combines
            core theoretical computer science with hands-on software development practices.
          </p>
          <div className="rounded-lg border border-border/60 bg-card/40 p-3.5 text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
            <div className="font-medium text-foreground">Degree Track:</div>
            <div>{PERSONAL_INFO.degree}</div>
          </div>
        </div>

        {/* Engineering Philosophy */}
        <div className="card-chai p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground">
              <Layers className="size-4" />
            </div>
            <div>
              <h3 className="font-montserrat text-base font-semibold text-foreground">
                Engineering philosophy
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Problem-driven software design
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            I prioritize writing clear, maintainable code rather than relying on bloated
            frameworks. Whether implementing algorithmic solutions in Java or structuring
            RESTful services in Node.js, I focus on reliability, clear data flow, and
            efficient execution.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="rounded-lg border border-border/60 bg-card/40 p-3">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                <Target className="size-3.5 text-neutral-400" />
                Focus
              </div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Data structures, full-stack web, and robust APIs.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-card/40 p-3">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                <Compass className="size-3.5 text-neutral-400" />
                Interests
              </div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                FinTech tooling, civic solutions, and product architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
