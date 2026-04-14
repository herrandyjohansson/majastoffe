"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, 4200);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
    }, 5200);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isVisible) return null;

  const hearts = [
    { left: "14%", delay: "0.2s", duration: "9.2s", size: "h-3 w-3" },
    { left: "24%", delay: "1s", duration: "10.6s", size: "h-4 w-4" },
    { left: "34%", delay: "0.45s", duration: "8.8s", size: "h-2.5 w-2.5" },
    { left: "42%", delay: "1.4s", duration: "9.6s", size: "h-3 w-3" },
    { left: "58%", delay: "1.4s", duration: "9.6s", size: "h-3 w-3" },
    { left: "66%", delay: "0.45s", duration: "8.8s", size: "h-2.5 w-2.5" },
    { left: "76%", delay: "1s", duration: "10.6s", size: "h-4 w-4" },
    { left: "86%", delay: "0.2s", duration: "9.2s", size: "h-3 w-3" },
  ];

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_-8%,rgba(255,255,255,1),rgba(255,255,255,0.94)_35%,rgba(255,255,255,0.88)_64%),linear-gradient(180deg,#ffffff_0%,#fffdfb_48%,#fbf5ee_100%)] text-[var(--accent)] intro-stage ${
        isExiting ? "intro-overlay-out" : ""
      }`}
      aria-hidden="true"
    >
      <div className="intro-grain pointer-events-none absolute inset-0" />
      <div className="intro-vignette pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-[10%] top-16 h-72 w-72 rounded-full bg-[var(--primary)]/16 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-16 h-72 w-72 rounded-full bg-[var(--primary)]/16 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-[65rem] -translate-x-1/2 bg-gradient-to-t from-[var(--primary)]/10 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[var(--accent)]/18 via-[var(--accent)]/8 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/12" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.25)_48%,transparent_72%)]" />

      <div className="pointer-events-none absolute inset-0 intro-hearts-group">
        {hearts.map((heart, index) => (
          <div
            key={`${heart.left}-${index}`}
            className="absolute bottom-[-10%] intro-float-heart"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
            }}
          >
            <Heart className={`${heart.size} fill-current text-[#b3263f]`} />
          </div>
        ))}
      </div>

      <div className="relative px-6 text-center">
        <p className="intro-overline text-xs uppercase tracking-[0.45em] text-[var(--accent)]/60">
          Bröllopshelg i Spanien
        </p>
        <h1 className="intro-name intro-title-shimmer mt-6 bg-gradient-to-b from-[var(--accent)] via-[#5b4b3d] to-[#3f3228] bg-clip-text font-serif font-light text-transparent">
          <span className="block text-5xl sm:text-7xl md:text-8xl">Maja</span>
          <span className="my-1 block text-3xl italic text-[var(--accent)]/55 sm:text-5xl">
            &
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl">Kristoffer</span>
        </h1>
        <p className="intro-date mt-4 text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]/52">
          8–10 september 2027 • Castillo de Monda
        </p>
        <div className="mt-7 flex items-center justify-center gap-4">
          <span className="intro-line h-px w-14 bg-[var(--accent)]/35" />
          <span className="intro-heart-wrap inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b3263f]/35 bg-white/45 shadow-[0_8px_28px_rgba(128,26,48,0.2)]">
            <Heart className="intro-heart h-5 w-5 text-[#b3263f]" />
          </span>
          <span className="intro-line h-px w-14 bg-[var(--accent)]/35" />
        </div>
      </div>
    </div>
  );
}

