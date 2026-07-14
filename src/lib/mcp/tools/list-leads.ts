import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const DEMO_LEADS = [
  { id: "L-1024", name: "Ava Reynolds", company: "Northwind Labs", status: "Qualified", value: 24000, owner: "Marcus Chen" },
  { id: "L-1025", name: "Diego Alvarez", company: "Helios Systems", status: "New", value: 8500, owner: "Priya Natarajan" },
  { id: "L-1026", name: "Sofia Petrov", company: "Lumen & Co", status: "Contacted", value: 15200, owner: "Marcus Chen" },
  { id: "L-1027", name: "Ken Watanabe", company: "Orbit Freight", status: "Proposal", value: 62000, owner: "Ava Reynolds" },
  { id: "L-1028", name: "Nora Alami", company: "Fjord Analytics", status: "Won", value: 41000, owner: "Priya Natarajan" },
  { id: "L-1029", name: "Isaac Bloom", company: "Kestrel Retail", status: "Lost", value: 9800, owner: "Diego Alvarez" },
];

export default defineTool({
  name: "list_leads",
  title: "List leads",
  description: "Return demo CRM leads from UniqueCRM. Optionally filter by status.",
  inputSchema: {
    status: z
      .enum(["New", "Contacted", "Qualified", "Proposal", "Won", "Lost"])
      .optional()
      .describe("Optional status filter."),
    limit: z.number().int().min(1).max(50).optional().describe("Max leads to return (default 20)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ status, limit }) => {
    const filtered = status ? DEMO_LEADS.filter((l) => l.status === status) : DEMO_LEADS;
    const rows = filtered.slice(0, limit ?? 20);
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { leads: rows, count: rows.length },
    };
  },
});
