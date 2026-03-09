const events = [
  {
    time: "16:00",
    title: "Välkomstdrink",
    description: "Kom, landa och njut av något gott tillsammans.",
  },
  {
    time: "16:45",
    title: "Vigsel",
    description: "Var med när vi säger ja på Castillo de Monda.",
  },
  {
    time: "18:30",
    title: "Middag & tal",
    description: "Gemensam middag följt av tal och firande.",
  },
  {
    time: "21:30",
    title: "Dans",
    description: "Dansgolvet öppnar — nu firar vi tillsammans.",
  },
];

export function Schedule() {
  return (
    <section
      id="schedule"
      className="mt-16 space-y-8 border-t border-[color-mix(in_oklab,var(--primary)_25%,transparent)] pt-12"
    >
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)] mb-2">
          Wedding Day Schedule
        </h2>
        <div className="h-px bg-gradient-to-r from-[var(--primary)] to-transparent w-12" />
      </div>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={event.time}
            className="flex gap-6 sm:gap-8 items-start"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-sm font-semibold text-[var(--primary)] font-serif tracking-wide">
                {event.time}
              </div>
              {index < events.length - 1 && (
                <div className="w-px h-12 bg-gradient-to-b from-[var(--primary)]/50 to-transparent" />
              )}
            </div>
            <div className="pb-4 pt-1 flex-1">
              <h3 className="font-serif text-lg font-light text-[var(--foreground)]">
                {event.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_75%,white)]">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

