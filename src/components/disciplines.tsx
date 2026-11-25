import { disciplines } from "@/lib/content";
import { SectionHeading } from "@/components/marks";

export function Disciplines() {
  return (
    <section
      id="disciplines"
      aria-labelledby="disciplines-title"
      className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-14 sm:px-8 lg:px-12 lg:py-16"
    >
      <SectionHeading
        id="disciplines-title"
        index="Practice"
        title="Disciplines"
        lede="Grouped by the kind of problem, not by how many logos fit on a line."
      />
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-ink pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {disciplines.map((group) => (
          <div key={group.n}>
            <p className="font-mono text-[0.75rem] tracking-[0.16em] text-mute">
              {group.n}
            </p>
            <h3 className="mt-2 font-display text-[1.85rem] leading-none tracking-[-0.03em]">
              {group.title}
            </h3>
            <ul className="mt-5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border-t border-line py-2.5 text-[1.02rem] leading-snug"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 border-t border-line pt-4 font-mono text-[0.8125rem] tracking-[0.04em] text-soft">
        Google Cloud Digital Leader
        <span className="px-3 text-mute" aria-hidden="true">
          ·
        </span>
        Principles of UX/UI Design, Meta
      </p>
    </section>
  );
}
