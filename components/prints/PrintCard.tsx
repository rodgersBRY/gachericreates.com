import Image from "next/image";
import type { Print } from "@/types";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

interface PrintCardProps {
  print: Print;
  onClick: () => void;
}

export function PrintCard({ print, onClick }: PrintCardProps) {
  const basePrice = print.sizes[0];

  return (
    <button
      onClick={onClick}
      className="group text-left block w-full"
      aria-label={`View details for ${print.title}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface">
        <Image
          src={cloudinaryUrl(print.cloudinaryId, 800)}
          alt={`${print.title}, ${print.location} — fine art print`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute top-3 left-3">
          <span className="text-label tracking-widest uppercase bg-background/90 text-text-secondary px-2 py-1 rounded-sm">
            {print.edition === "limited" ? "Limited edition" : "Open edition"}
          </span>
        </div>
      </div>

      <div className="pt-4 flex flex-col gap-1">
        <h2 className="font-heading text-heading-3 text-text-primary">
          {print.title}
        </h2>
        <p className="text-caption text-text-secondary">{print.location}</p>
        <p className="text-caption text-text-primary mt-1">
          From USD {basePrice.priceUSD.toLocaleString()}
          <span className="text-text-secondary ml-2">
            / KES {basePrice.priceKES.toLocaleString()}
          </span>
        </p>
      </div>
    </button>
  );
}
