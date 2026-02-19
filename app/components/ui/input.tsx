import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border bg-transparent px-4 py-3 text-sm placeholder:text-[var(--text-muted)]",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full rounded-xl border bg-transparent px-4 py-3 text-sm placeholder:text-[var(--text-muted)]",
        className,
      )}
      {...props}
    />
  );
}
