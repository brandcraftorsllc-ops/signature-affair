// Homepage copy and image data, transcribed verbatim from the reference site.

// Event photography is The Signature Affair's own work (public/images/events).
const EV = (name: string) => `/images/events/${name}.jpg`;

export const IMG = {
  logo: "/images/logo-monogram.png",
  hero: EV("gold-arch-ballroom-reveal"),
  pathEvent: EV("candlelit-ceremony-aisle"),
  pathAcademy: EV("gold-charger-place-setting"),
  serviceFeature: EV("red-rose-tall-centerpiece"),
  weddings: EV("newlyweds-sparkler-portrait"),
  corporate: EV("mentorship-balloon-arch"),
  milestone: EV("fiftieth-birthday-head-table"),
  aboutBackdrop: EV("gold-stripe-wedding-cake"),
  inquireBackdrop: EV("ivory-flower-wall-sweetheart"),
  // Not yet replaced: no photo of Dee was supplied.
  dee: "/images/dee-lyles.png",
} as const;

export const VIDEO = {
  galentines: { src: "/videos/galentines-day-ball.mp4", poster: "/videos/galentines-day-ball-poster.jpg" },
  award: { src: "/videos/best-of-award.mp4", poster: "/videos/best-of-award-poster.jpg" },
} as const;

