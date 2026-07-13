import { createFileRoute } from "@tanstack/react-router";
import { Plus, Circle, CheckCircle2, Flag } from "lucide-react";
import { PageHeader, GlassCard, Badge, Avatar } from "@/components/crm-ui";

export const Route = createFileRoute("/tasks")({
  head: () => ({
    meta: [
      { title: "Tasks — UniqueCRM" },
      { name: "description", content: "Every next step, in one focused list." },
    ],
  }),
  component: TasksPage,
});

const tasks = [
  { title: "Follow up with Sarah at Acme Corp", due: "Today, 3:00 PM", owner: "Ava Chen", priority: "High", tone: "warning" as const, done: false },
  { title: "Prepare proposal for Stark Industries", due: "Tomorrow", owner: "Ava Chen", priority: "High", tone: "warning" as const, done: false },
  { title: "Send onboarding docs to Initech", due: "Aug 14", owner: "Noah Kim", priority: "Medium", tone: "info" as const, done: false },
  { title: "Demo call with Umbrella Co.", due: "Aug 16", owner: "Liam Patel", priority: "Medium", tone: "info" as const, done: false },
  { title: "Renewal check-in — Soylent", due: "Aug 18", owner: "Sofia Reyes", priority: "Low", tone: "default" as const, done: false },
  { title: "Update contact list for Q3", due: "Aug 8", owner: "Noah Kim", priority: "Low", tone: "default" as const, done: true },
  { title: "Send NDA to Globex legal", due: "Aug 6", owner: "Sofia Reyes", priority: "Medium", tone: "info" as const, done: true },
];

function TasksPage() {
  const open = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Tasks"
        subtitle={`${open.length} open · ${done.length} completed this week`}
        actions={
          <button className="gradient-brand-bg glow-shadow-sm inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
            <Plus className="h-4 w-4" />
            New task
          </button>
        }
      />

      <GlassCard>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Open
        </h2>
        <ul className="divide-y divide-white/5">
          {open.map((t, i) => (
            <li key={t.title} className="group flex items-center gap-3 py-3">
              <button className="text-muted-foreground transition hover:text-[color:var(--brand-pink)]">
                <Circle className="h-5 w-5" />
              </button>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{t.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.due}</p>
              </div>
              <Badge tone={t.tone}>
                <Flag className="mr-1 h-3 w-3" />
                {t.priority}
              </Badge>
              <Avatar name={t.owner} tone={i} />
            </li>
          ))}
        </ul>
      </GlassCard>

      <GlassCard className="mt-6 opacity-70">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Completed
        </h2>
        <ul className="divide-y divide-white/5">
          {done.map((t, i) => (
            <li key={t.title} className="flex items-center gap-3 py-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium line-through">{t.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.due}</p>
              </div>
              <Avatar name={t.owner} tone={i + 3} />
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
}
