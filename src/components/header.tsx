"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { label: "Hem", href: "#home" },
  { label: "Vår historia", href: "#story" },
  { label: "Schema", href: "#schedule" },
  { label: "Plats", href: "#location" },
  { label: "Boende", href: "#accommodation" },
  { label: "FAQ", href: "#faq" },
  { label: "RSVP", href: "#rsvp" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[color-mix(in_oklab,var(--primary)_20%,transparent)] bg-[color-mix(in_oklab,var(--background)_92%,white)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="font-serif text-lg font-semibold tracking-tight text-[var(--foreground)]">
            M &amp; K
          </span>
          <span className="hidden text-xs text-[color-mix(in_oklab,var(--foreground)_70%,transparent)] sm:inline">
            9 September 2027 · Monda, Spain
          </span>
        </a>

        <nav className="hidden gap-6 text-[11px] font-medium uppercase tracking-[0.18em] text-[color-mix(in_oklab,var(--foreground)_75%,transparent)] sm:flex">
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--primary)_25%,transparent)] bg-[color-mix(in_oklab,var(--background)_96%,white)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] shadow-sm transition hover:border-[var(--primary)] hover:bg-[color-mix(in_oklab,var(--background)_92%,white)] sm:ml-4"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
        >
          <span className="mr-1 hidden sm:inline">Meny</span>
          {open ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-[color-mix(in_oklab,var(--primary)_15%,transparent)] bg-[color-mix(in_oklab,var(--background)_98%,white)] sm:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[color-mix(in_oklab,var(--foreground)_80%,transparent)]">
            {sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-[color-mix(in_oklab,var(--secondary)_50%,transparent)] hover:text-[var(--foreground)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

