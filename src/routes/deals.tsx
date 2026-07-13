import { createFileRoute } from "@tanstack/react-router";
import { Plus, MoreHorizontal, Calendar, DollarSign } from "lucide-react";
import { PageHeader, Avatar } from "@/components/crm-ui";

export const Route = createFileRoute("/deals")({
  head: () => ({
    meta: [
      { title: "Deals — UniqueCRM" },
      { name: "description", content: "Track every opportunity through your pipeline." },
    ],
  }),
  component: DealsPage,
});

const stages = [
  {
    name: "Lead",
    total: "$128K",
    deals: [
      { title: "Wayne Enterprises Trial", value: "$8,400", owner: "Ava Chen", due: "Aug 12" },
      { title: "Hooli Growth Plan", value: "$14,000", owner: "Liam Patel", due: "Aug 14" },
      { title: "Vandelay Import", value: "$22,600", owner: "Sofia Reyes", due: "Aug 18" },
    ],
  },
  {
    name: "Qualified",
    total: "$264K",
    deals: [
      { title: "Northwind Rebrand", value: "$18,500", owner: "Liam Patel", due: "Aug 20" },
      { title: "Pied Piper Migration", value: "$42,000", owner: "Noah Kim", due: "Aug 22" },
    ],
  },
  {
    name: "Proposal",
    total: "$412K",
    deals: [
      { title: "Acme Corp Enterprise", value: "$42,000", owner: "Ava Chen", due: "Aug 24" },
      { title: "Stark Industries Retainer", value: "$120,000", owner: "Ava Chen", due: "Aug 28" },
      { title: "Umbrella Data Platform", value: "$56,000", owner: "Sofia Reyes", due: "Sep 1" },
    ],
  },
  {
    name: "Negotiation",
    total: "$298K",
    deals: [
      { title: "Globex API Integration", value: "$67,200", owner: "Sofia Reyes", due: "Aug 30" },
      { title: "Massive Dynamic Rollout", value: "$88,000", owner: "Noah Kim", due: "Sep 4" },
    ],
  },
  {
    name: "Closed Won",
    total: "$186K",
    deals: [
      { title: "Initech Onboarding", value: "$9,800", owner: "Noah Kim", due: "Aug 8" },
      { title: "Soylent Renewal", value: "$46,000", owner: "Ava Chen", due: "Aug 10" },
    ],
  },
];

function DealsPage() {
  return (
    <div className="mx-auto max-w-[1600px]">
      <PageHeader
        title="Deals"
        subtitle="$1.28M across 5 stages"
        actions={
          <button className="gradient-brand-bg glow-shadow-sm inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
            <Plus className="h-4 w-4" />
            New deal
          </button>
        }
      />

      <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
        {stages.map((stage, si) => (
          <div key={stage.name} className="glass flex w-72 shrink-0 flex-col rounded-2xl p-3">
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="gradient-brand-bg h-2 w-2 rounded-full" />
                <h3 className="text-sm font-semibold">{stage.name}</h3>
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {stage.deals.length}
                </span>
              </div>
              <span className="gradient-text text-xs font-semibold">{stage.total}</span>
            </div>

            <div className="flex flex-col gap-2">
              {stage.deals.map((d, di) => (
                <div
                  key={d.title}
                  className="group cursor-pointer rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-white/10 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium leading-snug">{d.title}</p>
                    <button className="rounded p-0.5 text-muted-foreground opacity-0 transition group-hover:opacity-100">
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-300">
                      <DollarSign className="h-3 w-3" />
                      {d.value.replace("$", "")}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {d.due}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Avatar name={d.owner} tone={si + di} />
                    <span className="text-xs text-muted-foreground">{d.owner}</span>
                  </div>
                </div>
              ))}
              <button className="mt-1 flex items-center justify-center gap-1 rounded-xl border border-dashed border-white/10 py-2 text-xs text-muted-foreground transition hover:border-white/20 hover:text-foreground">
                <Plus className="h-3 w-3" />
                Add deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
