import Image from "next/image";

const hotels = [
  {
    name: "Castillo de Monda",
    subtitle: "Bo på plats",
    rate: "Från €80 / natt",
    description:
      "Bo på slottet och njut av hela helgen. Frukost ingår.",
    code: "Kommer snart",
    image: "/hotel-castillo-monda.jpg",
  },
  {
    name: "Närliggande Hotell",
    subtitle: "Alternativa alternativ",
    rate: "Varierande priser",
    description:
      "Föredrar du någon annanstans? Flera kvalitetshotell finns inom kort köravstånd.",
    code: "TBD",
    image: "/hotel-nearby.jpg",
  },
  {
    name: "Marbella-området",
    subtitle: "Strand & lyx",
    rate: "Varierande priser",
    description:
      "Kombinera bröllopshelgen med strandhäng – Marbella är bara 30 minuter bort.",
    code: "TBD",
    image: "/hotel-marbella.jpg",
  },
];

export function Accommodation() {
  return (
    <section
      id="accommodation"
      className="border-t border-[var(--muted)] py-20"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Boende
        </p>
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          Var bo
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--foreground)]/65">
          Vi rekommenderar att bo på slottet för att få ut mesta möjliga av helgen, men flera närliggande alternativ finns också tillgängliga.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {hotels.map((hotel) => (
          <div
            key={hotel.name}
            className="group overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="py-5">
              <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                {hotel.subtitle}
              </p>
              <h3 className="font-serif text-xl font-light text-[var(--foreground)]">
                {hotel.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--primary)]">
                {hotel.rate}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/70">
                {hotel.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 border-t border-[var(--muted)] pt-12 md:grid-cols-3">
        <div>
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Hitta hit
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Flyg till Málaga Airport (AGP), sedan 45 minuters körning till Monda.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Transport
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Vi rekommenderar att hyra bil för att utforska den vackra Andalusiska regionen.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Frågor?
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Kontakta oss om du behöver hjälp med boende eller researrangemang.
          </p>
        </div>
      </div>
    </section>
  );
}

