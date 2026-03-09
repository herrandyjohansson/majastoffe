import Image from "next/image";

const hotels = [
  {
    name: "Castillo de Monda (hotellet på plats)",
    rate: "500 SEK / person / natt",
    description:
      "Bo på plats hela helgen. Frukost ingår för hotellets gäster.",
    code: "INFO KOMMER",
    image: "/hotel-castillo-monda.jpg",
  },
  {
    name: "Närliggande hotell (alternativ)",
    rate: "TBD",
    description:
      "Vill du bo någon annanstans? Lägg till ett rekommenderat hotell här.",
    code: "TBD",
    image: "/hotel-alternative.jpg",
  },
  {
    name: "Marbella-området (alternativ)",
    rate: "TBD",
    description:
      "Om du vill kombinera helgen med strandhäng ligger Marbella en kort bilresa bort.",
    code: "TBD",
    image: "/hotel-marbella.jpg",
  },
];

export function Accommodation() {
  return (
    <section
      id="accommodation"
      className="mt-16 space-y-8 border-t border-[color-mix(in_oklab,var(--primary)_25%,transparent)] pt-12"
    >
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)] mb-2">
          Accommodation
        </h2>
        <div className="h-px bg-gradient-to-r from-[var(--primary)] to-transparent w-12" />
      </div>
      <p className="text-base leading-relaxed text-[color-mix(in_oklab,var(--foreground)_80%,white)] max-w-xl">
        We have arranged several accommodation options for our guests. Choose what works best for you — staying on-site is the perfect way to make the most of the weekend.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {hotels.map((hotel) => (
          <div
            key={hotel.name}
            className="rounded-lg bg-[color-mix(in_oklab,var(--background)_98%,white)]/95 ring-1 ring-[color-mix(in_oklab,var(--primary)_20%,transparent)] overflow-hidden hover:ring-[color-mix(in_oklab,var(--primary)_40%,transparent)] transition-all"
          >
            <div className="relative h-56">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-lg font-light text-[var(--foreground)]">
                {hotel.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-[var(--primary)]">
                {hotel.rate}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_80%,white)]">
                {hotel.description}
              </p>
              <div className="mt-4 pt-4 border-t border-[color-mix(in_oklab,var(--primary)_15%,transparent)] text-sm">
                <span className="text-[color-mix(in_oklab,var(--foreground)_65%,white)]">
                  Booking Code:
                </span>{" "}
                <span className="font-medium text-[var(--foreground)]">
                  {hotel.code}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[color-mix(in_oklab,var(--secondary)_28%,white)]/60 p-6 ring-1 ring-[color-mix(in_oklab,var(--primary)_20%,transparent)]">
        <h3 className="font-serif text-lg font-semibold text-[var(--foreground)]">
          Ta dig runt
        </h3>
        <div className="mt-3 space-y-2 text-sm text-[color-mix(in_oklab,var(--foreground)_82%,white)]">
          <p>
            <strong>Flygplats:</strong> Málaga Airport (AGP) ligger cirka 45
            minuter bort.
          </p>
          <p>
            <strong>Taxi:</strong> Taxi finns tillgängligt i området kring
            Málaga/Marbella.
          </p>
          <p>
            <strong>Bil:</strong> Hyrbil är enklast för att ta sig runt och
            upptäcka området.
          </p>
        </div>
      </div>
    </section>
  );
}

