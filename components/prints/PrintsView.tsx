"use client";

import { useState } from "react";
import { PrintCard } from "@/components/prints/PrintCard";
import { PrintDetail } from "@/components/prints/PrintDetail";
import type { Print } from "@/types";

interface PrintsViewProps {
  prints: Print[];
}

export function PrintsView({ prints }: PrintsViewProps) {
  const [selected, setSelected] = useState<Print | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {prints.map((print) => (
          <PrintCard
            key={print.id}
            print={print}
            onClick={() => setSelected(print)}
          />
        ))}
      </div>

      {selected && (
        <PrintDetail print={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
