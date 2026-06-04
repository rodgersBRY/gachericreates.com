"use client";

import { useState } from "react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Lightbox } from "@/components/gallery/Lightbox";
import type { Collection } from "@/types";

interface CollectionViewProps {
  collection: Collection;
}

export function CollectionView({ collection }: CollectionViewProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <GalleryGrid
        images={collection.images}
        onImageClick={(index) => setLightboxIndex(index)}
      />

      {lightboxIndex !== null && (
        <Lightbox
          images={collection.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, (i ?? 0) - 1))}
          onNext={() =>
            setLightboxIndex((i) =>
              Math.min(collection.images.length - 1, (i ?? 0) + 1)
            )
          }
        />
      )}
    </>
  );
}
