import CountryDetailCard from "../components/cards/CountryDetailCard";
import { countryOptions } from "../data/countries";

export default function CountriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-10">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-widest uppercase text-black/40 dark:text-white/40">
          Study Abroad Destinations
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mt-3">
          Explore Countries
        </h1>
        <p className="text-black/60 dark:text-white/60 mt-4 max-w-2xl mx-auto">
          Discover countries, study abroad, and explore educational opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countryOptions.map((country) => (
          <CountryDetailCard key={country.slug} item={country} />
        ))}
      </div>
    </div>
  );
}