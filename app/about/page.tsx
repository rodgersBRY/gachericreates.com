import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

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
          src={cloudinaryUrl("Maureen-DSC_8974_x4udom", 2000)}
          alt="Gacheri crouching low to photograph a pride of lions at sunrise in the Masai Mara"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-text-primary/20" />
      </div>

      <div className="flex justify-center -mt-20 relative z-10">
        <div className="relative w-72 h-72 rounded-full overflow-hidden ring-4 ring-background shadow-lg">
          <Image
            src={cloudinaryUrl("Maureen-Camera_Safari_PSM_2728-copy_y9yr4i", 320)}
            alt="Portrait of Gacheri in the field"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pt-12 pb-20 flex flex-col gap-12">
        <section className="flex flex-col gap-6">
          <h1 className="font-heading text-heading-1 text-text-primary">
            About Gacheri
          </h1>
          {/* Replace paragraphs below with Gacheri's actual story in first person */}
          <p className="text-body text-text-secondary leading-relaxed">
            I grew up watching the light change over the Rift Valley, and
            I&rsquo;ve never really stopped. What started as weekend drives into
            the Mara became something I couldn&rsquo;t put down — the patience
            it requires, the way it forces you to be still and present in a way
            that ordinary life rarely does.
          </p>
          <p className="text-body text-text-secondary leading-relaxed">
            I&rsquo;ve been photographing professionally since 2021, working
            across the Masai Mara, Samburu, Amboseli, Laikipia, and the northern
            reserves. I shoot mostly at dawn and dusk, mostly at ground level,
            mostly in silence.
          </p>
          <p className="text-body text-text-secondary leading-relaxed">
            Every image I make is an attempt to slow down and pay attention — to
            the light, the animal, and the silence between. I photograph
            Kenya&rsquo;s wildlife the way I experience it: slowly, quietly, and
            without hurry.
          </p>
        </section>

        <section className="border-t border-surface pt-12 flex flex-col gap-4">
          <p className="text-label text-text-secondary tracking-widest uppercase">
            Recognition
          </p>
          <div className="flex gap-6 items-start">
            <div className="relative w-20 h-28 shrink-0 overflow-hidden">
              <Image
                src={cloudinaryUrl("Elegance-in-Beads-By-Maureen-Gacheri-Turkana-Kenya-3rd_lfwyhn", 160)}
                alt="Elegance in Beads — Tembea Kenya Photo Competition entry, Turkana"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-heading text-heading-3 text-text-primary">
                Tembea Kenya Photo Competition
              </p>
              <p className="text-caption text-text-secondary">
                Second Runner Up &mdash; &ldquo;Elegance in Beads&rdquo; &mdash; Turkana, Kenya &mdash; February 2025
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-surface pt-12 flex flex-col gap-6">
          <h2 className="font-heading text-heading-2 text-text-primary">
            How I approach photography
          </h2>
          <p className="text-body text-text-secondary leading-relaxed">
            I don&rsquo;t chase. I watch. The animals I photograph are not
            subjects to be directed — they are the entire point. My job is to be
            in the right place, at the right light, with enough patience to wait
            for the moment that matters.
          </p>
          <p className="text-body text-text-secondary leading-relaxed">
            That&rsquo;s the same philosophy I bring to the safaris I lead.
            Small groups, no rush, no boxes to tick.
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
