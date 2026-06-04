import type { Metadata } from "next";
import { PrintsView } from "@/components/prints/PrintsView";
import { prints } from "@/lib/data/prints";

export const metadata: Metadata = {
  title: "Fine Art Prints — GacheriCreates",
  description:
    "Limited and open edition fine art prints of Kenya wildlife photography by Gacheri. Ships worldwide.",
};

export default function PrintsPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="font-heading text-heading-1 text-text-primary mb-4">Fine Art Prints</h1>
        <p className="text-body text-text-secondary max-w-lg mb-16">
          Printed on archival fine-art paper with pigment inks. Limited editions are hand-numbered
          and signed. All orders are made to order — click a print to see sizes, pricing, and
          enquire.
        </p>

        <PrintsView prints={prints} />
      </div>
    </div>
  );
}
