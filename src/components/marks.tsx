import type { ReactNode } from "react";

export function OutLink({
  href,
  children,
  tone = "ink",
}: {
  href: string;
  children: ReactNode;
  tone?: "ink" | "paper";
}) {
  const className =
    tone === "paper"
      ? "group underline decoration-[#6e675c] decoration-1 underline-offset-[0.22em] transition-colors duration-150 hover:decoration-paper"
      : "link group";

  return (
    <a className={className} href={href} target="_blank" rel="me noreferrer">
      {children}
      <span
        aria-hidden="true"
        className="inline-block motion-safe:transition-transform motion-safe:duration-150 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-px"
      >
        {" "}
        ↗
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function SectionHeading({
  index,
  title,
  lede,
  id,
}: {
  index: string;
  title: string;
  lede?: string;
  id?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 border-t border-ink pt-8 lg:grid-cols-12 lg:gap-8">
      <p className="font-mono text-[0.8125rem] tracking-[0.16em] text-mute uppercase lg:col-span-3 lg:pt-3">
        {index}
      </p>
      <div className="lg:col-span-9">
        <h2
          id={id}
          className="font-display text-[clamp(2.6rem,5vw,4.25rem)] leading-[0.92] font-medium tracking-[-0.03em]"
        >
          {title}
        </h2>
        {lede ? (
          <p className="mt-4 max-w-xl text-lg leading-snug text-soft">{lede}</p>
        ) : null}
      </div>
    </div>
  );
}

export function Meta({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[0.8125rem] tracking-[0.14em] text-mute uppercase lg:col-span-3 lg:pt-2">
      {children}
    </div>
  );
}
