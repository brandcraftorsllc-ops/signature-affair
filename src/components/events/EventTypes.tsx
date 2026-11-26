import { EVENT_TYPES } from "@/lib/content";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ButtonLink } from "@/components/ui/buttons";

export function EventTypes() {
  return (
    <section className="relative overflow-hidden bg-champagne px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-copper/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            tone="light"
            eyebrow="What we design"
            lead="Every occasion,"
            accent="its own signature."
            body="Three kinds of events, each planned and designed around the people in the room."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {EVENT_TYPES.map((t, i) => (
            <Reveal key={t.id} delay={i * 120}>
              <article
                id={t.id}
                className="lit-card group relative flex h-full min-h-[540px] scroll-mt-36 flex-col justify-end overflow-hidden rounded-[28px] border border-copper/25 shadow-[0_40px_90px_-60px_rgba(28,26,26,0.7)]"
              >
                <div className="absolute inset-0 h-full w-full scale-105 transition-transform duration-[1400ms] ease-out group-hover:scale-100">
                  <Photo src={t.img} alt={t.alt} sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(13,13,15,0.25) 0%, rgba(13,13,15,0.6) 45%, rgba(13,13,15,0.94) 100%)",
                  }}
                />
                <div className="lit-glow pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-copper/0 transition-all duration-700 group-hover:shadow-[inset_0_0_70px_rgba(232,179,138,0.28)] group-hover:ring-copper/70" />
                <div className="relative flex flex-col p-7 sm:p-9">
                  <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-tight text-ivory">{t.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ivory/75">{t.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Included with ${t.title}`}>
                    {t.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-copper/40 bg-signature/40 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-ivory/85"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href="#inquire" variant="ivory" size="md" className="mt-7 w-full sm:w-auto sm:self-start">
                    Plan My Event
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
