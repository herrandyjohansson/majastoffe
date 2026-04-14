import Image from "next/image";
import { CalendarDays, Heart, MapPin, Sparkles } from "lucide-react";
import { DecorativeHeartDivider } from "./decorative-heart-divider";

export function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden"
      >
        <Image
          src="/hero-new.jpg"
          alt="Maja och Kristoffers bröllopsceremoni"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]" />

        <div className="relative z-10 flex min-h-screen w-full flex-col px-4 pb-10 pt-20 sm:px-6 sm:pt-24 md:px-8 md:pb-12">
          <div className="mx-auto flex w-full max-w-6xl flex-1">
            <div className="flex w-full flex-1 flex-col rounded-2xl border border-white/20 bg-black/20 px-5 py-7 text-center shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-[2px] sm:rounded-3xl sm:px-9 sm:py-10">
              <div className="flex flex-1 flex-col items-center justify-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-white/72 sm:text-xs">
                  Bröllopshelg i Spanien
                </p>
                <h1 className="wedding-name-stack mt-5 text-white sm:mt-6">
                  <span className="wedding-name-line">Maja</span>
                  <span className="wedding-name-heart-wrap">
                    <Heart className="wedding-name-heart text-[#b3263f]" />
                  </span>
                  <span className="wedding-name-line">Kristoffer</span>
                </h1>
                <div className="mt-5 flex items-center justify-center gap-3 sm:mt-7 sm:gap-4">
                  <div className="h-px w-10 bg-white/35 sm:w-14" />
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/85 sm:text-[11px]">
                    ÖNSKAR ER NÄRVARO
                  </p>
                  <div className="h-px w-10 bg-white/35 sm:w-14" />
                </div>
                <div className="mx-auto mt-5 max-w-2xl text-[13px] leading-relaxed text-white/95 sm:mt-7 sm:text-[15px]">
                  <p>
                    Den{" "}
                    <span className="border-b border-white/50 font-medium text-white/95">
                      9 september 2027
                    </span>{" "}
                    säger vi ja till varandra i Spanien och vi hoppas att ni vill
                    vara med och fira tillsammans med oss.
                  </p>
                <div className="mt-5 grid w-full max-w-xl gap-2 sm:grid-cols-3">
                  <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/40 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/92">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      8–10 september 2027
                    </span>
                  <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/40 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/92">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      Castillo de Monda
                    </span>
                  <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/40 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/92">
                    Bröllopshelg
                  </span>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-7 sm:pt-9">
                <a
                  href="#rsvp"
                  className="inline-flex min-h-11 items-center justify-center gap-2 self-center rounded-full border border-white/50 bg-white/20 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/30 sm:px-8 sm:py-4"
                >
                  OSA
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scrolla</span>
            <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>

      </section>

      <section className="lux-section fade-in-up mx-auto mt-7 max-w-6xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">

            <DecorativeHeartDivider />
            <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
              Välkommen
            </h2>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.24em] text-[var(--accent)]/75">
              Till vår bröllopshelg i Spanien
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--muted)] bg-white/70 px-6 py-8 text-center shadow-sm sm:px-10 sm:py-10">
            <div className="space-y-5 text-sm leading-relaxed text-[var(--foreground)]/75 sm:text-base">
              <p>
                Eftersom ni kommer att resa långt vill vi passa på att umgås i fler
                dagar. Därför planerar vi bröllopsfirande från den 8 till 10
                september 2027.
              </p>
              <p>
                På den här sidan hittar ni all information om bröllopet, resan och
                hur ni anmäler er.
              </p>
              <p>
                Vi ser verkligen fram emot att samla våra favoritmänniskor i
                Spanien och skapa fantastiska minnen tillsammans.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-[var(--accent)]/70">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span className="text-[11px] uppercase tracking-[0.2em]">Vi längtar</span>
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

