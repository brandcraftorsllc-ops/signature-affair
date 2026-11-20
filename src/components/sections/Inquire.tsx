"use client";

import { useState } from "react";
import { CONTACT, IMG } from "@/lib/content";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

type Tab = "event" | "academy";
type Errors = Record<string, string>;

const fieldCls =
  "w-full rounded-2xl border border-copper/25 bg-signature/45 px-4 py-3 text-[15px] text-ivory placeholder:text-ivory/30 outline-none transition-colors duration-300 focus:border-copper focus:ring-2 focus:ring-copper/25 [color-scheme:dark]";
const labelCls = "mb-2 block text-[10.5px] uppercase tracking-[0.18em] text-ivory/60";

const EVENT_TYPES = ["Wedding", "Corporate", "Birthday", "Shower", "Anniversary", "Other"];
const BUDGETS = ["Under $3,000", "$3,000 – $6,000", "$6,000 – $12,000", "$12,000 – $25,000", "$25,000+", "Not sure yet"];
const SERVICES = ["Design & Décor", "Full Planning", "Day-of Coordination"];
const CLASS_OPTIONS = ["Day-of Coordinator", "Event Planning Business", "Event Design & Décor", "Private Mentorship"];
const FORMATS = ["In-person", "Virtual"];
const LEVELS = ["Just starting", "Some experience", "Already planning events"];

function validate(data: FormData, choiceField: string, choiceMsg: string): Errors {
  const e: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
  const email = String(data.get("email") ?? "").trim();
  if (name.length < 2) e.name = "Please share your name.";
  if (phone.length < 10) e.phone = "Enter a phone number with at least 10 digits.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address.";
  if (!data.get(choiceField)) e[choiceField] = choiceMsg;
  return e;
}

