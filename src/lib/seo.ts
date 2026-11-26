import type { Metadata } from "next";

/** Per-page title, description, canonical URL and Open Graph tags. */
export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "The Signature Affair",
      locale: "en_US",
      url: path,
      title,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
