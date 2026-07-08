"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky state background
      setScrolled(window.scrollY > 20);

      // Simple active section scroll spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent hover:opacity-85 transition-opacity tracking-tight"
          >
            Koushik
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={i}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full outline-none"
                style={{
                  color: isActive || hoveredIndex === i ? "#fff" : "#9ca3af",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10">{link.label}</span>
                {hoveredIndex === i && (
                  <motion.span
                    layoutId="hover-background"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white font-semibold shadow-md shadow-blue-500/20 hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 border border-white/10 cursor-pointer"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full cursor-pointer"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="fixed right-0 top-0 left-auto translate-x-0 translate-y-0 h-full w-full max-w-xs border-l border-white/10 bg-black/90 backdrop-blur-2xl p-6 shadow-2xl flex flex-col justify-between sm:rounded-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right duration-300">
              <div className="flex flex-col gap-6">
                <DialogHeader className="flex flex-col border-b border-white/10 pb-4 text-left">
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Koushik
                  </DialogTitle>
                  <DialogDescription className="text-xs text-gray-500 mt-1">
                    Menu & Navigation
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4 mt-4">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <Link
                        key={i}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                          ? "bg-white/10 text-white border-l-4 border-blue-500 pl-3 font-semibold shadow-inner"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col gap-4">
                <Button
                  asChild
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold w-full py-6 cursor-pointer"
                >
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    Contact Me
                  </Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
}
