import Image from "next/image";

const hotels = [
  {
    name: "Castillo de Monda",
    subtitle: "On-site accommodation",
    rate: "From €80 / night",
    description:
      "Stay at the castle and enjoy the full weekend experience. Breakfast included.",
    code: "Coming soon",
    image: "/hotel-castillo-monda.jpg",
  },
  {
    name: "Nearby Hotels",
    subtitle: "Alternative options",
    rate: "Various prices",
    description:
      "Prefer somewhere different? Several quality hotels are within a short drive.",
    code: "TBD",
    image: "/hotel-alternative.jpg",
  },
  {
    name: "Marbella Area",
    subtitle: "Beach & luxury",
    rate: "Various prices",
    description:
      "Combine the wedding weekend with beach time – Marbella is just 30 minutes away.",
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
          Where to Stay
        </p>
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          Accommodation
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--foreground)]/65">
          We recommend staying at the castle to make the most of the weekend, but several nearby options are also available.
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
            Getting There
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Fly into Málaga Airport (AGP), then a 45-minute drive to Monda.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Transport
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            We recommend renting a car to explore the beautiful Andalusian region.
          </p>
        </div>
        <div>
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Questions?
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Reach out if you need help with accommodation or travel arrangements.
          </p>
        </div>
      </div>
    </section>
  );
}

