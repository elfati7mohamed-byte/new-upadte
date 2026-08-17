import DetailCard from "@/app/components/cards/DetailCard";
import { universityOptions } from "@/app/data/universities";
import { universityToDetailItem } from "@/app/data/mappers";

const labels = {
  stat1: "Faculties",
  stat2: "Programs",
  stat3: "Ranking",
};

const icons = {
  stat1: "solar:buildings-2-linear",
  stat2: "solar:book-linear",
  stat3: "solar:ranking-linear",
};

interface CountryUniversitiesSectionProps {
  countrySlug: string;
  countryName: string;
}

export default function CountryUniversitiesSection({
  countrySlug,
  countryName,
}: CountryUniversitiesSectionProps) {
  const universities = universityOptions
    .filter((u) => u.country.slug === countrySlug)
    .sort((a, b) => a.ranking - b.ranking)
    .slice(0, 5);

  if (!universities.length) return null;

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Top Universities in {countryName}</h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Explore leading institutions offering internationally recognized programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((u) => (
          <DetailCard
            key={u.slug}
            item={universityToDetailItem(u)}
            basePath="universities"
            labels={labels}
            icons={icons}
          />
        ))}
      </div>
    </section>
  );
}