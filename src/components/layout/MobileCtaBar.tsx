import Link from "next/link";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-copper/30 bg-[rgba(13,13,15,0.92)] backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href="#inquire"
          className="flex min-h-[48px] items-center justify-center rounded-full bg-copper text-[11.5px] uppercase tracking-[0.16em] text-signature"
        >
          Plan My Event
        </a>
        <Link
          href="/academy"
          className="flex min-h-[48px] items-center justify-center rounded-full border border-copper/60 text-[11.5px] uppercase tracking-[0.16em] text-copper-light"
        >
          Academy
        </Link>
      </div>
    </div>
  );
}
