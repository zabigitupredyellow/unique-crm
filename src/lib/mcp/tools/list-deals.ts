import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const DEMO_DEALS = [
  { id: "D-501", title: "Northwind – Platform Rollout", stage: "Negotiation", value: 84000, priority: "High", closeDate: "2026-08-04" },
  { id: "D-502", title: "Helios – Pilot Expansion", stage: "Proposal Sent", value: 22000, priority: "Medium", closeDate: "2026-07-28" },
  { id: "D-503", title: "Lumen – Annual Renewal", stage: "Meeting Scheduled", value: 36000, priority: "High", closeDate: "2026-08-12" },
  { id: "D-504", title: "Orbit – Data Migration", stage: "Qualified", value: 15400, priority: "Low", closeDate: "2026-09-01" },
  { id: "D-505", title: "Fjord – Analytics Add-on", stage: "Won", value: 41000, priority: "Medium", closeDate: "2026-07-10" },
];

export default defineTool({
  name: "list_deals",
  title: "List deals",
  description: "Return demo sales pipeline deals from UniqueCRM. Optionally filter by stage.",
  inputSchema: {
    stage: z
      .enum(["New Lead", "Qualified", "Meeting Scheduled", "Proposal Sent", "Negotiation", "Won", "Lost"])
      .optional()
      .describe("Optional pipeline stage filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ stage }) => {
    const rows = stage ? DEMO_DEALS.filter((d) => d.stage === stage) : DEMO_DEALS;
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { deals: rows, count: rows.length },
    };
  },
});
