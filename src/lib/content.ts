export const profile = {
  name: "Unmukt Shukla",
  location: "Lucknow",
  role: "SDE-1, Neurality Health",
  github: "https://github.com/UnmuktShukla",
  linkedin: "https://www.linkedin.com/in/unmukt-shukla-216841217",
  email: "unmukt2003shukla@gmail.com",
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#record", label: "Record" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroIndex = [
  { n: "01", href: "#work", label: "Work" },
  { n: "02", href: "#record", label: "Record" },
  { n: "03", href: "#about", label: "About" },
  { n: "04", href: "#disciplines", label: "Practice" },
] as const;

export const figure = [
  {
    n: "01",
    title: "Logs",
    body: "Application events, and the trace of what just failed.",
  },
  {
    n: "02",
    title: "Context",
    body: "Code and the session, cut to what the question needs.",
  },
  {
    n: "03",
    title: "Bounds",
    body: "Guardrails, before the model is allowed to move.",
  },
  {
    n: "04",
    title: "Action",
    body: "A suggested fix. Or a stop, if the graph says so.",
  },
] as const;

export const clinicSpec = [
  { label: "Where", value: "A Windows service, sitting beside the clinic." },
  { label: "Read", value: "The practice database, over ODBC." },
  { label: "Write", value: "REST, out to the cloud, as it happens." },
  { label: "Replaced", value: "A third-party sync on its way out of support." },
  { label: "Reach", value: "Real-time sync across 100+ client deployments." },
  {
    label: "Also",
    value:
      "Scheduling, rescheduling, updates, and cancellations in Django, so nobody retypes them.",
  },
] as const;

export const spiderStates = [
  { title: "Idle", body: "Faces the cursor. After five still seconds, looks around." },
  { title: "Hang", body: "Let go near the ceiling and it snaps up and stays." },
  { title: "Fall", body: "Let go anywhere else. Gravity, a landing, then idle." },
  { title: "Drag", body: "Grabbing it interrupts whatever it was doing." },
] as const;

export const record = [
  {
    years: "2026 —",
    role: "SDE-1",
    org: "Neurality Health",
    detail:
      "Production AI and the services under it. The work is the copilot, the bounds around the agent, and the path from a clinic’s existing software into the cloud.",
  },
  {
    years: "2025 — 26",
    role: "Software Engineer",
    org: "Neurality Health",
    detail:
      "Joined to build Juno and the clinic bridge. A year of taking prototypes and making them behave on machines that were already in use.",
  },
  {
    years: "2024",
    role: "Intern, Networking & Cybersecurity",
    org: "DRDO, Hyderabad",
    detail:
      "A month with the Defence Research and Development Organisation. Networks, as they actually sit in a lab, not as a diagram.",
  },
  {
    years: "2024",
    role: "UI / UX Designer",
    org: "Satori XR, Chennai",
    detail:
      "Interface work at an XR studio, overlapping the internship. The habit of deciding what a screen is for, before decorating it.",
  },
  {
    years: "2023 — 24",
    role: "Design Head",
    org: "Photography Club, VIT Chennai",
    detail:
      "A year responsible for how the club looked in public. Posters, identity, the small decisions that make a student group feel intentional.",
  },
  {
    years: "2021 — 25",
    role: "B.Tech, CSE — AI & ML",
    org: "VIT Chennai",
    detail:
      "Computer science with a specialisation in artificial intelligence and machine learning. Google Cloud Digital Leader. Meta’s Principles of UX/UI Design.",
  },
] as const;

export const disciplines = [
  {
    n: "01",
    title: "AI systems",
    items: [
      "Agent state and guardrails, with LangGraph",
      "Context cut to the question, not the whole repo",
      "Copilots that read logs, sessions, and code together",
      "A refusal, when the graph does not allow the step",
    ],
  },
  {
    n: "02",
    title: "Backend",
    items: [
      "Python, Django, FastAPI",
      "PostgreSQL and Redis",
      "Async jobs, retries, and cache invalidation",
      "Docker, when the process actually needs it",
    ],
  },
  {
    n: "03",
    title: "Integration",
    items: [
      "Windows services next to software you cannot replace",
      "ODBC into a database that has to stay up",
      "REST as the door to the cloud",
      "Reverse-engineering a workflow before automating it",
    ],
  },
  {
    n: "04",
    title: "Surfaces",
    items: [
      "TypeScript, React, Next.js",
      "Electron, for a thing that lives on the desktop",
      "Interface design, practiced before it was a job requirement",
      "Type, grid, and restraint, when the product is a page",
    ],
  },
] as const;
