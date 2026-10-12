"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 1300);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-neutral-950 text-white transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated SVG Name Signature */}
        <div className="relative h-28 w-72 sm:h-36 sm:w-96 flex items-center justify-center">
          <svg
            viewBox="0 0 500 150"
            className="h-full w-full overflow-visible drop-shadow-[0_0_25px_rgba(139,92,246,0.35)]"
          >
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-cursive text-7xl sm:text-8xl select-none"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2.5"
              strokeDasharray="900"
              strokeDashoffset="900"
              style={{
                animation: "stroke-draw 1.2s ease-out forwards",
              }}
            >
              Satish
            </text>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-cursive text-7xl sm:text-8xl select-none"
              fill="#ffffff"
              fillOpacity="0"
              style={{
                animation: "stroke-fill-in 0.6s ease-in forwards 0.8s",
              }}
            >
              Satish
            </text>
          </svg>
        </div>

        {/* Minimal Progress Line */}
        <div className="mt-4 h-[2px] w-32 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full w-full bg-purple-500 origin-left"
            style={{
              animation: "progress-grow 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards",
            }}
          />
        </div>
      </div>
    </div>
  );
}
