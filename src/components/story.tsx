import Image from "next/image";

export function Story() {
  return (
    <section
      id="story"
      className="mt-16 space-y-10 border-t border-[color-mix(in_oklab,var(--primary)_25%,transparent)] pt-12"
    >
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)] mb-2">
          Our Story
        </h2>
        <div className="h-px bg-gradient-to-r from-[var(--primary)] to-transparent w-12" />
      </div>
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div className="space-y-5">
          <h3 className="font-serif text-3xl font-light text-[var(--foreground)]">
            How We Met
          </h3>
          <div className="space-y-5 text-base leading-relaxed text-[color-mix(in_oklab,var(--foreground)_80%,white)]">
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

        <div className="space-y-5">
          <h3 className="font-serif text-3xl font-light text-[var(--foreground)]">
            The Proposal
          </h3>
          <div className="space-y-5 text-base leading-relaxed text-[color-mix(in_oklab,var(--foreground)_80%,white)]">
            <p>
              Then came that unforgettable day in Estepona, Spain, when Kristoffer proposed. That's why getting married in Spain feels extra special – it's a place that already means so much to us.
            </p>
            <p>
              Now we want to invite you to celebrate the beginning of our next chapter together in the same place where our engagement story began.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mt-12">
        <div className="relative h-72 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/story-couple-romantic.jpg"
            alt="How we met"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-72 overflow-hidden rounded-lg shadow-md">
          <Image
            src="/story-engagement-spain.jpg"
            alt="The proposal in Spain"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

