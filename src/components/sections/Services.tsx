import { ArrowRight, Plane } from "lucide-react";
import { CONTACT, IMG } from "@/lib/content";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

const CANDLES = [
  { left: "8%", top: "22%", size: 180, opacity: 0.5, delay: "0s" },
  { left: "26%", top: "68%", size: 120, opacity: 0.4, delay: "1.4s" },
  { left: "48%", top: "34%", size: 220, opacity: 0.32, delay: "2.8s" },
  { left: "68%", top: "74%", size: 150, opacity: 0.45, delay: "4.2s" },
  { left: "84%", top: "30%", size: 190, opacity: 0.38, delay: "5.6s" },
  { left: "93%", top: "62%", size: 110, opacity: 0.5, delay: "7s" },
];

const GLASS = [
  { title: "Full-Service Planning", body: "Every detail handled from start to finish.", meta: "Budget, vendors, timeline, design", delay: 120 },
  { title: "Day-of Coordination", body: "You enjoy the day. We run the timeline.", meta: "Rehearsal through send-off", delay: 220 },
];

const CATEGORIES = [
  { title: "Weddings", img: IMG.firstDance, alt: "Couple's first dance under soft reception lighting", delay: 0 },
  { title: "Corporate Events", img: IMG.corporateGala, alt: "Corporate gala with black and white linens and gold chairs", delay: 110 },
  { title: "Milestone Celebrations", img: IMG.milestone, alt: "Champagne and gold milestone birthday tablescape", delay: 220 },
];

function Inquire() {
  return (
    <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-copper opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
      Inquire
      <ArrowRight className="h-3.5 w-3.5" />
    </span>
  );
}

export function Services() {
  return (
    <section id="events" className="relative overflow-hidden bg-signature px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {CANDLES.map((c) => (
          <span
            key={c.left}
            className="saf-candle absolute rounded-full blur-3xl"
            style={{
              left: c.left,
              top: c.top,
              width: c.size,
              height: c.size,
              opacity: c.opacity,
              background: "radial-gradient(circle, rgba(232,179,138,0.5), rgba(232,179,138,0) 70%)",
              animationDelay: c.delay,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-caps text-copper">Event services</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.5rem)] font-medium leading-[1.08] text-ivory">
              Signature <span className="text-copper-grad italic">services.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[15.5px] leading-relaxed text-ivory/60">
              Luxury event planning and design serving {CONTACT.area}, from intimate showers to full corporate galas.
            </p>
            <p className="mt-4 inline-flex items-start gap-2 rounded-2xl border border-copper/30 bg-copper/10 px-4 py-2.5 text-[12.5px] leading-snug text-copper-light">
              <Plane className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {CONTACT.travel}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <a
              href="#inquire"
              className="lit-card group relative block h-full min-h-[420px] overflow-hidden rounded-[28px] border border-copper/30 lg:min-h-[560px]"
            >
              <div className="absolute inset-0 h-full w-full">
                <Photo src={IMG.flowerWall} alt="Lush blush rose flower wall behind a sweetheart table" sizes="(min-width: 1024px) 58vw, 100vw" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-signature via-signature/45 to-signature/10" />
              <div className="lit-glow pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-copper/0 group-hover:ring-copper/60" />
              <div className="relative flex h-full min-h-[420px] flex-col justify-end p-7 sm:p-10 lg:min-h-[560px]">
                <p className="label-caps text-copper-light">Signature offering</p>
                <h3 className="mt-3 font-display text-[clamp(1.6rem,2.6vw,2.3rem)] leading-tight text-ivory">
                  Luxury Event Design &amp; Décor
                </h3>
                <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-ivory/75">
                  Florals, tablescapes, draping and full room transformations, designed around the way you want your guests to
                  feel.
                </p>
                <Inquire />
              </div>
            </a>
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-span-5">
            {GLASS.map((g) => (
              <Reveal key={g.title} delay={g.delay} className="flex-1">
                <a
                  href="#inquire"
                  className="glass-dark group flex h-full flex-col justify-between rounded-[28px] p-7 transition-colors duration-700 hover:border-copper/70 sm:p-9"
                >
                  <div>
                    <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.8rem)] leading-tight text-ivory">{g.title}</h3>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-ivory/70">{g.body}</p>
                  </div>
                  <div>
                    <p className="label-caps mt-6 text-copper/70">{g.meta}</p>
                    <Inquire />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {CATEGORIES.map((c) => (
            <Reveal key={c.title} delay={c.delay} className="lg:col-span-4">
              <a
                href="#portfolio"
                className="lit-card group relative block h-full min-h-[300px] overflow-hidden rounded-[28px] border border-copper/25"
              >
                <div className="absolute inset-0 h-full w-full">
                  <Photo src={c.img} alt={c.alt} sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-signature via-signature/40 to-transparent" />
                <div className="lit-glow pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-copper/0 group-hover:ring-copper/60" />
                <div className="relative flex h-full min-h-[300px] flex-col justify-end p-7">
                  <h3 className="font-display text-[1.4rem] leading-tight text-ivory">{c.title}</h3>
                  <p className="label-caps mt-1 text-copper/80">See the work</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
