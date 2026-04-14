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
  { label: "OSA", href: "#rsvp" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--muted)]/70 bg-[var(--background)]/78 shadow-[0_8px_30px_rgba(20,14,10,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-4">
          <span className="font-serif text-2xl font-light tracking-wide text-[var(--foreground)]">
            M &amp; K
          </span>
          <span className="hidden h-4 w-px bg-[var(--primary)]/40 lg:block" />
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] lg:inline">
            9 september 2027
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70 transition-colors hover:text-[var(--foreground)] after:absolute after:bottom-[-8px] after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex items-center text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--muted)] bg-[var(--background)] lg:hidden">
          <nav className="flex flex-col px-6 py-6">
            {sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-[var(--muted)]/50 py-4 text-sm font-light text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
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

