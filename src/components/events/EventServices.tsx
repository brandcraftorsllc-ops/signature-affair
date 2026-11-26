import { ArrowRight } from "lucide-react";
import { EVENT_SERVICES } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function EventServices() {
  return (
    <section className="relative overflow-hidden bg-signature px-5 py-24 sm:px-8 lg:py-32">
      <div
        className="saf-candle pointer-events-none absolute left-[6%] top-[20%] h-[200px] w-[200px] rounded-full blur-3xl"
        style={{ opacity: 0.45, background: "radial-gradient(circle, rgba(232,179,138,0.5), rgba(232,179,138,0) 70%)" }}
      />
      <div
        className="saf-candle pointer-events-none absolute right-[8%] top-[60%] h-[180px] w-[180px] rounded-full blur-3xl"
        style={{
          opacity: 0.38,
          animationDelay: "2.4s",
          background: "radial-gradient(circle, rgba(232,179,138,0.5), rgba(232,179,138,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            eyebrow="Event services"
            lead="Signature"
            accent="services."
            body="Luxury event planning and design serving Georgia & Surrounding Areas, from intimate showers to full corporate galas."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {EVENT_SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 110}>
              <article
                id={s.id}
                className={`glass-dark group flex h-full scroll-mt-36 flex-col rounded-[28px] p-7 transition-colors duration-700 hover:border-copper/70 sm:p-9 ${
                  i === 0 ? "border-copper/60" : ""
                }`}
              >
                {s.eyebrow && <p className="label-caps mb-3 text-copper-light">{s.eyebrow}</p>}
                <h3 className="font-display text-[clamp(1.45rem,2.2vw,1.9rem)] leading-tight text-ivory">{s.title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-ivory/70">{s.body}</p>

                <p className="label-caps mt-7 text-copper/80">What it covers</p>
                <ul className="mt-3 space-y-2.5">
                  {s.covers.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-[14.5px] text-ivory/80">
                      <span className="h-px w-4 shrink-0 bg-copper" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="flex-1" aria-hidden="true" />
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-copper/20 pt-6">
                  <p className="text-[12.5px] tracking-wide text-ivory/55">Inquire for pricing</p>
                  <a
                    href="#inquire"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-copper transition-all duration-500 hover:translate-x-1 hover:text-copper-light"
                  >
                    Inquire
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
