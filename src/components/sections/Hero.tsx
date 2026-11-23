import { IMG } from "@/lib/content";
import { Photo } from "@/components/ui/Photo";

const DUST = [
  [12, 72, 3, 15, 0], [22, 58, 2, 19, 3], [34, 80, 4, 17, 6], [46, 64, 2, 21, 1.5],
  [55, 76, 3, 16, 4.5], [63, 52, 2, 20, 8], [71, 68, 4, 18, 2], [79, 58, 2, 22, 5.5],
  [86, 74, 3, 15, 7], [92, 62, 2, 19, 9], [18, 44, 2, 23, 6.5], [68, 40, 3, 18, 10],
];

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden bg-signature">
      <div className="absolute inset-0">
        <div className="saf-hero-img absolute inset-0 h-full w-full [animation-delay:150ms]">
          <Photo
            src={IMG.hero}
            alt="Candlelit ballroom framed by a gold mirrored arch, with a monogrammed dance floor and ivory florals"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-signature via-signature/75 to-signature/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-signature via-signature/20 to-signature/70" />
        <div
          className="saf-rise absolute inset-0 mix-blend-screen"
          style={{
            background: "radial-gradient(85% 65% at 55% 78%, rgba(232,179,138,0.30), transparent 72%)",
            animationDelay: "900ms",
          }}
        />
        <div
          className="saf-candle absolute left-[16%] top-[58%] h-56 w-56 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,196,140,0.34), transparent 70%)" }}
        />
      </div>

      <div className="saf-dust pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {DUST.map(([l, t, s, d, delay], i) => (
          <span
            key={i}
            style={{
              left: `${l}%`,
              top: `${t}%`,
              width: s,
              height: s,
              animationDuration: `${d}s`,
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-28 pt-32 sm:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="saf-rise font-script text-[26px] text-copper-light sm:text-[32px]" style={{ animationDelay: "700ms" }}>
            Every detail, a signature
          </p>
          <h1
            className="saf-rise mt-3 font-display text-[clamp(2.5rem,6.2vw,5rem)] font-medium leading-[1.04] tracking-[-0.01em] text-ivory"
            style={{ animationDelay: "900ms" }}
          >
            Unforgettable events.
            <span className="text-copper-grad block italic">Designed with intention.</span>
          </h1>
          <p
            className="saf-rise mt-6 max-w-xl text-[16.5px] leading-relaxed text-ivory/75 sm:text-[17.5px]"
            style={{ animationDelay: "1100ms" }}
          >
            Luxury event planning and design across Georgia, and classes for aspiring planners ready to turn their passion
            into a business.
          </p>
          <div className="saf-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "1300ms" }}>
            <a
              href="#inquire"
              className="btn-shine inline-flex min-h-[52px] items-center justify-center rounded-full bg-copper px-9 text-[12px] uppercase tracking-[0.2em] text-signature transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Plan My Event</span>
            </a>
            <a
              href="#academy"
              className="btn-shine inline-flex min-h-[52px] items-center justify-center rounded-full border border-copper/70 px-9 text-[12px] uppercase tracking-[0.2em] text-copper-light transition-all duration-300 hover:-translate-y-0.5 hover:border-copper hover:text-ivory"
            >
              <span className="relative z-10">Join the Academy</span>
            </a>
          </div>
          <div
            className="saf-rise mt-11 flex flex-wrap items-center gap-x-3 gap-y-2 text-copper"
            style={{ animationDelay: "1500ms" }}
          >
            <span className="label-caps">15+ Years</span>
            <span className="text-copper/40">·</span>
            <span className="label-caps">500+ Experiences Curated</span>
            <span className="text-copper/40">·</span>
            <span className="label-caps">Award-Winning Designer</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-signature to-transparent" />
    </section>
  );
}
