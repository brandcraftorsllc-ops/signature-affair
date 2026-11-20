// Homepage copy and image data, transcribed verbatim from the reference site.

export const IMG = {
  logo: "/images/logo-monogram.png",
  ballroom: "/images/ballroom-hero.png",
  floralArch: "/images/floral-arch.png",
  academyClass: "/images/academy-class.png",
  flowerWall: "/images/flower-wall.png",
  firstDance: "/images/first-dance.png",
  corporateGala: "/images/corporate-gala.png",
  milestone: "/images/milestone-tablescape.png",
  seatingChart: "/images/seating-chart.png",
  placeSetting: "/images/place-setting.png",
  designerFlorals: "/images/designer-florals.png",
  dee: "/images/dee-lyles.png",
} as const;

export const CONTACT = {
  phone1: "(678) 913-6712",
  phone1Href: "tel:+6789136712",
  phone2: "(762) 235-4905",
  phone2Href: "tel:+7622354905",
  email: "Hello@thesignatureaffairga.com",
  area: "Georgia and surrounding areas",
  instagram: "https://www.instagram.com/thesignaturesffairga",
  instagramHandle: "@thesignaturesffairga",
};

export const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#events", label: "Events" },
  { href: "#academy", label: "Academy" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About Dee" },
  { href: "#inquire", label: "Contact" },
];

export type PortfolioCategory = "Weddings" | "Corporate" | "Celebrations" | "Details";

export const PORTFOLIO_FILTERS = ["All", "Weddings", "Corporate", "Celebrations", "Details"] as const;

export const PORTFOLIO: {
  src: string;
  alt: string;
  category: PortfolioCategory;
  tall: boolean;
  badge?: boolean;
}[] = [
  { src: IMG.ballroom, alt: "Ballroom revealed with candlelight and blush florals", category: "Weddings", tall: true },
  { src: IMG.flowerWall, alt: "Blush rose flower wall behind a sweetheart table", category: "Details", tall: false },
  { src: IMG.floralArch, alt: "White and pink floral arch with gold chargers", category: "Weddings", tall: true, badge: true },
  { src: IMG.seatingChart, alt: "Elegant seating chart display framed with pink florals", category: "Details", tall: false },
  { src: IMG.corporateGala, alt: "Corporate gala with black and white linens", category: "Corporate", tall: true },
  { src: IMG.firstDance, alt: "Couple's first dance under soft lighting", category: "Weddings", tall: false, badge: true },
  { src: IMG.milestone, alt: "Milestone birthday tablescape in champagne and gold", category: "Celebrations", tall: true },
  { src: IMG.placeSetting, alt: "Close-up of a gold place setting with menu card", category: "Details", tall: false },
  { src: IMG.designerFlorals, alt: "Designer arranging florals on a banquet table", category: "Details", tall: true, badge: true },
];

export const CLASSES = [
  {
    title: "Day-of Coordinator Class",
    body: "Timelines, vendor coordination and running the day with confidence.",
    note: "Next class dates coming soon",
    offset: "",
    delay: 0,
  },
  {
    title: "Event Planning Business Class",
    body: "Pricing, contracts, clients and building your brand.",
    offset: "sm:translate-x-4",
    delay: 130,
  },
  {
    title: "Event Design & Décor Class",
    body: "Tablescapes, florals, color and room design, hands-on.",
    offset: "sm:translate-x-8",
    delay: 260,
  },
];

export const TESTIMONIAL_ROWS = [
  [
    { tag: "Wedding", quote: "Dee turned a plain ballroom into something out of a magazine. Our guests are still talking about the tables.", who: "Sample client testimonial", shift: "" },
    { tag: "Corporate", quote: "Our leadership dinner ran to the minute. We got to host our guests instead of managing the room.", who: "Sample client testimonial", shift: "lg:translate-y-6" },
    { tag: "Celebration", quote: "Every anniversary detail felt personal, never pulled from a template. It was unmistakably ours.", who: "Sample client testimonial", shift: "lg:-translate-y-3" },
  ],
  [
    { tag: "Academy", quote: "The Day-of Coordinator class gave me a process I could actually run at my next event.", who: "Sample student testimonial", shift: "lg:-translate-y-3" },
    { tag: "Academy", quote: "I left the business class understanding how to price my work and put it in writing.", who: "Sample student testimonial", shift: "lg:translate-y-5" },
    { tag: "Academy", quote: "Hands-on design practice with honest feedback. That is exactly what I needed to grow.", who: "Sample student testimonial", shift: "" },
  ],
];

export const FOOTER_EVENTS = [
  "Luxury Event Design & Décor",
  "Full-Service Planning",
  "Day-of Coordination",
  "Weddings",
  "Corporate Events",
  "Milestone Celebrations",
];

export const FOOTER_ACADEMY = [
  "Day-of Coordinator Class",
  "Event Planning Business Class",
  "Event Design & Décor Class",
  "Private Mentorship",
];

export const INFO_DIALOGS = {
  privacy: {
    title: "Privacy",
    body: "Our full privacy policy is being finalized. For any question about the information you share with The Signature Affair, or to have your details removed, email Hello@thesignatureaffairga.com or call (678) 913-6712.",
  },
  terms: {
    title: "Terms",
    body: "Our full terms are being finalized. For questions about bookings, class enrollment or changes to a date, email Hello@thesignatureaffairga.com or call (678) 913-6712.",
  },
  social: {
    title: "Find us",
    body: "Follow along on Instagram @thesignaturesffairga. Facebook and TikTok profiles are being finalized and will be linked here as soon as they are live.",
  },
};
