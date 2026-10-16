import { ArrowUpRight, Code, ExternalLink, GraduationCap } from "lucide-react";
import { Github } from "@/components/icons/Github";
import { PERSONAL_INFO } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        {/* Left Column */}
        <div className="flex flex-col gap-y-4 md:w-3/5">
          {/* ChaiUI signature animated badge with border glint */}
          <div className="relative inline-flex w-fit overflow-hidden rounded-full p-px">
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 h-6 w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-transparent to-orange-500 motion-safe:animate-chai-spin"
            />
            <span className="relative z-10 flex items-center gap-2 rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-800 dark:bg-stone-900 dark:text-neutral-200">
              <span className="size-2 rounded-full bg-emerald-500" />
              Available for software engineering roles
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[40px] font-semibold tracking-tight text-foreground max-md:leading-tight sm:text-5xl lg:text-6xl">
            Building reliable software with clean architecture
          </h1>

          {/* Lead with one highlight phrase per paragraph rule */}
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            Hi, I am Kaushik Mandal. A Computer Science student dedicated to{" "}
            <span className="highlight">practical product engineering</span> and
            high performance web systems.
          </p>

          {/* Buttons: One solid asymmetric button per screen + mirrored outline */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-asym inline-flex h-10 items-center gap-2 bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Explore projects
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>

            <a
              href="#about"
              className="btn-asym-mirror inline-flex h-10 items-center gap-2 border border-border bg-card/40 px-5 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              About my background
            </a>
          </div>

          {/* Quick links strip */}
          <div className="mt-6 flex items-center gap-5 pt-2 text-xs text-neutral-500 dark:text-neutral-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
              <span>GitHub</span>
            </a>
            <span className="h-3 w-px bg-border" />
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Code className="size-4" />
              <span>LeetCode ({PERSONAL_INFO.leetcodeStats.totalSolved} solved)</span>
            </a>
            <span className="h-3 w-px bg-border" />
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <ExternalLink className="size-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: One central card element in hero */}
        <div className="md:w-2/5">
          <div className="card-chai relative overflow-hidden p-6 sm:p-7">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-sm font-bold text-foreground">
                  KM
                </div>
                <div>
                  <h3 className="font-montserrat text-sm font-semibold text-foreground">
                    Kaushik Mandal
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    B.Tech CSE Undergraduate
                  </p>
                </div>
              </div>
              <span className="rounded border border-emerald-500/30 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                Industry Integrated
              </span>
            </div>

            <div className="space-y-4 pt-4 text-xs text-neutral-600 dark:text-neutral-300">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 size-4 shrink-0 text-neutral-400" />
                <div>
                  <span className="block font-medium text-foreground">
                    Assam down town University
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    B.Tech Computer Science & Engineering
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-border/70 bg-card/60 p-3.5 space-y-2">
                <p className="font-montserrat text-[11px] font-medium tracking-wide text-neutral-400">
                  CORE SPECIALIZATION
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded border border-border px-2 py-0.5 text-[11px]">
                    Full-Stack Web Dev
                  </span>
                  <span className="rounded border border-border px-2 py-0.5 text-[11px]">
                    Java & DSA
                  </span>
                  <span className="rounded border border-border px-2 py-0.5 text-[11px]">
                    FinTech Concepts
                  </span>
                  <span className="rounded border border-border px-2 py-0.5 text-[11px]">
                    REST APIs
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="rounded-lg border border-border/50 bg-background/50 p-3 text-center">
                  <p className="font-montserrat text-lg font-bold text-foreground">
                    {PERSONAL_INFO.leetcodeStats.totalSolved}
                  </p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    LeetCode Solved
                  </p>
                </div>
                <div className="rounded-lg border border-border/50 bg-background/50 p-3 text-center">
                  <p className="font-montserrat text-lg font-bold text-foreground">
                    {PERSONAL_INFO.githubStats.publicRepos}+
                  </p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    GitHub Repos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
