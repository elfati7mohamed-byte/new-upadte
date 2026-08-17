export interface CountryItem {
  name: string;            // Country name
  slug: string;
  location: string;        // Region / Continent
  //rate: string;            // Average tuition OR living cost
  students: number;        // Instead of beds
  universities: number;    // Instead of baths
  population: number;      // Instead of area
  description?: string;
  images: {
    src: string;
  }[];
}