"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to email service
    setStatus("submitted");
  }

  return (
    <RevealOnScroll>
      <section className="bg-surface py-20 px-6">
        <div className="max-w-xl mx-auto text-center flex flex-col gap-6">
          <h2 className="font-heading text-heading-2 text-text-primary">
            Stay close to the bush
          </h2>
          <p className="text-body text-text-secondary">
            New prints, upcoming safari dates, and occasional notes from the
            field.
          </p>

          {status === "submitted" ? (
            <p className="text-caption text-accent">
              Thank you — you&rsquo;re on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 rounded-sm border border-accent-light bg-background px-4 py-3 text-body text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="rounded-sm bg-accent text-white px-6 py-3 text-caption tracking-widest uppercase hover:bg-text-primary transition-colors duration-200 shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </RevealOnScroll>
  );
}
