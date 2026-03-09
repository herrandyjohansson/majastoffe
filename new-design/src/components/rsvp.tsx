'use client';

import { useEffect, useState } from 'react';

const FORMSPREE_ENDPOINT = "#"; // Replace with your Formspree endpoint when ready

function RsvpForm() {
  return (
    <div className="mx-auto max-w-xl">
      <form
        action={FORMSPREE_ENDPOINT}
        method="POST"
        className="space-y-6"
        autoComplete="off"
        suppressHydrationWarning
      >
        <div className="grid gap-6 sm:grid-cols-2" suppressHydrationWarning>
          <div>
            <label
              htmlFor="full_name"
              className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70"
            >
              Full Name *
            </label>
            <input
              id="full_name"
              name="full_name"
              required
              className="w-full border-b border-[var(--muted)] bg-transparent py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70"
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border-b border-[var(--muted)] bg-transparent py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)]"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="attending"
              className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70"
            >
              Will you attend? *
            </label>
            <select
              id="attending"
              name="attending"
              required
              defaultValue=""
              className="w-full border-b border-[var(--muted)] bg-transparent py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)]"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="yes">Yes, I will be there!</option>
              <option value="no">Sorry, I cannot attend</option>
              <option value="maybe">I will confirm later</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="guest_count"
              className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70"
            >
              Number of guests
            </label>
            <select
              id="guest_count"
              name="guest_count"
              defaultValue="1"
              className="w-full border-b border-[var(--muted)] bg-transparent py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)]"
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="4+">More than 4</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="dietary"
            className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70"
          >
            Dietary requirements / Notes
          </label>
          <textarea
            id="dietary"
            name="dietary"
            rows={3}
            className="w-full border-b border-[var(--muted)] bg-transparent py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--primary)]"
            placeholder="Any allergies or special requirements..."
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full border border-[var(--foreground)] bg-[var(--foreground)] py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--background)] transition hover:bg-transparent hover:text-[var(--foreground)]"
        >
          Send RSVP
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
      className="border-t border-[var(--muted)] py-20"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Join Us
        </p>
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          RSVP
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-[var(--foreground)]/65">
          Please let us know if you can join us by <strong>September 1st, 2026</strong>.
        </p>
      </div>

      {isHydrated ? (
        <RsvpForm />
      ) : (
        <div className="mx-auto max-w-xl py-8 text-center">
          <p className="text-sm text-[var(--foreground)]/65">Loading form...</p>
        </div>
      )}

      <div className="mx-auto mt-12 max-w-md text-center">
        <p className="text-sm text-[var(--foreground)]/65">
          Having trouble with the form? Reach out to us directly.
        </p>
      </div>
    </section>
  );
}

