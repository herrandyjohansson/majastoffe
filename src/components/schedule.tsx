import { CalendarDays, Clock3, PartyPopper } from "lucide-react";
import { DecorativeHeartDivider } from "./decorative-heart-divider";

const SCHEDULE_DAYS = [
  {
    date: "8 september",
    label: "Ankomst & välkomstmiddag",
    icon: Clock3,
    paragraphs: [
      "Från kl. 15.00 är det incheckning på hotellet och tid att landa, njuta av omgivningarna och kanske ta ett dopp i poolen.",
      "På kvällen samlas vi för att starta bröllopsfirandet tillsammans.",
      "Kl. 19.00 bjuder vi in till en gemensam paellamiddag på hotellet – en perfekt start på dagarna tillsammans i Spanien.",
    ],
  },
  {
    date: "9 september",
    label: "Bröllopsdagen",
    icon: PartyPopper,
    paragraphs: [
      "Morgonen börjar lugnt för den som vill. Under förmiddagen håller fantastiska Petra Lindros i ett yogapass för den som vill starta dagen på bästa sätt.",
      "Frukost ingår för alla gäster på morgonen.",
      "Resten av dagen är fri att njuta av i egen takt – ta ett dopp i poolen, gå en promenad i området eller slå dig ner på innergården med en bok och något gott att dricka. Lunch och dryck finns att köpa på hotellet under dagen.",
      "Kl. 16.45 ber vi alla gäster att vara på plats vid ceremonin.",
      "Efter vigseln fortsätter firandet med middag, mingel och fest. När kvällen går över i natt öppnar dansgolvet och vi firar tillsammans så länge energin håller.",
      "Musiken rundas av kl. 02.00, självklart till tonerna av Stad i ljus.",
    ],
  },
  {
    date: "10 september",
    label: "Avresa",
    icon: Clock3,
    paragraphs: [
      "Njut av en sista morgon tillsammans i Spanien. Frukost serveras på hotellet för alla gäster.",
      "Utcheckning sker senast kl. 11.00.",
      "Maja och Kristoffer kommer fortsätta sin lilla bröllopsvecka med en helgs avslut på hotell i Fuengirola för att efter helgen åka vidare ett par dagar på tu man hand. Vill man fortsätta fira och ta det lugnt med oss fredag till söndag är man välkommen att boka samma hotell eller hitta något eget för att fortsätta njuta av allt vad Spanien har att erbjuda.",
    ],
  },
] as const;

export function Schedule() {
  return (
    <section
      id="schedule"
      className="lux-section-alt fade-in-up px-6 py-20 lg:px-10"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Schema för helgen
        </p>
        <DecorativeHeartDivider />
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="lux-card flex flex-col rounded-2xl p-6 md:p-7">
          <header className="border-b border-[var(--muted)]/90 pb-5">
            <div className="flex items-start gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--primary)]/40 bg-white/90 text-[var(--accent)] shadow-[0_4px_14px_rgba(36,24,16,0.06)]"
                aria-hidden="true"
              >
                <CalendarDays className="h-5 w-5 stroke-[1.35]" />
              </span>
              <div>
                <h2 className="font-serif text-2xl font-light tracking-wide text-[var(--foreground)] md:text-3xl">
                  Schema för helgen
                </h2>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--accent)]/85">
                  8–10 september 2027
                </p>
              </div>
            </div>
          </header>

          <div className="mt-6 space-y-6">
            <blockquote className="border-l-2 border-[var(--primary)]/50 py-0.5 pl-5">
              <p className="font-serif text-[15px] font-light leading-[1.7] italic text-[var(--foreground)]/88">
                Tre dagar i Spanien – från välkomstmiddag och bröllop till en lugn
                avresedag. Här ser ni ungefär hur helgen är tänkt att flyta.
              </p>
            </blockquote>

            <div className="flex items-center gap-3" aria-hidden="true">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--muted)] to-[var(--muted)]" />
              <span className="text-[9px] font-medium uppercase tracking-[0.32em] text-[var(--accent)]/55">
                Dag för dag
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[var(--muted)] to-[var(--muted)]" />
            </div>

            <ul className="space-y-3" role="list">
              {SCHEDULE_DAYS.map(({ date, label, icon: Icon, paragraphs }) => (
                <li key={date}>
                  <article className="rounded-xl border border-[var(--muted)]/75 bg-white/45 px-4 py-4 transition-colors hover:border-[var(--primary)]/35 hover:bg-white/65 sm:px-5 sm:py-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                      <div className="flex min-w-[8.5rem] items-start gap-2.5 sm:shrink-0">
                        <Icon
                          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]/70"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--accent)]">
                            {date}
                          </p>
                          <p className="mt-0.5 font-serif text-xs italic text-[var(--foreground)]/50">
                            {label}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 text-sm leading-relaxed text-[var(--foreground)]/75">
                        {paragraphs.map((text, i) => (
                          <p key={i}>{text}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
