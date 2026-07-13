import type { SanityImageSource } from "@sanity/image-url";

export type SanityMenuItem = {
  _id: string;
  title: string;
  category?: string;
  description: string;
  price: number;
  image: SanityImageSource;
};

export type DisplayMenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
};
