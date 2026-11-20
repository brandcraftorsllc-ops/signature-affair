import Image from "next/image";

/**
 * Fills its positioned parent with an object-cover image, mirroring the
 * Base44 image wrapper (relative span > absolute img).
 */
export function Photo({
  src,
  alt,
  sizes,
  priority = false,
  contain = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  contain?: boolean;
}) {
  return (
    <span className="relative block h-full w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={82}
        className={contain ? "object-contain" : "object-cover"}
      />
    </span>
  );
}
