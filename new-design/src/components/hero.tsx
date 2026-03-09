import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src="/hero-wedding-spain.jpg"
        alt="Maja och Kristoffers bröllopsceremoni"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">
          Together with their families
        </p>
        
        <h1 className="font-serif text-5xl font-light leading-[1.1] text-white sm:text-7xl md:text-8xl lg:text-9xl">
          Maja
        </h1>
        <p className="my-3 font-serif text-2xl italic text-white/80 sm:my-4 sm:text-3xl">
          &amp;
        </p>
        <h1 className="font-serif text-5xl font-light leading-[1.1] text-white sm:text-7xl md:text-8xl lg:text-9xl">
          Kristoffer
        </h1>
        
        <div className="mt-10 flex items-center gap-4 sm:mt-12">
          <div className="h-px w-12 bg-white/40 sm:w-16" />
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/80">
            request your presence
          </p>
          <div className="h-px w-12 bg-white/40 sm:w-16" />
        </div>
        
        <div className="mt-10 space-y-2 sm:mt-12">
          <p className="font-serif text-lg text-white/90 sm:text-xl">
            September 9th, 2027
          </p>
          <p className="text-sm text-white/70">
            Castillo de Monda, Málaga, Spain
          </p>
        </div>
        
        <a
          href="#rsvp"
          className="mt-12 inline-flex items-center gap-2 border border-white/30 bg-white/10 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:mt-16"
        >
          RSVP Now
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}

