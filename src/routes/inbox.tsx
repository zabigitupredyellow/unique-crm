import { createFileRoute } from "@tanstack/react-router";
import { Star, Paperclip, Search } from "lucide-react";
import { PageHeader, GlassCard, Avatar } from "@/components/crm-ui";

export const Route = createFileRoute("/inbox")({
  head: () => ({
    meta: [
      { title: "Inbox — UniqueCRM" },
      { name: "description", content: "Unified inbox for every conversation." },
    ],
  }),
  component: InboxPage,
});

const threads = [
  { from: "Sarah Johnson", subject: "Re: Enterprise pricing proposal", preview: "Thanks for sending that over — we reviewed internally and…", time: "12m", unread: true, starred: true },
  { from: "Michael Chen", subject: "API integration timeline", preview: "Could we push the first milestone to next Friday? We're…", time: "1h", unread: true, starred: false },
  { from: "Priya Nair", subject: "Founders' round intro", preview: "Introducing you to our lead investor as promised —", time: "3h", unread: false, starred: true },
  { from: "Diego Alvarez", subject: "Onboarding checklist ✅", preview: "All items complete on our side. Ready when you are.", time: "Yesterday", unread: false, starred: false },
  { from: "Emma Wilson", subject: "Demo recording", preview: "Loved the walkthrough — sharing internally with the team.", time: "Yesterday", unread: false, starred: false },
];

function InboxPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title="Inbox" subtitle="Unified email, chat, and calls" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,380px)_1fr]">
        <GlassCard className="!p-3">
          <div className="relative mb-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search inbox"
              className="h-9 w-full rounded-lg border-0 bg-white/5 pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-[color:var(--ring)]"
            />
          </div>
          <ul className="flex flex-col gap-1">
            {threads.map((t, i) => (
              <li key={t.subject}>
                <button
                  className={`w-full rounded-xl p-3 text-left transition ${
                    i === 0 ? "gradient-brand-bg glow-shadow-sm text-white" : "hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Avatar name={t.from} tone={i} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className={`truncate text-sm ${t.unread ? "font-semibold" : "font-medium"}`}>
                          {t.from}
                        </p>
                        <span className={`shrink-0 text-[11px] ${i === 0 ? "text-white/80" : "text-muted-foreground"}`}>
                          {t.time}
                        </span>
                      </div>
                      <p className={`mt-0.5 truncate text-xs ${i === 0 ? "text-white/90" : "text-foreground/90"}`}>
                        {t.subject}
                      </p>
                      <p className={`mt-0.5 truncate text-xs ${i === 0 ? "text-white/70" : "text-muted-foreground"}`}>
                        {t.preview}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard>
          <div className="flex items-start justify-between gap-3 border-b border-white/5 pb-4">
            <div className="min-w-0">
              <h2 className="truncate text-lg font-semibold">Re: Enterprise pricing proposal</h2>
              <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                <Avatar name="Sarah Johnson" />
                <span>Sarah Johnson &lt;sarah@acmecorp.com&gt;</span>
              </div>
            </div>
            <button className="glass grid h-9 w-9 place-items-center rounded-lg text-[color:var(--brand-pink)]">
              <Star className="h-4 w-4 fill-current" />
            </button>
          </div>

          <div className="prose prose-invert mt-5 max-w-none text-sm leading-relaxed text-foreground/90">
            <p>Hi Ava,</p>
            <p>
              Thanks for sending that over — we reviewed internally and the enterprise tier looks like the
              right fit for what we're planning in Q4. A few questions from our procurement team:
            </p>
            <ul className="list-disc pl-6">
              <li>Can the SSO onboarding kick off before contract signature?</li>
              <li>What's the SLA for the dedicated support channel?</li>
              <li>Are there any volume discounts beyond 500 seats?</li>
            </ul>
            <p>Happy to hop on a call this week — Thursday or Friday afternoon works best on our side.</p>
            <p>Best,<br />Sarah</p>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <textarea
              placeholder="Reply to Sarah…"
              rows={3}
              className="w-full resize-none border-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <div className="mt-2 flex items-center justify-between">
              <button className="text-muted-foreground hover:text-foreground">
                <Paperclip className="h-4 w-4" />
              </button>
              <button className="gradient-brand-bg glow-shadow-sm rounded-lg px-4 py-1.5 text-sm font-medium text-white">
                Send reply
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
