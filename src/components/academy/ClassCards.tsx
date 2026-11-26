import { CalendarClock, Check } from "lucide-react";
import { CLASSES } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { InquiryButton } from "@/components/ui/InquiryButton";

export function ClassCards() {
  return (
    <section id="classes" className="relative overflow-hidden bg-champagne px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-blush/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            tone="light"
            eyebrow="Classes"
            lead="Learn the craft"
            accent="by doing."
            body="Three classes taught by Dee, in person in Georgia or live online. Inquire for upcoming dates."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {CLASSES.map((c, i) => (
            <Reveal key={c.id} delay={i * 110}>
              <article
                id={c.id}
                className="group relative scroll-mt-36 overflow-hidden rounded-[28px] border border-copper/30 bg-signature p-7 shadow-[0_40px_90px_-60px_rgba(28,26,26,0.8)] transition-colors duration-700 hover:border-copper/70 sm:p-10"
              >
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(232,179,138,0.18), transparent 70%)" }}
                />
                <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-5">
                    <p className="label-caps text-copper">Class {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight text-ivory">{c.title}</h3>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-ivory/70">{c.body}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {["In-person", "Virtual"].map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-ivory/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ivory/80"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 inline-flex items-center gap-2 text-[13px] tracking-wide text-copper-light">
                      <CalendarClock className="h-4 w-4" aria-hidden="true" />
                      Inquire for upcoming dates
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <h4 className="label-caps text-copper/80">What you&apos;ll learn</h4>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {c.learn.map((l) => (
                        <li key={l} className="flex gap-3 text-[14.5px] leading-snug text-ivory/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                          {l}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-col gap-5 border-t border-copper/20 pt-6 sm:flex-row sm:items-end sm:justify-between">
                      <div className="max-w-sm">
                        <h4 className="label-caps text-copper/80">Who it&apos;s for</h4>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-ivory/70">{c.who}</p>
                      </div>
                      <InquiryButton
                        preset={{ tab: "academy", classChoice: c.option }}
                        variant="outline"
                        size="md"
                        className="shrink-0"
                      >
                        Reserve My Seat
                      </InquiryButton>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
