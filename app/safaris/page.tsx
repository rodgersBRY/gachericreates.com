import type { Metadata } from "next";
import Image from "next/image";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { SafariCard } from "@/components/safaris/SafariCard";
import { TestimonialBlock } from "@/components/safaris/TestimonialBlock";
import { FAQ } from "@/components/safaris/FAQ";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { safariPackages } from "@/lib/data/safaris";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Wildlife Photo Safaris — GacheriCreates",
  description:
    "Small-group wildlife photography safaris led by Gacheri across Kenya — Masai Mara, Samburu, Amboseli, and Laikipia.",
};

export default function SafarisPage() {
  return (
    <div className="pt-16">
      <div className="relative w-full aspect-[16/7] bg-surface">
        <Image
          src={cloudinaryUrl("influencer_content_caayzf", 2000)}
          alt="Gacheri photographing from a safari vehicle at sunrise in the Masai Mara"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-text-primary/30" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-12 max-w-6xl mx-auto">
          <h1 className="font-heading text-heading-1 text-white">
            Photo Safaris
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-24">
        <RevealOnScroll>
          <div className="max-w-2xl flex flex-col gap-5">
            <h2 className="font-heading text-heading-2 text-text-primary">
              Safari the way I do it
            </h2>
            <p className="text-body text-text-secondary leading-relaxed">
              Every safari I lead is small — a maximum of four guests — in a
              dedicated vehicle with no sharing. We go where the light is, stay
              as long as something is happening, and leave when it makes sense
              to. There&rsquo;s no itinerary to chase and no pressure to
              produce.
            </p>
            <p className="text-body text-text-secondary leading-relaxed">
              Whether you shoot on a mirrorless body or a phone, I&rsquo;ll help
              you see what I see. Most guests leave not just with better images,
              but with a different way of looking.
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-10">
          {safariPackages.map((safari, i) => (
            <RevealOnScroll key={safari.id} delay={i * 0.1}>
              <SafariCard safari={safari} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="flex flex-col gap-12">
            <h2 className="font-heading text-heading-2 text-text-primary">
              What guests say
            </h2>
            <TestimonialBlock testimonials={testimonials} />
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-col gap-8">
            <h2 className="font-heading text-heading-2 text-text-primary">
              Questions
            </h2>
            <FAQ />
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-surface rounded-sm p-10 md:p-16 flex flex-col items-center text-center gap-6">
            <h2 className="font-heading text-heading-2 text-text-primary max-w-lg">
              Ready to start planning?
            </h2>
            <p className="text-body text-text-secondary max-w-md">
              WhatsApp is the fastest way to reach me. Tell me when you&rsquo;re
              thinking of going and what you most want to see.
            </p>
            <WhatsAppCTA
              context="safari-inquiry"
              label="Start the conversation"
            />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
