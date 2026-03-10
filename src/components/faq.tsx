"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Vad är klädkoden?",
    answer:
      "Detaljer bekräftas närmare bröllopet. Räkna med en festlig sommarkväll i spansk värme – vi delar snart mer om färger och stil.",
  },
  {
    question: "Finns det en önskelista?",
    answer:
      "Er närvaro i Spanien är den finaste gåvan vi kan önska oss. Andra presenter förväntas inte.",
  },
  {
    question: "Kan jag ta med en plus one?",
    answer:
      "Om din inbjudan inkluderar en plus one är du varmt välkommen att ta med den personen. Är du osäker, kontakta oss så bekräftar vi.",
  },
  {
    question: "Är barn bjudna?",
    answer:
      "Den här gången håller vi firandet vuxet så att alla kan slappna av och njuta av hela kvällen tillsammans.",
  },
  {
    question: "Finns det vegetariska/veganska alternativ?",
    answer:
      "Ja – vi ser till att det finns alternativ för vanliga kostönskemål. Vänligen notera dina behov i din OSA.",
  },
  {
    question: "Vad händer om jag har allergier?",
    answer:
      "Vänligen inkludera allergier och kostönskemål i din OSA så att vi kan koordinera med lokalen.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="border-t border-[var(--muted)] py-20"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Frågor
        </p>
        <h2 className="font-serif text-4xl font-light text-[var(--foreground)] md:text-5xl">
          FAQ
        </h2>
      </div>

      <div className="mx-auto max-w-2xl">
        {faqs.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={item.question}
              className="border-b border-[var(--muted)]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-medium text-[var(--foreground)]">
                  {item.question}
                </span>
                {isOpen ? (
                  <Minus className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                )}
              </button>
              {isOpen && (
                <div className="pb-6 text-sm leading-relaxed text-[var(--foreground)]/70">
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

