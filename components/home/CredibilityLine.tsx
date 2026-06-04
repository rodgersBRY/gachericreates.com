import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CredibilityLine() {
  return (
    <RevealOnScroll>
      <div className="text-center py-12 border-y border-surface mx-6 md:mx-12">
        <p className="text-caption text-text-secondary tracking-widest uppercase">
          {/* Replace with actual award — e.g. "Wildlife Photographer of the Year — Commended, 2025" */}
          Wildlife Photographer of the Year &mdash; Commended, 2025
        </p>
      </div>
    </RevealOnScroll>
  );
}
