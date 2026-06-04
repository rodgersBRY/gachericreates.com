"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { CollectionImage } from "@/types";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";

interface LightboxProps {
  images: CollectionImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full h-full max-w-5xl max-h-[90vh] mx-auto my-auto flex items-center justify-center px-16"
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.97, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full">
            <Image
              src={cloudinaryUrl(image.src, 2000)}
              alt={image.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center px-16">
            <p className="font-heading text-heading-3 text-white">{image.title}</p>
            <p className="text-label text-white/60 tracking-widest uppercase mt-1">{image.location}</p>
          </div>
        </motion.div>

        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-opacity duration-200 p-2"
        >
          <CloseIcon />
        </button>

        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-opacity duration-200 p-2"
          >
            <ChevronLeft />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-opacity duration-200 p-2"
          >
            <ChevronRight />
          </button>
        )}

        <span className="absolute bottom-4 right-6 text-label text-white/40 tracking-widest">
          {currentIndex + 1} / {images.length}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
