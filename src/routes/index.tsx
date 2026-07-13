import { createFileRoute } from "@tanstack/react-router";
import {
  DollarSign,
  Users,
  Target,
  TrendingUp,
  ArrowUpRight,
  MoreHorizontal,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";
import { PageHeader, StatCard, GlassCard, Badge, Avatar } from "@/components/crm-ui";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

const pipelineStages = [
  { name: "Lead", count: 42, value: "$128K", color: "from-purple-500/40 to-purple-500/5" },
  { name: "Qualified", count: 28, value: "$264K", color: "from-fuchsia-500/40 to-fuchsia-500/5" },
  { name: "Proposal", count: 14, value: "$412K", color: "from-pink-500/40 to-pink-500/5" },
  { name: "Negotiation", count: 8, value: "$298K", color: "from-rose-500/40 to-rose-500/5" },
  { name: "Won", count: 12, value: "$186K", color: "from-emerald-500/40 to-emerald-500/5" },
];

const recentDeals = [
  { name: "Acme Corp — Enterprise", owner: "Ava Chen", value: "$42,000", stage: "Proposal", tone: "info" as const },
  { name: "Northwind Rebrand", owner: "Liam Patel", value: "$18,500", stage: "Qualified", tone: "warning" as const },
  { name: "Globex API Integration", owner: "Sofia Reyes", value: "$67,200", stage: "Negotiation", tone: "brand" as const },
  { name: "Initech Onboarding", owner: "Noah Kim", value: "$9,800", stage: "Won", tone: "success" as const },
  { name: "Stark Industries Retainer", owner: "Ava Chen", value: "$120,000", stage: "Proposal", tone: "info" as const },
];

const activities = [
  { user: "Ava Chen", action: "closed", target: "Initech Onboarding", time: "12m ago", icon: Target },
  { user: "Liam Patel", action: "called", target: "Sarah at Acme Corp", time: "1h ago", icon: Phone },
  { user: "Sofia Reyes", action: "emailed", target: "Globex procurement", time: "3h ago", icon: Mail },
  { user: "Noah Kim", action: "scheduled demo with", target: "Umbrella Co.", time: "Yesterday", icon: Calendar },
];

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader
        title="Welcome back, Ava"
        subtitle="Here's what's happening across your pipeline today."
        actions={
          <button className="gradient-brand-bg glow-shadow-sm hidden items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02] sm:inline-flex">
            <ArrowUpRight className="h-4 w-4" />
            View report
          </button>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue (MTD)" value="$284,920" delta="+18.2%" icon={<DollarSign className="h-5 w-5" />} />
        <StatCard label="Active Deals" value="104" delta="+6.4%" icon={<Target className="h-5 w-5" />} />
        <StatCard label="New Contacts" value="1,284" delta="+12.7%" icon={<Users className="h-5 w-5" />} />
        <StatCard label="Win Rate" value="42%" delta="-1.2%" icon={<TrendingUp className="h-5 w-5" />} />
      </div>

      {/* Pipeline overview */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Pipeline overview</h2>
              <p className="text-xs text-muted-foreground">$1.28M in open opportunities</p>
            </div>
            <button className="glass rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
              This quarter
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {pipelineStages.map((s) => (
              <div
                key={s.name}
                className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b ${s.color} p-4`}
              >
                <p className="text-xs font-medium text-muted-foreground">{s.name}</p>
                <p className="mt-1 text-xl font-bold tracking-tight">{s.count}</p>
                <p className="mt-0.5 text-xs text-foreground/80">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Fake sparkline */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>Revenue trend</span>
              <span className="gradient-text font-semibold">+18.2%</span>
            </div>
            <svg viewBox="0 0 600 120" className="h-32 w-full">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.25 340)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="oklch(0.68 0.24 310)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="oklch(0.68 0.24 310)" />
                  <stop offset="100%" stopColor="oklch(0.72 0.25 340)" />
                </linearGradient>
              </defs>
              <path
                d="M0,90 C60,70 100,80 160,60 C220,40 260,70 320,50 C380,30 420,55 480,35 C540,20 580,30 600,20 L600,120 L0,120 Z"
                fill="url(#g1)"
              />
              <path
                d="M0,90 C60,70 100,80 160,60 C220,40 260,70 320,50 C380,30 420,55 480,35 C540,20 580,30 600,20"
                fill="none"
                stroke="url(#g2)"
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Activity</h2>
            <button className="text-xs text-muted-foreground hover:text-foreground">View all</button>
          </div>
          <ul className="space-y-4">
            {activities.map((a, i) => {
              const Icon = a.icon;
              return (
                <li key={i} className="flex items-start gap-3">
                  <div className="gradient-brand-bg mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{a.user}</span>{" "}
                      <span className="text-muted-foreground">{a.action}</span>{" "}
                      <span className="font-medium">{a.target}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{a.time}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </GlassCard>
      </div>

      {/* Recent deals */}
      <GlassCard className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Recent deals</h2>
            <p className="text-xs text-muted-foreground">Latest opportunities across your team</p>
          </div>
          <button className="glass rounded-lg px-3 py-1.5 text-xs font-medium">Filter</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="pb-3 font-medium">Deal</th>
                <th className="pb-3 font-medium">Owner</th>
                <th className="pb-3 font-medium">Value</th>
                <th className="pb-3 font-medium">Stage</th>
                <th className="pb-3" />
              </tr>
            </thead>
            <tbody>
              {recentDeals.map((d, i) => (
                <tr key={i} className="border-t border-white/5">
                  <td className="py-3 pr-4 font-medium">{d.name}</td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <Avatar name={d.owner} tone={i} />
                      <span className="text-muted-foreground">{d.owner}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 font-semibold">{d.value}</td>
                  <td className="py-3 pr-4">
                    <Badge tone={d.tone}>{d.stage}</Badge>
                  </td>
                  <td className="py-3 text-right">
                    <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/5 hover:text-foreground">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
