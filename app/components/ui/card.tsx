import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]",
        className,
      )}
      {...props}
    />
  );
}
