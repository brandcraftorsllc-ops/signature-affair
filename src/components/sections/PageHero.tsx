import { Photo } from "@/components/ui/Photo";

/** Inner-page hero: the homepage hero's photo treatment and entrance animation, at a shorter height. */
export function PageHero({
  img,
  alt,
  eyebrow,
  lead,
  accent,
  intro,
  actions,
  children,
}: {
  img: string;
  alt: string;
  eyebrow: string;
  lead: string;
  accent: string;
  intro: string;
  actions: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-signature">
      <div className="absolute inset-0">
        <div className="saf-hero-img absolute inset-0 h-full w-full [animation-delay:150ms]">
          <Photo src={img} alt={alt} sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-signature via-signature/80 to-signature/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-signature via-signature/20 to-signature/70" />
        <div
          className="saf-candle absolute left-[12%] top-[55%] h-56 w-56 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,196,140,0.3), transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[78svh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-8 lg:min-h-[82svh] lg:pb-24">
        <div className="max-w-2xl">
          <p className="saf-rise label-caps text-copper" style={{ animationDelay: "600ms" }}>
            {eyebrow}
          </p>
          <h1
            className="saf-rise mt-5 font-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.01em] text-ivory"
            style={{ animationDelay: "800ms" }}
          >
            {lead}
            <span className="text-copper-grad block italic">{accent}</span>
          </h1>
          <p
            className="saf-rise mt-6 max-w-xl text-[16.5px] leading-relaxed text-ivory/75 sm:text-[17.5px]"
            style={{ animationDelay: "1000ms" }}
          >
            {intro}
          </p>
          <div className="saf-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "1200ms" }}>
            {actions}
          </div>
          {children && (
            <div className="saf-rise mt-9" style={{ animationDelay: "1400ms" }}>
              {children}
            </div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-signature to-transparent" />
    </section>
  );
}
