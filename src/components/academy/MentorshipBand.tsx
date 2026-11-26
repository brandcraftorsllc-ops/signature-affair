import { Reveal } from "@/components/ui/Reveal";
import { InquiryButton } from "@/components/ui/InquiryButton";

export function MentorshipBand() {
  return (
    <section
      id="private-mentorship"
      className="relative scroll-mt-20 overflow-hidden bg-signature px-5 py-20 sm:px-8 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(29,63,143,0.45), rgba(29,63,143,0) 70%)" }}
      />
      <Reveal className="relative mx-auto max-w-5xl">
        <div className="glass-dark flex flex-col items-start gap-8 rounded-[28px] p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="label-caps text-copper">Private mentorship</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-tight text-ivory">
              Prefer one-on-one? <span className="text-copper-grad italic">Ask about private mentorship.</span>
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ivory/70">
              Time with Dee shaped around your goals and your pace, in person or online. Inquire for availability.
            </p>
          </div>
          <InquiryButton preset={{ tab: "academy", classChoice: "Private Mentorship" }} className="shrink-0">
            Request Mentorship
          </InquiryButton>
        </div>
      </Reveal>
    </section>
  );
}
