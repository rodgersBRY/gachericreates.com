"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type Subject = "General" | "Print Inquiry" | "Safari Inquiry";

interface FormState {
  name: string;
  email: string;
  subject: Subject;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "General",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-sm border border-accent-light bg-background px-4 py-3 text-body text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent";

  if (status === "sent") {
    return (
      <p className="text-body text-text-secondary">
        Message sent — I&rsquo;ll be in touch within 24 hours.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-label text-text-secondary tracking-widest uppercase"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-label text-text-secondary tracking-widest uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-label text-text-secondary tracking-widest uppercase"
        >
          Subject
        </label>
        <select
          id="subject"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value as Subject)}
          className={inputClass}
        >
          <option>General</option>
          <option>Print Inquiry</option>
          <option>Safari Inquiry</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-label text-text-secondary tracking-widest uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Your message"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-caption text-red-600">
          Something went wrong. Please try WhatsApp or email directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start rounded-sm bg-accent text-white px-6 py-3 text-caption tracking-widest uppercase hover:bg-text-primary transition-colors duration-200 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
