import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { ClassCards } from "@/components/academy/ClassCards";
import { MentorshipBand } from "@/components/academy/MentorshipBand";
import { AcademyValues } from "@/components/academy/AcademyValues";
import { Faq } from "@/components/academy/Faq";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Inquire } from "@/components/sections/Inquire";
import { LocationBand } from "@/components/sections/LocationBand";
import { ButtonLink } from "@/components/ui/buttons";
import { InquiryButton } from "@/components/ui/InquiryButton";
import { ACADEMY_FORMATS, IMG, TESTIMONIAL_ROWS } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "The Signature Affair Academy | Event Planning & Design Classes in Georgia",
  description:
    "Hands-on classes for aspiring day-of coordinators, event planners and designers, taught by Dee. In person in Georgia, live online, or one-on-one mentorship.",
  path: "/academy",
  image: IMG.pathAcademy,
  imageAlt: "Gold charger place setting styled with a single ivory rose",
});

// Student testimonials are the Academy-tagged homepage row.
const STUDENT_TESTIMONIALS = TESTIMONIAL_ROWS.filter((row) => row.every((t) => t.tag === "Academy"));

export default function AcademyPage() {
  return (
    <SiteShell>
      <PageHero
        img={IMG.pathAcademy}
        alt="Gold charger place setting styled with an ivory napkin and a single rose"
        eyebrow="The Signature Affair Academy"
        lead="Turn your passion"
        accent="into your profession."
        intro="Hands-on classes for aspiring day-of coordinators, event planners and designers, taught by Dee. In person in Georgia, live online, or one-on-one."
        actions={
          <>
            <ButtonLink href="#classes">Reserve My Seat</ButtonLink>
            <InquiryButton preset={{ tab: "academy", classChoice: "Private Mentorship" }} variant="outline">
              Request Mentorship
            </InquiryButton>
          </>
        }
      >
        <ul className="flex flex-wrap gap-2" aria-label="Class formats">
          {ACADEMY_FORMATS.map((f) => (
            <li
              key={f}
              className="rounded-full border border-copper/30 bg-signature/40 px-4 py-2 text-[10.5px] uppercase tracking-[0.18em] text-copper-light"
            >
              {f}
            </li>
          ))}
        </ul>
      </PageHero>
      <ClassCards />
      <MentorshipBand />
      <About
        id="instructor"
        eyebrow="Meet your instructor"
        cta={{ label: "Reserve My Seat", href: "#classes" }}
      />
      <AcademyValues />
      <Testimonials rows={STUDENT_TESTIMONIALS} lead="What students" accent="say." />
      <Faq />
      <Inquire initialTab="academy" />
      <LocationBand
        showPhone
        heading={
          <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-tight text-ivory">
            Ready to <span className="text-copper-grad italic">begin?</span>
          </h2>
        }
        action={
          <InquiryButton preset={{ tab: "academy" }} size="md">
            Reserve My Seat
          </InquiryButton>
        }
      />
    </SiteShell>
  );
}
