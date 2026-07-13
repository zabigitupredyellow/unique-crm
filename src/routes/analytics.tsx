import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, TrendingDown, Users, DollarSign, Target, Zap } from "lucide-react";
import { PageHeader, GlassCard, StatCard } from "@/components/crm-ui";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — UniqueCRM" },
      { name: "description", content: "Revenue, pipeline velocity, and team performance." },
    ],
  }),
  component: AnalyticsPage,
});

const sources = [
  { name: "Inbound organic", pct: 38, tone: "from-purple-500 to-fuchsia-500" },
  { name: "Outbound campaigns", pct: 26, tone: "from-fuchsia-500 to-pink-500" },
  { name: "Referrals", pct: 18, tone: "from-pink-500 to-rose-500" },
  { name: "Paid ads", pct: 12, tone: "from-violet-500 to-purple-500" },
  { name: "Events", pct: 6, tone: "from-indigo-500 to-violet-500" },
];

const reps = [
  { name: "Ava Chen", won: "$412K", quota: 92 },
  { name: "Sofia Reyes", won: "$318K", quota: 78 },
  { name: "Noah Kim", won: "$246K", quota: 64 },
  { name: "Liam Patel", won: "$188K", quota: 51 },
];

function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader
        title="Analytics"
        subtitle="Performance across pipeline, team, and revenue"
        actions={
          <button className="glass inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium">
            Export CSV
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Revenue" value="$1.28M" delta="+22.4%" icon={<DollarSign className="h-5 w-5" />} />
        <StatCard label="Win rate" value="42%" delta="+3.1%" icon={<Target className="h-5 w-5" />} />
        <StatCard label="Avg deal size" value="$18.2K" delta="+8.6%" icon={<TrendingUp className="h-5 w-5" />} />
        <StatCard label="Cycle length" value="34d" delta="-5.4%" icon={<Zap className="h-5 w-5" />} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Revenue by month</h2>
            <span className="gradient-text text-sm font-semibold">+22.4% YoY</span>
          </div>
          <div className="flex h-64 items-end gap-2">
            {[42, 58, 46, 72, 64, 88, 76, 98, 84, 108, 96, 122].map((h, i) => (
              <div key={i} className="group relative flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg transition-all group-hover:opacity-90"
                  style={{
                    height: `${h}%`,
                    background: "linear-gradient(180deg, oklch(0.72 0.25 340) 0%, oklch(0.68 0.24 310) 100%)",
                    boxShadow: "0 0 20px oklch(0.68 0.24 310 / 0.4)",
                  }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="mb-4 text-lg font-semibold">Lead sources</h2>
          <ul className="space-y-3">
            {sources.map((s) => (
              <li key={s.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-muted-foreground">{s.name}</span>
                  <span className="font-semibold">{s.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${s.tone}`}
                    style={{ width: `${s.pct * 2.5}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Team performance</h2>
            <span className="text-xs text-muted-foreground">Q3 · vs quota</span>
          </div>
          <div className="space-y-4">
            {reps.map((r) => (
              <div key={r.name} className="grid grid-cols-[minmax(0,180px)_1fr_auto] items-center gap-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">Closed won</p>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${r.quota}%`,
                      background: "linear-gradient(90deg, oklch(0.68 0.24 310), oklch(0.72 0.25 340))",
                      boxShadow: "0 0 12px oklch(0.72 0.25 340 / 0.5)",
                    }}
                  />
                </div>
                <div className="flex items-center gap-3 text-right">
                  <span className="text-sm font-semibold">{r.won}</span>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium ${
                      r.quota >= 75 ? "text-emerald-400" : r.quota >= 60 ? "text-amber-400" : "text-rose-400"
                    }`}
                  >
                    {r.quota >= 60 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {r.quota}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
