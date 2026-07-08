"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

const logoLight = "/logo.png";
const logoDark = "/logo.png";

export default function Logo({ size = 40, showText = true }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let active = true;
    requestAnimationFrame(() => {
      if (active) setMounted(true);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!mounted) return <div style={{ height: size, width: size * 3 }} />;

  const logoSrc = resolvedTheme === "dark" ? logoDark : logoLight;

  return (
    <div className="flex items-center gap-2 select-none">
      <Image
        src={logoSrc}
        alt="Kaushik Mandal logo"
        width={size}
        height={size}
        style={{ height: size, width: "auto" }}
        className="object-contain"
      />

      {/* Note: New logos already contain the brand name text. 
          The spans below can be toggled if custom text is still needed,
          but they are hidden by default for the new branding assets. */}
      {showText && (
        <span className="text-xl tracking-tight hidden md:block">
          <span className="text-blue-600">Ziuro</span>
          <span className="text-orange-500">Workers</span>
        </span>
      )}
    </div>
  );
}
