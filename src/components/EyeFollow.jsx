"use client";

import { useEffect, useRef } from "react";

export default function EyeFollow() {
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const distance = Math.min(
        12,
        Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 15
      );

      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;

      if (leftPupilRef.current) {
        leftPupilRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
      if (rightPupilRef.current) {
        rightPupilRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="inline-flex items-center select-none cursor-default drop-shadow-[0_4px_0_#000000] dark:drop-shadow-[0_4px_0_#D4AF37]"
      title="Looking forward to building impactful systems!"
    >
      <svg className="h-16 w-16 sm:h-20 sm:w-20 -mr-3" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#000000" strokeWidth="4" />
        <g ref={leftPupilRef} style={{ transition: "transform 0.08s ease-out" }}>
          <circle cx="50" cy="50" r="20" fill="#000000" />
          <circle cx="56" cy="42" r="6" fill="#D4AF37" />
        </g>
      </svg>
      <svg className="h-16 w-16 sm:h-20 sm:w-20" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#000000" strokeWidth="4" />
        <g ref={rightPupilRef} style={{ transition: "transform 0.08s ease-out" }}>
          <circle cx="50" cy="50" r="20" fill="#000000" />
          <circle cx="56" cy="42" r="6" fill="#D4AF37" />
        </g>
      </svg>
    </div>
  );
}
