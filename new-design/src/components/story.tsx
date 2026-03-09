import Image from "next/image";

export function Story() {
  return (
    <section
      id="story"
      className="py-20"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Our Story
        </p>
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          How it all began
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/story-couple-romantic.jpg"
            alt="How we met"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="mb-4 font-serif text-2xl font-light text-[var(--foreground)]">
              The Beginning
            </h3>
            <div className="space-y-4 text-[15px] leading-relaxed text-[var(--foreground)]/75">
              <p>
                It all began on a paddle court. That's where we first met – though it took a few more matches before we truly noticed each other.
              </p>
              <p>
                As many of you know, we come from the same part of the country and likely crossed paths many times before without really talking. Perhaps because Kristoffer is two years younger than Maja, or perhaps it simply wasn't the right time.
              </p>
              <p>
                When it finally happened, everything moved quickly. So much has changed in such a short time – Kristoffer moved from Sölvesborg to Malmö, we found our first home together, and created our life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center space-y-8 lg:order-1">
          <div>
            <h3 className="mb-4 font-serif text-2xl font-light text-[var(--foreground)]">
              The Proposal
            </h3>
            <div className="space-y-4 text-[15px] leading-relaxed text-[var(--foreground)]/75">
              <p>
                Then came that unforgettable day in Estepona, Spain, when Kristoffer proposed. That's why getting married in Spain feels extra special – it's a place that already means so much to us.
              </p>
              <p>
                Now we want to invite you to celebrate the beginning of our next chapter together in the same place where our engagement story began.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-[4/5] overflow-hidden lg:order-2">
          <Image
            src="/story-engagement-spain.jpg"
            alt="The proposal in Spain"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

