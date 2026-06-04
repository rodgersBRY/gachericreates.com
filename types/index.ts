export interface CollectionImage {
  src: string;
  alt: string;
  title: string;
  location: string;
}

export interface Collection {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  images: CollectionImage[];
}

export type EditionType = "limited" | "open";

export interface PrintSize {
  label: string;
  priceUSD: number;
  priceKES: number;
}

export interface Print {
  id: string;
  title: string;
  location: string;
  collectionId: string;
  cloudinaryId: string;
  edition: EditionType;
  sizes: PrintSize[];
  available: boolean;
}

export interface SafariPackage {
  id: string;
  title: string;
  duration: string;
  locations: string[];
  groupSize: string;
  includes: string[];
  priceRangeUSD: string;
  highlights: string[];
  featuredImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  safariPackageId: string;
  quote: string;
  date: string;
}
