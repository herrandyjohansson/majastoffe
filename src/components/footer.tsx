export function Footer() {
  return (
    <footer className="mt-16 border-t border-[color-mix(in_oklab,var(--primary)_20%,transparent)] pb-6 pt-10">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 text-sm text-[color-mix(in_oklab,var(--foreground)_80%,white)] sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Kontakt
          </h3>
          <div className="mt-3 space-y-1">
            <p>to be added</p>
            <p>to be added</p>
            <p className="text-[color-mix(in_oklab,var(--foreground)_70%,white)]">
              to be added
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Snabblänkar
          </h3>
          <ul className="mt-3 space-y-1">
            <li>
              <a href="#story" className="hover:text-[var(--primary)]">
                Vår historia
              </a>
            </li>
            <li>
              <a href="#schedule" className="hover:text-[var(--primary)]">
                Schema
              </a>
            </li>
            <li>
              <a href="#location" className="hover:text-[var(--primary)]">
                Plats
              </a>
            </li>
            <li>
              <a href="#rsvp" className="hover:text-[var(--primary)]">
                RSVP
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Spara datumet
          </h3>
          <div className="mt-3 space-y-1">
            <p className="font-medium text-[var(--foreground)]">
              Torsdagen den 9 september 2027
            </p>
            <p>Monda, Spanien</p>
            <p className="pt-2 text-[color-mix(in_oklab,var(--foreground)_75%,white)]">
              Med kärlek, Maja &amp; Kristoffer
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4 text-center text-xs text-[color-mix(in_oklab,var(--foreground)_65%,white)] sm:px-6 lg:px-8">
        © 2027 Maja &amp; Kristoffer
      </div>
    </footer>
  );
}

