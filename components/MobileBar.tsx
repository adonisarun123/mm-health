"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

/**
 * Phone-only sticky action bar. Appears once the hero has scrolled away and hides while
 * any lead form is on screen, so it never covers the thing it points to.
 */
export function MobileBar() {
  const path = usePathname();
  const [past, setPast] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const on = () => setPast(window.scrollY > 560);
    on();
    window.addEventListener("scroll", on, { passive: true });
    const forms = document.querySelectorAll("form[data-lead-form]");
    const seen = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
      setFormVisible(seen.size > 0);
    });
    forms.forEach((f) => io.observe(f));
    return () => { window.removeEventListener("scroll", on); io.disconnect(); };
  }, [path]);

  const show = past && !formVisible;
  const audit = path === "/" ? "#audit" : "/get-started";

  return (
    <>
      <div aria-hidden="true" className="h-20 lg:hidden" />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
        aria-hidden={!show}
      >
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href={SITE.whatsapp}
            tabIndex={show ? 0 : -1}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-paper/80 bg-white font-semibold text-paper"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-[#1f9d55]"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z" /></svg>
            WhatsApp us
          </a>
          <Link href={audit} tabIndex={show ? 0 : -1} className="btn-primary min-h-12 flex-1 px-4">
            Free audit
          </Link>
        </div>
      </div>
    </>
  );
}
