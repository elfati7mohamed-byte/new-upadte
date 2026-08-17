// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const countries = [
//   {
//     name: "Study in Turkey",
//     description: "Experience high-quality education with affordable tuition fees and a vibrant cultural heritage.",
//     benefits: ["Modern Campuses", "Easy Visa", "Strategic Location"],
//     img: "/turkey.jpg",
//     link: "/countries/turkey",
//   },
//   {
//     name: "Study in North Cyprus",
//     description: "Enjoy a safe environment and international degrees in the heart of the Mediterranean.",
//     benefits: ["English-Taught", "Safe Environment", "High Success"],
//     img: "/cyprus.jpg",
//     link: "/countries/northern-cyprus",
//   },
//   {
//     name: "Study in Malaysia",
//     description: "A global education hub offering dual-degree programs and a unique multicultural lifestyle.",
//     benefits: ["Dual Degrees", "Low Cost", "Innovation"],
//     img: "/malaysia.jpg",
//     link: "/countries/malaysia",
//   },
//   {
//     name: "Study in Rwanda",
//     description: "Join the rising star of Africa, known for its incredible safety and tech-driven future.",
//     benefits: ["Safe & Clean", "IT Hub", "Fast Growth"],
//     img: "/Kigali-City-2-1.png",
//     link: "/countries/rwanda",
//   },
//   {
//     name: "Study in Uganda",
//     description: "Explore diverse academic programs in a rapidly growing economy with tropical beauty.",
//     benefits: ["Diversity", "Low Costs", "Research"],
//     img: "/kampala-road.webp",
//     link: "/countries/uganda",
//   },
// ];

// const GlobalOptions = () => {
//   const duplicatedCountries = [...countries, ...countries];

//   return (
//     <section id="global-options" className="py-12 sm:py-16 bg-white-50 overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8 sm:mb-10 text-center">
//         <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-2">
//           Global Destinations
//         </h2>
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
//           Where Your Dreams Become Reality
//         </h1>
//       </div>

//       <div className="relative flex">
//         <motion.div
//           className="flex gap-4 sm:gap-6"
//           animate={{
//             x: ["0%", "-50%"],
//           }}
//           transition={{
//             ease: "linear",
//             duration: 30,
//             repeat: Infinity,
//           }}
//           style={{ width: "fit-content" }}
//         >
//           {duplicatedCountries.map((country, i) => (
//             <div
//               key={i}
//               className="w-[260px] sm:w-[280px] md:w-[300px] shrink-0 group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 flex flex-col h-[400px] sm:h-[430px] transition-all duration-300"
//             >
//               {/* Image Box */}
//               <div className="relative h-40 sm:h-44 w-full overflow-hidden shrink-0">
//                 <Image
//                   src={country.img}
//                   alt={country.name}
//                   fill
//                   sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, 300px"
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//               </div>

//               {/* Card Content */}
//               <div className="p-4 sm:p-5 flex flex-col flex-1">
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
//                   {country.name}
//                 </h3>
//                 <p className="text-gray-600 mb-4 text-xs sm:text-sm line-clamp-2 leading-relaxed">
//                   {country.description}
//                 </p>

//                 {/* Benefits */}
//                 <div className="flex flex-wrap gap-1.5 mb-4">
//                   {country.benefits.map((benefit, idx) => (
//                     <span
//                       key={idx}
//                       className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] sm:text-[10px] font-semibold rounded-md uppercase tracking-wider"
//                     >
//                       {benefit}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Action Button */}
//                 <div className="mt-auto">
//                   <Link
//                     href={country.link}
//                     className="flex items-center justify-center w-full py-2.5 rounded-lg bg-indigo-600 text-white text-xs sm:text-sm font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-sm"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default GlobalOptions; 

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const countries = [
  {
    name: "Study in Turkey",
    description: "Experience high-quality education with affordable tuition fees and a vibrant cultural heritage.",
    benefits: ["Modern Campuses", "Easy Visa", "Strategic Location"],
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800",
    link: "/countries/turkey",
  },
  {
    name: "Study in North Cyprus",
    description: "Enjoy a safe environment and international degrees in the heart of the Mediterranean.",
    benefits: ["English-Taught", "Safe Environment", "High Success"],
    img: "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42b1?auto=format&fit=crop&q=80&w=800",
    link: "/countries/northern-cyprus",
  },
  {
    name: "Study in Malaysia",
    description: "A global education hub offering dual-degree programs and a unique multicultural lifestyle.",
    benefits: ["Dual Degrees", "Low Cost", "Innovation"],
    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800",
    link: "/countries/malaysia",
  },
  {
    name: "Study in Rwanda",
    description: "Join the rising star of Africa, known for its incredible safety and tech-driven future.",
    benefits: ["Safe & Clean", "IT Hub", "Fast Growth"],
    img: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&q=80&w=800",
    link: "/countries/rwanda",
  },
  {
    name: "Study in Uganda",
    description: "Explore diverse academic programs in a rapidly growing economy with tropical beauty.",
    benefits: ["Diversity", "Low Costs", "Research"],
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800",
    link: "/countries/uganda",
  },
];

const GlobalOptions = () => {
  const duplicatedCountries = [...countries, ...countries];

  return (
    <section id="global-options" className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8 sm:mb-10 text-center">
        <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-2">
          Global Destinations
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Where Your Dreams Become Reality
        </h1>
      </div>

      <div className="relative flex">
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedCountries.map((country, i) => (
            <Link
              key={i}
              href={country.link}
              className="w-[260px] sm:w-[280px] md:w-[300px] shrink-0 group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 cursor-pointer"
            >
              {/* Image Box */}
              <div className="relative h-36 sm:h-40 w-full overflow-hidden shrink-0 bg-gray-100">
                <Image
                  src={country.img}
                  alt={country.name}
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-xs line-clamp-2 leading-relaxed">
                    {country.description}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {country.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] font-semibold rounded-md uppercase tracking-wider"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visible Clickable Button Area */}
                <div className="w-full py-2 rounded-lg bg-indigo-600 group-hover:bg-indigo-700 text-white text-center text-xs font-bold transition-all shadow-sm">
                  View Details
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalOptions;