"use client";

import { useState } from "react";
import { MessageCircleQuestion, Plus, Minus } from "lucide-react";
import { DecorativeHeartDivider } from "./decorative-heart-divider";

const faqs = [
  {
    question: "Kan jag ta med barn?",
    answer:
      "Så här är det: barnen får stanna hemma, men vuxna får extra allt! Dans, paella, poolhäng och skratt – vi lovar att fylla helgen med minnen som gör barnen lite avundsjuka.",
  },
  {
    question: "Finns det pool på hotellet?",
    answer:
      "Ja, poolen väntar på er! Så glöm inte badkläder om du vill ta ett dopp eller bara ta det lugnt i solen.",
  },
  {
    question: "Finns parkering?",
    answer:
      "Absolut – om du hyr bil finns det plats att parkera på hotellet.",
  },
  {
    question: "Kan man hålla tal?",
    answer:
      "Självklart! Vill du hålla ett tal, meddela gärna vår toastmaster i förväg så vi kan planera kvällens program.",
  },
  {
    question: "Vad önskar ni er i present?",
    answer:
      "Vår största önskan är att ni flyger ner till Spanien och spenderar dessa dagar med oss. Det blir den allra bästa presenten vi kan tänka oss! Övriga presenter undanbedes.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="lux-section fade-in-up px-6 py-20 lg:px-10"
    >
      <div className="mb-12 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
          Frågor
        </p>
        <DecorativeHeartDivider />
      </div>
      <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--muted)]/80 bg-white/45 px-4 sm:px-6">
        {faqs.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={item.question}
              className="group border-b border-[var(--muted)]/60 transition-colors last:border-b-0 hover:bg-white/45"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors group-hover:text-[var(--foreground)]"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-medium text-[var(--foreground)]/90">
                  {item.question}
                </span>
                {isOpen ? (
                  <Minus className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                )}
              </button>
              {isOpen && (
                <div className="animate-[fadeInUp_280ms_ease] pb-6 text-sm leading-relaxed text-[var(--foreground)]/70">
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

