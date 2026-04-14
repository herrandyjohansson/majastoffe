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

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <p className="intro-overline text-[10px] uppercase tracking-[0.42em] text-[var(--accent)]/60 sm:text-xs">
          Bröllopshelg i Spanien
        </p>
        <h1 className="intro-name intro-title-shimmer wedding-name-stack mt-5 bg-gradient-to-b from-[var(--accent)] via-[#5b4b3d] to-[#3f3228] bg-clip-text text-transparent sm:mt-6">
          <span className="wedding-name-line">Maja</span>
          <span className="wedding-name-heart-wrap">
            <Heart className="intro-heart wedding-name-heart" />
          </span>
          <span className="wedding-name-line">Kristoffer</span>
        </h1>
        <p className="intro-date mt-5 text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]/52 sm:mt-6 sm:text-[11px] sm:tracking-[0.28em]">
          8–10 september 2027 • Castillo de Monda
        </p>
      </div>
    </div>
  );
}

