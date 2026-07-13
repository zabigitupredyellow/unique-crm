import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports — UniqueCRM" },
      { name: "description", content: "Analytics and reports for your CRM." },
    ],
  }),
  component: ReportsRedirect,
});

// Reports is the analytics view; provide a friendly redirect surface.
function ReportsRedirect() {
  if (typeof window !== "undefined") window.location.replace("/analytics");
  return (
    <div className="mx-auto max-w-md text-center">
      <p className="text-sm text-muted-foreground">
        Opening analytics… <Link to="/analytics" className="gradient-text font-semibold">click here</Link> if it doesn't load.
      </p>
    </div>
  );
}
