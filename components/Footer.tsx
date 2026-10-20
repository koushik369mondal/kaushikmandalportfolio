import { PERSONAL_INFO } from "@/data/portfolio";
import { Code, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons/Github";

export function Footer() {
  return (
    <footer className="relative mt-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 font-montserrat text-xs text-neutral-500 before:absolute before:top-0 before:left-1/2 before:h-px before:w-full before:max-w-[1536px] before:-translate-x-1/2 before:bg-amber-600 before:opacity-10 before:[mask-image:linear-gradient(90deg,transparent_0%,black_40%,black_60%,transparent_100%)] dark:before:bg-orange-300">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <p>© {new Date().getFullYear()} Kaushik Mandal. Built with Vite, React, Tailwind CSS and ChaiUI.</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Github className="size-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Code className="size-3.5" />
            <span>LeetCode</span>
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <ExternalLink className="size-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
