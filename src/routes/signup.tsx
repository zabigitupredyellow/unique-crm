import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, User, Building2 } from "lucide-react";
import { AuthLayout } from "@/components/auth-layout";
import { Field, IconInput } from "./login";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create account — UniqueCRM" },
      { name: "description", content: "Create your UniqueCRM workspace in minutes." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      window.localStorage.setItem(
        "uniquecrm-session",
        JSON.stringify({ name, company, email, at: Date.now() }),
      );
    } catch {}
    setTimeout(() => navigate({ to: "/" }), 500);
  };

  return (
    <AuthLayout
      title="Create your workspace"
      subtitle="Start managing pipeline in under a minute."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-foreground hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Full name">
            <IconInput icon={<User className="h-4 w-4" />}>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Nowak"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </IconInput>
          </Field>
          <Field label="Company">
            <IconInput icon={<Building2 className="h-4 w-4" />}>
              <input
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme, Inc."
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </IconInput>
          </Field>
        </div>
        <Field label="Work email">
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
        <Field label="Password">
          <IconInput icon={<Lock className="h-4 w-4" />}>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </IconInput>
        </Field>

        <p className="text-[11px] text-muted-foreground">
          By continuing you agree to our Terms and acknowledge our Privacy Policy.
        </p>

        <button
          type="submit"
          disabled={submitting}
          className="gradient-brand-bg glow-shadow-sm inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-70"
        >
          {submitting ? "Creating…" : "Create account"}
        </button>
      </form>
    </AuthLayout>
  );
}
