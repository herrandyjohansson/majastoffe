export function Location() {
  return (
    <section
      id="location"
      className="mt-16 space-y-6 border-t border-[color-mix(in_oklab,var(--primary)_20%,transparent)] pt-12"
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        Plats &amp; vägbeskrivning
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-[color-mix(in_oklab,var(--background)_98%,white)]/95 p-6 shadow-sm ring-1 ring-[color-mix(in_oklab,var(--primary)_25%,transparent)]">
          <h3 className="font-serif text-lg font-semibold text-[var(--foreground)]">
            Vigseln
          </h3>
          <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--foreground)_82%,white)]">
            Castillo de Monda
          </p>
          <p className="mt-1 text-sm text-[color-mix(in_oklab,var(--foreground)_70%,white)]">
            29110 Monda, Málaga, Spain
          </p>
        </div>
        <div className="rounded-2xl bg-[color-mix(in_oklab,var(--background)_98%,white)]/95 p-6 shadow-sm ring-1 ring-[color-mix(in_oklab,var(--primary)_25%,transparent)]">
          <h3 className="font-serif text-lg font-semibold text-[var(--foreground)]">
            Festen
          </h3>
          <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--foreground)_82%,white)]">
            Direkt efter vigseln på samma plats
          </p>
          <p className="mt-1 text-sm text-[color-mix(in_oklab,var(--foreground)_70%,white)]">
            Middag serveras under kvällen
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-[color-mix(in_oklab,var(--background)_98%,white)]/95 p-6 shadow-sm ring-1 ring-[color-mix(in_oklab,var(--primary)_25%,transparent)]">
          <h4 className="text-sm font-semibold text-[var(--foreground)]">Parkering</h4>
          <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_82%,white)]">
            Parkering finns vid venue om du hyr bil.
          </p>
        </div>
        <div className="rounded-2xl bg-[color-mix(in_oklab,var(--background)_98%,white)]/95 p-6 shadow-sm ring-1 ring-[color-mix(in_oklab,var(--primary)_25%,transparent)]">
          <h4 className="text-sm font-semibold text-[var(--foreground)]">Väder</h4>
          <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_82%,white)]">
            Räkna med varma kvällar — ta gärna med något lätt om det blåser.
          </p>
        </div>
      </div>

      <p className="text-base leading-relaxed text-[color-mix(in_oklab,var(--foreground)_85%,white)]">
        Närmaste flygplats är <strong>Málaga Airport (AGP)</strong>, cirka 45
        minuter med bil från Monda. Från flygplatsen tar du dig enkelt till
        Monda med hyrbil eller taxi.
      </p>

      <div className="mt-2 overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--primary)_25%,transparent)] shadow-sm">
        <iframe
          title="Castillo de Monda"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.8183415169715!2d-4.837980924384629!3d36.63075907229592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72db984b99433b%3A0x21e1e888aaacc9a2!2sHotel%20-%20Restaurante%20Castillo%20De%20Monda!5e0!3m2!1sen!2sse!4v1772884692699!5m2!1sen!2sse"
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}

