import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { AuthLayout } from "@/components/auth-layout";
import { Field, IconInput } from "./login";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset password — UniqueCRM" },
      { name: "description", content: "Reset your UniqueCRM password." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="We'll send a secure link to your inbox."
      footer={
        <>
          Remembered it?{" "}
          <Link to="/login" className="font-medium text-foreground hover:underline">
            Back to sign in
          </Link>
        </>
      }
    >
      {sent ? (
        <div className="space-y-4 text-center">
          <div className="gradient-brand-bg glow-shadow-sm mx-auto grid h-14 w-14 place-items-center rounded-2xl text-white">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <div>
            <p className="text-sm font-medium">Check your inbox</p>
            <p className="mt-1 text-xs text-muted-foreground">
              If an account exists for <span className="text-foreground">{email}</span>,
              a reset link is on the way.
            </p>
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4"
        >
          <Field label="Email">
            <IconInput icon={<Mail className="h-4 w-4" />}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </IconInput>
          </Field>
          <button
            type="submit"
            className="gradient-brand-bg glow-shadow-sm inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold text-white transition-transform hover:scale-[1.01]"
          >
            Send reset link
          </button>
        </form>
      )}
    </AuthLayout>
  );
}
