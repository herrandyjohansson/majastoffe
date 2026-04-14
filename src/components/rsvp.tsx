'use client';

import { useEffect, useState } from 'react';

const FORMSPREE_ENDPOINT = "#"; // Replace with your Formspree endpoint when ready

function RsvpForm() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-[var(--muted)]/85 bg-white/55 p-6 shadow-sm">
      <form
        action={FORMSPREE_ENDPOINT}
        method="POST"
        className="space-y-6"
        autoComplete="off"
        suppressHydrationWarning
      >
        <div className="grid gap-6 sm:grid-cols-2" suppressHydrationWarning>
          <div>
            <label htmlFor="full_name" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70">
              Fullständigt namn *
            </label>
            <input
              id="full_name"
              name="full_name"
              required
              className="w-full rounded-lg border border-[var(--muted)]/90 bg-white/70 px-3 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
              placeholder="Ditt namn"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70"
            >
              E-post *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-[var(--muted)]/90 bg-white/70 px-3 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
              placeholder="din@epost.se"
            />
          </div>
          <div>
            <label
              htmlFor="attending"
              className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70"
            >
              Kommer du? *
            </label>
            <select
              id="attending"
              name="attending"
              required
              defaultValue=""
              className="w-full rounded-lg border border-[var(--muted)]/90 bg-white/70 px-3 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
            >
              <option value="" disabled>
                Jag återkommer
              </option>
              <option value="yes">Ja, jag kommer!</option>
              <option value="no">Tyvärr, jag kan inte komma</option>
              <option value="maybe">Jag återkommer senare</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="guest_count"
              className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70"
            >
              Antal gäster
            </label>
            <select
              id="guest_count"
              name="guest_count"
              defaultValue="1"
              className="w-full rounded-lg border border-[var(--muted)]/90 bg-white/70 px-3 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
            >
              <option value="1">1 gäst</option>
              <option value="2">2 gäster</option>
              <option value="3">3 gäster</option>
              <option value="4">4 gäster</option>
              <option value="4+">Fler än 4</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="dietary"
            className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70"
          >
            Kostönskemål / Anteckningar
          </label>
          <textarea
            id="dietary"
            name="dietary"
            rows={3}
            className="w-full rounded-lg border border-[var(--muted)]/90 bg-white/70 px-3 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
            placeholder="Eventuella allergier eller specialönskemål..."
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-full border border-[var(--foreground)] bg-[var(--foreground)] py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--background)] shadow-sm transition hover:-translate-y-0.5 hover:bg-transparent hover:text-[var(--foreground)]"
        >
          Skicka OSA
        </button>
      </form>
    </div>
  );
}

export function Rsvp() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section
      id="rsvp"
      className="lux-section fade-in-up px-6 py-20 lg:px-10"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Fira med oss
        </p>
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          OSA
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-[var(--foreground)]/65">
          Vänligen meddela oss om du kan komma senast <strong>1 september 2026</strong>.
        </p>
      </div>

      {isHydrated ? (
        <RsvpForm />
      ) : (
        <div className="mx-auto max-w-xl py-8 text-center">
          <p className="text-sm text-[var(--foreground)]/65">Laddar formulär...</p>
        </div>
      )}

      <div className="mx-auto mt-12 max-w-md text-center">
        <p className="text-sm text-[var(--foreground)]/65">
          Problem med formuläret? Kontakta oss direkt.
        </p>
      </div>
    </section>
  );
}

