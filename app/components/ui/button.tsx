import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

const buttonStyles = (variant: "primary" | "ghost", className?: string) =>
  cn(
    "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5",
    variant === "primary"
      ? "bg-[var(--brand)] text-white shadow-[var(--shadow-card)] hover:bg-[var(--brand-strong)]"
      : "border bg-transparent text-[var(--text)] hover:bg-[var(--surface-muted)]",
    className,
  );

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={buttonStyles(variant, className)} {...props} />;
}

export function ButtonLink({ href, children, className, variant = "primary" }: { href: string; children: React.ReactNode; className?: string; variant?: "primary" | "ghost" }) {
  return (
    <Link href={href} className={buttonStyles(variant, className)}>
      {children}
    </Link>
  );
}
