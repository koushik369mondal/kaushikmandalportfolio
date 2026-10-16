import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[backdrop-filter,background,border] duration-300",
        scrolled
          ? "border-b border-border/40 bg-background/75 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-12">
        {/* Wordmark */}
        <a
          href="/"
          className="group flex items-center gap-2 font-brand text-lg font-semibold tracking-tight text-foreground"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-card-edge bg-card text-xs font-bold text-foreground transition-colors group-hover:border-foreground/30">
            KM
          </span>
          <span className="transition-colors group-hover:text-brand">
            Kaushik Mandal
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-400 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex btn-asym h-8.5 items-center justify-center bg-foreground px-4 text-xs font-semibold text-background transition-colors hover:bg-foreground/90"
          >
            Get in touch
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileOpen && (
        <div className="border-b border-border/50 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden sm:px-12">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm text-neutral-300 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-asym flex h-9 w-full items-center justify-center bg-foreground text-xs font-semibold text-background"
              >
                Get in touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
