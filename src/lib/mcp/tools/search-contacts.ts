import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const DEMO_CONTACTS = [
  { name: "Ava Reynolds", company: "Northwind Labs", email: "ava@northwind.co", phone: "+1 415 555 0134", tags: ["VIP", "Enterprise"] },
  { name: "Diego Alvarez", company: "Helios Systems", email: "diego@helios.io", phone: "+1 415 555 0182", tags: ["SMB"] },
  { name: "Sofia Petrov", company: "Lumen & Co", email: "sofia@lumen.co", phone: "+44 20 7946 0345", tags: ["Renewal"] },
  { name: "Ken Watanabe", company: "Orbit Freight", email: "ken@orbit.jp", phone: "+81 3 5555 0198", tags: ["Enterprise"] },
  { name: "Nora Alami", company: "Fjord Analytics", email: "nora@fjord.no", phone: "+47 21 555 0173", tags: ["VIP"] },
];

export default defineTool({
  name: "search_contacts",
  title: "Search contacts",
  description: "Search UniqueCRM demo contacts by name, company, or email substring (case-insensitive).",
  inputSchema: {
    query: z.string().trim().min(1).describe("Substring to match against name, company, or email."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query.toLowerCase();
    const rows = DEMO_CONTACTS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q),
    );
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { contacts: rows, count: rows.length },
    };
  },
});
