import Image from "next/image";

export function Location() {
  return (
    <section
      id="location"
      className="border-t border-[var(--muted)] py-20"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Lokalen
        </p>
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          Castillo de Monda
        </h2>
        <p className="mt-4 text-sm text-[var(--foreground)]/65">
          29110 Monda, Málaga, Spanien
        </p>
      </div>

      <div className="relative mb-8 aspect-[16/9] overflow-hidden">
        <Image
          src="/location-castillo-monda.jpg"
          alt="Castillo de Monda"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="overflow-hidden">
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
        <div className="text-center">
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Ceremoni
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            I slottets innergård
          </p>
        </div>
        <div className="text-center">
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Fest
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Samma lokal, middag och dans
          </p>
        </div>
        <div className="text-center">
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Flygplats
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Málaga (AGP) – 45 min körning
          </p>
        </div>
        <div className="text-center">
          <h4 className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Väder
          </h4>
          <p className="text-sm text-[var(--foreground)]/75">
            Varma kvällar, lätt sjal rekommenderas
          </p>
        </div>
      </div>
    </section>
  );
}

