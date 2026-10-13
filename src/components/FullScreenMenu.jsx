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
      className="fixed inset-0 z-[100] flex flex-col lg:flex-row bg-[#050505] text-white animate-in fade-in duration-300"
      aria-modal="true"
      role="dialog"
    >
      {/* Left Panel: Big Creative Editorial Greeting (Gold & Black) */}
      <div className="hidden lg:flex w-full lg:w-[58%] lg:h-full bg-white dark:bg-[#0a0a0a] lg:rounded-r-[48px] p-8 md:p-14 lg:p-20 flex-col justify-center items-center relative overflow-hidden text-neutral-900 dark:text-white z-10 border-r-2 border-black dark:border-[#D4AF37]/40 shadow-solid-lg">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm">
            <span>✦</span> SATISH KUMAR PORTFOLIO <span>✦</span>
          </div>

          <div className="text-[clamp(1.5rem,2.8vw,3.2rem)] font-heading font-extrabold normal-case leading-tight tracking-tight flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-2">
              HELLO, I&apos;M{" "}
              <span className="font-editorial italic font-black text-[#D4AF37] text-[clamp(2.2rem,4.5vw,4.8rem)]">
                Satish
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              A COMPETITIVE PROGRAMMER
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap text-black dark:text-[#F5D061]">
              &amp; FULL-STACK DEVELOPER
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              AT{" "}
              <span className="font-editorial font-black underline decoration-[#D4AF37] decoration-4 underline-offset-4">
                NIT Jamshedpur
              </span>
            </div>
          </div>

          <p className="mt-8 text-neutral-600 dark:text-neutral-300 max-w-md text-sm md:text-base leading-relaxed font-sans">
            Crafting scalable web systems, data-driven ML applications, and solving algorithmic problems at scale.
          </p>
        </div>
      </div>

      {/* Right Panel: Navigation Sitemap & Links */}
      <div className="w-full lg:w-[42%] h-full bg-[#050505] p-8 md:p-14 lg:p-20 flex flex-col justify-between relative z-0">
        {/* Close Button with Gold & Black styling */}
        <button
          onClick={onClose}
          className="btn-neo absolute top-6 right-6 lg:top-10 lg:right-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37] text-black hover:bg-[#B89320] transition-all"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-black" strokeWidth={2.4} />
        </button>

        <div className="space-y-8 lg:space-y-12 pt-8">
          <div>
            <h4 className="text-xs font-heading font-black uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
              ✦ Navigation Sitemap ✦
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((item) => (
                <div key={item.label} className="overflow-hidden">
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-black tracking-tight text-white hover:text-[#D4AF37] transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-heading font-black uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
              ✦ Profiles &amp; Social ✦
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-heading font-extrabold tracking-wider uppercase">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.2} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.2} />
              </a>
              <a
                href={PERSONAL_INFO.socials.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1"
              >
                <span>Codeforces</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.2} />
              </a>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1"
              >
                <span>LeetCode</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.2} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-white hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1"
              >
                <span>Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer in Drawer */}
        <div className="pt-6 border-t-2 border-white/10 flex items-center justify-between text-xs font-heading font-bold text-neutral-400">
          <span>&copy; {new Date().getFullYear()} Satish Kumar</span>
          <span className="text-[#D4AF37]">✦ NIT Jamshedpur</span>
        </div>
      </div>
    </div>
  );
}
