/* Code-built mock-ups that stand in for product footage. Sample data only. */

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="ml-3 text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

export function FoundPanel() {
  const rows = [
    { name: "Your studio", meta: "4.8 · 1.2 km · Open till 8 pm", you: true },
    { name: "HomeCraft Interiors", meta: "4.3 · 0.4 km · Closes 7 pm", you: false },
    { name: "Urban Nest Designs", meta: "4.1 · 2.6 km · Open now", you: false },
  ];
  return (
    <Frame title="Google · modular kitchen designers near me">
      <div className="rounded-lg border border-line bg-ink px-4 py-3 text-sm text-paper">modular kitchen designers near me</div>
      <ol className="mt-4 space-y-2">
        {rows.map((r, i) => (
          <li
            key={r.name}
            className={`anim-rise flex items-center justify-between rounded-lg px-4 py-3 ${r.you ? "border border-gold/60 bg-gold/10" : "bg-ink-3/60"}`}
            style={{ animationDelay: `${150 + i * 140}ms` }}
          >
            <div>
              <p className={`font-semibold ${r.you ? "text-gold" : "text-paper"}`}>{r.name}</p>
              <p className="text-xs text-muted">{r.meta}</p>
            </div>
            <span className="text-xs text-muted">Call · Directions</span>
          </li>
        ))}
      </ol>
      <div className="anim-rise mt-4 rounded-lg border border-line p-4 text-sm" style={{ animationDelay: "700ms" }}>
        <p className="text-xs text-muted">AI answer</p>
        <p className="mt-1 text-paper">Compare carcass material and hardware warranty before price. <span className="text-gold underline decoration-dotted">Your studio</span> publishes what a kitchen actually costs.</p>
      </div>
    </Frame>
  );
}

export function ConvertPanel() {
  const msgs = [
    { me: false, t: "Hello Priya, your design consultation is set for Tue, 11:30 am. Reply 1 to confirm or 2 to pick another time." },
    { me: true, t: "2" },
    { me: false, t: "No problem. Open slots: Tue 4:00 pm · Wed 10:15 am · Wed 6:30 pm" },
    { me: true, t: "Wed 10:15" },
    { me: false, t: "Done. Your designer will bring layouts for your floor plan. We'll remind you the evening before." },
  ];
  return (
    <Frame title="WhatsApp automation, booking into your CRM">
      <div className="space-y-2.5">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
            <p
              className={`anim-rise max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${m.me ? "rounded-br-sm bg-gold text-ink" : "rounded-bl-sm bg-ink-3 text-paper"}`}
              style={{ animationDelay: `${150 + i * 380}ms` }}
            >
              {m.t}
            </p>
          </div>
        ))}
      </div>
      <div className="anim-rise mt-5 grid grid-cols-4 gap-1.5 text-center text-xs" style={{ animationDelay: "2100ms" }}>
        {["9:30", "10:15", "11:00", "11:45", "4:00", "4:45", "5:30", "6:30"].map((s) => (
          <span key={s} className={`rounded-md py-2 ${s === "10:15" ? "bg-gold text-ink font-semibold" : s === "11:00" || s === "5:30" ? "bg-ink-3 text-muted line-through" : "border border-line text-paper"}`}>
            {s}
          </span>
        ))}
      </div>
    </Frame>
  );
}

export function MeasurePanel() {
  const bars = [
    { k: "Google Business Profile", v: 0.92 },
    { k: "Organic search", v: 0.74 },
    { k: "Google Ads", v: 0.51 },
    { k: "Instagram", v: 0.38 },
  ];
  return (
    <Frame title="Monthly report · sample data">
      <div className="grid grid-cols-3 gap-3">
        {[
          ["Enquiries", "412"],
          ["Visits", "168"],
          ["Cost / visit", "₹740"],
        ].map(([k, v], i) => (
          <div key={k} className="anim-rise rounded-lg bg-ink-3/60 p-3" style={{ animationDelay: `${100 + i * 120}ms` }}>
            <p className="text-xs text-muted">{k}</p>
            <p className="display-condensed mt-1 text-3xl tabular-nums text-paper">{v}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">Showroom visits by source</p>
      <ul className="mt-3 space-y-3">
        {bars.map((b, i) => (
          <li key={b.k}>
            <div className="mb-1 flex justify-between text-xs"><span className="text-paper">{b.k}</span></div>
            <div className="h-2 rounded-full bg-ink-3">
              <div className="anim-grow brand-gradient h-2 rounded-full" style={{ width: `${b.v * 100}%`, animationDelay: `${400 + i * 120}ms` }} />
            </div>
          </li>
        ))}
      </ul>
      <p className="anim-rise mt-6 rounded-lg border border-line p-3 text-xs text-muted" style={{ animationDelay: "1100ms" }}>
        Reported in people who walked in and orders they signed, joined to your CRM. No impressions, no vanity percentages.
      </p>
    </Frame>
  );
}
