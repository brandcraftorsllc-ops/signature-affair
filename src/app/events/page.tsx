import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { EventTypes } from "@/components/events/EventTypes";
import { EventServices } from "@/components/events/EventServices";
import { EventProcess } from "@/components/events/EventProcess";
import { Portfolio } from "@/components/sections/Portfolio";
import { SignatureStatement } from "@/components/sections/SignatureStatement";
import { LocationBand } from "@/components/sections/LocationBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { Inquire } from "@/components/sections/Inquire";
import { ButtonLink } from "@/components/ui/buttons";
import { TESTIMONIAL_ROWS } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const HERO_IMG = "/images/events/newlyweds-dance-gold-floor.jpg";

export const metadata = pageMetadata({
  title: "Events | Luxury Weddings, Corporate Events & Celebrations | The Signature Affair",
  description:
    "Luxury event planning and design for weddings, corporate events and milestone celebrations. Serving Georgia & Surrounding Areas, with destination and international events welcome.",
  path: "/events",
  image: HERO_IMG,
  imageAlt: "Newlyweds dancing on a mirrored gold dance floor at an event designed by The Signature Affair",
});

// Wedding, Corporate and Celebration testimonials are the first homepage row.
const EVENT_TESTIMONIALS = TESTIMONIAL_ROWS.filter((row) => row.every((t) => t.tag !== "Academy"));

export default function EventsPage() {
  return (
    <SiteShell>
      <PageHero
        img={HERO_IMG}
        alt="Newlyweds dancing on a mirrored gold dance floor under cold sparklers"
        eyebrow="Events"
        lead="Events designed"
        accent="with intention."
        intro="Luxury weddings, corporate events and milestone celebrations, planned and designed across Georgia and beyond."
        actions={
          <>
            <ButtonLink href="#inquire">Plan My Event</ButtonLink>
            <ButtonLink href="#portfolio" variant="outline">
              View Portfolio
            </ButtonLink>
          </>
        }
      />
      <EventTypes />
      <EventServices />
      <EventProcess />
      <Portfolio />
      <SignatureStatement />
      <LocationBand
        heading={
          <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-tight text-ivory">
            Wherever you <span className="text-copper-grad italic">celebrate.</span>
          </h2>
        }
      />
      <Testimonials rows={EVENT_TESTIMONIALS} lead="What clients" accent="say." />
      <Inquire initialTab="event" />
    </SiteShell>
  );
}
