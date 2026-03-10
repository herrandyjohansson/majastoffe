const events = [
  {
    time: "16:00",
    title: "Välkomstdrinkar",
    description: "Anlända, slappna av och njut av en uppfriskande välkomstcocktail.",
  },
  {
    time: "16:45",
    title: "Ceremoni",
    description: "Följ med oss när vi säger ja på Castillo de Monda.",
  },
  {
    time: "18:30",
    title: "Middag & Tal",
    description: "En festlig middag följt av hjärtliga tal.",
  },
  {
    time: "21:30",
    title: "Dans",
    description: "Dansgolvet öppnas – låt oss fira tillsammans.",
  },
];

export function Schedule() {
  return (
    <section
      id="schedule"
      className="border-t border-[var(--muted)] py-20"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Dagen
        </p>
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          Bröllopsschema
        </h2>
      </div>

      <div className="mx-auto max-w-2xl">
        {events.map((event, index) => (
          <div
            key={event.time}
            className="group relative flex gap-6 pb-10 last:pb-0"
          >
            {/* Timeline line */}
            {index < events.length - 1 && (
              <div className="absolute left-[45px] top-8 h-full w-px bg-[var(--muted)]" />
            )}
            
            {/* Time */}
            <div className="w-[90px] shrink-0 pt-1 text-right">
              <span className="text-sm font-medium text-[var(--accent)]">
                {event.time}
              </span>
            </div>
            
            {/* Dot */}
            <div className="relative z-10 mt-2 h-3 w-3 shrink-0 rounded-full border-2 border-[var(--primary)] bg-[var(--background)]" />
            
            {/* Content */}
            <div className="flex-1 pt-0.5">
              <h3 className="font-serif text-xl font-light text-[var(--foreground)]">
                {event.title}
                  </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/65">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

