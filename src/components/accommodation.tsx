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
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          Bo på plats eller i närheten
        </h2>
      </div>

      <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-[var(--muted)]/80">
          <Image
            src="/hotel-castillo-monda.jpg"
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
          <p>
            Det finns även flera andra hotell och boenden i närheten för den
            som föredrar att bo på annat håll.
          </p>
        </div>
      </div>

      <div className="mt-12 pt-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="lux-card rounded-2xl p-5">
            <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              <Mic2 className="mr-1 inline h-4 w-4" />
              Toastmasters
            </h4>
            <p className="text-sm text-[var(--foreground)]/75">Info kommer</p>
          </div>
          <div className="lux-card rounded-2xl p-5">
            <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              <Shirt className="mr-1 inline h-4 w-4" />
              Klädkod
            </h4>
            <p className="text-sm text-[var(--foreground)]/75">Info kommer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

