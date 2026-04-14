import { Heart, Sparkles } from "lucide-react";
import { DecorativeHeartDivider } from "./decorative-heart-divider";

export function Footer() {
  return (
    <footer className="mt-8 bg-gradient-to-b from-white/40 to-white/70 py-16 shadow-[0_-10px_30px_rgba(25,18,12,0.04)]">
      <div className="mb-12 text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--primary)]/40 bg-white/65 font-serif text-sm tracking-[0.2em] text-[var(--accent)]">
          MK
        </div>
        <p className="font-serif text-3xl font-light text-[var(--foreground)]">
          M &amp; K
        </p>
        <p className="mt-2 text-sm text-[var(--foreground)]/60">
          9 september 2027
        </p>
      </div>

      <DecorativeHeartDivider className="mb-10" />

      <div className="flex flex-wrap justify-center gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/70">
        <a href="#home" className="hover:text-[var(--foreground)]">Hem</a>
        <a href="#story" className="hover:text-[var(--foreground)]">Vår historia</a>
        <a href="#schedule" className="hover:text-[var(--foreground)]">Schema</a>
        <a href="#location" className="hover:text-[var(--foreground)]">Plats</a>
        <a href="#accommodation" className="hover:text-[var(--foreground)]">Boende</a>
        <a href="#faq" className="hover:text-[var(--foreground)]">FAQ</a>
        <a href="#rsvp" className="hover:text-[var(--foreground)]">OSA</a>
      </div>

      <div className="mt-12 text-center">
        <p className="font-serif text-lg italic text-[var(--foreground)]/70">
          <Heart className="mr-1 inline h-4 w-4 text-[var(--accent)]/80" />
          Med kärlek, Maja &amp; Kristoffer
          <Sparkles className="ml-1 inline h-4 w-4 text-[var(--accent)]/80" />
        </p>
      </div>

      <div className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-[var(--foreground)]/40">
        © 2027 Alla rättigheter förbehållna
      </div>
    </footer>
  );
}

