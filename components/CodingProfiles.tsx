import { PERSONAL_INFO } from "@/data/portfolio";
import { ArrowUpRight, Code, Trophy } from "lucide-react";
import { Github } from "@/components/icons/Github";

export function CodingProfiles() {
  const { leetcodeStats, githubStats } = PERSONAL_INFO;

  return (
    <section id="profiles" className="py-16 sm:py-20 border-t border-border/40">
      <div className="space-y-3">
        <h2 className="text-2xl font-medium sm:text-[30px] text-foreground">
          Coding profiles & activity
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Continuous algorithmic practice and{" "}
          <span className="highlight">verified problem solving track record</span> across
          key developer platforms.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* LeetCode Card */}
        <div className="card-chai p-6 sm:p-7 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between border-b border-border/50 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground">
                  <Code className="size-4" />
                </div>
                <div>
                  <h3 className="font-montserrat text-base font-semibold text-foreground">
                    LeetCode profile
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    @koushik369mondal
                  </p>
                </div>
              </div>
              <span className="rounded border border-border px-2 py-0.5 text-xs text-neutral-400">
                Verified
              </span>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
              Active problem solving with focus on arrays, linked lists, trees, recursion, and dynamic programming in Java.
            </p>

            {/* Verified Statistics Grid */}
            <div className="mt-6 grid grid-cols-4 gap-2 text-center">
              <div className="rounded-lg border border-border/60 bg-card/40 p-2.5">
                <p className="font-montserrat text-lg font-bold text-foreground">
                  {leetcodeStats.totalSolved}
                </p>
                <p className="text-[10px] text-neutral-400">Total Solved</p>
              </div>
              <div className="rounded-lg border border-emerald-500/20 bg-card/40 p-2.5">
                <p className="font-montserrat text-lg font-bold text-emerald-500">
                  {leetcodeStats.easy}
                </p>
                <p className="text-[10px] text-neutral-400">Easy</p>
              </div>
              <div className="rounded-lg border border-amber-500/20 bg-card/40 p-2.5">
                <p className="font-montserrat text-lg font-bold text-amber-500">
                  {leetcodeStats.medium}
                </p>
                <p className="text-[10px] text-neutral-400">Medium</p>
              </div>
              <div className="rounded-lg border border-rose-500/20 bg-card/40 p-2.5">
                <p className="font-montserrat text-lg font-bold text-rose-500">
                  {leetcodeStats.hard}
                </p>
                <p className="text-[10px] text-neutral-400">Hard</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8.5 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <span>View LeetCode profile</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="card-chai p-6 sm:p-7 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between border-b border-border/50 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground">
                  <Github className="size-4" />
                </div>
                <div>
                  <h3 className="font-montserrat text-base font-semibold text-foreground">
                    GitHub contributions
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    @koushik369mondal
                  </p>
                </div>
              </div>
              <span className="rounded border border-border px-2 py-0.5 text-xs text-neutral-400">
                Verified
              </span>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
              Open source repositories, full-stack course projects, and software engineering coursework maintained with Git version control.
            </p>

            {/* Statistics */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-lg border border-border/60 bg-card/40 p-3">
                <p className="font-montserrat text-xl font-bold text-foreground">
                  {githubStats.publicRepos}
                </p>
                <p className="text-[11px] text-neutral-400">Public Repositories</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-card/40 p-3">
                <div className="flex items-center justify-center gap-1">
                  <Trophy className="size-4 text-neutral-400" />
                  <span className="font-montserrat text-sm font-semibold text-foreground">
                    Active
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-neutral-400">Open Source & Coursework</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8.5 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <span>Explore GitHub profile</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
