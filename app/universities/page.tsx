// import DetailCard from "../components/cards/DetailCard";
// import { universityOptions } from "../data/universities";
// import { universityToDetailItem } from "../data/mappers";

// const labels = {
//   stat1: "Faculties",
//   stat2: "Programs",
//   stat3: "Ranking",
// };

// const icons = {
//   stat1: "solar:buildings-2-linear",
//   stat2: "solar:book-linear",
//   stat3: "solar:ranking-linear",
// };

// export default function UniversitiesPage() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 overflow-hidden">
//       {/* Title Header */}
//       <div className="text-center mb-8 sm:mb-12">
//         <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
//           Academic institutions
//         </p>
//         <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
//           Universities
//         </h1>
//         <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
//           Discover universities, compare tuition fees, programs, and rankings.
//         </p>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//         {universityOptions.map((u) => (
//           <DetailCard
//             key={u.slug}
//             item={universityToDetailItem(u)}
//             basePath="universities"
//             labels={labels}
//             icons={icons}
//           />
//         ))}
//       </div>
//     </div>
//   ); 
// }

import DetailCard from "../components/cards/DetailCard";
import { universityOptions } from "../data/universities";
import { universityToDetailItem } from "../data/mappers";

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

export default function UniversitiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 overflow-hidden">
      {/* Title Header */}
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
          Academic institutions
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
          Universities
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
          Discover universities, compare tuition fees, programs, and rankings.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {universityOptions.map((u) => (
          <DetailCard
            key={u.slug}
            item={universityToDetailItem(u)}
            basePath="universities"
            labels={labels}
            icons={icons}
          />
        ))}
      </div>
    </div>
  );
}