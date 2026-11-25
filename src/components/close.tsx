import { profile } from "@/lib/content";
import { OutLink } from "@/components/marks";

export function Close() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-ink bg-ink text-paper"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <p className="font-mono text-[0.8125rem] tracking-[0.16em] text-[#cfc6b6] uppercase">
          Contact
        </p>
        <p className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,5.5vw,4.75rem)] leading-[0.95] font-medium tracking-[-0.035em] text-pretty">
          If it has to work on a Tuesday, I want to build it.
        </p>
        <div className="mt-10 flex flex-col gap-4 text-2xl sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
          <a className="underline decoration-[#6e675c] decoration-1 underline-offset-[0.22em] hover:decoration-paper" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <OutLink href={profile.linkedin} tone="paper">
            LinkedIn
          </OutLink>
          <OutLink href={profile.github} tone="paper">
            GitHub
          </OutLink>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-[#3a342c] pt-5 font-mono text-[0.8125rem] tracking-[0.12em] text-[#cfc6b6] uppercase sm:flex-row sm:justify-between">
          <p>{profile.location}</p>
          <p>Unmukt Shukla · 2026</p>
        </div>
      </div>
    </footer>
  );
}
