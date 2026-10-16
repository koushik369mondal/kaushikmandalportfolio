import { cn } from "@/lib/utils";

export function Backdrop({ className }: { className?: string }) {
  return (
    <img
      src="/chaiui/background.svg"
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      decoding="async"
      className={cn("chai-backdrop", className)}
    />
  );
}
