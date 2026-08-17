import type { CountryItem } from "@/app/data/CountryItem";

export type CountryOption = CountryItem & {
  benefits: string[];
};

export const countryOptions: CountryOption[] = [
  {
    name: "Turkey",
    slug: "turkey",
    location: "Europe / Asia",
    students: 6715761,
    universities: 201,
    population: 86092168,
    description:
      "Study in one of the region’s largest higher-education systems, with a wide range of public and private universities, strong city life, and affordable living compared with many European destinations.",
    images: [{ src: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=2000" }],
    benefits: ["Wide Program Choice", "Affordable Living", "Strategic Location"],
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    location: "Asia",
    students: 1271499,
    universities: 67,
    population: 34300000,
    description:
      "Malaysia offers internationally recognized education, strong English-medium options, and a student-friendly balance of quality, affordability, and modern city infrastructure.",
    images: [{ src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }],
    benefits: ["English-Taught Programs", "Low Living Costs", "Global Campuses"],
  },
  {
    name: "North Cyprus",
    slug: "northern-cyprus",
    location: "Europe • Eastern Mediterranean",
    students: 55000,
    universities: 12,
    population: 983000,
    description:
      "North Cyprus combines a Mediterranean lifestyle with a growing higher-education sector, internationally oriented universities, and a welcoming environment for international students.",
    images: [{ src: "https://plus.unsplash.com/premium_photo-1661963985241-f3cea907bc99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }],
    benefits: ["Safe Environment", "International Degrees", "Mediterranean Lifestyle"],
  },
  {
    name: "Rwanda",
    slug: "rwanda",
    location: "Africa",
    students: 72128,
    universities: 36,
    population: 13246394,
    description:
      "Rwanda is building a fast-growing higher-education environment with a reputation for safety, cleanliness, innovation, and a modern, organized capital city.",
    images: [{ src: "https://images.unsplash.com/photo-1579518874869-1ad294d2596f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }],
    benefits: ["Safe & Clean Cities", "Emerging Innovation Hub", "Modern Learning Environment"],
  },
  {
    name: "Uganda",
    slug: "uganda",
    location: "Africa",
    students: 227125,
    universities: 55,
    population: 45905417,
    description:
      "Uganda offers a broad university landscape, strong regional academic links, and a cost-effective study experience in one of East Africa’s most established education markets.",
    images: [{ src: "https://images.unsplash.com/photo-1557849582-5875ac6dee83?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }],
    benefits: ["Affordable Tuition", "Regional Academic Hub", "Wide University Choice"],
  },
];