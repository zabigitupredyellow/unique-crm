import type { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:mb-8">
      <div className="min-w-0">
        <h1 className="truncate text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass rounded-2xl p-5 sm:p-6 ${className}`}>{children}</div>
  );
}

export function StatCard({
  label,
  value,
  delta,
  icon,
}: {
  label: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
}) {
  const positive = delta?.startsWith("+");
  return (
    <div className="glass group relative overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            {value}
          </p>
          {delta && (
            <p
              className={`mt-1 text-xs font-medium ${
                positive ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {delta} vs last month
            </p>
          )}
        </div>
        {icon && (
          <div className="gradient-brand-bg grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

export function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "success" | "warning" | "info" | "brand";
}) {
  const tones = {
    default: "bg-white/5 text-foreground border-white/10",
    success: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    info: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    brand:
      "text-white border-transparent [background:var(--gradient-brand)]",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Avatar({ name, tone = 0 }: { name: string; tone?: number }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  const bgs = [
    "linear-gradient(135deg, oklch(0.68 0.24 310), oklch(0.72 0.25 340))",
    "linear-gradient(135deg, oklch(0.65 0.22 280), oklch(0.72 0.25 340))",
    "linear-gradient(135deg, oklch(0.72 0.25 340), oklch(0.78 0.18 20))",
    "linear-gradient(135deg, oklch(0.60 0.20 260), oklch(0.68 0.24 310))",
    "linear-gradient(135deg, oklch(0.68 0.24 310), oklch(0.60 0.20 220))",
  ];
  return (
    <div
      className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold text-white"
      style={{ background: bgs[tone % bgs.length] }}
    >
      {initials}
    </div>
  );
}
