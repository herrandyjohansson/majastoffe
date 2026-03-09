export function Footer() {
  return (
    <footer className="mt-16 border-t border-[color-mix(in_oklab,var(--primary)_25%,transparent)] pb-8 pt-12">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 text-sm text-[color-mix(in_oklab,var(--foreground)_75%,white)] sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)]">
            Contact
          </h3>
          <div className="mt-4 space-y-2 text-[color-mix(in_oklab,var(--foreground)_80%,white)]">
            <p>to be added</p>
            <p>to be added</p>
            <p>to be added</p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#story" className="hover:text-[var(--primary)] transition">
                Our Story
              </a>
            </li>
            <li>
              <a href="#schedule" className="hover:text-[var(--primary)] transition">
                Schedule
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-[var(--primary)] transition">
                Location
              </a>
            </li>
            <li>
              <a href="#rsvp" className="hover:text-[var(--primary)] transition">
                RSVP
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)]">
            Save the Date
          </h3>
          <div className="mt-4 space-y-2">
            <p className="font-serif text-[var(--foreground)]">
              Thursday, September 9th, 2027
            </p>
            <p>Monda, Spain</p>
            <p className="pt-2 text-[color-mix(in_oklab,var(--foreground)_70%,white)] italic">
              With love, Maja &amp; Kristoffer
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4 text-center text-xs text-[color-mix(in_oklab,var(--foreground)_60%,white)] sm:px-6 lg:px-8">
        © 2027 Maja &amp; Kristoffer. All rights reserved.
      </div>
    </footer>
  );
}

