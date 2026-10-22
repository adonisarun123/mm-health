"use client";
import { useEffect, useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;

/**
 * Short lead form for the doctor ads landing page. Posts to the shared /api/leads endpoint:
 * speciality, city and the ad's UTM parameters travel in the message field, so the API and
 * the email it sends stay unchanged.
 */
export function LpLeadForm({ source = "lp-doctors" }: { source?: string }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [utm, setUtm] = useState("");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const pairs = UTM_KEYS.filter((k) => q.get(k)).map((k) => `${k}=${q.get(k)}`);
    setUtm(pairs.join(" "));
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const speciality = (f.speciality || "").trim();
    const city = (f.city || "").trim();
    const website = (f.website || "").trim();
    const body = {
      name: f.name,
      phone: f.phone,
      practice: website || [speciality, city].filter(Boolean).join(", ") || f.name,
      practiceType: "doctor",
      message: [speciality && `Speciality: ${speciality}`, city && `City: ${city}`, website && `Website: ${website}`, utm && `Ad: ${utm}`].filter(Boolean).join("\n"),
      source,
      company: f.company,
    };
    try {
      const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "We couldn't send that. Check the fields and try again.");
      setState("sent");
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "generate_lead", { form_source: source, practice_type: "doctor" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn't send that. WhatsApp +91 98458 60005 instead.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-gold/50 bg-gold/10 p-8" role="status">
        <p className="display text-2xl">Request received.</p>
        <p className="mt-3 text-muted">We will look at your current website and search presence and reply on WhatsApp or email within one working day.</p>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-line bg-white px-4 py-3 text-paper placeholder:text-muted/80 focus:border-gold focus:outline-none";

  return (
    <form onSubmit={submit} data-lead-form className="grid gap-4 sm:grid-cols-2">
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm text-muted">Your name</span>
        <input name="name" required autoComplete="name" placeholder="Dr. Full Name" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm text-muted">Phone or WhatsApp</span>
        <input name="phone" required type="tel" autoComplete="tel" inputMode="tel" placeholder="+91" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-muted">Speciality</span>
        <input name="speciality" required placeholder="e.g. Orthopaedics" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-muted">City</span>
        <input name="city" required autoComplete="address-level2" placeholder="e.g. Bengaluru" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm text-muted">Current website <span className="text-muted/70">(optional)</span></span>
        <input name="website" type="text" inputMode="url" autoComplete="url" placeholder="https://" className={field} />
      </label>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="sm:col-span-2">
        <button type="submit" disabled={state === "sending"} className="btn-primary w-full px-7 py-3 text-base">
          {state === "sending" ? "Sending…" : "Request my free review"}
        </button>
        <p className="mt-3 text-center text-xs text-muted">
          We use your details only to reply. <a href="/privacy-policy" className="underline underline-offset-2 hover:text-paper">Privacy policy</a>.
        </p>
      </div>
      {state === "error" && <p className="text-sm text-leak sm:col-span-2" role="alert">{error}</p>}
    </form>
  );
}