function Field({
  id,
  label,
  error,
  span,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  span?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={span ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-[11.5px] text-copper-light">{error}</p>}
    </div>
  );
}

function Select({ id, name, placeholder, options }: { id: string; name: string; placeholder: string; options: string[] }) {
  return (
    <select id={id} name={name} defaultValue="" className={fieldCls}>
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function PreviewNotice() {
  return (
    <p role="status" className="text-center text-[12.5px] leading-relaxed text-copper-light">
      Thank you. This preview isn&apos;t connected to an inbox yet, so nothing was sent. Please email {CONTACT.email} or call{" "}
      {CONTACT.phone1}.
    </p>
  );
}

function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="btn-shine inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-copper px-8 text-[11.5px] uppercase tracking-[0.2em] text-signature transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
    >
      <span className="relative z-10">{label}</span>
    </button>
  );
}

function EventForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [services, setServices] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const toggle = (s: string) => setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  return (
    <form
      noValidate
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const errs = validate(new FormData(e.currentTarget), "eventType", "Choose the type of event.");
        setErrors(errs);
        setDone(Object.keys(errs).length === 0);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="ev-name" label="Name" error={errors.name}>
          <input id="ev-name" name="name" autoComplete="name" placeholder="Your full name" className={fieldCls} />
        </Field>
        <Field id="ev-phone" label="Phone" error={errors.phone}>
          <input id="ev-phone" name="phone" type="tel" autoComplete="tel" placeholder="(000) 000-0000" className={fieldCls} />
        </Field>
        <Field id="ev-email" label="Email" error={errors.email} span>
          <input id="ev-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" className={fieldCls} />
        </Field>
        <Field id="ev-type" label="Event type" error={errors.eventType}>
          <Select id="ev-type" name="eventType" placeholder="Select one" options={EVENT_TYPES} />
        </Field>
        <Field id="ev-date" label="Event date">
          <input id="ev-date" name="eventDate" type="date" className={fieldCls} />
        </Field>
        <Field id="ev-guests" label="Guest count">
          <input id="ev-guests" name="guests" type="number" min={1} placeholder="e.g. 120" className={fieldCls} />
        </Field>
        <Field id="ev-venue" label="Venue (if booked)">
          <input id="ev-venue" name="venue" placeholder="Venue name" className={fieldCls} />
        </Field>
      </div>

      <div>
        <span className={labelCls}>Services needed</span>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const on = services.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s)}
                className={`min-h-[44px] rounded-full border px-4 text-[11px] uppercase tracking-[0.14em] transition-all duration-300 ${
                  on
                    ? "border-copper bg-copper text-signature"
                    : "border-copper/30 text-ivory/65 hover:border-copper/60 hover:text-ivory"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="ev-budget" label="Budget range">
          <Select id="ev-budget" name="budget" placeholder="Select a range" options={BUDGETS} />
        </Field>
        <Field id="ev-vision" label="Tell me about your vision" span>
          <textarea
            id="ev-vision"
            name="vision"
            rows={4}
            placeholder="Colors, mood, must-haves, guest experience..."
            className={`${fieldCls} resize-none`}
          />
        </Field>
      </div>

      <SubmitButton label="Send My Inquiry" />
      {done && <PreviewNotice />}
    </form>
  );
}

function AcademyForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  return (
    <form
      noValidate
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        const errs = validate(new FormData(e.currentTarget), "classChoice", "Choose a class or mentorship.");
        setErrors(errs);
        setDone(Object.keys(errs).length === 0);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="ac-name" label="Name" error={errors.name}>
          <input id="ac-name" name="name" autoComplete="name" placeholder="Your full name" className={fieldCls} />
        </Field>
        <Field id="ac-phone" label="Phone" error={errors.phone}>
          <input id="ac-phone" name="phone" type="tel" autoComplete="tel" placeholder="(000) 000-0000" className={fieldCls} />
        </Field>
        <Field id="ac-email" label="Email" error={errors.email} span>
          <input id="ac-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" className={fieldCls} />
        </Field>
        <Field id="ac-class" label="Class of interest" error={errors.classChoice}>
          <Select id="ac-class" name="classChoice" placeholder="Select one" options={CLASS_OPTIONS} />
        </Field>
        <Field id="ac-format" label="Preferred format">
          <Select id="ac-format" name="format" placeholder="Select one" options={FORMATS} />
        </Field>
        <Field id="ac-level" label="Experience level" span>
          <Select id="ac-level" name="level" placeholder="Select one" options={LEVELS} />
        </Field>
        <Field id="ac-message" label="Message" span>
          <textarea
            id="ac-message"
            name="message"
            rows={4}
            placeholder="Where are you in your planning journey?"
            className={`${fieldCls} resize-none`}
          />
        </Field>
      </div>
      <SubmitButton label="Reserve My Seat" />
      {done && <PreviewNotice />}
    </form>
  );
}

export function Inquire() {
  const [tab, setTab] = useState<Tab>("event");

  const tabBtn = (t: Tab, label: string) => (
    <button
      type="button"
      aria-pressed={tab === t}
      onClick={() => setTab(t)}
      className={`relative z-10 min-h-[48px] rounded-full text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
        tab === t ? "text-signature" : "text-ivory/70 hover:text-ivory"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="inquire" className="relative overflow-hidden bg-signature">
      <div className="absolute inset-0">
        <div className="absolute inset-0 h-full w-full opacity-55">
          <Photo src={IMG.flowerWall} alt="Blush rose flower wall behind a sweetheart table" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-signature/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-signature via-transparent to-signature/90" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="text-center">
          <p className="label-caps text-copper">Let&apos;s begin</p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.2rem)] font-medium leading-[1.1] text-ivory">
            Start your <span className="text-copper-grad italic">signature affair.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="glass-dark rounded-[28px] p-6 sm:p-10">
            <div className="relative grid grid-cols-2 gap-1 rounded-full border border-copper/30 bg-signature/50 p-1">
              <span
                aria-hidden="true"
                className="absolute inset-y-1 left-1 w-[calc(50%-0.375rem)] rounded-full bg-copper transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: tab === "event" ? "translateX(0)" : "translateX(calc(100% + 0.25rem))" }}
              />
              {tabBtn("event", "Plan an Event")}
              {tabBtn("academy", "Join the Academy")}
            </div>
            <div key={tab} className="mt-8" style={{ animation: "saf-uplight 500ms ease both" }}>
              {tab === "event" ? <EventForm /> : <AcademyForm />}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8 text-center">
          <p className="label-caps text-copper/70">
            {CONTACT.phone1} · {CONTACT.phone2} · {CONTACT.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
