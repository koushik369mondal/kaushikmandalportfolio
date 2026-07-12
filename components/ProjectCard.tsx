"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Code2 } from "lucide-react";

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2A10 10 0 0 0 9 21.54c.47.08.64-.2.64-.46v-1.6c-2.61.57-3.16-1.11-3.16-1.11-.43-1.08-1.05-1.37-1.05-1.37-.86-.58.06-.57.06-.57.95.07 1.45.98 1.45.98.85 1.46 2.23 1.04 2.77.8.08-.62.33-1.04.6-1.28-2.08-.24-4.27-1.04-4.27-4.64 0-1.03.37-1.88.98-2.54-.1-.24-.43-1.22.1-2.54 0 0 .8-.26 2.62.97a9.15 9.15 0 0 1 4.78 0c1.82-1.23 2.62-.97 2.62-.97.53 1.32.2 2.3.1 2.54.6.66.97 1.5.97 2.54 0 3.6-2.2 4.4-4.29 4.63.34.29.64.86.64 1.75v2.59c0 .26.17.54.65.45A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  featured?: boolean;
  featureLabel?: string;
  index?: number;
  backgroundImage?: string;
  status?: "Completed" | "In Progress";
  category?: string;
  year?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom easeOutExpo
    },
  },
};

export default function ProjectCard({
  title,
  description,
  techStack,
  githubLink,
  liveLink,
  featured = false,
  featureLabel = "Featured",
  index = 0,
  backgroundImage,
  status = "Completed",
  category = "Web Application",
  year,
}: ProjectCardProps) {
  const visibleTechStack = techStack.slice(0, 4);
  const hiddenTechCount = Math.max(techStack.length - visibleTechStack.length, 0);

  // States for 3D Tilt Effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for Mouse-tracking Glow Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Unified mouse handler to minimize re-renders and drive effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;

    // Track mouse for glow
    mouseX.set(mX);
    mouseY.set(mY);

    // Calculate degree tilt (max 5 degrees)
    const tiltX = -((mY - height / 2) / height) * 5;
    const tiltY = ((mX - width / 2) / width) * 5;
    
    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.article
      variants={cardVariants}
      className="h-full w-full select-none"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? "transform 0.05s ease-out" : "transform 0.5s ease-out",
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full group relative rounded-[24px]"
      >
        {/* Animated Glow Border Highlight */}
        <div className="absolute inset-0 rounded-[24px] border border-white/10 group-hover:border-blue-500/30 transition-colors duration-500 z-30 pointer-events-none" />

        <Card className="h-full w-full border-none bg-slate-900/40 backdrop-blur-xl rounded-[24px] overflow-hidden flex flex-col justify-between shadow-2xl relative transition-all duration-500 py-0 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] group-hover:bg-slate-900/50">
          
          {/* Mouse tracking radial gradient light glow */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition duration-300 group-hover:opacity-100 z-10"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  300px circle at ${mouseX}px ${mouseY}px,
                  rgba(59, 130, 246, 0.15),
                  transparent 80%
                )
              `,
            }}
          />

          <div className="flex h-full flex-col">
            {/* Project Image Container */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-white/5 bg-slate-950">
              <Image
                src={backgroundImage || "/kMondalStore.png"}
                alt={`${title} project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={index < 2}
                loading={index >= 2 ? "lazy" : undefined}
              />
              {/* Bottom fading mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

              {/* Floating Badges */}
              {/* Left Top: Project Numbering & Year */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 pointer-events-none">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/80 text-[10px] font-bold text-blue-400 border border-white/10 backdrop-blur-md">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </span>
                {year && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-950/80 px-2 py-0.5 text-[9px] font-semibold text-slate-300 border border-white/10 backdrop-blur-md">
                    <Calendar className="h-2.5 w-2.5 text-blue-400" />
                    {year}
                  </span>
                )}
              </div>

              {/* Right Top: Optional Featured / Status ribbon */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 items-end pointer-events-none">
                {featured && (
                  <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 border-none text-white font-semibold text-[9px] uppercase tracking-wider py-0.5 px-2.5 shadow-lg shadow-blue-500/20">
                    {featureLabel}
                  </Badge>
                )}
                {status && (
                  <Badge 
                    variant={status === "Completed" ? "success" : "secondary"} 
                    className="font-medium text-[9px] py-0.5 px-2 backdrop-blur-md"
                  >
                    {status}
                  </Badge>
                )}
              </div>
            </div>

            {/* Project Content */}
            <CardContent className="relative z-20 p-5 flex flex-col flex-1 justify-between gap-4">
              
              {/* Info Area */}
              <div>
                {/* Category Label */}
                <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-blue-400/80">
                  <Code2 className="h-3 w-3 text-blue-400/70" />
                  <span>{category}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mt-1.5 group-hover:text-blue-400 transition-colors duration-300">
                  {title}
                </h3>
                
                {/* Description */}
                <p 
                  className="text-slate-400 text-xs leading-relaxed mt-2 line-clamp-3 overflow-hidden text-ellipsis"
                  title={description}
                >
                  {description}
                </p>
              </div>

              {/* Tech Stack Area */}
              <div className="space-y-4">
                <ul className="flex flex-wrap gap-1.5" aria-label={`${title} technologies`}>
                  {visibleTechStack.map((tech) => (
                    <li key={tech}>
                      <Badge 
                        variant="outline" 
                        className="bg-white/5 border-white/10 text-[10px] text-slate-300 hover:bg-white/10 hover:border-blue-500/30 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    </li>
                  ))}
                  {hiddenTechCount > 0 && (
                    <li>
                      <Badge 
                        variant="outline" 
                        className="bg-white/5 border-white/10 text-[10px] text-slate-400"
                      >
                        +{hiddenTechCount} more
                      </Badge>
                    </li>
                  )}
                </ul>

                {/* Call To Actions */}
                <div className="flex gap-2.5 pt-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="flex-1 rounded-xl border-white/10 bg-slate-950/20 text-slate-300 hover:bg-white/5 hover:text-white hover:border-blue-500/30 transition-all duration-300 gap-1.5 h-9 text-xs font-semibold cursor-pointer"
                  >
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View code for ${title} on GitHub`}
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>

                  <Button 
                    size="sm" 
                    asChild
                    className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 hover:brightness-110 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-300 gap-1.5 h-9 text-xs cursor-pointer"
                  >
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open live demo for ${title}`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

            </CardContent>
          </div>

        </Card>
      </div>
    </motion.article>
  );
}