"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

export function Hero() {
  return (
    <section data-hero className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={cloudinaryUrl("DSC_6132_copy_gio3dz", 2000)}
          alt="Hot air baloon across the Masai Mara"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-text-primary/30" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-heading text-display text-white leading-none mb-4">
            Gacheri
          </h1>
          <p className="font-body text-body text-white/80 max-w-md">
            Kenya wildlife photography — in the field since 2022.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
