"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { roleOptions } from "@/lib/data";

export default function DemoForm() {
  const [form, setForm] = useState({
    name: "",
    institution: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.institution.trim())
      e.institution = "Tell us your institution's name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.phone.trim()) e.phone = "Please add a contact number.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        throw new Error(data.error || "Failed to send");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setSubmitError(`Error: ${msg}`);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-10 text-center shadow-card">
        <CheckCircle2 size={44} className="text-brand" />
        <h3 className="mt-4 text-xl font-bold text-ink">Thank you!</h3>
        <p className="mt-2 text-ink-mute">
          We&apos;ve received your request and will reach out within one business
          day to arrange your free demo.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-brand";

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            className={field}
            placeholder="Your name *"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name && <p className="mt-1 text-xs text-brand">{errors.name}</p>}
        </div>
        <div>
          <input
            className={field}
            placeholder="Institution name *"
            value={form.institution}
            onChange={(e) => update("institution", e.target.value)}
          />
          {errors.institution && (
            <p className="mt-1 text-xs text-brand">{errors.institution}</p>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <select
          className={field}
          value={form.role}
          onChange={(e) => update("role", e.target.value)}
        >
          <option value="">Your role</option>
          {roleOptions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <div>
          <input
            className={field}
            placeholder="Phone / WhatsApp *"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-brand">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <input
          className={field}
          placeholder="Email address *"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-brand">{errors.email}</p>
        )}
      </div>

      <div className="mt-4">
        <textarea
          className={`${field} min-h-[120px] resize-y`}
          placeholder="Anything you'd like us to know? (optional)"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-bold text-white shadow-soft transition-all hover:bg-brand-dark hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Request My Free Demo"} <Send size={16} />
      </button>
      {submitError && <p className="mt-3 text-sm text-brand">{submitError}</p>}
    </form>
  );
}
