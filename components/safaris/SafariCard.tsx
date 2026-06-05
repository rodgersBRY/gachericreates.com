import Image from "next/image";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import type { SafariPackage } from "@/types";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

interface SafariCardProps {
  safari: SafariPackage;
}

export function SafariCard({ safari }: SafariCardProps) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-sm overflow-hidden bg-surface">
      <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
        <Image
          src={cloudinaryUrl(safari.featuredImage, 1200)}
          alt={`${safari.title} — ${safari.locations.join(", ")}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="p-8 lg:p-10 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-heading-2 text-text-primary">{safari.title}</h2>
          <div className="flex flex-wrap gap-4 text-caption text-text-secondary">
            <span>{safari.duration}</span>
            <span>&middot;</span>
            <span>{safari.locations.join(", ")}</span>
            <span>&middot;</span>
            <span>{safari.groupSize}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-label text-text-secondary tracking-widest uppercase">Highlights</p>
          <ul className="flex flex-col gap-1.5">
            {safari.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-caption text-text-secondary">
                <span className="text-accent mt-0.5 shrink-0">&#8212;</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-label text-text-secondary tracking-widest uppercase">From</p>
          <p className="font-heading text-heading-3 text-text-primary">
            USD {safari.priceRangeUSD} pp
          </p>
        </div>

        <WhatsAppCTA
          context="safari-inquiry"
          label="Inquire about this safari"
          variant="outline"
          className="self-start"
        />
      </div>
    </article>
  );
}
