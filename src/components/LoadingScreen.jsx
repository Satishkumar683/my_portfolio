"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 1200);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] text-white transition-opacity duration-400 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Wordmark in Fraunces (No asterisk) */}
        <div className="relative h-28 w-72 sm:h-36 sm:w-96 flex items-center justify-center">
          <div className="font-editorial text-5xl sm:text-7xl font-black tracking-tight select-none flex items-center gap-1 drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            <span className="text-white">satish</span>
          </div>
        </div>

        {/* Minimal Progress Bar in Gold */}
        <div className="relative mt-2 h-1.5 w-44 overflow-hidden rounded-full border-2 border-black bg-white/10 shadow-solid-sm">
          <div
            className="h-full w-full origin-left bg-[#D4AF37]"
            style={{
              animation: "progress-grow 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          />
        </div>

        <p className="mt-4 font-heading font-black text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
          ✦ INITIALIZING PORTFOLIO ✦
        </p>
      </div>
    </div>
  );
}
