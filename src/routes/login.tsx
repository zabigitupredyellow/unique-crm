import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "@/components/auth-layout";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — UniqueCRM" },
      { name: "description", content: "Sign in to your UniqueCRM workspace." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      window.localStorage.setItem(
        "uniquecrm-session",
        JSON.stringify({ email, remember, at: Date.now() }),
      );
    } catch {}
    setTimeout(() => navigate({ to: "/" }), 400);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your workspace."
      footer={
        <>
          New here?{" "}
          <Link to="/signup" className="font-medium text-foreground hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={submit} className="space-y-4">
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
        <Field
          label="Password"
          right={
            <Link to="/forgot-password" className="text-xs font-medium text-muted-foreground hover:text-foreground">
              Forgot?
            </Link>
          }
        >
          <IconInput icon={<Lock className="h-4 w-4" />}>
            <input
              type={show ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="text-muted-foreground hover:text-foreground"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </IconInput>
        </Field>

        <label className="flex items-center gap-2 text-xs text-muted-foreground">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-3.5 w-3.5 accent-[color:var(--brand-purple)]"
          />
          Keep me signed in
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="gradient-brand-bg glow-shadow-sm inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-70"
        >
          {submitting ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </AuthLayout>
  );
}

export function Field({
  label,
  right,
  children,
}: {
  label: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </label>
        {right}
      </div>
      {children}
    </div>
  );
}

export function IconInput({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="glass flex h-11 items-center gap-2.5 rounded-lg px-3.5 focus-within:ring-2 focus-within:ring-[color:var(--ring)]">
      <span className="text-muted-foreground">{icon}</span>
      {children}
    </div>
  );
}
