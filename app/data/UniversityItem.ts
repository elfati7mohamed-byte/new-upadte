export interface UniversityItem {
  name: string;
  slug: string;
  location: string;
  country: {
    name: string;
    slug: string;
  };
  faculties: number;
  programs: number;
  ranking: number;
  description?: string;
  images: {
    src: string;
  }[];
}