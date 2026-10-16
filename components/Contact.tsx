import { PERSONAL_INFO } from "@/data/portfolio";
import { ArrowUpRight, Mail, ExternalLink, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border/40">
      <div className="card-chai relative overflow-hidden p-8 sm:p-12 text-center max-w-3xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground mx-auto">
            <Mail className="size-5" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
            Let us discuss opportunities
          </h2>

          <p className="max-w-xl mx-auto text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Open for internships, entry-level engineering roles, and{" "}
            <span className="highlight">collaborative software projects</span>.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn-asym inline-flex h-10 items-center gap-2 bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              <span>Send direct email</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-asym-mirror inline-flex h-10 items-center gap-2 border border-border bg-card/60 px-5 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-8 pt-8 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="rounded-lg border border-border/60 bg-card/40 p-4">
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                Direct Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-brand"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="rounded-lg border border-border/60 bg-card/40 p-4">
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                Résumé Status
              </span>
              <p className="mt-1 text-xs text-neutral-400">
                Detailed CV available directly via email upon request
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
