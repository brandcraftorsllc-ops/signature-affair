import { IMG } from "@/lib/content";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

const PATHS = [
  {
    img: IMG.pathEvent,
    alt: "Candlelit ceremony aisle lined with ivory florals and white chairs",
    overlay: "linear-gradient(180deg, rgba(13,13,15,0.42) 0%, rgba(13,13,15,0.55) 55%, rgba(13,13,15,0.88) 100%)",
    eyebrow: "Planning an event?",
    script: "Let's create magic.",
    body: "Weddings, corporate events and milestone celebrations, designed and coordinated from vision to last dance.",
    cta: "Plan My Event",
  },
  {
    img: IMG.pathAcademy,
    alt: "Gold charger place setting styled with an ivory napkin and a single rose",
    overlay: "linear-gradient(180deg, rgba(13,17,32,0.5) 0%, rgba(13,13,15,0.55) 55%, rgba(13,13,15,0.88) 100%)",
    eyebrow: "Ready to become a planner?",
    script: "Turn passion into a business.",
    body: "Learn day-of coordination, event planning and design from a working designer.",
    cta: "Join the Academy",
  },
];

export function Paths() {
  return (
    <section id="paths" className="relative overflow-hidden bg-champagne px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-copper/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="label-caps text-copper-deep">Two ways to work with me</p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.5rem)] font-medium leading-[1.1] text-ink">
            How can I <span className="italic text-copper-deep">help you?</span>
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6 lg:flex-row">
          {PATHS.map((p, i) => (
            <Reveal
              key={p.cta}
              delay={i * 140}
              className="group relative flex-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hover:flex-[1.14]"
            >
              <div className="lit-card relative h-full overflow-hidden rounded-[28px] border border-copper/25 shadow-[0_40px_90px_-60px_rgba(28,26,26,0.7)]">
                <div className="absolute inset-0 h-full w-full scale-105 transition-transform duration-[1400ms] ease-out group-hover:scale-100">
                  <Photo src={p.img} alt={p.alt} sizes="(min-width: 1024px) 50vw, 100vw" />
                </div>
                <div className="absolute inset-0" style={{ background: p.overlay }} />
                <div className="lit-glow pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-copper/0 transition-all duration-700 group-hover:shadow-[inset_0_0_70px_rgba(232,179,138,0.28)] group-hover:ring-copper/70" />
                <div className="relative flex min-h-[420px] flex-col justify-end p-7 sm:min-h-[500px] sm:p-10">
                  <p className="label-caps text-copper-light">{p.eyebrow}</p>
                  <p className="mt-2 font-script text-[30px] text-ivory sm:text-[36px]">{p.script}</p>
                  <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ivory/75">{p.body}</p>
                  <a
                    href="#inquire"
                    className="btn-shine mt-7 inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-ivory/95 px-7 text-[11.5px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-copper hover:text-signature sm:w-auto"
                  >
                    <span className="relative z-10">{p.cta}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
