import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/ui-kit";

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-float"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.24 310 / 0.6), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl animate-float-alt"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.25 340 / 0.55), transparent 70%)" }}
      />

      <header className="relative z-10 flex items-center justify-between p-5 sm:p-8">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="gradient-brand-bg glow-shadow-sm grid h-9 w-9 place-items-center rounded-xl">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight">
              Unique<span className="gradient-text">CRM</span>
            </div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              by UniqueWeb
            </div>
          </div>
        </Link>
        <ThemeToggle />
      </header>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-md flex-col justify-center px-5 pb-10">
        <div className="glass-strong rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-glow)]">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-6">{children}</div>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>
      </main>
    </div>
  );
}
