"use client";

import { useState } from "react";
import Link from "next/link";
import { Music2 } from "lucide-react";
import { CONTACT, FOOTER_ACADEMY, FOOTER_EVENTS, INFO_DIALOGS } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";
import { InstagramIcon } from "@/components/ui/icons";
import { InfoDialog } from "@/components/ui/Modal";

type DialogKey = keyof typeof INFO_DIALOGS;

const socialCls =
  "flex h-11 w-11 items-center justify-center rounded-full border border-copper/30 text-copper-light transition-colors hover:border-copper hover:text-ivory";
const linkCls = "text-[13.5px] text-ivory/60 transition-colors hover:text-ivory";
const legalCls = "text-[11.5px] uppercase tracking-[0.16em] text-ivory/45 transition-colors hover:text-copper-light";

export function Footer() {
  const [dialog, setDialog] = useState<DialogKey | null>(null);

  return (
    <footer className="relative overflow-hidden border-t border-copper/30 bg-signature pb-28 pt-16 lg:pb-14">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo
              sizeCls="h-[64px] w-[64px] sm:h-[70px] sm:w-[70px]"
              nameCls="text-[19px] sm:text-[22px] md:text-[18px] lg:text-[22px]"
              tagCls="text-[9.5px] sm:text-[11px] md:text-[8.5px] lg:text-[11px]"
              layoutCls="items-center md:flex-col md:items-start xl:flex-row xl:items-center"
            />
            <p className="mt-5 font-script text-[26px] text-copper-light">Every detail, a signature.</p>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ivory/55">
              Luxury event planning and design, plus event planning classes, serving {CONTACT.area}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Signature Affair on Instagram (opens in a new tab)"
                className={socialCls}
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Signature Affair on TikTok (opens in a new tab)"
                className={socialCls}
              >
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="label-caps text-copper">Events</p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_EVENTS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-caps text-copper">Academy</p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_ACADEMY.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-caps text-copper">Contact</p>
            <ul className="mt-4 space-y-2.5 text-[13.5px] text-ivory/60">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-ivory">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-ivory">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-ivory/45">Serving {CONTACT.area}</li>
              <li className="text-[12.5px] leading-relaxed text-copper-light/80">{CONTACT.travel}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-copper/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] uppercase tracking-[0.16em] text-ivory/35">© 2026 The Signature Affair, LLC</p>
          <div className="flex gap-6">
            <button type="button" className={legalCls} onClick={() => setDialog("privacy")}>
              Privacy
            </button>
            <button type="button" className={legalCls} onClick={() => setDialog("terms")}>
              Terms
            </button>
          </div>
        </div>
      </div>

      {dialog && <InfoDialog {...INFO_DIALOGS[dialog]} onClose={() => setDialog(null)} />}
    </footer>
  );
}
