import { TESTIMONIAL_ROWS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-champagne py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blush/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-caps text-copper-deep">Kind words</p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.5rem)] font-medium leading-[1.08] text-ink">
            What clients <span className="italic text-copper-deep">and students say.</span>
          </h2>
          <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-ink/40">
            Sample testimonials shown until real client and student reviews are provided.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-12 space-y-5">
        {TESTIMONIAL_ROWS.map((row, r) => (
          <div key={r} className="flex snap-x gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:justify-center lg:overflow-visible">
            {row.map((t, i) => (
              <Reveal key={t.quote} delay={i * 100}>
                <article
                  className={`glass-light flex w-[276px] shrink-0 snap-start flex-col justify-between rounded-[28px] p-7 sm:w-[330px] ${t.shift}`}
                >
                  <div>
                    <span className="inline-flex rounded-full bg-copper/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-copper-deep">
                      {t.tag}
                    </span>
                    <p className="mt-5 font-display text-[17px] leading-relaxed text-ink/90">
                      “{t.quote}”
                    </p>
                  </div>
                  <p className="mt-6 text-[10.5px] uppercase tracking-[0.16em] text-ink/35">{t.who}</p>
                </article>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
