"use client";

import { useCallback, useState } from "react";
import { Maximize2, Play, X } from "lucide-react";
import { CONTACT, PORTFOLIO, PORTFOLIO_FILTERS, PORTFOLIO_INITIAL, type PortfolioItem } from "@/lib/content";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Overlay } from "@/components/ui/Modal";
import { InstagramIcon } from "@/components/ui/icons";

type Filter = (typeof PORTFOLIO_FILTERS)[number];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<PortfolioItem | null>(null);
  const close = useCallback(() => setOpen(null), []);

  const items = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);
  const visible = expanded ? items : items.slice(0, PORTFOLIO_INITIAL);
  const hidden = items.length - visible.length;

  const choose = (f: Filter) => {
    setFilter(f);
    setExpanded(false);
  };

  return (
    <section id="portfolio" className="relative overflow-hidden bg-champagne px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-blush/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="label-caps text-copper-deep">Portfolio</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,3.5rem)] font-medium leading-[1.08] text-ink">
              Room <span className="italic text-copper-deep">reveals.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => choose(f)}
                className={`min-h-[42px] rounded-full border px-5 text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                  filter === f
                    ? "border-ink bg-ink text-champagne"
                    : "border-copper/40 text-ink/70 hover:border-copper hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 columns-2 gap-4 lg:columns-3 lg:gap-5">
          {visible.map((p, i) => (
            <Reveal
              key={`${filter}-${p.src}`}
              delay={(i < PORTFOLIO_INITIAL ? i : i - PORTFOLIO_INITIAL) * 60}
              className="mb-4 break-inside-avoid lg:mb-5"
            >
              <button
                type="button"
                onClick={() => setOpen(p)}
                aria-label={`${p.video ? "Play video" : "Open"}: ${p.alt}`}
                className="lit-card group relative block w-full overflow-hidden rounded-[28px] border border-copper/25 text-left"
              >
                <div
                  className={`relative w-full overflow-hidden transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] ${
                    p.tall ? "h-[300px] sm:h-[440px]" : "h-[200px] sm:h-[300px]"
                  }`}
                >
                  <Photo src={p.src} alt={p.alt} sizes="(min-width: 1024px) 33vw, 50vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-signature/70 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-40" />
                {p.video ? (
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/60 bg-signature/50 text-ivory backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                ) : (
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/50 bg-signature/40 text-ivory opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100">
                    <Maximize2 className="h-5 w-5" />
                  </span>
                )}
                <span className="label-caps absolute bottom-4 left-4 text-ivory/90">
                  {p.category}
                  {p.video && " · Video"}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {(hidden > 0 || expanded) && items.length > PORTFOLIO_INITIAL && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => {
                if (expanded) document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                setExpanded((e) => !e);
              }}
              aria-expanded={expanded}
              className="min-h-[46px] rounded-full border border-ink/80 px-7 text-[11px] uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-ink hover:text-champagne"
            >
              {expanded ? "Show less" : `View more work (${hidden})`}
            </button>
          </div>
        )}

        <Reveal className="mt-12 text-center">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`See more on Instagram ${CONTACT.instagramHandle} (opens in a new tab)`}
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-copper-deep transition-colors hover:text-ink"
          >
            <InstagramIcon className="h-4 w-4" />
            See more on Instagram {CONTACT.instagramHandle}
          </a>
        </Reveal>
      </div>

      {open && (
        <Overlay
          label={open.alt}
          onClose={close}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-signature/92 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            onClick={close}
            aria-label={open.video ? "Close video" : "Close image"}
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-copper/40 text-ivory"
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="w-full max-w-4xl">
            <div className="h-[62vh] w-full overflow-hidden rounded-[28px] border border-copper/30 bg-signature/60 sm:h-[72vh]">
              {open.video ? (
                <video
                  src={open.video}
                  poster={open.src}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : (
                <Photo src={open.src} alt={open.alt} sizes="(min-width: 896px) 896px, 100vw" contain />
              )}
            </div>
            <figcaption className="mt-4 text-center">
              <span className="label-caps text-copper-light">{open.category}</span>
              <p className="mt-2 text-[13.5px] text-ivory/60">{open.alt}</p>
            </figcaption>
          </figure>
        </Overlay>
      )}
    </section>
  );
}
