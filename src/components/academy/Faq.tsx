"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { ACADEMY_FAQ } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

/** Accessible accordion: buttons with aria-expanded / aria-controls, answers as labelled regions. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section className="relative overflow-hidden border-t border-copper/20 bg-champagne px-5 py-24 sm:px-8 lg:py-28">
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionIntro
            tone="light"
            eyebrow="Questions"
            lead="Before you"
            accent="reserve."
            body="Anything else you would like to know? Call or email, and we will be glad to help."
          />
        </Reveal>
        <Reveal delay={120} className="lg:col-span-8">
          <ul className="border-t border-copper/30">
            {ACADEMY_FAQ.map((f, i) => {
              const isOpen = open === i;
              const btnId = `${base}-q${i}`;
              const panelId = `${base}-a${i}`;
              return (
                <li key={f.q} className="border-b border-copper/30">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-[clamp(1.1rem,1.8vw,1.35rem)] leading-snug text-ink transition-colors hover:text-copper-deep"
                    >
                      {f.q}
                      <Plus
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 text-copper-deep transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div
                      className={`overflow-hidden transition-[visibility] duration-500 motion-reduce:transition-none ${
                        isOpen ? "visible" : "invisible"
                      }`}
                    >
                      <p className="max-w-2xl pb-6 text-[15.5px] leading-relaxed text-ink/70">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
