import Image from "next/image";
import { BedDouble, Clock3, Coffee, Mic2, Shirt, Wallet } from "lucide-react";
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
            Betalning för boendet görs till Maja och Kristoffer. Mer
            information kring bokning och betalning skickas till de gäster som
            väljer att bo på hotellet.
          </p>
          <ul className="space-y-2.5" role="list">
            <li className="flex gap-2.5">
              <Wallet
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]/80"
                aria-hidden="true"
              />
              <span>Pris: 500 kr per person och natt</span>
            </li>
            <li className="flex gap-2.5">
              <Coffee
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]/80"
                aria-hidden="true"
              />
              <span>Frukost ingår</span>
            </li>
            <li className="flex gap-2.5">
              <Clock3
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]/80"
                aria-hidden="true"
              />
              <span>
                Incheckning sker från kl. 15.00 och utcheckning är kl. 11.00.
              </span>
            </li>
          </ul>
          <p>Vi ser gärna att alla bor på bröllopsplatsen, Castillo de Monda.</p>
        </div>
      </div>

      <div className="mt-12 pt-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="lux-card flex flex-col rounded-2xl p-6 md:p-7">
            <header className="border-b border-[var(--muted)]/90 pb-5">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--primary)]/40 bg-white/90 text-[var(--accent)] shadow-[0_4px_14px_rgba(36,24,16,0.06)]"
                  aria-hidden="true"
                >
                  <Mic2 className="h-5 w-5 stroke-[1.35]" />
                </span>
                <div>
                  <h4 className="font-serif text-2xl font-light tracking-wide text-[var(--foreground)]">
                    Toastmasters
                  </h4>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--accent)]/85">
                    Värdar för tal &amp; skålar
                  </p>
                </div>
              </div>
            </header>

            <div className="mt-6 space-y-6">
              <blockquote className="border-l-2 border-[var(--primary)]/50 py-0.5 pl-5">
                <p className="font-serif text-[15px] font-light leading-[1.7] italic text-[var(--foreground)]/88">
                  Vill du säga några ord, hålla tal eller hitta på något kul under helgen?
                  Hör gärna av dig till våra toastmasters!
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/62">
                  För att vi ska hinna njuta ordentligt av både paellakvällen och
                  bröllopsdagen kommer talen att spridas ut över båda dagarna.
                </p>
              </blockquote>

              <div className="flex items-center gap-3" aria-hidden="true">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--muted)] to-[var(--muted)]" />
                <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-[var(--accent)]/55">
                  Era värdar
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--muted)] to-[var(--muted)]" />
              </div>

              <ul className="space-y-3" role="list">
                <li>
                  <article className="rounded-xl border border-[var(--muted)]/75 bg-white/45 px-4 py-4 transition-colors hover:border-[var(--primary)]/35 hover:bg-white/65 sm:px-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-[7.5rem]">
                        <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--accent)]">
                          Dag 1
                        </p>
                        <p className="mt-0.5 font-serif text-xs italic text-[var(--foreground)]/50">
                          Paellakvällen
                        </p>
                      </div>
                      <p className="font-serif text-lg font-light leading-snug text-[var(--foreground)] sm:text-right">
                        Annika Liljequist-Pane
                      </p>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="rounded-xl border border-[var(--muted)]/75 bg-white/45 px-4 py-4 transition-colors hover:border-[var(--primary)]/35 hover:bg-white/65 sm:px-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-[7.5rem]">
                        <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--accent)]">
                          Dag 2
                        </p>
                        <p className="mt-0.5 font-serif text-xs italic text-[var(--foreground)]/50">
                          Bröllopsdagen
                        </p>
                      </div>
                      <div className="space-y-0.5 font-serif text-lg font-light leading-snug text-[var(--foreground)] sm:text-right">
                        <p>Joanna & Alex Engström</p>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>

          <div className="lux-card flex flex-col rounded-2xl p-6 md:p-7">
            <header className="border-b border-[var(--muted)]/90 pb-5">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--primary)]/40 bg-white/90 text-[var(--accent)] shadow-[0_4px_14px_rgba(36,24,16,0.06)]"
                  aria-hidden="true"
                >
                  <Shirt className="h-5 w-5 stroke-[1.35]" />
                </span>
                <div>
                  <h4 className="font-serif text-2xl font-light tracking-wide text-[var(--foreground)]">
                    Klädkod
                  </h4>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--accent)]/85">
                    Två dagar, två stämningar
                  </p>
                </div>
              </div>
            </header>

            <div className="mt-6 space-y-6">
              <blockquote className="border-l-2 border-[var(--primary)]/50 py-0.5 pl-5">
                <p className="font-serif text-[15px] font-light leading-[1.7] italic text-[var(--foreground)]/88">
                  Vi firar både paellakvällen och bröllopsdagen med olika klädkoder
                </p>
              </blockquote>

              <div className="flex items-center gap-3" aria-hidden="true">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--muted)] to-[var(--muted)]" />
                <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-[var(--accent)]/55">
                  Per dag
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--muted)] to-[var(--muted)]" />
              </div>

              <ul className="space-y-3" role="list">
                <li>
                  <article className="rounded-xl border border-[var(--muted)]/75 bg-white/45 px-4 py-4 transition-colors hover:border-[var(--primary)]/35 hover:bg-white/65 sm:px-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-[7.5rem]">
                        <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--accent)]">
                          Dag 1
                        </p>
                        <p className="mt-0.5 font-serif text-xs italic text-[var(--foreground)]/50">
                          Paellakvällen
                        </p>
                      </div>
                      <div className="sm:text-right">
                        <p className="font-serif text-lg font-light leading-snug text-[var(--foreground)]">
                          Avslappnat uppklätt
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--foreground)]/65">
                          Grönt &amp; Champagne
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="rounded-xl border border-[var(--muted)]/75 bg-white/45 px-4 py-4 transition-colors hover:border-[var(--primary)]/35 hover:bg-white/65 sm:px-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-[7.5rem]">
                        <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--accent)]">
                          Dag 2
                        </p>
                        <p className="mt-0.5 font-serif text-xs italic text-[var(--foreground)]/50">
                          Bröllopsdagen
                        </p>
                      </div>
                      <div className="sm:text-right">
                        <p className="font-serif text-lg font-light leading-snug text-[var(--foreground)]">
                          Kostym
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--foreground)]/65">
                          Linnekostym välkommen!
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
