import { CalendarDays, Clock3, PartyPopper } from "lucide-react";
import { DecorativeHeartDivider } from "./decorative-heart-divider";

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
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          <CalendarDays className="mr-2 inline h-7 w-7 text-[var(--accent)]/80" />
          8–10 september 2027
        </h2>
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        <div className="lux-card relative overflow-hidden rounded-2xl p-6">
          <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)]/60 to-transparent" />
          <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[var(--accent)]/30" />
          <h3 className="font-serif text-2xl font-light text-[var(--foreground)]">
            <Clock3 className="mr-2 inline h-5 w-5 text-[var(--accent)]/75" />
            8 september – Ankomst &amp; välkomstmiddag
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--foreground)]/75">
            <p>
              Från kl. 15.00 är det incheckning på hotellet och tid att landa,
              njuta av omgivningarna och kanske ta ett dopp i poolen.
            </p>
            <p>
              På kvällen samlas vi för att starta bröllopsfirandet tillsammans.
            </p>
            <p>
              Kl. 19.00 bjuder vi in till en gemensam paellamiddag på hotellet –
              en perfekt start på dagarna tillsammans i Spanien.
            </p>
          </div>
        </div>

        <div className="lux-card relative overflow-hidden rounded-2xl p-6">
          <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)]/60 to-transparent" />
          <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[var(--accent)]/30" />
          <h3 className="font-serif text-2xl font-light text-[var(--foreground)]">
            <PartyPopper className="mr-2 inline h-5 w-5 text-[var(--accent)]/75" />
            9 september – Bröllopsdagen
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--foreground)]/75">
            <p>
              Morgonen börjar lugnt för den som vill. Under förmiddagen håller
              fantastiska Petra Lindros i ett yogapass för den som vill starta
              dagen på bästa sätt.
            </p>
            <p>Frukost ingår för alla gäster på morgonen.</p>
            <p>
              Resten av dagen är fri att njuta av i egen takt – ta ett dopp i
              poolen, gå en promenad i området eller slå dig ner på innergården
              med en bok och något gott att dricka. Lunch och dryck finns att
              köpa på hotellet under dagen.
            </p>
            <p>Kl. 16.45 ber vi alla gäster att vara på plats vid ceremonin.</p>
            <p>
              Efter vigseln fortsätter firandet med middag, mingel och fest. När
              kvällen går över i natt öppnar dansgolvet och vi firar tillsammans
              så länge energin håller.
            </p>
            <p>
              Musiken rundas av kl. 02.00, självklar till tonerna av Stad i
              ljus.
            </p>
          </div>
        </div>

        <div className="lux-card relative overflow-hidden rounded-2xl p-6">
          <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)]/60 to-transparent" />
          <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[var(--accent)]/30" />
          <h3 className="font-serif text-2xl font-light text-[var(--foreground)]">
            <Clock3 className="mr-2 inline h-5 w-5 text-[var(--accent)]/75" />
            10 september – Avresa
          </h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--foreground)]/75">
            <p>
              Njut av en sista morgon tillsammans i Spanien. Frukost serveras på
              hotellet för alla gäster.
            </p>
            <p>Utcheckning sker senast kl. 11.00.</p>
            <p>
              Maja och Kristoffer kommer fortsätta sin lilla bröllopsvecka med
              en helgs avslut på hotell X i X för att efter helgen åka vidare
              ett par dagar på tu man hand. Vill man fortsätta fira och ta det
              lugnt med oss fredag till söndag är man välkommen att boka samma
              hotell eller hitta något eget för att fortsätta njuta av allt vad
              Spanien har att erbjuda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
