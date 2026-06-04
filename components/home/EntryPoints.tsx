import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

interface EntryCardProps {
  href: string;
  publicId: string;
  imageAlt: string;
  title: string;
  descriptor: string;
  delay: number;
}

function EntryCard({ href, publicId, imageAlt, title, descriptor, delay }: EntryCardProps) {
  return (
    <RevealOnScroll delay={delay}>
      <Link href={href} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-surface">
          <Image
            src={cloudinaryUrl(publicId, 800)}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-text-primary/10 group-hover:bg-text-primary/0 transition-colors duration-300" />
        </div>
        <div className="pt-4">
          <h2 className="font-heading text-heading-3 text-text-primary mb-1">{title}</h2>
          <p className="text-caption text-text-secondary">{descriptor}</p>
        </div>
      </Link>
    </RevealOnScroll>
  );
}

const cards: Omit<EntryCardProps, "delay">[] = [
  {
    href: "/gallery",
    publicId: "gachericreates/home/entry-gallery",
    imageAlt: "A herd of elephants crossing the savanna at golden hour",
    title: "Gallery",
    descriptor: "Three collections — Migration, Big Cats, Landscapes.",
  },
  {
    href: "/prints",
    publicId: "gachericreates/home/entry-prints",
    imageAlt: "A leopard resting in a fever tree, Samburu",
    title: "Fine Art Prints",
    descriptor: "Limited and open editions, shipped worldwide.",
  },
  {
    href: "/safaris",
    publicId: "gachericreates/home/entry-safaris",
    imageAlt: "Gacheri photographing from a safari vehicle at sunrise",
    title: "Photo Safaris",
    descriptor: "Small groups, dedicated vehicle, guided by Gacheri.",
  },
];

export function EntryPoints() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <EntryCard key={card.href} {...card} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}
