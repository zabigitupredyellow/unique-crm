import { createFileRoute } from "@tanstack/react-router";
import { Building2, Globe, Users, Plus } from "lucide-react";
import { PageHeader, GlassCard, Badge } from "@/components/crm-ui";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Companies — UniqueCRM" },
      { name: "description", content: "All the organizations you work with." },
    ],
  }),
  component: CompaniesPage,
});

const companies = [
  { name: "Acme Corp", industry: "SaaS", website: "acmecorp.com", employees: 420, deals: 12, arr: "$1.2M", tier: "Enterprise", tone: "brand" as const },
  { name: "Globex", industry: "Fintech", website: "globex.io", employees: 180, deals: 8, arr: "$680K", tier: "Growth", tone: "info" as const },
  { name: "Northwind", industry: "E-commerce", website: "northwind.co", employees: 42, deals: 4, arr: "$120K", tier: "Startup", tone: "warning" as const },
  { name: "Initech", industry: "DevTools", website: "initech.dev", employees: 96, deals: 6, arr: "$310K", tier: "Growth", tone: "info" as const },
  { name: "Stark Industries", industry: "Hardware", website: "stark.io", employees: 2400, deals: 18, arr: "$4.8M", tier: "Enterprise", tone: "brand" as const },
  { name: "Umbrella Co.", industry: "Biotech", website: "umbrella.co", employees: 320, deals: 5, arr: "$540K", tier: "Growth", tone: "info" as const },
];

function CompaniesPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader
        title="Companies"
        subtitle="218 organizations across 14 industries"
        actions={
          <button className="gradient-brand-bg glow-shadow-sm inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
            <Plus className="h-4 w-4" />
            Add company
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {companies.map((c) => (
          <GlassCard key={c.name} className="transition-transform hover:-translate-y-0.5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="gradient-brand-bg grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">{c.name}</h3>
                  <p className="truncate text-xs text-muted-foreground">{c.industry}</p>
                </div>
              </div>
              <Badge tone={c.tone}>{c.tier}</Badge>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/5 pt-4 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Deals</p>
                <p className="mt-0.5 text-sm font-semibold">{c.deals}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Employees</p>
                <p className="mt-0.5 text-sm font-semibold">{c.employees}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">ARR</p>
                <p className="mt-0.5 gradient-text text-sm font-semibold">{c.arr}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Globe className="h-3 w-3" />
                {c.website}
              </span>
              <span className="inline-flex items-center gap-1">
                <Users className="h-3 w-3" />
                {c.employees}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
