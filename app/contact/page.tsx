import type { Metadata } from "next";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — GacheriCreates",
  description:
    "Get in touch with Gacheri for print inquiries, safari bookings, or general questions.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="font-heading text-heading-1 text-text-primary">
            Get in touch
          </h1>
          <p className="text-body text-text-secondary">
            I typically respond within 24 hours. For safari and print inquiries,
            WhatsApp is the fastest way to reach me.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-label text-text-secondary tracking-widest uppercase">
            Fastest response
          </p>
          <WhatsAppCTA
            context="general"
            label="Message me on WhatsApp"
            variant="primary"
          />
        </div>

        <div className="border-t border-surface pt-12 flex flex-col gap-8">
          <p className="text-label text-text-secondary tracking-widest uppercase">
            Or send a message
          </p>

          <div className="flex gap-3 rounded-sm border border-accent-light bg-accent-light/30 px-4 py-4">
            <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 5Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="currentColor"/>
              </svg>
            </span>
            <p className="text-caption text-text-secondary">
              The contact form is temporarily unavailable. Please reach out directly via{" "}
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-text-primary transition-colors duration-200"
              >
                WhatsApp
              </a>{" "}
              — I typically respond within a few hours.
            </p>
          </div>

          <ContactForm />
        </div>

        <div className="border-t border-surface pt-8 flex flex-col gap-2">
          <p className="text-label text-text-secondary tracking-widest uppercase">
            Instagram
          </p>
          <a
            href="https://instagram.com/gachericreates"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-caption text-accent"
          >
            @gachericreates
          </a>
        </div>
      </div>
    </div>
  );
}
