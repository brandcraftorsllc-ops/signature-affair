import { IMG } from "@/lib/content";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-signature">
      <div className="absolute inset-0">
        <div className="absolute inset-0 h-full w-full opacity-60">
          <Photo src={IMG.designerFlorals} alt="Designer arranging florals on a banquet table" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-signature via-signature/85 to-signature/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-signature/90 via-transparent to-signature/70" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:py-32">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="overflow-hidden rounded-[28px] border border-copper/30">
              <div className="h-[440px] w-full sm:h-[520px]">
                <Photo
                  src={IMG.dee}
                  alt="Dee Lyles, founder and lead designer of The Signature Affair"
                  sizes="(min-width: 640px) 384px, 100vw"
                />
              </div>
            </div>
            <span className="absolute -bottom-4 left-4 rounded-full bg-copper px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-signature shadow-[0_18px_40px_-18px_rgba(201,138,94,0.9)]">
              Founder &amp; Lead Designer
            </span>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="glass-dark rounded-[28px] p-7 sm:p-11">
            <p className="font-script text-[28px] text-copper-light">hello, I&apos;m</p>
            <h2 className="mt-1 font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-ivory">
              Dee Lyles
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ivory/75">
              For more than 15 years I&apos;ve designed weddings, corporate events and celebrations, over 500 experiences and
              counting. Every event carries a signature: intention, elegance and details people remember. Now I teach the next
              generation of planners to do the same.
            </p>
            <div className="mt-9 grid grid-cols-1 gap-6 border-t border-copper/25 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-copper-grad font-display text-[2.1rem] leading-none">
                  <CountUp to={15} />+
                </p>
                <p className="label-caps mt-2 text-ivory/55">Years</p>
              </div>
              <div>
                <p className="text-copper-grad font-display text-[2.1rem] leading-none">
                  <CountUp to={500} />+
                </p>
                <p className="label-caps mt-2 text-ivory/55">Experiences</p>
              </div>
              <div>
                <p className="text-copper-grad font-display text-[1.25rem] leading-tight">Award-Winning</p>
                <p className="label-caps mt-2 text-ivory/55">Designer</p>
              </div>
            </div>
            <a
              href="#inquire"
              className="btn-shine mt-9 inline-flex min-h-[52px] items-center justify-center rounded-full bg-copper px-9 text-[11.5px] uppercase tracking-[0.2em] text-signature transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Work with Dee</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
