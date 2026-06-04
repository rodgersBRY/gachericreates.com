import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AboutSnippet() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-surface">
            <Image
              src="https://res.cloudinary.com/CLOUD_NAME/image/upload/f_auto,q_auto,w_900/gachericreates/about/portrait-field"
              alt="Gacheri photographing wildlife from a low angle in the Masai Mara"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-heading-2 text-text-primary">
              {/* Replace with Gacheri's first-person snippet */}I photograph
              Kenya&rsquo;s wildlife the way I experience it — slowly, quietly,
              and at ground level.
            </h2>
            <p className="text-body text-text-secondary leading-relaxed">
              {/* Replace with 2–3 sentences in Gacheri's voice */}
              I&rsquo;ve spent over a decade in the bush learning the rhythms of
              the Mara, Samburu, and the north. Every image I make is an attempt
              to slow down and pay attention — to the light, the animal, and the
              silence between.
            </p>
            <Link
              href="/about"
              className="link-underline text-caption text-accent tracking-widest uppercase self-start"
            >
              More about Gacheri
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
