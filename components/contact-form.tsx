"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("https://formspree.io/f/mojybwan", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="section-card flex min-h-[300px] items-center justify-center rounded-3xl p-7 md:p-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
            <span className="text-xl font-black text-gold">✓</span>
          </div>
          <h3 className="text-lg font-black text-foreground">Message sent!</h3>
          <p className="mt-2 text-sm text-muted">I&apos;ll get back to you soon.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 rounded-full border border-foreground/15 px-4 py-2 text-sm font-semibold text-foreground/75 transition hover:border-foreground/25 hover:text-foreground"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="section-card space-y-4 rounded-3xl p-7 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-foreground">
          Name
          <input
            className="mt-2 w-full rounded-2xl border border-foreground/15 bg-background/40 px-4 py-3 text-sm text-foreground outline-none ring-gold/0 transition focus:ring-4"
            placeholder="Ada Lovelace"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-foreground">
          Email
          <input
            className="mt-2 w-full rounded-2xl border border-foreground/15 bg-background/40 px-4 py-3 text-sm text-foreground outline-none ring-gold/0 transition focus:ring-4"
            placeholder="you@email.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm font-semibold text-foreground">
        Message
        <textarea
          className="mt-2 min-h-[140px] w-full rounded-2xl border border-foreground/15 bg-background/40 px-4 py-3 text-sm text-foreground outline-none ring-gold/0 transition focus:ring-4"
          placeholder="What are we building?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      {status === "error" && (
        <p className="text-xs text-red-500">Something went wrong — try emailing me directly at mitul6m16@gmail.com.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-gold px-6 py-3 text-sm font-black text-on-gold shadow-[0_16px_40px_rgba(139,92,246,0.25)] transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
