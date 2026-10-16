import { SKILL_CATEGORIES } from "@/data/portfolio";
import { Code2, Database, Layout, Server, Wrench } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="size-4" />;
      case 1:
        return <Server className="size-4" />;
      case 2:
        return <Database className="size-4" />;
      case 3:
        return <Code2 className="size-4" />;
      case 4:
        return <Wrench className="size-4" />;
      default:
        return <Code2 className="size-4" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-border/40">
      <div className="space-y-3">
        <h2 className="text-2xl font-medium sm:text-[30px] text-foreground">
          Technical skills
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Core technologies organized by{" "}
          <span className="highlight">structured technical capabilities</span> without
          arbitrary percentages.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={category.title}
            className="card-chai flex flex-col p-6 sm:p-7"
          >
            <div className="flex items-center gap-2.5 border-b border-border/50 pb-3">
              <div className="flex size-8 items-center justify-center rounded-lg border border-border bg-card text-foreground">
                {getCategoryIcon(idx)}
              </div>
              <h3 className="font-montserrat text-sm font-semibold text-foreground">
                {category.title}
              </h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border/80 bg-card/60 px-2.5 py-1 text-xs text-foreground transition-colors hover:border-foreground/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
