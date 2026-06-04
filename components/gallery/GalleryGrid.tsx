import Image from "next/image";
import type { CollectionImage } from "@/types";

interface GalleryGridProps {
  images: CollectionImage[];
  onImageClick: (index: number) => void;
}

export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onImageClick(index)}
          className="group relative aspect-square overflow-hidden rounded-sm bg-surface block w-full"
          aria-label={`View ${image.title} — ${image.location}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/30 transition-colors duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
            <p className="font-heading text-heading-3 text-white leading-tight">
              {image.title}
            </p>
            <p className="text-label text-white/70 tracking-widest uppercase mt-1">
              {image.location}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
