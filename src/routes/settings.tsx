import { createFileRoute } from "@tanstack/react-router";
import { User, Bell, Shield, CreditCard, Users, Palette, ChevronRight } from "lucide-react";
import { PageHeader, GlassCard, Avatar } from "@/components/crm-ui";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — UniqueCRM" },
      { name: "description", content: "Manage your workspace, team, and preferences." },
    ],
  }),
  component: SettingsPage,
});

const sections = [
  { icon: User, name: "Profile", desc: "Your personal information and avatar" },
  { icon: Bell, name: "Notifications", desc: "Email, in-app, and mobile alerts" },
  { icon: Users, name: "Team", desc: "Members, roles, and permissions" },
  { icon: Shield, name: "Security", desc: "Password, 2FA, and sessions" },
  { icon: CreditCard, name: "Billing", desc: "Plan, invoices, and payment methods" },
  { icon: Palette, name: "Appearance", desc: "Theme and accent colors" },
];

function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader title="Settings" subtitle="Manage your workspace and preferences" />

      <GlassCard className="mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="gradient-brand-bg glow-shadow grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-lg font-bold text-white">
            AN
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-lg font-semibold">Ava Nakamura</h2>
            <p className="truncate text-sm text-muted-foreground">ava@uniqueweb.io · Admin</p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              <span className="gradient-brand-bg h-2 w-2 rounded-full animate-pulse-glow" />
              UniqueWeb Workspace · Pro plan
            </div>
          </div>
          <button className="gradient-brand-bg rounded-lg px-4 py-2 text-sm font-medium text-white">
            Edit profile
          </button>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.name}
              className="glass group flex items-center gap-4 rounded-2xl p-5 text-left transition hover:-translate-y-0.5"
            >
              <div className="gradient-brand-bg grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{s.name}</p>
                <p className="truncate text-xs text-muted-foreground">{s.desc}</p>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
            </button>
          );
        })}
      </div>

      <GlassCard className="mt-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Team members
        </h3>
        <ul className="divide-y divide-white/5">
          {["Ava Nakamura", "Liam Patel", "Sofia Reyes", "Noah Kim"].map((n, i) => (
            <li key={n} className="flex items-center gap-3 py-3">
              <Avatar name={n} tone={i} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{n}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {i === 0 ? "Admin" : "Member"} · Active now
                </p>
              </div>
              <button className="text-xs text-muted-foreground hover:text-foreground">Manage</button>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
}
