import { Reveal } from "@/components/ui/Reveal";

/*
 * Brand statement feature: a copper medallion with concentric hairline rings and
 * figure-eight loops sweeping behind it, scattered glitter and twinkling sparkles.
 * Pure SVG + CSS, brand palette only (signature black / espresso, copper, ivory).
 */

const CX = 600;
const CY = 360;

// Deterministic pseudo-random generator so server and client render identically.
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// Glitter dots scattered along the loops and medallion edge.
const GLITTER = (() => {
  const r = rng(42);
  const dots: { x: number; y: number; r: number; o: number; d: number }[] = [];
  for (let i = 0; i < 70; i++) {
    const t = r() * Math.PI * 2;
    const band = r();
    let x: number, y: number;
    if (band < 0.4) {
      // around the medallion
      const rad = 300 + (r() - 0.5) * 70;
      x = CX + Math.cos(t) * rad;
      y = CY + Math.sin(t) * rad;
    } else {
      // along the left or right loop
      const side = band < 0.7 ? -1 : 1;
      x = CX + side * 250 + Math.cos(t) * (290 + (r() - 0.5) * 50);
      y = CY + Math.sin(t) * (190 + (r() - 0.5) * 40);
    }
    dots.push({ x, y, r: 0.6 + r() * 1.6, o: 0.25 + r() * 0.6, d: r() * 5 });
  }
  return dots;
})();

const STARS = [
  { x: 262, y: 168, s: 9, d: 0 },
  { x: 938, y: 150, s: 11, d: 1.2 },
  { x: 1032, y: 520, s: 8, d: 2.4 },
  { x: 180, y: 548, s: 10, d: 0.6 },
  { x: 600, y: 22, s: 8, d: 1.8 },
  { x: 600, y: 700, s: 7, d: 3 },
  { x: 822, y: 640, s: 6, d: 2 },
  { x: 384, y: 82, s: 6, d: 3.4 },
  { x: 1112, y: 300, s: 6, d: 0.9 },
  { x: 92, y: 330, s: 7, d: 2.7 },
];

// Four-point sparkle centred on (0,0).
const sparkle = (s: number) =>
  `M0 ${-s} C${s * 0.12} ${-s * 0.12} ${s * 0.12} ${-s * 0.12} ${s} 0 C${s * 0.12} ${s * 0.12} ${s * 0.12} ${
    s * 0.12
  } 0 ${s} C${-s * 0.12} ${s * 0.12} ${-s * 0.12} ${s * 0.12} ${-s} 0 C${-s * 0.12} ${-s * 0.12} ${-s * 0.12} ${
    -s * 0.12
  } 0 ${-s}Z`;

