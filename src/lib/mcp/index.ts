import { defineMcp } from "@lovable.dev/mcp-js";
import listLeads from "./tools/list-leads";
import listDeals from "./tools/list-deals";
import pipelineSummary from "./tools/pipeline-summary";
import searchContacts from "./tools/search-contacts";

export default defineMcp({
  name: "uniquecrm-mcp",
  title: "UniqueCRM MCP",
  version: "0.1.0",
  instructions:
    "Read-only tools for the UniqueCRM demo workspace. Use these to inspect demo leads, deals, contacts, and pipeline summary metrics. All data is illustrative demo data, not a live database.",
  tools: [listLeads, listDeals, pipelineSummary, searchContacts],
});
