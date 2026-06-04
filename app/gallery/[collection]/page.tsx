import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { collections } from "@/lib/data/collections";
import { CollectionView } from "@/components/gallery/CollectionView";

interface PageProps {
  params: { collection: string };
}

export function generateStaticParams() {
  return collections.map((c) => ({ collection: c.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const collection = collections.find((c) => c.id === params.collection);
  if (!collection) return {};
  return {
    title: `${collection.title} — GacheriCreates Gallery`,
    description: collection.description,
  };
}

export default function CollectionPage({ params }: PageProps) {
  const collection = collections.find((c) => c.id === params.collection);
  if (!collection) notFound();

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="font-heading text-heading-1 text-text-primary mb-3">
          {collection.title}
        </h1>
        <p className="text-body text-text-secondary max-w-lg mb-12">
          {collection.description}
        </p>

        <CollectionView collection={collection} />
      </div>
    </div>
  );
}
