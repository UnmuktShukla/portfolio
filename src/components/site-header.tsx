"use client";

import { useState } from "react";
import { nav, profile } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="font-mono text-[0.8125rem] tracking-[0.16em] uppercase"
        >
          Unmukt Shukla
        </a>

        <nav aria-label="Page" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <OutGitHub />
        </nav>

        <button
          type="button"
          className="min-h-11 min-w-11 font-mono text-[0.8125rem] tracking-[0.14em] uppercase md:hidden"
          aria-expanded={open}
          aria-controls="site-index"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Index"}
        </button>
      </div>

      {open ? (
        <nav
          id="site-index"
          aria-label="Page"
          className="border-t border-line px-5 py-6 sm:px-8 md:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  className="block py-3 font-display text-4xl leading-none tracking-[-0.03em]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={profile.github}
                className="link font-mono text-[0.8125rem] tracking-[0.14em] uppercase"
                target="_blank"
                rel="me noreferrer"
                onClick={() => setOpen(false)}
              >
                GitHub ↗
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function OutGitHub() {
  return (
    <a
      href={profile.github}
      className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase hover:text-accent"
      target="_blank"
      rel="me noreferrer"
    >
      GitHub
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
