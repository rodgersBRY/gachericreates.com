import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    id: "great-migration",
    title: "The Great Migration",
    coverImage: "gachericreates/collections/great-migration/cover",
    description:
      "Witnessing a million wildebeest cross the Mara River is to witness nature at its most raw. These images were made over three seasons in the Masai Mara.",
    images: [
      {
        src: "gachericreates/collections/great-migration/001",
        alt: "Wildebeest crossing the Mara River at dawn, dust rising in the early light",
        title: "First Light Crossing",
        location: "Masai Mara, Kenya",
      },
      {
        src: "gachericreates/collections/great-migration/002",
        alt: "Aerial view of thousands of wildebeest moving across the golden savanna",
        title: "The Column",
        location: "Masai Mara, Kenya",
      },
    ],
  },
  {
    id: "big-cats",
    title: "Big Cats",
    coverImage: "gachericreates/collections/big-cats/cover",
    description:
      "Lions, leopards, and cheetahs — Kenya's top predators photographed in their natural rhythm, not in pursuit.",
    images: [
      {
        src: "gachericreates/collections/big-cats/001",
        alt: "Female leopard resting in a fever tree at golden hour, Samburu",
        title: "The Fever Tree",
        location: "Samburu, Kenya",
      },
      {
        src: "gachericreates/collections/big-cats/002",
        alt: "Cheetah mother and three cubs on a termite mound surveying the plains",
        title: "Survey",
        location: "Masai Mara, Kenya",
      },
    ],
  },
  {
    id: "landscapes",
    title: "Landscapes",
    coverImage: "gachericreates/collections/landscapes/cover",
    description:
      "Kenya's geography is extraordinary — from the Rift Valley floor to the Aberdare highlands. These are places as characters.",
    images: [
      {
        src: "gachericreates/collections/landscapes/001",
        alt: "Dawn mist over Lake Nakuru with flamingos forming a pink line at the water's edge",
        title: "Pink Dawn",
        location: "Lake Nakuru, Kenya",
      },
      {
        src: "gachericreates/collections/landscapes/002",
        alt: "Mount Kenya summit emerging above the clouds at sunrise",
        title: "Above the Clouds",
        location: "Mount Kenya",
      },
    ],
  },
];
