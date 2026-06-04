import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/types";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

interface GalleryCardProps {
  collection: Collection;
}

export function GalleryCard({ collection }: GalleryCardProps) {
  return (
    <Link href={`/gallery/${collection.id}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface">
        <Image
          src={cloudinaryUrl(collection.coverImage, 1200)}
          alt={`Cover image for the ${collection.title} collection`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-text-primary/20 group-hover:bg-text-primary/10 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="font-heading text-heading-3 text-white">{collection.title}</h2>
          <p className="text-label text-white/70 mt-1 tracking-widest uppercase">
            {collection.images.length} images
          </p>
        </div>
      </div>
    </Link>
  );
}
