/// <reference types="vite/client" />

declare module "lucide-react" {
  import type * as React from "react";
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;
  export const ArrowUpRight: LucideIcon;
  export const Github: LucideIcon;
  export const Code: LucideIcon;
  export const Code2: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Mail: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Layers: LucideIcon;
  export const Target: LucideIcon;
  export const Compass: LucideIcon;
  export const Database: LucideIcon;
  export const Layout: LucideIcon;
  export const Server: LucideIcon;
  export const Wrench: LucideIcon;
  export const Trophy: LucideIcon;
  const icons: Record<string, LucideIcon>;
  export default icons;
}

declare module "tailwind-merge" {
  export function twMerge(...classLists: any[]): string;
}
