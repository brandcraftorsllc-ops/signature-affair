import Image from "next/image";
import { IMG } from "@/lib/content";

/** Circular monogram. `sizeCls` sets width/height (responsive classes allowed). */
export function Monogram({ sizeCls, priority = false }: { sizeCls: string; priority?: boolean }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full shadow-[0_6px_18px_rgba(201,138,94,0.35)] ring-1 ring-copper/45 ${sizeCls}`}
    >
      <Image
        src={IMG.logo}
        alt="The Signature Affair monogram"
        width={160}
        height={160}
        className="h-full w-full object-cover"
        priority={priority}
      />
    </span>
  );
}

export function Logo({
  sizeCls,
  nameCls,
  tagCls,
  layoutCls = "items-center",
  priority = false,
}: {
  sizeCls: string;
  nameCls: string;
  tagCls: string;
  layoutCls?: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex gap-3 ${layoutCls}`}>
      <Monogram sizeCls={sizeCls} priority={priority} />
      <span className="flex flex-col leading-none">
        <span className={`whitespace-nowrap font-display tracking-[0.06em] text-ivory ${nameCls}`}>
          The Signature Affair
        </span>
        <span className={`label-caps mt-1 whitespace-nowrap tracking-[0.34em] text-copper/80 ${tagCls}`}>
          Event Design · Academy
        </span>
      </span>
    </span>
  );
}
