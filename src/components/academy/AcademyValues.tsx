import { Briefcase, Hand, MessagesSquare, Sparkles, type LucideIcon } from "lucide-react";
import { ACADEMY_VALUES } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

const ICONS: Record<(typeof ACADEMY_VALUES)[number]["icon"], LucideIcon> = {
  experience: Sparkles,
  "hands-on": Hand,
  feedback: MessagesSquare,
  business: Briefcase,
};

export function AcademyValues() {
  return (
    <section className="relative overflow-hidden bg-signature px-5 py-24 sm:px-8 lg:py-32">
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(232,179,138,0.22), rgba(232,179,138,0) 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro eyebrow="Why learn with Dee" lead="Taught by a" accent="working designer." />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACADEMY_VALUES.map((v, i) => {
            const Icon = ICONS[v.icon];
            return (
              <Reveal key={v.title} delay={i * 100}>
                <div className="glass-dark h-full rounded-[28px] p-7 transition-colors duration-700 hover:border-copper/70">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/50 text-copper-light">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-[1.35rem] leading-tight text-ivory">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ivory/65">{v.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
