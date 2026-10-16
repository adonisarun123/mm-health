"use client";
import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

export function LeadForm({ source = "website" }: { source?: string }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "We couldn't send that. Check the fields and try again.");
      setState("sent");
      // GA4 conversion: mark "generate_lead" as a key event in GA4 admin.
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "generate_lead", { form_source: source, practice_type: String(data.practiceType || "") });
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send that. Try again or email hello@monkmantra.com.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-gold/50 bg-gold/10 p-8" role="status">
        <p className="display text-2xl">Request received.</p>
        <p className="mt-3 text-muted">A strategist will look at your practice and reply within one working day with your audit or a time to talk.</p>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-line bg-white px-4 py-3 text-paper placeholder:text-muted/80 focus:border-gold focus:outline-none";

  // Three required fields up front; everything else is tucked behind an optional disclosure.
  return (
    <form onSubmit={submit} data-lead-form className="grid gap-4 sm:grid-cols-2" noValidate={false}>
      <label className="block">
        <span className="mb-1.5 block text-sm text-muted">Your name</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-muted">Phone or WhatsApp</span>
        <input name="phone" required type="tel" autoComplete="tel" inputMode="tel" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm text-muted">Practice name or website</span>
        <input name="practice" required className={field} placeholder="e.g. Sunrise Children's Clinic, Jayanagar" />
      </label>
      <details className="group sm:col-span-2">
        <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm text-paper [&::-webkit-details-marker]:hidden">
          <span aria-hidden="true" className="grid size-6 place-items-center rounded-full border border-line transition-transform group-open:rotate-45">+</span>
          Add email, practice type or a note (optional)
        </summary>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm text-muted">Email</span>
            <input name="email" type="email" autoComplete="email" className={field} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm text-muted">You are</span>
            <select name="practiceType" className={field} defaultValue="clinic">
              <option value="doctor">An individual doctor</option>
              <option value="clinic">A clinic</option>
              <option value="hospital">A hospital or group</option>
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-sm text-muted">What would you like fixed first?</span>
            <textarea name="message" rows={3} className={field} />
          </label>
        </div>
      </details>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={state === "sending"} className="btn-primary px-7 py-3">
          {state === "sending" ? "Sending…" : "Get my free audit"}
        </button>
        <p className="text-sm text-muted">We use your details only to reply. See our <a href="/privacy-policy" className="inline-block py-3 underline underline-offset-2 hover:text-paper">privacy policy</a>.</p>
      </div>
      {state === "error" && <p className="text-sm text-leak sm:col-span-2" role="alert">{error}</p>}
    </form>
  );
}
