import Image from "next/image";
import { IMG } from "@/lib/content";

export function Monogram({ size }: { size: number }) {
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full shadow-[0_6px_18px_rgba(201,138,94,0.35)] ring-1 ring-copper/45"
      style={{ width: size, height: size }}
    >
      <Image
        src={IMG.logo}
        alt="The Signature Affair monogram"
        width={size * 2}
        height={size * 2}
        className="h-full w-full object-cover"
        priority={size === 44}
      />
    </span>
  );
}

export function Logo({ size = 44 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-3">
      <Monogram size={size} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] tracking-[0.06em] text-ivory">The Signature Affair</span>
        <span className="label-caps mt-1 text-copper/80" style={{ fontSize: "8.5px", letterSpacing: "0.34em" }}>
          Event Design · Academy
        </span>
      </span>
    </span>
  );
}
