import { NextResponse } from "next/server";
import { z } from "zod";
import { esc, mailer } from "@/lib/mail";

const Lead = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(30),
  practice: z.string().trim().min(2).max(200),
  email: z.union([z.literal(""), z.email()]).optional(),
  practiceType: z.preprocess((v) => (v === "" ? undefined : v), z.enum(["ecommerce", "saas", "healthcare", "hospitality", "real-estate", "education", "financial", "professional-services", "manufacturing", "nonprofit", "other", "doctor", "clinic", "hospital"]).default("other")),
  message: z.string().trim().max(2000).optional(),
  source: z.string().max(60).optional(),
  company: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const parsed = Lead.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Add your name, phone number and business name." }, { status: 422 });
  const d = parsed.data;
  if (d.company) return NextResponse.json({ ok: true }); // bot

  const t = mailer();
  if (!t) {
    console.error("[leads] SMTP not configured; lead not emailed", { practice: d.practice, source: d.source });
    return NextResponse.json({ error: "Our form is down right now. Email hello@monkmantra.com or WhatsApp +91 98458 60005." }, { status: 503 });
  }

  const rows = Object.entries({ Name: d.name, Phone: d.phone, Email: d.email || "-", Business: d.practice, Sector: d.practiceType, Source: d.source || "-", Message: d.message || "-" })
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#666">${k}</td><td style="padding:6px 12px">${esc(String(v))}</td></tr>`).join("");

  try {
    await t.sendMail({
      from: process.env.SMTP_FROM || "Monk Mantra <noreply@monkmantra.com>",
      to: process.env.EMAIL_RECIPIENT || "hello@monkmantra.com",
      replyTo: d.email || undefined,
      subject: `New audit request: ${d.practice} (${d.practiceType})`,
      html: `<table>${rows}</table>`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[leads] send failed", e);
    return NextResponse.json({ error: "We couldn't send that. Email hello@monkmantra.com or WhatsApp +91 98458 60005." }, { status: 502 });
  }
}