export const CONTACT = {
  phone: "(762) 235-4905",
  phoneHref: "tel:+17622354905",
  email: "Hello@thesignatureaffairga.com",
  area: "Georgia & Surrounding Areas",
  travel: "Available for travel. Destination and international events welcome.",
  instagram: "https://www.instagram.com/thesignaturesffairga",
  instagramHandle: "@thesignaturesffairga",
  tiktok: "https://www.tiktok.com/@thesignatureaffair",
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

export type PortfolioItem = {
  src: string; // image, or poster frame for a video
  alt: string;
  category: PortfolioCategory;
  tall: boolean;
  video?: string;
};

const p = (name: string, alt: string, category: PortfolioCategory, tall: boolean): PortfolioItem => ({
  src: EV(name),
  alt,
  category,
  tall,
});

/** First PORTFOLIO_INITIAL items show by default; the rest appear with "View more". */
export const PORTFOLIO_INITIAL = 9;

export const PORTFOLIO: PortfolioItem[] = [
  p("newlyweds-dance-gold-floor", "Newlyweds dancing on a mirrored gold dance floor under cold sparklers", "Weddings", true),
  p("red-rose-tall-centerpiece", "Towering red rose and hydrangea centerpiece in a gold vase", "Celebrations", false),
  {
    src: VIDEO.galentines.poster,
    video: VIDEO.galentines.src,
    alt: "Galentine's Day Ball with an aerial silk performance and red décor",
    category: "Celebrations",
    tall: true,
  },
  p("candelabra-black-gold-tablescape", "Crystal candelabras with black glassware and gold chargers", "Details", true),
  p("blush-rose-wall-sweetheart-table", "Blush rose wall behind a gold sweetheart table with candles", "Weddings", false),
  p("gold-stripe-wedding-cake", "Four-tier ivory wedding cake with gold stripes and monogram", "Details", true),
  p("mentorship-balloon-arch", "Corporate mentorship program luncheon with balloon arch", "Corporate", true),
  p("gold-charger-place-setting", "Gold charger place setting with a single ivory rose", "Details", false),
  p("sweet-sixteen-balloon-wall", "Sweet sixteen marquee numbers framed by a balloon wall", "Celebrations", true),
  p("gold-arch-ballroom-reveal", "Gold mirrored arch framing a candlelit ballroom and monogram dance floor", "Weddings", false),
  p("candlelit-ceremony-aisle", "Candlelit ceremony aisle with ivory florals and white chairs", "Weddings", false),
  p("black-gold-sequin-tablescape", "Gold sequin linen with black glassware and a white hydrangea topiary", "Details", true),
  p("victoria-dessert-backdrop", "Personalized arch backdrop and dessert table for a celebration", "Celebrations", true),
  p("newlyweds-sparkler-portrait", "Newlyweds portrait in front of the head table with sparklers", "Weddings", false),
  p("corporate-skyline-luncheon", "Skyline corporate luncheon with silver linens and chiavari chairs", "Corporate", true),
  p("white-flower-wall-sweetheart", "Ivory flower wall with gold candelabras behind a sweetheart table", "Weddings", true),
  p("gold-sequin-feather-centerpiece", "Gold sequin table with ostrich feather centerpiece and purple napkins", "Celebrations", false),
  p("bride-gold-mirror-column", "Bride on the dance floor beside a gold mirrored column", "Weddings", true),
  p("fiftieth-birthday-head-table", "Fiftieth birthday head table with gold chargers and blush napkins", "Celebrations", true),
  p("black-gold-stage-lounge", "Black and gold stage lounge with laser-cut rose panels", "Corporate", true),
  p("coral-floral-long-table", "Long table with cascading coral florals and royal blue napkins", "Details", false),
  p("emerald-bridal-party", "Bridal party under emerald uplighting and crystal chandeliers", "Weddings", false),
  p("lavender-head-table", "Lavender head table with crystal-trimmed glass and hydrangeas", "Celebrations", true),
  p("red-roses-bud-vases", "Red roses arranged in glass bud vases", "Details", true),
  p("purple-feather-glass-table", "Glass head table with black feathers under violet uplighting", "Celebrations", false),
  p("monogram-gold-dance-floor", "Monogrammed gold dance floor in front of the head table", "Weddings", false),
  p("purple-cake-cutting", "Newlyweds cutting a purple and gold wedding cake", "Weddings", true),
  p("floral-hoop-centerpiece", "Gold hoop centerpiece with ivory and blue florals", "Details", true),
  p("gold-candelabra-sweetheart-table", "Gold sweetheart table with candelabras and autumn florals", "Weddings", false),
  p("glass-head-table-black-linens", "Glass head table with black linens and floating candles", "Details", false),
  p("burgundy-cake-cutting", "Newlyweds sharing cake beside a burgundy floral backdrop", "Weddings", true),
  p("hydrangea-pillar-centerpiece", "Hydrangea pillar centerpieces over black linens", "Details", false),
  p("black-rose-wedding-cake", "Three-tier white cake with black roses and gold topper", "Details", true),
  p("blush-rose-centerpiece-table", "Blush tablescape with a rose centerpiece and table number", "Celebrations", false),
  p("groomsmen-dance", "Groom and groomsmen dancing at the reception", "Weddings", false),
  p("black-napkin-gold-charger", "Black velvet napkin with jeweled ring on a gold-rimmed charger", "Details", true),
  p("geometric-floral-arch", "Gold geometric arch with cascading white florals", "Details", false),
  p("cake-feeding-moment", "Newlyweds feeding each other cake", "Weddings", false),
  p("blush-table-number-centerpiece", "Blush centerpiece with floating pearls and a table number", "Details", true),
  p("burnt-orange-tablescape", "Burnt orange and wine napkins on gold beaded chargers", "Details", false),
  p("newlyweds-portrait", "Portrait of newlyweds holding an ivory bouquet", "Weddings", false),
  p("cherry-blossom-tree-centerpiece", "White blossom tree centerpiece at an all-black celebration", "Celebrations", false),
  p("bouquet-toss", "Bride tossing the bouquet under crystal chandeliers", "Weddings", false),
  p("sugar-flower-wedding-cake", "Two-tier ivory cake with cascading sugar flowers", "Details", false),
  p("catered-buffet", "Catered buffet styled with ivory florals and greenery", "Details", false),
  p("red-black-glass-head-table", "Glass head table with red blossoms and black chairs", "Celebrations", false),
  p("newlyweds-slow-dance", "Newlyweds sharing a slow dance", "Weddings", true),
  p("ivory-flower-wall-sweetheart", "Ivory flower wall behind a gold sweetheart table", "Weddings", true),
  p("white-flower-wall-candelabras", "White flower wall with gold candelabras and candles", "Weddings", false),
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
    body: "Our full privacy policy is being finalized. For any question about the information you share with The Signature Affair, or to have your details removed, email Hello@thesignatureaffairga.com or call (762) 235-4905.",
  },
  terms: {
    title: "Terms",
    body: "Our full terms are being finalized. For questions about bookings, class enrollment or changes to a date, email Hello@thesignatureaffairga.com or call (762) 235-4905.",
  },
};
