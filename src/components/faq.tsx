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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="mt-16 space-y-8 border-t border-[color-mix(in_oklab,var(--primary)_25%,transparent)] pt-12"
    >
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)] mb-2">
          Frequently Asked Questions
        </h2>
        <div className="h-px bg-gradient-to-r from-[var(--primary)] to-transparent w-12" />
      </div>
      <div className="space-y-2 max-w-2xl">
        {faqs.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={item.question}
              className="border-b border-[color-mix(in_oklab,var(--primary)_20%,transparent)] transition-colors"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left hover:text-[var(--primary)] transition-colors"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="font-serif text-base font-light text-[var(--foreground)]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-[var(--primary)] transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="pb-5 text-sm leading-relaxed text-[color-mix(in_oklab,var(--foreground)_75%,white)]">
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