function Medallion() {
  const loops = [0, 1, 2, 3, 4];
  return (
    <svg
      viewBox="0 0 1200 720"
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute left-1/2 top-1/2 w-[205vw] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[150vw] lg:w-[1200px]"
    >
      <defs>
        <linearGradient id="saf-ring-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#A8643E" stopOpacity="0.05" />
          <stop offset="0.45" stopColor="#E8B38A" stopOpacity="0.85" />
          <stop offset="1" stopColor="#C98A5E" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="saf-ring-r" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#A8643E" stopOpacity="0.05" />
          <stop offset="0.45" stopColor="#E8B38A" stopOpacity="0.85" />
          <stop offset="1" stopColor="#C98A5E" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="saf-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E8B38A" />
          <stop offset="0.5" stopColor="#C98A5E" />
          <stop offset="1" stopColor="#A8643E" />
        </linearGradient>
        <radialGradient id="saf-disk" cx="0.5" cy="0.42" r="0.6">
          <stop offset="0" stopColor="#21170F" />
          <stop offset="0.65" stopColor="#140F0C" />
          <stop offset="1" stopColor="#0D0D0F" />
        </radialGradient>
        <radialGradient id="saf-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.55" stopColor="#E8B38A" stopOpacity="0.22" />
          <stop offset="1" stopColor="#E8B38A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="saf-dot" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FFF1E2" />
          <stop offset="0.5" stopColor="#E8B38A" stopOpacity="0.8" />
          <stop offset="1" stopColor="#E8B38A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* figure-eight loops sweeping behind the medallion */}
      <g fill="none" strokeWidth="1" className="saf-ring-glow">
        {loops.map((k) => (
          <ellipse
            key={`l${k}`}
            cx={CX - 250}
            cy={CY}
            rx={300 - k * 13}
            ry={196 - k * 9}
            stroke="url(#saf-ring-l)"
            strokeOpacity={1 - k * 0.15}
            transform={`rotate(${-8 - k * 3.5} ${CX - 250} ${CY})`}
          />
        ))}
        {loops.map((k) => (
          <ellipse
            key={`r${k}`}
            cx={CX + 250}
            cy={CY}
            rx={300 - k * 13}
            ry={196 - k * 9}
            stroke="url(#saf-ring-r)"
            strokeOpacity={1 - k * 0.15}
            transform={`rotate(${8 + k * 3.5} ${CX + 250} ${CY})`}
          />
        ))}
      </g>

      {/* medallion */}
      <circle cx={CX} cy={CY} r="345" fill="url(#saf-halo)" />
      <circle cx={CX} cy={CY} r="300" fill="url(#saf-disk)" />
      <g fill="none" className="saf-ring-glow">
        <circle cx={CX} cy={CY} r="318" stroke="#C98A5E" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="1 7" strokeLinecap="round" />
        <circle cx={CX} cy={CY} r="308" stroke="url(#saf-gold)" strokeOpacity="0.5" strokeWidth="0.75" />
        <circle cx={CX} cy={CY} r="300" stroke="url(#saf-gold)" strokeWidth="1.5" />
        <circle cx={CX} cy={CY} r="288" stroke="url(#saf-gold)" strokeOpacity="0.6" strokeWidth="0.75" />
        <circle cx={CX} cy={CY} r="276" stroke="#C98A5E" strokeOpacity="0.25" strokeWidth="0.75" />
      </g>

      {/* glitter */}
      {GLITTER.map((g, i) => (
        <circle
          key={i}
          cx={g.x.toFixed(1)}
          cy={g.y.toFixed(1)}
          r={g.r.toFixed(2)}
          fill="url(#saf-dot)"
          opacity={g.o.toFixed(2)}
          className={i % 3 === 0 ? "saf-twinkle" : undefined}
          style={i % 3 === 0 ? { animationDelay: `${g.d.toFixed(2)}s` } : undefined}
        />
      ))}

      {/* sparkles */}
      {STARS.map((s, i) => (
        <g key={i} transform={`translate(${s.x} ${s.y})`}>
          <path d={sparkle(s.s)} fill="#F3D2B3" className="saf-twinkle" style={{ animationDelay: `${s.d}s` }} />
        </g>
      ))}
    </svg>
  );
}

function Ornament() {
  return (
    <span className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-copper/70 sm:w-14" />
      <svg viewBox="0 0 24 22" className="h-2.5 w-2.5 text-copper">
        <path
          fill="currentColor"
          d="M12 21.6 10.3 20C4.3 14.6.3 11 .3 6.6.3 3 3.1.3 6.6.3c2 0 3.9.9 5.4 2.4C13.5 1.2 15.4.3 17.4.3c3.5 0 6.3 2.7 6.3 6.3 0 4.4-4 8-10 13.4L12 21.6Z"
        />
      </svg>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-copper/70 sm:w-14" />
    </span>
  );
}

export function SignatureStatement() {
  return (
    <section
      aria-labelledby="signature-statement"
      className="relative overflow-hidden bg-signature py-20 sm:py-24 lg:py-28"
      style={{ background: "radial-gradient(60% 55% at 50% 50%, #1B1410 0%, #0D0D0F 72%)" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />

      <Reveal>
        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center justify-center px-5 sm:min-h-[640px] sm:px-8 lg:min-h-[720px]">
          <Medallion />

          <div className="relative flex max-w-[300px] flex-col items-center text-center sm:max-w-[440px]">
            <h2
              id="signature-statement"
              className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.06] text-ivory"
            >
              Every Detail.
              <span className="text-copper-grad block italic">A Signature.</span>
            </h2>

            <div className="mt-5 sm:mt-6">
              <Ornament />
            </div>

            <p className="mt-4 font-display text-[17px] italic leading-snug text-ivory/80 sm:mt-5 sm:text-[21px]">
              Designed with intention.
              <br />
              Planned with grace.
            </p>

            <div className="mt-4 sm:mt-5">
              <Ornament />
            </div>

            <p className="mt-4 flex flex-col gap-1.5 text-[12px] uppercase tracking-[0.42em] text-copper-light sm:mt-5 sm:text-[13.5px]">
              <span>Elegant.</span>
              <span>Intentional.</span>
              <span>Unforgettable.</span>
            </p>

            <div className="mt-4 sm:mt-5">
              <Ornament />
            </div>

            <p className="label-caps mt-3 text-[10px] tracking-[0.34em] text-copper/75 sm:mt-4 sm:text-[10.5px]">
              The Signature Affair
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
