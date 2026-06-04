import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Gacheri — GacheriCreates",
  description:
    "Gacheri is a Kenya-based wildlife photographer with over a decade in the field. Her work spans the Masai Mara, Samburu, and the northern reserves.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="relative w-full aspect-[16/7] bg-surface">
        <Image
          src="https://res.cloudinary.com/CLOUD_NAME/image/upload/f_auto,q_auto,w_2000/gachericreates/about/hero-field"
          alt="Gacheri crouching low to photograph a pride of lions at sunrise in the Masai Mara"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-text-primary/20" />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-20 flex flex-col gap-12">
        <section className="flex flex-col gap-6">
          <h1 className="font-heading text-heading-1 text-text-primary">About Gacheri</h1>
          {/* Replace paragraphs below with Gacheri's actual story in first person */}
          <p className="text-body text-text-secondary leading-relaxed">
            I grew up watching the light change over the Rift Valley, and I&rsquo;ve never really
            stopped. What started as weekend drives into the Mara became something I couldn&rsquo;t
            put down — the patience it requires, the way it forces you to be still and present in
            a way that ordinary life rarely does.
          </p>
          <p className="text-body text-text-secondary leading-relaxed">
            I&rsquo;ve been photographing professionally since 2012, working across the Masai Mara,
            Samburu, Amboseli, Laikipia, and the northern reserves. I shoot mostly at dawn and dusk,
            mostly at ground level, mostly in silence.
          </p>
          <p className="text-body text-text-secondary leading-relaxed">
            Every image I make is an attempt to slow down and pay attention — to the light, the
            animal, and the silence between. I photograph Kenya&rsquo;s wildlife the way I
            experience it: slowly, quietly, and without hurry.
          </p>
        </section>

        <section className="border-t border-surface pt-12 flex flex-col gap-3">
          {/* Replace with actual award details */}
          <p className="text-label text-text-secondary tracking-widest uppercase">Recognition</p>
          <p className="font-heading text-heading-3 text-text-primary">
            Wildlife Photographer of the Year
          </p>
          <p className="text-caption text-text-secondary">
            Commended &mdash; Behaviour: Mammals &mdash; 2023
          </p>
        </section>

        <section className="border-t border-surface pt-12 flex flex-col gap-6">
          <h2 className="font-heading text-heading-2 text-text-primary">
            How I approach photography
          </h2>
          <p className="text-body text-text-secondary leading-relaxed">
            I don&rsquo;t chase. I watch. The animals I photograph are not subjects to be directed
            — they are the entire point. My job is to be in the right place, at the right light,
            with enough patience to wait for the moment that matters.
          </p>
          <p className="text-body text-text-secondary leading-relaxed">
            That&rsquo;s the same philosophy I bring to the safaris I lead. Small groups, no rush,
            no boxes to tick.
          </p>
        </section>

        <Link
          href="/contact"
          className="link-underline text-caption text-accent tracking-widest uppercase self-start"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
