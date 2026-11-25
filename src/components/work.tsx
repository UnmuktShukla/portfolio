import { clinicSpec, spiderStates } from "@/lib/content";
import { Meta, OutLink, SectionHeading } from "@/components/marks";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-14 sm:px-8 lg:px-12 lg:py-16"
    >
      <SectionHeading
        id="work-title"
        index="Selected"
        title="Work"
        lede="Two of these run in production at a health company. Two are public. The last two are still on the bench, and labeled that way."
      />

      <article className="mt-16 grid grid-cols-1 gap-6 border-t border-ink pt-8 lg:mt-20 lg:grid-cols-12 lg:gap-8">
        <Meta>
          <p>01</p>
          <p className="mt-3 normal-case tracking-normal text-soft">
            Neurality Health
            <br />
            2025 —
          </p>
        </Meta>
        <div className="lg:col-span-9">
          <h3 className="font-display text-[clamp(3.2rem,7vw,6rem)] leading-[0.86] font-medium tracking-[-0.04em]">
            Juno
          </h3>
          <p className="mt-5 max-w-xl font-display text-2xl leading-snug tracking-[-0.02em] italic">
            An internal copilot for when the product misbehaves.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="border-t border-ink pt-4">
              <p className="font-mono text-[0.75rem] tracking-[0.16em] text-mute uppercase">
                Problem
              </p>
              <p className="mt-3 text-soft">
                The cause of a failure rarely lives in one file. It sits between
                the logs, what the user just did, and the code that handled it.
                People were assembling that picture by hand.
              </p>
            </div>
            <div className="border-t border-ink pt-4">
              <p className="font-mono text-[0.75rem] tracking-[0.16em] text-mute uppercase">
                Decision
              </p>
              <p className="mt-3 text-soft">
                Juno pulls the three together, then drops context the question
                does not need. The agent is a LangGraph with an explicit state.
                It does not get to repeat a bad step, and it does not get to
                act outside the graph.
              </p>
            </div>
            <div className="border-t border-ink pt-4">
              <p className="font-mono text-[0.75rem] tracking-[0.16em] text-mute uppercase">
                Outcome
              </p>
              <p className="mt-3 text-soft">
                A suggested fix grounded in the trace, instead of a transcript
                of the logs. The hard part was not calling a model. It was
                deciding what the model is forbidden to do.
              </p>
            </div>
          </div>
          <p className="mt-8 font-mono text-[0.8125rem] tracking-[0.08em] text-mute uppercase">
            In production · not a public repository
          </p>
        </div>
      </article>

      <article className="mt-20 grid grid-cols-1 gap-6 border-t border-ink pt-8 lg:grid-cols-12 lg:gap-8">
        <Meta>
          <p>02</p>
          <p className="mt-3 normal-case tracking-normal text-soft">
            Neurality Health
            <br />
            2025 —
          </p>
        </Meta>
        <div className="lg:col-span-9">
          <h3 className="max-w-4xl font-display text-[clamp(2.4rem,4.6vw,4.25rem)] leading-[0.96] font-medium tracking-[-0.03em] text-pretty">
            The clinic keeps its software. The cloud still has to know.
          </h3>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-lg leading-snug text-soft">
                Practice-management systems do not get replaced because a new
                product wishes they would. Appointments lived in a local
                database. The bridge to the cloud was a third-party dependency
                heading out of support.
              </p>
              <p className="mt-4 text-lg leading-snug text-soft">
                The service reads that database and speaks outward. Alongside
                it, workflows reverse-engineered from the legacy product create,
                move, update, and delete appointments.
              </p>
            </div>
            <dl className="border-t border-ink lg:col-span-7">
              {clinicSpec.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-1 border-b border-line py-3 sm:grid-cols-[7.5rem_1fr] sm:gap-4"
                >
                  <dt className="font-mono text-[0.75rem] tracking-[0.14em] text-mute uppercase sm:pt-1">
                    {row.label}
                  </dt>
                  <dd className="text-soft">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </article>

      <article className="mt-20 grid grid-cols-1 gap-6 border-t border-ink pt-8 lg:grid-cols-12 lg:gap-8">
        <Meta>
          <p>03</p>
          <p className="mt-3 normal-case tracking-normal text-soft">
            Personal
            <br />
            2026
          </p>
        </Meta>
        <div className="lg:col-span-9">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <p className="font-display text-[clamp(2.1rem,3.6vw,3.4rem)] leading-[1.02] font-medium tracking-[-0.03em] text-pretty italic lg:col-span-6">
              A law you can mention is not a law you can build a company on.
            </p>
            <div className="lg:col-span-6">
              <h3 className="font-display text-4xl leading-none tracking-[-0.03em]">
                DPDP desk
              </h3>
              <p className="mt-4 text-soft">
                A research workspace for India’s Digital Personal Data
                Protection landscape. Market, competitors, the shape of the
                Act, and the decisions still open. Notes edit in the browser. A
                command palette moves the desk. Evidence and claims stay in
                separate piles.
              </p>
              <p className="mt-3 text-soft">
                Research scaffolding, not legal advice.
              </p>
              <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                <OutLink href="https://dpdp-research.vercel.app">Live desk</OutLink>
                <OutLink href="https://github.com/UnmuktShukla/DPDP-research">
                  Source
                </OutLink>
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="mt-20 grid grid-cols-1 gap-6 border-t border-ink pt-8 lg:grid-cols-12 lg:gap-8">
        <Meta>
          <p>04</p>
          <p className="mt-3 normal-case tracking-normal text-soft">
            Commission
            <br />
            2026
          </p>
        </Meta>
        <div className="grid gap-8 lg:col-span-9 lg:grid-cols-12">
          <div className="flex min-h-72 flex-col justify-between bg-accent p-6 text-accent-ink sm:p-8 lg:col-span-5">
            <p className="font-mono text-[0.75rem] tracking-[0.18em] uppercase">
              A school site
            </p>
            <p className="font-display text-[clamp(2.6rem,4vw,3.6rem)] leading-[0.88] font-medium tracking-[-0.03em]">
              RPS
              <br />
              Bal Sainik
              <br />
              Vidyalaya
            </p>
            <p className="font-mono text-[0.75rem] tracking-[0.14em] uppercase">
              Next.js · art directed
            </p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[0.98] tracking-[-0.03em]">
              Set in type, not in a template.
            </h3>
            <p className="mt-4 text-lg leading-snug text-soft">
              The public site for a CBSE sainik school. Prospectus, admissions,
              campus, and the things the school actually says it stands for:
              discipline, study, the whole student. Bodoni, a visual system of
              its own, built in Next.js.
            </p>
            <p className="mt-4 text-lg leading-snug text-soft">
              I grew up in an Army family. This brief was not abstract.
            </p>
            <p className="mt-5">
              <OutLink href="https://github.com/UnmuktShukla/rpsbsv">Source</OutLink>
            </p>
          </div>
        </div>
      </article>

      <article className="mt-20 grid grid-cols-1 gap-6 border-t border-ink pt-8 lg:grid-cols-12 lg:gap-8">
        <Meta>
          <p>05</p>
          <p className="mt-3 normal-case tracking-normal text-soft">
            Personal
            <br />
            2026
          </p>
        </Meta>
        <div className="lg:col-span-9">
          <h3 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-[-0.03em]">
            SpiderPet
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-snug text-soft">
            A desktop companion in Electron. Four moods, gravity, and a sprite
            sheet that lied about being transparent. A prep tool flood-fills
            the painted checkerboard and writes the frame map, so the runtime
            never guesses.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-px border border-ink bg-line sm:grid-cols-2 lg:grid-cols-4">
            {spiderStates.map((state) => (
              <div key={state.title} className="bg-paper px-4 py-4">
                <p className="font-display text-xl tracking-[-0.03em]">
                  {state.title}
                </p>
                <p className="mt-2 text-[0.98rem] leading-snug text-soft">
                  {state.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5">
            <OutLink href="https://github.com/UnmuktShukla/spiderman">Source</OutLink>
          </p>
        </div>
      </article>

      <div className="mt-20 grid grid-cols-1 gap-6 border-t border-ink pt-8 lg:grid-cols-12 lg:gap-8">
        <p className="font-mono text-[0.8125rem] tracking-[0.16em] text-mute uppercase lg:col-span-3">
          On the bench
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:col-span-9">
          <div>
            <h3 className="font-display text-2xl tracking-[-0.03em]">
              AI Engineering Radar
            </h3>
            <p className="mt-2 text-soft">
              A personal desk for engineering feeds. Ingestion is the only
              process allowed to touch the network. The API never fetches.
              Built one step at a time, and not finished.
            </p>
            <p className="mt-3">
              <OutLink href="https://github.com/UnmuktShukla/AI-Blog">Source</OutLink>
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl tracking-[-0.03em]">
              Ticket platform
            </h3>
            <p className="mt-2 text-soft">
              FastAPI, Postgres, Redis, a worker. Auth, tickets, an async
              analysis job, cache invalidation. A study of the machinery, kept
              honest about being a study.
            </p>
            <p className="mt-3">
              <OutLink href="https://github.com/UnmuktShukla/TicketingSystem">
                Source
              </OutLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
