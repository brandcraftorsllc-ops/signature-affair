import { CLASSES } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const CHIPS = ["In-person hands-on", "Virtual", "One-on-one mentorship"];

export function Academy() {
  return (
    <section id="academy" className="relative overflow-hidden bg-signature px-5 py-24 sm:px-8 lg:py-32">
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(29,63,143,0.55), rgba(29,63,143,0) 70%)" }}
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(232,179,138,0.22), rgba(232,179,138,0) 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="label-caps text-copper">The Signature Affair Academy</p>
          <p className="mt-5 font-script text-[30px] text-copper-light sm:text-[36px]">learn from a designer</p>
          <h2 className="mt-2 font-display text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium leading-[1.1] text-ivory">
            Turn your passion <span className="text-copper-grad italic">into your profession.</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ivory/70">
            Hands-on classes for aspiring day-of coordinators, event planners and designers, taught by Dee. In-person in
            Georgia, live online, or one-on-one.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {CHIPS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-copper/30 px-4 py-2 text-[10.5px] uppercase tracking-[0.18em] text-copper-light"
              >
                {c}
              </span>
            ))}
          </div>
          <span className="mt-8 block h-px w-28 bg-gradient-to-r from-copper/80 via-royal/80 to-transparent" />
        </Reveal>

        <div className="flex flex-col gap-4 lg:col-span-7">
          {CLASSES.map((c) => (
            <Reveal key={c.title} delay={c.delay} className={c.offset}>
              <div className="glass-dark group rounded-[28px] p-6 transition-colors duration-700 hover:border-copper/70 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-[1.35rem] leading-tight text-ivory sm:text-[1.5rem]">{c.title}</h3>
                    <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ivory/70">{c.body}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {["In-person", "Virtual"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-ivory/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ivory/80"
                        >
                          {t}
                        </span>
                      ))}
                      {c.note && <span className="text-[11.5px] tracking-wide text-copper">{c.note}</span>}
                    </div>
                  </div>
                  <a
                    href="#inquire"
                    className="btn-shine inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full border border-copper/60 px-6 text-[11px] uppercase tracking-[0.18em] text-copper-light transition-all duration-300 hover:border-copper hover:text-ivory"
                  >
                    <span className="relative z-10">Reserve My Seat</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={160}>
            <div className="glass-dark flex flex-col items-start gap-4 rounded-[28px] p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[15px] text-ivory/80">
                Prefer one-on-one? <span className="text-ivory">Ask about private mentorship.</span>
              </p>
              <a
                href="#inquire"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-copper px-6 text-[11px] uppercase tracking-[0.18em] text-signature"
              >
                Request Mentorship
              </a>
            </div>
          </Reveal>
          <p className="mt-2 text-[11.5px] leading-relaxed text-ivory/40">
            Results vary based on individual effort, market and experience.
          </p>
        </div>
      </div>
    </section>
  );
}
