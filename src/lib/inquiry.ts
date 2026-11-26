import type { ClassOption } from "@/lib/content";

/** Lets any button on a page open the inquiry form on a given tab, optionally with a class preselected. */
export type InquiryPreset = { tab: "event" | "academy"; classChoice?: ClassOption };

export const INQUIRY_PRESET_EVENT = "saf:inquiry-preset";

export function presetInquiry(preset: InquiryPreset) {
  window.dispatchEvent(new CustomEvent<InquiryPreset>(INQUIRY_PRESET_EVENT, { detail: preset }));
}
