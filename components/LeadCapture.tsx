"use client";

import React, { useState } from "react";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full max-w-sm mx-auto" aria-label="Lead capture">
      <h2 className="text-lg sm:text-xl text-center text-zinc-700 dark:text-zinc-300 mb-4">
        Kan je niet wachten?
      </h2>
      {status === "success" ? (
        <p className="text-center text-emerald-600 dark:text-emerald-400 font-medium">
          Bedankt! We nemen snel contact op.
        </p>
      ) : (
        <form
          name="lead-capture"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          <input type="hidden" name="form-name" value="lead-capture" />
          <label htmlFor="lead-email" className="sr-only">
            E-mailadres
          </label>
          <input
            id="lead-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jouw@email.be"
            required
            disabled={status === "submitting"}
            className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent transition-shadow"
            autoComplete="email"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 px-4 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 disabled:opacity-60 transition-colors"
          >
            {status === "submitting" ? "Bezig…" : "Hou me op de hoogte"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400 text-center">
              Er ging iets mis. Probeer het later opnieuw.
            </p>
          )}
        </form>
      )}
    </section>
  );
}
