import { createFileRoute } from "@tanstack/react-router";
import { Search, Filter, Plus, Mail, Phone } from "lucide-react";
import { PageHeader, GlassCard, Badge, Avatar } from "@/components/crm-ui";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Contacts — UniqueCRM" },
      { name: "description", content: "Manage every relationship in one place." },
    ],
  }),
  component: ContactsPage,
});

const contacts = [
  { name: "Sarah Johnson", email: "sarah@acmecorp.com", phone: "+1 (555) 010-2842", company: "Acme Corp", title: "VP of Sales", status: "Customer", tone: "success" as const },
  { name: "Michael Chen", email: "m.chen@globex.io", phone: "+1 (555) 019-4432", company: "Globex", title: "CTO", status: "Prospect", tone: "info" as const },
  { name: "Priya Nair", email: "priya@northwind.co", phone: "+1 (555) 872-1109", company: "Northwind", title: "Founder", status: "Lead", tone: "warning" as const },
  { name: "Diego Alvarez", email: "diego@initech.dev", phone: "+1 (555) 662-4477", company: "Initech", title: "Head of Product", status: "Customer", tone: "success" as const },
  { name: "Emma Wilson", email: "emma@umbrella.co", phone: "+1 (555) 331-8890", company: "Umbrella Co.", title: "Marketing Lead", status: "Prospect", tone: "info" as const },
  { name: "James O'Brien", email: "james@stark.io", phone: "+1 (555) 442-9921", company: "Stark Industries", title: "Director of Ops", status: "Lead", tone: "warning" as const },
  { name: "Aiko Tanaka", email: "aiko@wayneenterprises.jp", phone: "+81 3-5555-2211", company: "Wayne Enterprises", title: "Regional Manager", status: "Customer", tone: "success" as const },
  { name: "Lucas Meyer", email: "l.meyer@hooli.com", phone: "+1 (555) 128-3390", company: "Hooli", title: "Growth Lead", status: "Prospect", tone: "info" as const },
];

function ContactsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader
        title="Contacts"
        subtitle="1,284 people across 218 companies"
        actions={
          <button className="gradient-brand-bg glow-shadow-sm inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]">
            <Plus className="h-4 w-4" />
            Add contact
          </button>
        }
      />

      <GlassCard className="!p-4">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search by name, email, company…"
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
                <th className="px-3 pb-3 font-medium">Name</th>
                <th className="px-3 pb-3 font-medium">Company</th>
                <th className="px-3 pb-3 font-medium">Title</th>
                <th className="px-3 pb-3 font-medium">Status</th>
                <th className="px-3 pb-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, i) => (
                <tr key={c.email} className="border-t border-white/5 transition hover:bg-white/[0.03]">
                  <td className="px-3 py-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <Avatar name={c.name} tone={i} />
                      <div className="min-w-0">
                        <p className="truncate font-medium">{c.name}</p>
                        <p className="truncate text-xs text-muted-foreground">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{c.company}</td>
                  <td className="px-3 py-3 text-muted-foreground">{c.title}</td>
                  <td className="px-3 py-3">
                    <Badge tone={c.tone}>{c.status}</Badge>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex justify-end gap-1">
                      <button className="glass grid h-8 w-8 place-items-center rounded-lg text-muted-foreground hover:text-foreground">
                        <Mail className="h-3.5 w-3.5" />
                      </button>
                      <button className="glass grid h-8 w-8 place-items-center rounded-lg text-muted-foreground hover:text-foreground">
                        <Phone className="h-3.5 w-3.5" />
                      </button>
                    </div>
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
