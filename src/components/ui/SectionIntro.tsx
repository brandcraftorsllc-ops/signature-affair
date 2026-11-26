/** Eyebrow + H2 with an italic copper accent, the homepage's section-heading pattern. */
export function SectionIntro({
  eyebrow,
  lead,
  accent,
  body,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow: string;
  lead: string;
  accent: string;
  body?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <p className={`label-caps ${light ? "text-copper-deep" : "text-copper"}`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-[clamp(2.1rem,4.6vw,3.5rem)] font-medium leading-[1.08] ${
          light ? "text-ink" : "text-ivory"
        }`}
      >
        {lead} <span className={`italic ${light ? "text-copper-deep" : "text-copper-grad"}`}>{accent}</span>
      </h2>
      {body && (
        <p className={`mt-5 text-[15.5px] leading-relaxed ${light ? "text-ink/70" : "text-ivory/60"}`}>{body}</p>
      )}
    </div>
  );
}
