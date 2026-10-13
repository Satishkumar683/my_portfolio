"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import FullScreenMenu from "./FullScreenMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 md:pr-24 lg:pr-28 backdrop-blur-md bg-white/90 dark:bg-[#050505]/90 border-b-2 border-black dark:border-[#D4AF37]/40 transition-colors">
        {/* Brand Wordmark (No asterisk) */}
        <a
          href="#hero"
          className="group flex items-center gap-1 font-editorial text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white hover:opacity-90 transition-opacity"
          aria-label="Home"
        >
          <span>satish</span>
        </a>


        {/* Right side controls: Theme toggle + Gold Menu button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(true)}
            className="btn-neo flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#D4AF37] px-5 sm:px-6 text-xs font-heading font-black uppercase tracking-wider text-black hover:bg-[#B89320] transition-all"
            aria-label="Open navigation menu"
          >
            <span>MENU</span>
            <span className="text-xs font-black">✦</span>
          </button>
        </div>
      </header>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
