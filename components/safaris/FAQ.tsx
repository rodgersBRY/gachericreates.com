"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do I need professional camera gear?",
    answer:
      "Not at all. Guests come with everything from smartphones to full professional setups. I help everyone get the best out of whatever they have. If you're interested in upgrading or renting gear, I can advise before the trip.",
  },
  {
    question: "What is the best time of year to go?",
    answer:
      "It depends on what you most want to see. The Great Migration river crossings peak July–October in the Mara. The dry seasons (January–February and June–October) generally offer better wildlife visibility across all reserves. I'm happy to advise based on your priorities.",
  },
  {
    question: "How physically demanding are the safaris?",
    answer:
      "Game drives are done from a vehicle — the walking is minimal. Early mornings are standard (pre-dawn starts for golden hour), but there's always the option to rest during midday. The pace is relaxed and designed around good light, not ticking destinations.",
  },
  {
    question: "Can I book for just two people?",
    answer:
      "Yes. All packages accept a minimum of two guests. Solo bookings are also considered — get in touch to discuss.",
  },
  {
    question: "What's included in the price?",
    answer:
      "All game drives with me, accommodation (mid-range or luxury depending on your preference), all meals during the safari, park fees, and transfers. International flights are not included. Full inclusions are listed on each package.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For peak season (July–October), six to nine months ahead is ideal. Other times of year are generally more flexible, though I'd recommend booking at least three months out to secure your preferred camp.",
  },
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-surface">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-start gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-body text-body text-text-primary">
          {item.question}
        </span>
        <span
          className="text-accent shrink-0 mt-0.5 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          &#43;
        </span>
      </button>
      {isOpen && (
        <p className="pb-5 text-body text-text-secondary leading-relaxed">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          item={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
