"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";
import { Logo, Monogram } from "@/components/ui/Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="border-b border-copper/30 bg-[rgba(13,13,15,0.55)] backdrop-blur-2xl">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
            <a href="#top" className="shrink-0" aria-label="The Signature Affair home">
              <Logo size={44} />
            </a>

            <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group relative text-[13.5px] tracking-[0.1em] text-ivory/80 transition-colors hover:text-ivory"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-copper transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="#inquire"
                className="btn-shine inline-flex h-11 items-center rounded-full bg-copper px-6 text-[12px] uppercase tracking-[0.18em] text-signature transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Plan My Event</span>
              </a>
              <a
                href="#academy"
                className="btn-shine inline-flex h-11 items-center rounded-full border border-copper/70 px-6 text-[12px] uppercase tracking-[0.18em] text-copper-light transition-all duration-300 hover:-translate-y-0.5 hover:border-copper hover:text-ivory"
              >
                <span className="relative z-10">Join the Academy</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/40 text-ivory lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={close}
          className={`absolute inset-0 bg-signature/80 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto border-l border-copper/25 bg-signature px-7 pb-10 pt-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-3">
              <Monogram size={40} />
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              tabIndex={open ? 0 : -1}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/40 text-ivory"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className="flex min-h-[52px] items-center justify-between border-b border-copper/15 py-3 font-display text-2xl text-ivory"
              >
                {l.label}
                <ArrowUpRight className="h-4 w-4 text-copper" />
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#inquire"
              onClick={close}
              tabIndex={open ? 0 : -1}
              className="flex min-h-[50px] items-center justify-center rounded-full bg-copper text-[12px] uppercase tracking-[0.18em] text-signature"
            >
              Plan My Event
            </a>
            <a
              href="#academy"
              onClick={close}
              tabIndex={open ? 0 : -1}
              className="flex min-h-[50px] items-center justify-center rounded-full border border-copper/60 text-[12px] uppercase tracking-[0.18em] text-copper-light"
            >
              Join the Academy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
