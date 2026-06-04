import type { Metadata } from "next";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import { collections } from "@/lib/data/collections";

export const metadata: Metadata = {
  title: "Gallery — GacheriCreates",
  description:
    "Three collections of Kenya wildlife photography — The Great Migration, Big Cats, and Landscapes.",
};

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="font-heading text-heading-1 text-text-primary mb-4">
          Gallery
        </h1>
        <p className="text-body text-text-secondary max-w-lg mb-16">
          Three collections made across Kenya&rsquo;s wilderness. Click a
          collection to explore the full series.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection) => (
            <GalleryCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
}
