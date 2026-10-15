"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/constants";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus({ state: "error", message: "Please fill out all required fields." });
      return;
    }
    setStatus({ state: "loading", message: "Dispatching message to Satish..." });

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (accessKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formState.name,
            email: formState.email,
            subject: formState.subject || `New Portfolio Message from ${formState.name}`,
            message: formState.message,
            from_name: "Portfolio Contact Form",
          }),
        });
        const result = await response.json();
        if (result.success) {
          setStatus({
            state: "success",
            message: `Message sent successfully! Satish will reply to ${formState.email} shortly.`,
          });
          setFormState({ name: "", email: "", subject: "", message: "" });
          return;
        }
      } catch (err) {
        console.warn("API submission error, falling back to direct email:", err);
      }
    }

    // Direct fallback: opens pre-filled email to satishkumarhp1718@gmail.com
    const subject = encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name} via Portfolio`
    );
    const body = encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setStatus({
      state: "success",
      message: `Opening your email client to send directly to ${PERSONAL_INFO.email}...`,
    });
  };

  const handleOpenGmail = () => {
    const subject = encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name || "Portfolio Visitor"}`
    );
    const body = encodeURIComponent(
      `From: ${formState.name || "Visitor"} (${formState.email || "No email entered"})\n\nMessage:\n${formState.message || ""}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1550px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-black dark:border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-heading font-black shadow-solid-sm uppercase">
            <span>✦</span> Get In Touch <span>✦</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight mt-3 mb-4 text-neutral-900 dark:text-white">
            Let&apos;s Build Something <span className="text-[#D4AF37] font-editorial italic font-normal">Exceptional</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 font-sans">
            Whether you want to discuss algorithmic problem solving, software engineering opportunities, or collaborating on high-impact projects — my inbox is always open.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/40 shadow-solid-sm hover:translate-x-1 transition-transform group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37] border-2 border-black shadow-solid-sm text-black">
                <Mail className="w-5 h-5" strokeWidth={2.3} />
              </div>
              <div>
                <span className="text-[11px] font-heading font-bold text-neutral-500 uppercase tracking-wider block">Email Address</span>
                <span className="font-heading font-bold text-sm text-neutral-900 dark:text-white">{PERSONAL_INFO.email}</span>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/40 shadow-solid-sm hover:translate-x-1 transition-transform group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37] border-2 border-black shadow-solid-sm text-black">
                <Phone className="w-5 h-5" strokeWidth={2.3} />
              </div>
              <div>
                <span className="text-[11px] font-heading font-bold text-neutral-500 uppercase tracking-wider block">Phone &amp; WhatsApp</span>
                <span className="font-heading font-bold text-sm text-neutral-900 dark:text-white">{PERSONAL_INFO.phone}</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/40 shadow-solid-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37] border-2 border-black shadow-solid-sm text-black">
                <MapPin className="w-5 h-5" strokeWidth={2.3} />
              </div>
              <div>
                <span className="text-[11px] font-heading font-bold text-neutral-500 uppercase tracking-wider block">Location</span>
                <span className="font-heading font-bold text-sm text-neutral-900 dark:text-white">NIT Jamshedpur, Jharkhand, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form with Gold & Black Neo-Brutalist Border & Shadows */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2.5rem] bg-white dark:bg-[#050505] border-2 border-black dark:border-[#D4AF37]/40 p-8 sm:p-10 shadow-solid space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-heading font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Satish Kumar"
                  className="w-full px-4 py-3 rounded-xl bg-[#fdfdfd] dark:bg-[#0a0a0a] border-2 border-black/80 dark:border-[#D4AF37]/40 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#D4AF37] text-sm font-sans"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-heading font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#fdfdfd] dark:bg-[#0a0a0a] border-2 border-black/80 dark:border-[#D4AF37]/40 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#D4AF37] text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-heading font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                placeholder="Software Engineering Project or Role"
                className="w-full px-4 py-3 rounded-xl bg-[#fdfdfd] dark:bg-[#0a0a0a] border-2 border-black/80 dark:border-[#D4AF37]/40 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#D4AF37] text-sm font-sans"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-heading font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Hi Satish, I would love to connect with you regarding..."
                className="w-full px-4 py-3 rounded-xl bg-[#fdfdfd] dark:bg-[#0a0a0a] border-2 border-black/80 dark:border-[#D4AF37]/40 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-[#D4AF37] text-sm resize-none font-sans"
              />
            </div>

            {status.message && (
              <div
                className={`p-3.5 rounded-xl border-2 flex items-center gap-2.5 text-xs font-heading font-bold ${
                  status.state === "success"
                    ? "bg-[#D4AF37]/15 border-[#D4AF37] text-black dark:text-[#F5D061]"
                    : "bg-red-500/15 border-red-500 text-red-600 dark:text-red-400"
                }`}
              >
                {status.state === "success" ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#D4AF37]" strokeWidth={2.4} />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0" strokeWidth={2.4} />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <button
                type="submit"
                disabled={status.state === "loading"}
                className="btn-neo w-full flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#D4AF37] text-black font-heading font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-[#B89320] transition-all disabled:opacity-50"
              >
                <span>{status.state === "loading" ? "Dispatching..." : "Send Message"}</span>
                <Send className="w-4 h-4 text-black" strokeWidth={2.4} />
              </button>

              <button
                type="button"
                onClick={handleOpenGmail}
                className="btn-neo w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white dark:bg-[#050505] text-black dark:text-white font-heading font-black text-xs uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-900 border-2 border-black dark:border-[#D4AF37] flex items-center justify-center gap-2"
                title="Open directly in Gmail web"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.4} />
                <span>Open in Gmail</span>
              </button>
            </div>

            <p className="text-[11px] text-center text-neutral-500 dark:text-neutral-400 font-sans">
              All inquiries route directly to <span className="font-bold text-neutral-800 dark:text-neutral-200">{PERSONAL_INFO.email}</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
