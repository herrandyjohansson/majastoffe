import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      <Image
        src="/hero-wedding-spain.jpg"
        alt="Maja och Kristoffers bröllopsceremoni"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="font-serif text-sm tracking-widest text-white/75 uppercase">
              We joyfully celebrate
            </p>
            <h1 className="font-serif text-6xl leading-tight text-white md:text-8xl font-light">
              Maja &amp; Kristoffer
            </h1>
          </div>
          <p className="font-serif text-xl text-white/90 italic">
            cordially request your presence
          </p>
          <div className="space-y-3 pt-4">
            <p className="font-serif text-base text-white/85 tracking-wide">
              Thursday, the ninth of September
            </p>
            <p className="font-serif text-base text-white/85 tracking-wide">
              Two thousand twenty-seven
            </p>
            <p className="font-serif text-sm text-white/70">
              at four o'clock in the afternoon
            </p>
          </div>
          <div className="space-y-2 pt-8 text-white/80">
            <p className="text-sm">Castillo de Monda</p>
            <p className="text-sm">Málaga, Spain</p>
          </div>
          <div className="pt-12">
            <a
              href="#rsvp"
              className="inline-block rounded-full bg-[var(--primary)] px-8 py-3 font-serif text-sm font-semibold text-white shadow-xl transition-all hover:bg-[color-mix(in_oklab,var(--primary)_85%,black)] hover:shadow-2xl"
            >
              Plan Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

