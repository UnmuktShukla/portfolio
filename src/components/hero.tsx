import { figure, heroIndex, profile } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-[1440px] flex-col px-5 pt-8 pb-6 sm:px-8 lg:px-12 lg:pt-12"
    >
      <div className="grid flex-1 grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10">
        <p className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-ink pb-3 font-mono text-[0.8125rem] tracking-[0.16em] text-mute uppercase lg:col-span-12">
          <span>Fig. 01 — Systems</span>
          <span>{profile.location}</span>
          <span>2026</span>
        </p>

        <h1
          aria-label={profile.name}
          className="font-display text-[clamp(3.4rem,17vw,8.6rem)] leading-[0.8] font-medium tracking-[-0.045em] lg:col-span-8 lg:row-start-2"
        >
          <span className="block">Unmukt</span>
          <span className="mt-1 block lg:mt-2 lg:pl-[12%]">Shukla</span>
        </h1>

        <div className="max-w-sm lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:max-w-none lg:pt-3">
          <p className="font-display text-[1.65rem] leading-[1.15] font-medium tracking-[-0.02em] text-pretty">
            I build the machinery that lets AI work inside real clinics.
          </p>
          <p className="mt-4 text-lg leading-snug text-soft">
            Bounded agents. And the bridges into software that was never meant
            to meet a model.
          </p>
        </div>

        <figure className="border border-ink border-l-[3px] border-l-accent lg:col-span-7 lg:row-start-3">
          <figcaption className="flex items-baseline justify-between gap-4 border-b border-ink px-4 py-2 font-mono text-[0.75rem] tracking-[0.14em] uppercase">
            <span>How a fix gets proposed</span>
            <span className="text-mute">Juno</span>
          </figcaption>
          <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {figure.map((step) => (
              <div
                key={step.n}
                className="bg-paper px-4 py-4 motion-safe:transition-colors motion-safe:duration-150 hover:bg-raised"
              >
                <p className="font-mono text-[0.75rem] tracking-[0.14em] text-mute">
                  {step.n}
                </p>
                <p className="mt-2 font-display text-2xl leading-none tracking-[-0.03em]">
                  {step.title}
                </p>
                <p className="mt-2 text-pretty text-[0.98rem] leading-snug text-soft">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </figure>

        <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9 lg:row-start-3">
          <p className="font-mono text-[0.8125rem] tracking-[0.16em] text-mute uppercase">
            Now
          </p>
          <p className="mt-2 font-display text-[1.75rem] leading-[1.05] tracking-[-0.03em]">
            {profile.role}
          </p>
          <p className="mt-3 max-w-xs text-soft">
            The current job is keeping those systems honest after the demo.
          </p>
          <a href="#work" className="link mt-6 w-fit font-medium">
            See the work
          </a>
        </div>
      </div>

      <nav aria-label="Contents" className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ink pt-5 sm:grid-cols-4">
        {heroIndex.map((item) => (
          <a key={item.href} href={item.href} className="group block">
            <span className="font-mono text-[0.75rem] tracking-[0.16em] text-accent">
              {item.n}
            </span>
            <span className="mt-1 block font-display text-[1.7rem] leading-none tracking-[-0.03em] transition-colors duration-150 group-hover:text-accent">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </section>
  );
}
