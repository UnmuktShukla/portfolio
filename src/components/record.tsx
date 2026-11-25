import { record } from "@/lib/content";
import { SectionHeading } from "@/components/marks";

export function Record() {
  return (
    <section
      id="record"
      aria-labelledby="record-title"
      className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-14 sm:px-8 lg:px-12 lg:py-16"
    >
      <SectionHeading
        id="record-title"
        index="Roles"
        title="Record"
        lede="Ownership, in order. The engineering is at the top. The earlier lines are how the eye and the habits got there."
      />
      <ol className="mt-12">
        {record.map((item) => (
          <li
            key={`${item.years}-${item.role}`}
            className="grid grid-cols-1 gap-3 border-t border-ink py-7 lg:grid-cols-12 lg:gap-8 lg:py-8"
          >
            <p className="font-mono text-[0.8125rem] tracking-[0.14em] text-mute uppercase lg:col-span-3 lg:pt-2">
              {item.years}
            </p>
            <div className="lg:col-span-4">
              <h3 className="font-display text-[1.85rem] leading-[1.05] tracking-[-0.03em]">
                {item.role}
              </h3>
              <p className="mt-2 text-soft">{item.org}</p>
            </div>
            <p className="text-soft lg:col-span-5">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
