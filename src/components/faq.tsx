"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Vad är klädkoden?",
    answer:
      "Detaljer om klädkod bekräftas närmare bröllopet. Räkna med en festlig, somrig kväll i spansk värme — vi delar snart mer om färger och stil.",
  },
  {
    question: "Finns det en önskelista?",
    answer:
      "Vår största önskan är att ni kommer till Spanien och firar helgen med oss — det är den finaste gåvan vi kan tänka oss. Andra presenter förväntas inte.",
  },
  {
    question: "Kan jag ta med en plus one?",
    answer:
      "Om din inbjudan inkluderar en plus one är du varmt välkommen att ta med den personen. Är du osäker, skicka ett meddelande så bekräftar vi.",
  },
  {
    question: "Är barn bjudna?",
    answer:
      "Den här gången håller vi firandet vuxet så att alla kan slappna av och njuta av hela kvällen tillsammans.",
  },
  {
    question: "Finns det vegetarisk/vegansk mat?",
    answer:
      "Ja — vi ser till att det finns alternativ för vanliga önskemål. Skriv gärna dina behov i din RSVP.",
  },
  {
    question: "Vad händer om jag har allergier?",
    answer:
      "Skriv allergier och kostönskemål i din RSVP så att vi kan stämma av med venue.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="mt-16 space-y-6 border-t border-[color-mix(in_oklab,var(--primary)_20%,transparent)] pt-12"
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
        FAQ
      </h2>
      <div className="space-y-3">
        {faqs.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--primary)_25%,transparent)] bg-[color-mix(in_oklab,var(--background)_98%,white)]/95 shadow-sm"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5 sm:py-4"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-[var(--foreground)]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-[color-mix(in_oklab,var(--foreground)_70%,white)] transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="border-t border-[color-mix(in_oklab,var(--primary)_18%,transparent)] px-4 py-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_82%,white)] sm:px-5 sm:py-4">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

