"use client";

import { presetInquiry, type InquiryPreset } from "@/lib/inquiry";
import { buttonCls, type ButtonSize, type ButtonVariant } from "@/components/ui/buttons";

/** Scrolls to this page's inquiry form and switches it to the given tab / class. */
export function InquiryButton({
  preset,
  children,
  variant,
  size,
  className,
}: {
  preset: InquiryPreset;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return (
    <a href="#inquire" onClick={() => presetInquiry(preset)} className={buttonCls(variant, size, className)}>
      <span className="relative z-10">{children}</span>
    </a>
  );
}
