import Image from "next/image";

export function Story() {
  return (
    <section
      id="story"
      className="mt-16 space-y-8 border-t border-[color-mix(in_oklab,var(--primary)_20%,transparent)] pt-12"
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        Vår historia
      </h2>
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
            Hur vi träffades
          </h3>
          <div className="space-y-4 text-base leading-relaxed text-[color-mix(in_oklab,var(--foreground)_85%,white)]">
            <p>
              Allt började på en padelbana. Det var där vi träffades för första
              gången – men det krävdes faktiskt några matcher till innan vi
              verkligen fick upp ögonen för varandra.
            </p>
            <p>
              Som många av er vet kommer vi från samma hemtrakter och har
              sannolikt korsat varandras vägar många gånger tidigare utan att
              riktigt prata. Kanske för att Kristoffer är två år yngre än Maja,
              eller så var det helt enkelt inte rätt tid då.
            </p>
            <p>
              När det väl blev vi två gick allt snabbt. Mycket har hänt på kort
              tid – Kristoffer flyttade från Sölvesborg till Malmö, vi hittade
              vårt första hem tillsammans och skapade vår egen vardag.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-semibold text-[var(--foreground)]">
            Friariet
          </h3>
          <div className="space-y-4 text-base leading-relaxed text-[color-mix(in_oklab,var(--foreground)_85%,white)]">
            <p>
              Sedan kom den där extra minnesvärda dagen i Estepona, Spanien, när
              Kristoffer friade. Därför känns det extra speciellt att gifta sig
              i Spanien – på en plats som redan betyder så mycket för oss.
            </p>
            <p>
              Nu vill vi bjuda in er att fira starten på vårt nästa kapitel
              tillsammans.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative h-64 overflow-hidden rounded-2xl">
          <Image
            src="/story-couple-romantic.jpg"
            alt="Hur vi träffades"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-64 overflow-hidden rounded-2xl">
          <Image
            src="/story-engagement-spain.jpg"
            alt="Friariet i Spanien"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

