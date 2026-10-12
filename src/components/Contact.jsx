"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/constants";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus({ state: "error", message: "Please fill out all required fields." });
      return;
    }
    setStatus({ state: "loading", message: "Sending message..." });
    setTimeout(() => {
      setStatus({ state: "success", message: "Thank you! Your message has been received." });
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight mt-1 mb-4 text-neutral-900 dark:text-white">
            Let&apos;s Build Something <span className="text-purple-600 dark:text-purple-400">Exceptional</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8">
            Whether you want to discuss algorithmic problem solving, software engineering opportunities, or collaborating on high-impact projects — my inbox is always open.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 hover:border-purple-500 transition-colors shadow-sm group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-wider block">Email</span>
                <span className="font-bold text-sm text-neutral-900 dark:text-white">{PERSONAL_INFO.email}</span>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 hover:border-purple-500 transition-colors shadow-sm group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-wider block">Phone</span>
                <span className="font-bold text-sm text-neutral-900 dark:text-white">{PERSONAL_INFO.phone}</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-wider block">Location</span>
                <span className="font-bold text-sm text-neutral-900 dark:text-white">NIT Jamshedpur, Jharkhand, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2.5rem] bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 p-8 sm:p-10 shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-neutral-900 dark:text-white tracking-tight">
              Send a Message
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Satish Kumar"
                  className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                placeholder="Software Engineering Collaboration"
                className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                Message *
              </label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Let's build something great..."
                className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
              />
            </div>

            {status.message && (
              <div
                className={`mb-4 rounded-xl p-3 text-xs font-semibold flex items-center gap-2 ${
                  status.state === "success"
                    ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                    : status.state === "error"
                    ? "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                    : "bg-purple-500/10 text-purple-500"
                }`}
              >
                {status.state === "success" ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.state === "loading"}
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-bold text-xs sm:text-sm uppercase tracking-widest transition-all shadow-lg hover:bg-purple-600 dark:hover:bg-purple-400 dark:hover:text-neutral-950 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{status.state === "loading" ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
