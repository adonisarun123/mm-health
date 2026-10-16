import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import type { ContentPageData } from "@/lib/page-schema";

export const metadata: Metadata = {
  title: "MedDeskOS: clinic EMR, queue and billing that marketing can measure",
  description:
    "MedDeskOS is the front desk and EMR under every Monk Mantra engagement: queue, notes, prescriptions, billing and analytics, with every booking carrying its source. DPDP-compliant, ABDM-ready.",
  alternates: { canonical: "/platform" },
};

const data: ContentPageData = {
  path: "/platform",
  crumbs: [
    { name: "Home", path: "/" },
    { name: "MedDeskOS", path: "/platform" },
  ],
  eyebrow: "The platform layer",
  h1: "One record from the Google search to the invoice",
  answer:
    "MedDeskOS is the cloud clinic system under every Monk Mantra engagement. It runs the queue, notes, prescriptions, billing and analytics for Indian outpatient practices, and every booking arrives with its source attached. That is how we report cost per patient who turned up, instead of clicks.",
  subhead:
    "Marketing tools see the search, the website visit and the enquiry. Only the clinic's own system sees whether the patient arrived, what was billed, and whether they came back. We run both halves on one system so the trail never goes cold.",
  heroBullets: [
    "Live queue shared by reception and consult room",
    "SOAP notes, ICD-10 and A5 prescriptions",
    "Billing on cash, UPI and card",
    "14 days from paper to live, training included",
  ],
  primaryCta: { label: "Get a free growth audit", href: "/get-started" },
  secondaryCta: { label: "Visit meddeskos.com", href: "https://meddeskos.com" },

  keyFacts: [
    { label: "What it is", value: "A cloud EMR and front-desk system built only for outpatient practices" },
    { label: "Built for", value: "Dental, dermatology, paediatrics, general OPD, physiotherapy and other outpatient specialties" },
    { label: "Modules", value: "Queue, encounters and vitals, prescriptions, billing, analytics, audit trail" },
    { label: "Go-live", value: "14 days from paper to production, with onboarding and staff training included" },
    { label: "Patient data", value: "Consent at registration, every record change logged, encrypted in transit and at rest, one-click export" },
    { label: "ABDM", value: "ABHA creation and verification built into registration; live use depends on NHA production credentials" },
    { label: "Starting from", value: "₹799 per doctor per month, billed annually" },
  ],

  pains: {
    title: "Why most clinics can't say which search became a visit",
    intro: "The problem isn't one missing tool. It is one patient's path split across five tools that never meet.",
    items: [
      { problem: "The Google listing, website and diary don't talk", fix: "The enquiry lands on the front-desk phone or in a WhatsApp chat, and its source is lost the moment someone writes the name in a notebook. In MedDeskOS the booking carries where the patient came from, so nobody has to ask." },
      { problem: "Patient files are scattered", fix: "Paper charts, WhatsApp screenshots and Excel registers make every revisit a search. One patient record holds notes, prescriptions, bills and consent." },
      { problem: "The 11 am queue runs on shouting", fix: "Real-time tokens and a call-next button, visible to reception and the consult room alike. Walk-ins slot in without breaking the order." },
      { problem: "Marketing never meets revenue", fix: "An agency reports clicks; the billing book reports rupees. Because both live in one system, we report patients who turned up and what each one cost to reach." },
    ],
  },

  offerings: {
    title: "What MedDeskOS runs inside the clinic",
    items: [
      { title: "Shared live queue", body: "Tokens, call-next and a waiting-room display on a spare TV. Reception and doctors see the same line." },
      { title: "Encounters and vitals", body: "SOAP notes with colour-coded vitals, BMI worked out for you, and ICD-10 search for the diagnosis." },
      { title: "Prescriptions with safety checks", body: "Type three letters to find a drug. Allergy and interaction warnings appear before you save, and overrides need a reason." },
      { title: "Billing", body: "GST-ready invoices from your own service catalogue, with partial payments across cash, UPI and card." },
      { title: "Insights", body: "Busiest hours, top diagnoses, revenue trend and no-show rate, without an Excel export." },
      { title: "Audit trail and consent", body: "Who changed which record and when, with consent captured at registration, as the DPDP Act expects." },
    ],
  },

  table: {
    caption: "Where Monk Mantra and MedDeskOS meet",
    columns: ["Stage", "Who runs it", "What you see"],
    rows: [
      ["Google listing and search", "Monk Mantra", "Rankings across your real catchment"],
      ["Website and booking", "Monk Mantra on MedDeskOS", "Bookings with their source attached"],
      ["Confirmations and reminders", "Monk Mantra WhatsApp automation", "Fewer no-shows and recovered missed calls"],
      ["Queue, consult and invoice", "MedDeskOS", "Who turned up and what was billed"],
      ["Monthly report", "Both, joined", "Cost per patient who turned up, by source"],
    ],
  },

  process: {
    title: "From paper to production in 14 days",
    intro: "A fixed sequence, so everyone knows what happens this week.",
    items: [
      { title: "Setup call", duration: "Day 1", body: "We provision the clinic, import your service catalogue and train one staff member live." },
      { title: "Pilot with one doctor", duration: "Days 2 to 7", body: "Real patients, real records and your existing data imported, with our team on a WhatsApp group with yours." },
      { title: "Full clinic rollout", duration: "Days 8 to 14", body: "Reception, nurses and every doctor onboarded. Paper retired." },
    ],
  },

  pricing: {
    title: "What it costs",
    intro: "The clinic system is priced per doctor. Getting found is priced per clinic. Prices as listed on meddeskos.com.",
    note: "Multi-clinic groups get a custom quote with unlimited doctors and branches, ABDM and FHIR integration, and a dedicated success manager. On Digital Presence, the ₹75,000 website build fee is waived on an 18-month commitment. Performance marketing is an optional add-on.",
    tiers: [
      { name: "Starter", price: "₹799", cadence: "per doctor / month, billed annually", summary: "₹999 if billed monthly.", features: ["1 doctor, 1 receptionist", "Unlimited patients", "100 prescriptions a month", "Email support"], bestFor: "Solo practices" },
      { name: "Clinic", price: "₹1,999", cadence: "per doctor / month, billed annually", summary: "₹2,499 if billed monthly.", features: ["Up to 5 doctors", "Unlimited patients and prescriptions", "Full analytics", "WhatsApp and email support"], bestFor: "Clinics with up to five doctors", featured: true },
      { name: "Digital Presence", price: "₹20,000", cadence: "per clinic / month", summary: "The half that brings patients in, run by Monk Mantra.", features: ["Website build, hosting and maintenance", "Monthly SEO and content", "Google Business Profile management", "Domain and data management"], bestFor: "Practices that want one team for both halves" },
    ],
  },

  faqs: [
    { question: "Do I have to use MedDeskOS to work with Monk Mantra?", answer: "No. If you already run an EMR or HMS, we connect to it where it allows, or report from your own records. MedDeskOS is simply the fastest way to see cost per patient who turned up, because the booking and the visit live in one system." },
    { question: "Can we import existing patient records?", answer: "Yes. CSV import is built in, and for paper records the team helps with bulk entry during the pilot at no extra charge." },
    { question: "What happens when the internet goes down?", answer: "MedDeskOS is a cloud system and needs a connection to work normally. A full offline mode is on the roadmap but has not shipped, so ask for its current status on the demo." },
    { question: "Is it ABDM-integrated?", answer: "It is ABDM-ready: ABHA creation and verification are built into registration, and prescriptions can carry the patient's ABHA QR. Live use depends on NHA production credentials." },
    { question: "Can we take our data if we leave?", answer: "Yes. Your patients' records belong to you and export is one click." },
  ],

  related: {
    title: "Where to go next",
    items: [
      { title: "WhatsApp automation", href: "/custom-tools/whatsapp-automation-for-clinics", body: "Confirmations, reminders, reschedules and missed-call recovery." },
      { title: "Appointment booking", href: "/custom-tools/patient-appointment-booking-system", body: "Booking built to your real slot rules." },
      { title: "Patient acquisition economics", href: "/healthcare-marketing/patient-acquisition", body: "How we calculate cost per patient who turned up." },
      { title: "Local SEO for clinics", href: "/healthcare-marketing/local-seo-for-clinics", body: "Getting found by the patients nearest to you." },
    ],
  },

  cta: { title: "See your clinic on one record.", body: "Start with the free audit. If MedDeskOS fits, we set up a sandbox with your own service catalogue before you commit to anything." },

  schema: { type: "SoftwareApplication", serviceName: "MedDeskOS", applicationCategory: "MedicalApplication", offersFrom: "799", offersCurrency: "INR", audienceType: "Outpatient clinics and doctors in India" },
};

export default function Page() {
  return <ContentPage data={data} />;
}
