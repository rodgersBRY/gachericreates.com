import type { Print } from "@/types";

export const prints: Print[] = [
  {
    id: "first-light-crossing",
    title: "First Light Crossing",
    location: "Masai Mara, Kenya",
    collectionId: "great-migration",
    cloudinaryId:
      "gachericreates/collections/great-migration/001",
    edition: "limited",
    sizes: [
      { label: '20"×30"', priceUSD: 450, priceKES: 58500 },
      { label: '30"×45"', priceUSD: 750, priceKES: 97500 },
      { label: '40"×60"', priceUSD: 1200, priceKES: 156000 },
    ],
    available: true,
  },
  {
    id: "the-fever-tree",
    title: "The Fever Tree",
    location: "Samburu, Kenya",
    collectionId: "big-cats",
    cloudinaryId:
      "gachericreates/collections/big-cats/001",
    edition: "limited",
    sizes: [
      { label: '20"×30"', priceUSD: 450, priceKES: 58500 },
      { label: '30"×45"', priceUSD: 750, priceKES: 97500 },
      { label: '40"×60"', priceUSD: 1200, priceKES: 156000 },
    ],
    available: true,
  },
  {
    id: "pink-dawn",
    title: "Pink Dawn",
    location: "Lake Nakuru, Kenya",
    collectionId: "landscapes",
    cloudinaryId:
      "gachericreates/collections/landscapes/001",
    edition: "open",
    sizes: [
      { label: '16"×24"', priceUSD: 180, priceKES: 23400 },
      { label: '20"×30"', priceUSD: 280, priceKES: 36400 },
    ],
    available: true,
  },
];
