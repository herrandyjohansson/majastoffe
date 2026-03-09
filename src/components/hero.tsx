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
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="space-y-6">
          <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl">
            Maja &amp; Kristoffer
          </h1>
          <p className="text-lg text-white/85">
            önskar äran av er närvaro när de firar sitt bröllop
          </p>
          <div className="space-y-2 pt-6">
            <p className="text-base text-white/90">
              Torsdagen den nionde september
            </p>
            <p className="text-base text-white/90">Tvåtusentjugosju</p>
            <p className="text-base text-white/75">
              klockan kvart i fem på eftermiddagen
            </p>
          </div>
          <div className="pt-8">
            <a
              href="#rsvp"
              className="inline-block rounded-full bg-[var(--primary)] px-8 py-3 font-medium text-white shadow-lg transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_88%,black)]"
            >
              Planera din resa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

