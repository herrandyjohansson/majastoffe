import Image from "next/image";
import { BedDouble, Mic2, Shirt } from "lucide-react";
import { DecorativeHeartDivider } from "./decorative-heart-divider";

export function Accommodation() {
  return (
    <section
      id="accommodation"
      className="lux-section fade-in-up px-6 py-20 lg:px-10"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Boende
        </p>
        <DecorativeHeartDivider />
      </div>

      <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-[var(--muted)]/80">
          <Image
            src="/castillo_de_monda-pool.jpg"
            alt="Castillo de Monda"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
        <div className="lux-card space-y-4 rounded-2xl p-6 text-sm leading-relaxed text-[var(--foreground)]/75">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            <BedDouble className="mr-1 inline h-4 w-4" />
            Boendeinformation
          </p>
          <p>
            Det finns möjlighet att bo direkt på bröllopsplatsen, Castillo de
            Monda.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Pris: 500 kr per person och natt</li>
            <li>Frukost ingår</li>
            <li>Incheckning sker från kl. 15.00 och utcheckning är kl. 11.00.</li>
          </ul>
          <p>
            Betalning för boendet görs till Maja och Kristoffer. Mer
            information kring bokning och betalning skickas till de gäster som
            väljer att bo på hotellet.
          </p>
          <p>Vi ser gärna att alla bor på bröllopsplatsen.</p>
        </div>
      </div>

      <div className="mt-12 pt-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="lux-card rounded-2xl p-5 md:p-6">
            <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              <Shirt className="mr-1 inline h-4 w-4" />
              Toastmasters
            </h4>
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-xl border border-[var(--muted)]/70 bg-gradient-to-br from-white/70 via-white/50 to-[var(--primary)]/[0.06] px-4 py-4 shadow-sm ring-1 ring-[var(--primary)]/10 sm:px-5 sm:py-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                  Dag 1 · Paellakvällen
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">
                  TBA
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-[var(--muted)]/70 bg-gradient-to-br from-white/70 via-white/50 to-[var(--primary)]/[0.06] px-4 py-4 shadow-sm ring-1 ring-[var(--primary)]/10 sm:px-5 sm:py-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                  Dag 2 · Bröllopsdagen
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">
                  TBA 
                </p>
              </div>
            </div>
          </div>
          <div className="lux-card rounded-2xl p-5 md:p-6">
            <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              <Shirt className="mr-1 inline h-4 w-4" />
              Klädkod
            </h4>
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-xl border border-[var(--muted)]/70 bg-gradient-to-br from-white/70 via-white/50 to-[var(--primary)]/[0.06] px-4 py-4 shadow-sm ring-1 ring-[var(--primary)]/10 sm:px-5 sm:py-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                  Dag 1 · Paellakvällen
                </p>
                <p className="mt-2 font-serif text-lg font-light text-[var(--foreground)] sm:text-xl">
                  Avslappnat uppklätt
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">
                  Grönt och champagne 
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-[var(--muted)]/70 bg-gradient-to-br from-white/70 via-white/50 to-[var(--primary)]/[0.06] px-4 py-4 shadow-sm ring-1 ring-[var(--primary)]/10 sm:px-5 sm:py-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                  Dag 2 · Bröllopsdagen
                </p>
                <p className="mt-2 font-serif text-lg font-light text-[var(--foreground)] sm:text-xl">
                  Kostym
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">
                  Linnekostym välkommen! 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

