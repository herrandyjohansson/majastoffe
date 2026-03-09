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
      className="mt-16 space-y-6 border-t border-[color-mix(in_oklab,var(--primary)_20%,transparent)] pt-12"
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        Schema för bröllopsdagen
      </h2>
      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.time}
            className="grid gap-4 sm:grid-cols-[110px_1fr] sm:items-start"
          >
            <div className="text-sm font-medium text-[color-mix(in_oklab,var(--foreground)_70%,white)]">
              {event.time}
            </div>
            <div className="rounded-2xl bg-[color-mix(in_oklab,var(--background)_98%,white)]/95 p-5 shadow-sm ring-1 ring-[color-mix(in_oklab,var(--primary)_25%,transparent)]">
              <h3 className="font-serif text-base font-semibold text-[var(--foreground)]">
                {event.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_82%,white)]">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

