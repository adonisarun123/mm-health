import Link from "next/link";
export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80svh] max-w-[1320px] flex-col justify-center px-4 pt-24 sm:px-6 lg:px-10">
      <h1 className="display text-5xl sm:text-7xl">This page moved or never existed.</h1>
      <p className="mt-6 max-w-lg text-lg text-muted">The page may have moved when we rebuilt the site. Everything we do is a click away below.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="rounded-full bg-paper px-6 py-3 font-semibold text-ink">Go to the homepage</Link>
        <Link href="/contact" className="rounded-full border border-line px-6 py-3">Contact us</Link>
      </div>
    </section>
  );
}
