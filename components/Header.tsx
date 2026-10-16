"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-10">
        <Link href="/" aria-label="Monk Mantra home" className="shrink-0 py-1.5" onClick={() => setOpen(false)}>
          {/* Intrinsic size matches the rendered size (~36px tall) so next/image serves a ~240px file, not the 1645px master. */}
          <Image src="/logo.png" alt="Monk Mantra" width={120} height={36} sizes="120px" priority className="h-8 w-auto lg:h-9" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-[15px] text-muted transition-colors hover:text-paper">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/get-started"
            className="btn-primary hidden px-5 text-sm sm:inline-flex"
          >
            Get a free audit
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line bg-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 bg-paper transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-0.5 w-4 bg-paper transition-transform ${open ? "top-1.5 -rotate-45" : "top-2.5"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink px-4 pb-10 pt-6 lg:hidden">
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="display block py-3 text-3xl">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-started" onClick={() => setOpen(false)} className="btn-primary px-6 py-3">
              Get a free audit
            </Link>
            <a href={SITE.whatsapp} className="inline-flex min-h-11 items-center justify-center rounded-full border border-paper px-6 py-3 font-semibold text-paper">
              WhatsApp {SITE.phone}
            </a>
            <a href={SITE.phoneHref} className="inline-flex min-h-11 items-center justify-center rounded-full border border-line px-6 py-3 text-paper">
              Call us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
