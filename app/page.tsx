import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { EntryPoints } from "@/components/home/EntryPoints";
import { CredibilityLine } from "@/components/home/CredibilityLine";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";

export const metadata: Metadata = {
  title: "GacheriCreates — Kenya Wildlife Photography",
  description:
    "Fine art wildlife photography and photo safaris by Gacheri, based in Kenya. Gallery, limited edition prints, and small-group safari experiences.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <EntryPoints />
      <CredibilityLine />
      <AboutSnippet />
      <NewsletterSignup />
    </>
  );
}
