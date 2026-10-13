"use client";

import { PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-black dark:border-[#D4AF37]/40 bg-white dark:bg-[#050505] backdrop-blur-md py-12 px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="max-w-[1550px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start font-editorial text-2xl font-black text-neutral-900 dark:text-white">
            <span>satish</span>
          </div>
          <p className="text-xs font-heading font-bold text-neutral-500 mt-1">
            NIT Jamshedpur &bull; Computer Science &bull; Class of 2028
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase font-heading font-extrabold tracking-wider text-neutral-800 dark:text-neutral-200">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.socials.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            Codeforces
          </a>
          <a
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            LeetCode
          </a>
          <a
            href={PERSONAL_INFO.socials.codechef}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            CodeChef
          </a>
        </div>

        <div className="text-xs font-heading font-bold text-neutral-500">
          &copy; {new Date().getFullYear()} Satish Kumar. Crafted with ✦ &amp; code.
        </div>
      </div>
    </footer>
  );
}
