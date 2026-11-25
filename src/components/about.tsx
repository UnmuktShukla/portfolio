import { profile } from "@/lib/content";
import { SectionHeading } from "@/components/marks";

const facts = [
  { label: "Based", value: "Lucknow" },
  { label: "Now", value: "SDE-1, Neurality Health" },
  { label: "Studied", value: "VIT Chennai, CSE — AI & ML" },
  { label: "Before that", value: "An Army household" },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-14 sm:px-8 lg:px-12 lg:py-16"
    >
      <SectionHeading id="about-title" index="Person" title="About" />
      <div className="mt-10 grid grid-cols-1 gap-10 border-t border-ink pt-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <p className="font-mono text-[0.8125rem] tracking-[0.14em] text-mute uppercase">
            {profile.location}
          </p>
        </div>
        <div className="max-w-xl lg:col-span-5">
          <p className="font-display text-[1.65rem] leading-[1.2] tracking-[-0.02em]">
            I grew up in an Army family. That mostly trained me to own a problem
            until it is finished, including the boring parts.
          </p>
          <p className="mt-5 text-lg leading-snug text-soft">
            I studied computer science, with AI and machine learning, at VIT
            Chennai. I ran design for the photography club, spent a season on
            interfaces at an XR studio, and a month with DRDO in Hyderabad.
          </p>
          <p className="mt-5 text-lg leading-snug text-soft">
            The layer I like is where a demo becomes an operation. State you
            can inspect. A clinic database that has to stay up. A model that is
            not allowed to make the same mistake twice.
          </p>
        </div>
        <dl className="border-t border-ink lg:col-span-4 lg:border-t-0 lg:border-l lg:border-ink lg:pl-8">
          {facts.map((fact) => (
            <div key={fact.label} className="border-b border-line py-4">
              <dt className="font-mono text-[0.75rem] tracking-[0.16em] text-mute uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1 font-display text-2xl leading-tight tracking-[-0.03em]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
