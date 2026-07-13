import { createFileRoute } from "@tanstack/react-router";
import { Plus, Filter, Search, MoreHorizontal, TrendingUp } from "lucide-react";
import { PageHeader, GlassCard, Badge, Avatar, StatCard } from "@/components/crm-ui";

export const Route = createFileRoute("/leads")({
  head: () => ({
    meta: [
      { title: "Leads — UniqueCRM" },
      { name: "description", content: "Capture, score, and convert prospects." },
    ],
  }),
  component: LeadsPage,
});

const leads = [
  { name: "Priya Nair", company: "Northwind", source: "Website", score: 92, status: "Hot", tone: "brand" as const },
  { name: "Michael Chen", company: "Globex", source: "Referral", score: 88, status: "Hot", tone: "brand" as const },
  { name: "James O'Brien", company: "Stark Industries", source: "LinkedIn", score: 76, status: "Warm", tone: "warning" as const },
  { name: "Aiko Tanaka", company: "Wayne Enterprises", source: "Event", score: 71, status: "Warm", tone: "warning" as const },
  { name: "Lucas Meyer", company: "Hooli", source: "Cold outbound", score: 54, status: "Cold", tone: "info" as const },
  { name: "Emma Wilson", company: "Umbrella Co.", source: "Website", score: 62, status: "Warm", tone: "warning" as const },
  { name: "Diego Alvarez", company: "Initech", source: "Referral", score: 44, status: "Cold", tone: "info" as const },
];

function LeadsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader
        title="Leads"
        subtitle="Capture, qualify, and route new prospects"
        actions={
          <button className="gradient-brand-bg glow-shadow-sm inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
            <Plus className="h-4 w-4" />
            New lead
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="New this week" value="142" delta="+24.6%" icon={<TrendingUp className="h-5 w-5" />} />
        <StatCard label="Avg. lead score" value="68" delta="+4.2%" />
        <StatCard label="Conversion rate" value="18.4%" delta="+2.1%" />
      </div>

      <GlassCard className="mt-6 !p-4">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search leads…"
              className="glass h-10 w-full rounded-lg border-0 pl-10 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-[color:var(--ring)]"
            />
          </div>
          <button className="glass inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium">
            <Filter className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-3 pb-3 font-medium">Lead</th>
                <th className="px-3 pb-3 font-medium">Company</th>
                <th className="px-3 pb-3 font-medium">Source</th>
                <th className="px-3 pb-3 font-medium">Score</th>
                <th className="px-3 pb-3 font-medium">Status</th>
                <th className="px-3 pb-3" />
              </tr>
            </thead>
            <tbody>
              {leads.map((l, i) => (
                <tr key={l.name} className="border-t border-white/5 transition hover:bg-white/[0.03]">
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={l.name} tone={i} />
                      <span className="font-medium">{l.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{l.company}</td>
                  <td className="px-3 py-3 text-muted-foreground">{l.source}</td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${l.score}%`,
                            background: "var(--gradient-brand)",
                            boxShadow: "0 0 10px oklch(0.72 0.25 340 / 0.5)",
                          }}
                        />
                      </div>
                      <span className="font-semibold">{l.score}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <Badge tone={l.tone}>{l.status}</Badge>
                  </td>
                  <td className="px-3 py-3 text-right">
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
