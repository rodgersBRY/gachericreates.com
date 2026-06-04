import type { Testimonial } from "@/types";

interface TestimonialBlockProps {
  testimonials: Testimonial[];
}

export function TestimonialBlock({ testimonials }: TestimonialBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t) => (
        <blockquote key={t.id} className="flex flex-col gap-4">
          <p className="font-heading text-heading-3 text-text-primary leading-snug">
            &ldquo;{t.quote}&rdquo;
          </p>
          <footer className="flex flex-col gap-0.5">
            <cite className="not-italic text-caption text-text-primary font-body">
              {t.name}
            </cite>
            <p className="text-label text-text-secondary tracking-wide">
              {t.country} &middot; {t.date}
            </p>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
