import { createFileRoute } from "@tanstack/react-router";
import { Plus, Video, Phone, MapPin, Clock, CalendarDays } from "lucide-react";
import { PageHeader, GlassCard, Badge, Avatar } from "@/components/crm-ui";

export const Route = createFileRoute("/meetings")({
  head: () => ({
    meta: [
      { title: "Meetings — UniqueCRM" },
      { name: "description", content: "Every call, demo, and onsite in one place." },
    ],
  }),
  component: MeetingsPage,
});

const meetings = [
  { title: "Demo — Umbrella Co.", time: "Today, 2:00 PM", duration: "45m", type: "Video", icon: Video, with: "Emma Wilson", tone: "brand" as const },
  { title: "Discovery call — Hooli", time: "Today, 4:30 PM", duration: "30m", type: "Call", icon: Phone, with: "Lucas Meyer", tone: "info" as const },
  { title: "QBR — Acme Corp", time: "Tomorrow, 10:00 AM", duration: "60m", type: "Video", icon: Video, with: "Sarah Johnson", tone: "brand" as const },
  { title: "Renewal — Soylent", time: "Aug 16, 1:00 PM", duration: "30m", type: "Video", icon: Video, with: "Diego Alvarez", tone: "brand" as const },
  { title: "Onsite — Stark Industries", time: "Aug 18, 9:00 AM", duration: "3h", type: "Onsite", icon: MapPin, with: "James O'Brien", tone: "warning" as const },
  { title: "Kickoff — Globex API", time: "Aug 20, 11:00 AM", duration: "45m", type: "Video", icon: Video, with: "Michael Chen", tone: "brand" as const },
];

function MeetingsPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="Meetings"
        subtitle="Upcoming calls, demos, and onsites"
        actions={
          <button className="gradient-brand-bg glow-shadow-sm inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
            <Plus className="h-4 w-4" />
            Schedule
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
        <GlassCard>
          <ul className="space-y-3">
            {meetings.map((m, i) => {
              const Icon = m.icon;
              return (
                <li
                  key={m.title}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-white/10 hover:bg-white/[0.05]"
                >
                  <div className="gradient-brand-bg glow-shadow-sm grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{m.title}</p>
                    <p className="mt-0.5 flex items-center gap-2 truncate text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 shrink-0" />
                      {m.time} · {m.duration}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Avatar name={m.with} tone={i} />
                      <span className="text-xs text-muted-foreground">with {m.with}</span>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <Badge tone={m.tone}>{m.type}</Badge>
                    <button className="text-xs text-muted-foreground hover:text-foreground">Join</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </GlassCard>

        <GlassCard>
          <div className="mb-4 flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-[color:var(--brand-pink)]" />
            <h3 className="text-sm font-semibold">This week</h3>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-muted-foreground">
            {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-7 gap-1">
            {[3, 5, 2, 4, 1, 0, 0].map((n, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg border border-white/5 bg-white/[0.03] p-1"
              >
                <span className="text-[10px] text-muted-foreground">{11 + i}</span>
                {n > 0 && (
                  <div
                    className="absolute bottom-1 left-1 right-1 rounded-md text-center text-[9px] font-semibold text-white"
                    style={{
                      background: "var(--gradient-brand)",
                      padding: "1px 0",
                      boxShadow: "0 0 8px oklch(0.72 0.25 340 / 0.5)",
                    }}
                  >
                    {n}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            15 meetings scheduled this week across 4 team members.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
