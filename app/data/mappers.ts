import type { CountryItem } from "./CountryItem";
import type { UniversityItem } from "./UniversityItem";
import type { DetailCardItem } from "./DetailCardItem";

export function countryToDetailItem(country: CountryItem): DetailCardItem {
  return {
    name: country.name,
    slug: country.slug,
    location: country.location,
    stat1: country.students,
    stat2: country.universities,
    stat3: country.population,
    description: country.description,
    images: country.images,
  };
}

export function universityToDetailItem(university: UniversityItem): DetailCardItem {
  return {
    name: university.name,
    slug: university.slug,
    location: university.location,
    stat1: university.faculties,
    stat2: university.programs,
    stat3: university.ranking,
    description: university.description,
    images: university.images,
  };
}