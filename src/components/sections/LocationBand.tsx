import { MapPin, Phone, Plane } from "lucide-react";
import { CONTACT } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

/** Highlighted strip with the service area and travel line, optionally with the phone number and a CTA. */
export function LocationBand({
  heading,
  showPhone = false,
  action,
}: {
  heading?: React.ReactNode;
  showPhone?: boolean;
  action?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-signature px-5 py-16 sm:px-8 lg:py-20">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(232,179,138,0.2), rgba(232,179,138,0) 70%)" }}
      />
      <Reveal className="relative mx-auto max-w-5xl">
        <div className="glass-dark flex flex-col items-center gap-6 rounded-[28px] px-6 py-10 text-center sm:px-12">
          {heading}
          <div className="flex flex-col items-center gap-3 text-[15px] text-ivory/80 md:flex-row md:gap-8">
            <p className="inline-flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
              Serving {CONTACT.area}
            </p>
            <span className="hidden h-4 w-px bg-copper/40 md:block" aria-hidden="true" />
            <p className="inline-flex items-center gap-2.5 text-copper-light">
              <Plane className="h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
              {CONTACT.travel}
            </p>
          </div>
          {showPhone && (
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2.5 font-display text-[clamp(1.6rem,3vw,2.2rem)] text-ivory transition-colors hover:text-copper-light"
            >
              <Phone className="h-5 w-5 text-copper" aria-hidden="true" />
              {CONTACT.phone}
            </a>
          )}
          {action}
        </div>
      </Reveal>
    </section>
  );
}
