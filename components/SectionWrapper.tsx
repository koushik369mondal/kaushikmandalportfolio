import React, { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  fullScreen?: boolean;
  centerContent?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  fullScreen = true,
  centerContent = true,
}: SectionWrapperProps) {
  const baseClasses = fullScreen
    ? "min-h-screen w-full flex flex-col"
    : "";
  
  const centerClasses = centerContent && fullScreen
    ? "items-center justify-center"
    : "";

  return (
    <section 
      id={id} 
      className={`${baseClasses} ${centerClasses} px-6 md:px-20 py-20 ${className}`}
    >
      {children}
    </section>
  );
}
