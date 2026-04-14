import Image from "next/image";
import { HeartHandshake, Sparkles } from "lucide-react";
import { DecorativeHeartDivider } from "./decorative-heart-divider";

export function Story() {
  return (
    <section
      id="story"
      className="lux-section fade-in-up px-6 py-20 lg:px-10"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Vår historia
        </p>
        <DecorativeHeartDivider />
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          Hur allt började
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ring-1 ring-[var(--muted)]/70">
          <Image
            src="/paddleball.jpg"
            alt="Padel - sporten där vi träffades"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
        
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="mb-4 font-serif text-2xl font-light text-[var(--foreground)]">
              <HeartHandshake className="mr-2 inline h-5 w-5 text-[var(--accent)]" />
              Hur vi träffades
            </h3>
            <div className="space-y-4 text-[15px] leading-relaxed text-[var(--foreground)]/75">
              <p>
                Allt började på padelbanan. Det var där vi träffades första
                gången – men det krävdes faktiskt ytterligare några möten innan
                vi verkligen fick upp ögonen för varandra.
              </p>
              <p>
                Som de flesta av er vet kommer vi från samma hemtrakter och har
                säkert korsat varandras vägar flera gånger tidigare utan att
                riktigt prata. Kanske berodde det på att Kristoffer är två år
                yngre än Maja, eller så var det helt enkelt inte rätt tid då.
              </p>
              <p>
                När det väl blev vi gick det däremot snabbt. Mycket har hänt på
                kort tid – Kristoffer flyttade från Sölvesborg till Malmö, vi
                skaffade en gemensam lägenhet och hittade vår egen plats i livet
                tillsammans. Inte långt därefter blev det också en stuga i våra
                hemtrakter, som snabbt blivit en av våra favoritplatser.
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
                Sen kom den där särskilt minnesvärda dagen i Estepona i
                Spanien, där Kristoffer friade.
              </p>
              <p>
                Just därför känns det extra rätt för oss att också få gifta oss
                i Spanien – på en plats som redan betyder mycket för oss.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ring-1 ring-[var(--muted)]/70 lg:order-2">
          <Image
            src="/story-engagement.jpg"
            alt="Strand i soliga södra Spanien"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  );
}

