import { EVENT_STEPS } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function EventProcess() {
  return (
    <section className="relative overflow-hidden border-t border-copper/15 bg-signature px-5 py-24 sm:px-8 lg:py-28">
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro align="center" eyebrow="How it works" lead="From first hello" accent="to last dance." />
        </Reveal>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* connector: vertical on mobile, horizontal on desktop */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-7 top-6 w-px bg-gradient-to-b from-copper/70 via-copper/40 to-transparent lg:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-copper/30 via-copper/80 to-copper/30 lg:block"
          />
          {EVENT_STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal delay={i * 120} className="flex gap-6 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-copper/70 bg-signature font-display text-[1.15rem] text-copper-light shadow-[0_0_30px_-6px_rgba(232,179,138,0.55)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-2 lg:pt-6">
                  <h3 className="font-display text-[1.45rem] leading-tight text-ivory">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-ivory/65 lg:mx-auto">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
