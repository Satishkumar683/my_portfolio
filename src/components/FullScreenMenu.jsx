"use client";

import { useEffect } from "react";
import { PERSONAL_INFO } from "@/lib/constants";
import { X, ArrowUpRight } from "lucide-react";

export default function FullScreenMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "CP Profiles", href: "#cp" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Experience", href: "#roles" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col lg:flex-row bg-[#0d0d11] text-white animate-in fade-in duration-300"
      aria-modal="true"
      role="dialog"
    >
      {/* Left Panel: Big Creative Editorial Greeting (like Rohit's) */}
      <div className="hidden lg:flex w-full lg:w-[58%] lg:h-full bg-white dark:bg-neutral-100 lg:rounded-r-[40px] p-8 md:p-14 lg:p-20 flex-col justify-center items-center relative overflow-hidden text-black z-10 shadow-2xl">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="text-[clamp(1.5rem,2.8vw,3rem)] font-display font-extrabold normal-case leading-tight tracking-tight flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-2">
              HELLO, I&apos;M{" "}
              <span className="font-cursive font-normal text-purple-600 text-[clamp(2rem,4.5vw,4.5rem)] transform -rotate-3">
                Satish
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap text-neutral-800">
              A COMPETITIVE PROGRAMMER
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap text-neutral-800">
              &amp; FULL-STACK DEVELOPER
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              AT{" "}
              <span className="font-cursive font-normal text-purple-600 text-[clamp(2rem,4vw,4rem)] transform -rotate-1">
                NIT Jamshedpur
              </span>
            </div>
          </div>
          <p className="mt-8 text-neutral-600 max-w-md text-sm md:text-base leading-relaxed">
            Crafting scalable web systems, data-driven ML applications, and solving algorithmic problems at scale.
          </p>
        </div>
      </div>

      {/* Right Panel: Navigation Sitemap & Links */}
      <div className="w-full lg:w-[42%] h-full bg-[#0d0d11] p-8 md:p-14 lg:p-20 flex flex-col justify-between relative z-0">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 lg:top-10 lg:right-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-8 lg:space-y-12 pt-8">
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/50 mb-4 font-semibold">
              Sitemap
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <div key={item.label} className="overflow-hidden">
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-white hover:text-purple-400 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/50 mb-3 font-semibold">
              Profiles &amp; Social
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold font-mono tracking-[0.15em] uppercase">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.socials.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors inline-flex items-center gap-1"
              >
                <span>Codeforces</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors inline-flex items-center gap-1"
              >
                <span>LeetCode</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-white hover:text-purple-400 transition-colors inline-flex items-center gap-1"
              >
                <span>Email</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10 text-xs text-white/60 font-mono">
          <span>{PERSONAL_INFO.phone}</span>
          <a
            href={PERSONAL_INFO.resumePdf}
            download="Satish-Kumar-Resume.pdf"
            className="font-bold uppercase tracking-wider text-purple-400 hover:underline inline-flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
