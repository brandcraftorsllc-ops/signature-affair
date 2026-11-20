"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

/** Full-screen overlay used by the lightbox and the info dialogs. Closes on Escape or backdrop click. */
export function Overlay({
  label,
  onClose,
  className,
  children,
}: {
  label: string;
  onClose: () => void;
  className: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className={className}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {children}
    </div>
  );
}

export function InfoDialog({ title, body, onClose }: { title: string; body: string; onClose: () => void }) {
  return (
    <Overlay
      label={title}
      onClose={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-signature/90 p-4 backdrop-blur-md"
    >
      <div className="glass-dark w-full max-w-md rounded-[28px] p-8">
        <div className="flex items-start justify-between gap-6">
          <h3 className="font-display text-[1.5rem] text-ivory">{title}</h3>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-copper/30 text-ivory/70"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-5 text-[14.5px] leading-relaxed text-ivory/70">{body}</p>
      </div>
    </Overlay>
  );
}
