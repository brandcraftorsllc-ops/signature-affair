import Link from "next/link";

/** The homepage's button styles, shared by the inner pages. */
const VARIANTS = {
  primary: "bg-copper text-signature transition-transform duration-300 hover:-translate-y-0.5",
  outline:
    "border border-copper/70 text-copper-light transition-all duration-300 hover:-translate-y-0.5 hover:border-copper hover:text-ivory",
  ivory: "bg-ivory/95 text-ink transition-colors duration-300 hover:bg-copper hover:text-signature",
} as const;

const SIZES = {
  lg: "min-h-[52px] px-9 text-[12px] tracking-[0.2em]",
  md: "min-h-[48px] px-6 text-[11px] tracking-[0.18em]",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;
export type ButtonSize = keyof typeof SIZES;

export function buttonCls(variant: ButtonVariant = "primary", size: ButtonSize = "lg", extra = "") {
  return `btn-shine inline-flex items-center justify-center rounded-full uppercase ${SIZES[size]} ${VARIANTS[variant]} ${extra}`;
}

/** Link-styled button. In-page anchors (#…) render a plain <a> so native smooth scrolling applies. */
export function ButtonLink({
  href,
  children,
  variant,
  size,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  const cls = buttonCls(variant, size, className);
  const inner = <span className="relative z-10">{children}</span>;
  return href.startsWith("#") ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
