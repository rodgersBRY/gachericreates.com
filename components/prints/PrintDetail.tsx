"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import type { Print } from "@/types";

interface PrintDetailProps {
  print: Print;
  onClose: () => void;
}

export function PrintDetail({ print, onClose }: PrintDetailProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
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
        className="fixed inset-0 z-50 bg-text-primary/60 flex items-end sm:items-center justify-center p-0 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-background w-full sm:max-w-3xl sm:rounded-sm overflow-y-auto max-h-[90vh]"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="relative aspect-[4/5] bg-surface">
              <Image
                src={cloudinaryUrl(print.cloudinaryId, 800)}
                alt={`${print.title}, ${print.location}`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8 flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h2 className="font-heading text-heading-2 text-text-primary">
                    {print.title}
                  </h2>
                  <p className="text-caption text-text-secondary">
                    {print.location}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close detail view"
                  className="text-text-secondary hover:text-text-primary transition-colors p-1 shrink-0"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-label tracking-widest uppercase text-text-secondary">
                  {print.edition === "limited"
                    ? "Limited edition"
                    : "Open edition"}
                </span>
                {!print.available && (
                  <span className="text-caption text-red-600">
                    Currently sold out
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-label text-text-secondary tracking-widest uppercase">
                  Sizes & Pricing
                </p>
                <div className="flex flex-col gap-2">
                  {print.sizes.map((size) => (
                    <div
                      key={size.label}
                      className="flex justify-between text-caption text-text-primary border-b border-surface pb-2"
                    >
                      <span>{size.label}</span>
                      <span className="text-text-secondary">
                        USD {size.priceUSD.toLocaleString()} &nbsp;/&nbsp; KES{" "}
                        {size.priceKES.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {print.available && (
                <WhatsAppCTA
                  context="print-inquiry"
                  label="Enquire about this print"
                  variant="primary"
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
