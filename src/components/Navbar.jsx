"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import FullScreenMenu from "./FullScreenMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 md:pr-24 lg:pr-28 backdrop-blur-md bg-white/70 dark:bg-[#0a0a0d]/70 border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight"
          aria-label="Home"
        >
          <span className="font-mono text-purple-600 dark:text-purple-400">&lt;</span>
          <span className="font-extrabold tracking-wider">SK</span>
          <span className="font-mono text-purple-600 dark:text-purple-400">/&gt;</span>
        </a>

        {/* Right side controls: Theme toggle + Menu button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(true)}
            className="group relative flex h-9 items-center justify-center rounded-full bg-neutral-900 px-5 sm:px-6 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white shadow-md hover:scale-105 hover:bg-purple-600 transition-all dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-purple-400"
            aria-label="Open navigation menu"
          >
            <span>MENU</span>
          </button>
        </div>
      </header>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
