"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the dress code?",
    answer:
      "Details will be confirmed closer to the wedding. Expect a festive summer evening in the Spanish warmth – we'll share more about colors and style soon.",
  },
  {
    question: "Is there a gift registry?",
    answer:
      "Your presence in Spain is the greatest gift we could ask for. Other gifts are not expected.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "If your invitation includes a plus one, you are warmly welcome to bring them. If you're unsure, please reach out and we'll confirm.",
  },
  {
    question: "Are children invited?",
    answer:
      "This time we're keeping the celebration adults-only so everyone can relax and enjoy the entire evening together.",
  },
  {
    question: "Are there vegetarian/vegan options?",
    answer:
      "Yes – we'll ensure there are options for common dietary preferences. Please note your requirements in your RSVP.",
  },
  {
    question: "What if I have allergies?",
    answer:
      "Please include allergies and dietary requirements in your RSVP so we can coordinate with the venue.",
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
          Questions
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

