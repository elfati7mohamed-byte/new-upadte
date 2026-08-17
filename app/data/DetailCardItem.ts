export type DetailBasePath = "properties" | "countries" | "universities";

export type DetailCardItem = {
  name: string;
  slug: string;
  location: string;
  stat1: number;
  stat2: number;
  stat3: number;
  description?: string;
  images: { src: string }[];
};