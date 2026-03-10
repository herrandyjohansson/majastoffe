import Image from "next/image";

export function Story() {
  return (
    <section
      id="story"
      className="py-20"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Vår historia
        </p>
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          Hur allt började
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/story-couple-romantic.jpg"
            alt="Hur vi träffades"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="mb-4 font-serif text-2xl font-light text-[var(--foreground)]">
              Hur vi träffades
            </h3>
            <div className="space-y-4 text-[15px] leading-relaxed text-[var(--foreground)]/75">
              <p>
                Det började på en paddlecourt. Det var där vi sågs för första gången – även om det tog några matcher innan vi verkligen lade märke till varandra.
              </p>
              <p>
                Som många av er vet kommer vi från samma del av landet och har säkert korsat varandras vägar många gånger tidigare utan att riktigt prata. Kanske för att Kristoffer är två år yngre än Maja, eller kanske helt enkelt för att det inte var rätt tid.
              </p>
              <p>
                När det väl hände gick allt snabbt. Så mycket har förändrats på kort tid – Kristoffer flyttade från Sölvesborg till Malmö, vi hittade vårt första hem tillsammans och skapade vårt liv.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center space-y-8 lg:order-1">
          <div>
            <h3 className="mb-4 font-serif text-2xl font-light text-[var(--foreground)]">
              Friariet
            </h3>
            <div className="space-y-4 text-[15px] leading-relaxed text-[var(--foreground)]/75">
              <p>
                Sedan kom den oförglömliga dagen i Estepona, Spanien, när Kristoffer friade. Därför känns det extra speciellt att gifta sig i Spanien – det är en plats som redan betyder så mycket för oss.
              </p>
              <p>
                Nu vill vi bjuda in er att fira början på vårt nästa kapitel tillsammans på samma plats där vår förlovningshistoria började.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-[4/5] overflow-hidden lg:order-2">
          <Image
            src="/story-engagement-spain.jpg"
            alt="Friariet i Spanien"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

