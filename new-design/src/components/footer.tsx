export function Footer() {
  return (
    <footer className="border-t border-[var(--muted)] py-16">
      <div className="mb-12 text-center">
        <p className="font-serif text-3xl font-light text-[var(--foreground)]">
          M &amp; K
        </p>
        <p className="mt-2 text-sm text-[var(--foreground)]/60">
          September 9th, 2027
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70">
        <a href="#home" className="hover:text-[var(--foreground)]">Home</a>
        <a href="#story" className="hover:text-[var(--foreground)]">Our Story</a>
        <a href="#schedule" className="hover:text-[var(--foreground)]">Schedule</a>
        <a href="#location" className="hover:text-[var(--foreground)]">Location</a>
        <a href="#accommodation" className="hover:text-[var(--foreground)]">Stay</a>
        <a href="#faq" className="hover:text-[var(--foreground)]">FAQ</a>
        <a href="#rsvp" className="hover:text-[var(--foreground)]">RSVP</a>
      </div>

      <div className="mt-12 text-center">
        <p className="font-serif text-lg italic text-[var(--foreground)]/70">
          With love, Maja &amp; Kristoffer
        </p>
      </div>

      <div className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-[var(--foreground)]/40">
        © 2027 All rights reserved
      </div>
    </footer>
  );
}

