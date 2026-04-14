import Image from "next/image";
import { Car, MapPin, ParkingCircle, Plane } from "lucide-react";
import { DecorativeHeartDivider } from "./decorative-heart-divider";

export function Location() {
  return (
    <section
      id="location"
      className="lux-section fade-in-up px-6 py-20 lg:px-10"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Plats och vägbeskrivning
        </p>
        <DecorativeHeartDivider />
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          Castillo de Monda
        </h2>
        <p className="mt-4 text-sm text-[var(--foreground)]/65">
          29110 Monda, Málaga, Spanien
        </p>
      </div>

      <div className="mx-auto mb-8 max-w-4xl space-y-3 text-sm leading-relaxed text-[var(--foreground)]/75">
        <p>
          Vårt bröllop kommer att äga rum på Castillo de Monda, ett vackert
          slottshotell i den lilla byn Monda i södra Spanien. Slottet ligger
          uppe på en kulle med fantastisk utsikt över det andalusiska
          landskapet och bara en kort bit från Marbella.
        </p>
        <p>
          Närmaste flygplats är Malaga Airport, som ligger cirka 45 minuter från
          Monda med bil. Från flygplatsen kan du enkelt ta dig till Monda på
          flera sätt:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Hyra bil direkt på flygplatsen</li>
          <li>Ta taxi, Bolt eller Uber</li>
          <li>Ta buss från Malaga till Marbella busstation och sedan taxi därifrån</li>
        </ul>
      </div>

      <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-md ring-1 ring-[var(--muted)]/80">
        <Image
          src="/hotel-booking.jpg"
          alt="Castillo de Monda"
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      <div className="lux-card overflow-hidden rounded-2xl">
        <iframe
          title="Castillo de Monda"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.8183415169715!2d-4.837980924384629!3d36.63075907229592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72db984b99433b%3A0x21e1e888aaacc9a2!2sHotel%20-%20Restaurante%20Castillo%20De%20Monda!5e0!3m2!1sen!2sse!4v1772884692699!5m2!1sen!2sse"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="grayscale"
        />
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lux-card rounded-2xl p-5 text-center">
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            <MapPin className="mr-1 inline h-4 w-4" />
            Ceremoni
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            I slottets innergård
          </p>
        </div>
        <div className="lux-card rounded-2xl p-5 text-center">
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            <MapPin className="mr-1 inline h-4 w-4" />
            Fest
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Samma lokal, middag och dans
          </p>
        </div>
        <div className="lux-card rounded-2xl p-5 text-center">
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            <Plane className="mr-1 inline h-4 w-4" />
            Flygplats
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Málaga (AGP) – 45 min körning
          </p>
        </div>
        <div className="lux-card rounded-2xl p-5 text-center">
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            <ParkingCircle className="mr-1 inline h-4 w-4" />
            Parkering
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Parkering finns vid hotellet
          </p>
        </div>
      </div>
    </section>
  );
}

