import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "pipeline_summary",
  title: "Pipeline summary",
  description: "Return an overview of UniqueCRM's sales pipeline: deals per stage, total value, and win rate (demo data).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const summary = {
      totalDeals: 42,
      openValue: 318400,
      wonValue: 184200,
      lostValue: 22600,
      winRate: 0.62,
      byStage: [
        { stage: "New Lead", count: 12, value: 48000 },
        { stage: "Qualified", count: 9, value: 76000 },
        { stage: "Meeting Scheduled", count: 6, value: 62000 },
        { stage: "Proposal Sent", count: 5, value: 74400 },
        { stage: "Negotiation", count: 4, value: 58000 },
        { stage: "Won", count: 4, value: 184200 },
        { stage: "Lost", count: 2, value: 22600 },
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: summary,
    };
  },
});
