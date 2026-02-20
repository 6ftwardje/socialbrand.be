"use client";

import React, { useState } from "react";
import { revenueRangeOptions } from "@/lib/content";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqdjnll";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteOrIg: "",
    revenueRange: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          websiteOrIg: formData.websiteOrIg.trim() || undefined,
          revenueRange: formData.revenueRange || undefined,
          message: formData.message.trim(),
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", websiteOrIg: "", revenueRange: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-6 text-center">
        <p className="font-medium text-emerald-400">Bedankt! We nemen snel contact op.</p>
        <p className="mt-1 text-sm text-zinc-400">We reageren binnen 1–2 werkdagen.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-4"
      aria-label="Contactformulier"
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-300">
          Naam
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
          disabled={status === "submitting"}
          className="mt-1 w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] disabled:opacity-60"
          placeholder="Je naam"
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-300">
          E-mail
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          disabled={status === "submitting"}
          className="mt-1 w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] disabled:opacity-60"
          placeholder="jouw@email.be"
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="contact-website" className="block text-sm font-medium text-zinc-300">
          Website of Instagram
        </label>
        <input
          id="contact-website"
          type="text"
          name="websiteOrIg"
          value={formData.websiteOrIg}
          onChange={(e) => setFormData((p) => ({ ...p, websiteOrIg: e.target.value }))}
          disabled={status === "submitting"}
          className="mt-1 w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] disabled:opacity-60"
          placeholder="https://..."
          autoComplete="url"
        />
      </div>
      <div>
        <label htmlFor="contact-revenue" className="block text-sm font-medium text-zinc-300">
          Omzet (indicatief)
        </label>
        <select
          id="contact-revenue"
          name="revenueRange"
          value={formData.revenueRange}
          onChange={(e) => setFormData((p) => ({ ...p, revenueRange: e.target.value }))}
          disabled={status === "submitting"}
          className="mt-1 w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] disabled:opacity-60"
        >
          {revenueRangeOptions.map(({ value, label }) => (
            <option key={value || "empty"} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-300">
          Bericht
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          disabled={status === "submitting"}
          className="mt-1 w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] disabled:opacity-60"
          placeholder="Vertel kort over je situatie en wat je zoekt..."
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">Er ging iets mis. Probeer het later opnieuw.</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-[var(--accent)] py-3 px-4 font-semibold text-white hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] disabled:opacity-60"
      >
        {status === "submitting" ? "Bezig…" : "Verstuur"}
      </button>
    </form>
  );
}
