'use client';

import { useEffect, useState } from 'react';

const FORMSPREE_ENDPOINT = "#"; // Replace with your Formspree endpoint when ready

function RsvpForm() {
  return (
    <div className="rounded-lg bg-[color-mix(in_oklab,var(--background)_99%,white)]/95 p-6 shadow-md ring-1 ring-[color-mix(in_oklab,var(--primary)_20%,transparent)] md:p-8">
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="space-y-6"
          autoComplete="off"
          suppressHydrationWarning
        >
          <div className="grid gap-4 sm:grid-cols-2" suppressHydrationWarning>
            <div className="space-y-1.5">
              <label
                htmlFor="full_name"
                className="block text-xs font-medium uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--foreground)_70%,white)]"
              >
                Fullständigt namn *
              </label>
              <input
                id="full_name"
                name="full_name"
                required
                className="w-full rounded-xl border border-[color-mix(in_oklab,var(--primary)_25%,transparent)] bg-[color-mix(in_oklab,var(--secondary)_30%,white)]/50 px-3 py-2 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--primary)_35%,transparent)]"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--foreground)_70%,white)]"
              >
                E-postadress *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-[color-mix(in_oklab,var(--primary)_25%,transparent)] bg-[color-mix(in_oklab,var(--secondary)_30%,white)]/50 px-3 py-2 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--primary)_35%,transparent)]"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="attending"
                className="block text-xs font-medium uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--foreground)_70%,white)]"
              >
                Kommer du? *
              </label>
              <select
                id="attending"
                name="attending"
                required
                defaultValue=""
                className="w-full rounded-xl border border-[color-mix(in_oklab,var(--primary)_25%,transparent)] bg-[color-mix(in_oklab,var(--secondary)_30%,white)]/50 px-3 py-2 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--primary)_35%,transparent)]"
              >
                <option value="" disabled>
                  Välj ett alternativ
                </option>
                <option value="yes">Ja, jag kommer!</option>
                <option value="no">Tyvärr, jag kan inte komma</option>
                <option value="maybe">Jag återkommer</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="guest_count"
                className="block text-xs font-medium uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--foreground)_70%,white)]"
              >
                Antal personer (inklusive dig)
              </label>
              <select
                id="guest_count"
                name="guest_count"
                defaultValue="1"
                className="w-full rounded-xl border border-[color-mix(in_oklab,var(--primary)_25%,transparent)] bg-[color-mix(in_oklab,var(--secondary)_30%,white)]/50 px-3 py-2 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--primary)_35%,transparent)]"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4+">4+</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="dietary"
              className="block text-xs font-medium uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--foreground)_70%,white)]"
            >
              Allergier / kostönskemål / övrigt
            </label>
            <textarea
              id="dietary"
              name="dietary"
              rows={3}
              className="w-full rounded-xl border border-[color-mix(in_oklab,var(--primary)_25%,transparent)] bg-[color-mix(in_oklab,var(--secondary)_30%,white)]/50 px-3 py-2 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--primary)_35%,transparent)]"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[color-mix(in_oklab,var(--primary)_88%,black)]"
          >
            Skicka RSVP
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
      className="mt-16 space-y-8 border-t border-[color-mix(in_oklab,var(--primary)_25%,transparent)] pt-12"
    >
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)] mb-2">
          Kindly Request Your Response
        </h2>
        <div className="h-px bg-gradient-to-r from-[var(--primary)] to-transparent w-12" />
      </div>
      <p className="text-base leading-relaxed text-[color-mix(in_oklab,var(--foreground)_80%,white)] max-w-xl">
        Please let us know if you can join us by <strong>September 1st, 2026</strong>.
      </p>

      {isHydrated ? (
        <RsvpForm />
      ) : (
        <div className="rounded-lg bg-[color-mix(in_oklab,var(--background)_99%,white)]/95 p-6 shadow-md ring-1 ring-[color-mix(in_oklab,var(--primary)_20%,transparent)] md:p-8">
          <p className="text-sm text-[color-mix(in_oklab,var(--foreground)_75%,white)]">Loading form...</p>
        </div>
      )}

      <div className="rounded-2xl bg-[color-mix(in_oklab,var(--secondary)_28%,white)]/60 p-6 ring-1 ring-[color-mix(in_oklab,var(--primary)_20%,transparent)]">
        <p className="text-sm text-[color-mix(in_oklab,var(--foreground)_82%,white)]">
          Hittar du inte formuläret? Kontakta oss direkt:
        </p>
        <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
          to be added
        </p>
      </div>
    </section>
  );
}

