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
