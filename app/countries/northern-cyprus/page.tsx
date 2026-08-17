
"use client";
import React from 'react';
import { Icon } from '@iconify/react';
import CountryUniversitiesSection from "@/app/components/cards/CountryUniversitiesSection";
import ApplyCard from "@/app/components/cards/ApplyCard";
import { applyCardThemes } from "@/app/components/cards/applyCardThemes";
import Image from "next/image";

const CyprusStudyPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-[#003366] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-transparent to-transparent z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1517330357046-3ab5a5dd42b1?auto=format&fit=crop&q=80&w=2000" 
            alt="Cyprus Campus" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Study in <span className="text-[#D2143A]">Northern Cyprus</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Experience world-class British-standard education with affordable tuition fees, 
              automatic scholarships, and a safe Mediterranean lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Icon icon="solar:check-circle-bold" className="text-cyan-400 mr-2" />
                <span className="text-sm font-medium">No IELTS Required (Internal Exam)</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Icon icon="solar:check-circle-bold" className="text-cyan-400 mr-2" />
                <span className="text-sm font-medium">99% Visa Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LONG DESCRIPTION SECTION --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              The Education Hub of the <br />
              <span className="text-[#003366]">Mediterranean</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-left md:text-justify">
              <p>
                Northern Cyprus (TRNC) has emerged as one of the fastest-growing destinations for international students globally. 
                With over 100,000 students from 140 different nations, the island offers a truly multicultural academic atmosphere. 
              </p>
              <p>
                Universities here are recognized by <strong>YÖK (Turkey)</strong> and <strong>YÖDAK (North Cyprus)</strong>, 
                ensuring that your degree is valid worldwide. Many faculties also hold international accreditations such as 
                <strong> ABET, FIBAA, and ASIIN</strong>, maintaining the same quality standards as universities in mainland Europe and the UK.
              </p>
              <p>
                Beyond academics, the island offers 300 days of sunshine, historical sites ranging from Roman ruins to Crusader castles, 
                and a safety record that ranks among the highest in the world. It is the perfect bridge between professional growth 
                and an unforgettable student experience.
              </p>
            </div>
          </div>

          {/* Quick Info Cards - Fixed & Corrected for Northern Cyprus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50/60 p-8 rounded-[2.5rem] border border-blue-100">
              <Icon icon="solar:heart-bold" className="text-[#003366] w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Hospitality</h4>
              <p className="text-sm text-gray-600 mt-2">
                Famous for its warm Mediterranean welcoming culture and extremely peaceful, safe lifestyle.
              </p>
            </div>

            <div className="bg-red-50/60 p-8 rounded-[2.5rem] border border-red-100">
              <Icon icon="solar:routing-2-bold" className="text-[#D2143A] w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Connectivity</h4>
              <p className="text-sm text-gray-600 mt-2">
                Easy transit access via Istanbul to Ercan Airport with streamlined entry entry for all students.
              </p>
            </div>

            <div className="bg-cyan-50/60 p-8 rounded-[2.5rem] border border-cyan-100">
              <Icon icon="solar:ranking-bold" className="text-cyan-700 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Global Rankings</h4>
              <p className="text-sm text-gray-600 mt-2">
                Home to highly accredited universities featured in Times Higher Education world charts.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded-[2.5rem] border border-slate-200">
              <Icon icon="solar:sun-bold" className="text-amber-600 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Island Life</h4>
              <p className="text-sm text-gray-600 mt-2">
                Over 300 days of pure sunshine, beautiful beaches, and historical multi-cultural cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCHOLARSHIP SECTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Scholarships & Financial Aid</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Northern Cyprus is famous for its generous scholarship schemes designed to make high-quality education accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Icon icon="solar:star-shine-bold" className="w-20 h-20 text-[#003366]" />
              </div>
              <div className="text-[#003366] font-bold text-5xl mb-4">50%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Admission</h3>
              <p className="text-gray-600 mb-6">
                Most international students are granted an <strong>automatic 50% tuition waiver</strong> upon acceptance. No separate application is needed.
              </p>
              <div className="flex items-center text-sm font-semibold text-[#003366]">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Guaranteed for 4 Years
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border-2 border-[#D2143A] shadow-lg relative overflow-hidden group">
              <div className="absolute top-4 right-4 bg-[#D2143A] text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                POPULAR
              </div>
              <div className="text-[#D2143A] font-bold text-5xl mb-4">60-75%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Merit</h3>
              <p className="text-gray-600 mb-6">
                Offered to students with high GPA scores or specific department requirements. Great for Engineering and Business students.
              </p>
              <div className="flex items-center text-sm font-semibold text-[#D2143A]">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Grade Dependent
              </div>
            </div>

            <div className="bg-[#003366] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Icon icon="solar:medal-ribbons-star-bold" className="w-20 h-20 text-cyan-400" />
              </div>
              <div className="text-cyan-400 font-bold text-5xl mb-4">80-100%</div>
              <h3 className="text-xl font-bold mb-3">High Honor Awards</h3>
              <p className="text-gray-300 mb-6">
                Reserved for top-tier academic performers, national athletes, or transfer students with exceptional transcripts.
              </p>
              <div className="flex items-center text-sm font-semibold text-cyan-400">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Exclusive & Competitive
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MONTHLY BUDGET SECTION --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-[#003366] rounded-[4rem] p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-cyan-400">Monthly Budget</h2>
              <p className="text-blue-200 mb-8 leading-relaxed">
                Northern Cyprus is generally more affordable than many UK and EU study destinations.
                A budget of <strong>$350 – $600 USD</strong> per month is usually enough for a comfortable
                student lifestyle, depending on the city and accommodation type.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Dormitory / Shared Flat", price: "$170 - $420" },
                  { label: "Food & Groceries", price: "$120 - $180" },
                  { label: "Transport", price: "$0 - $30" },
                  { label: "Personal Expenses", price: "$50 - $100" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-white/10 pb-2"
                  >
                    <span className="text-blue-100">{item.label}</span>
                    <span className="font-bold text-cyan-400">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-xl mb-4 text-center text-cyan-400">Top Student Cities</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>1. Nicosia</span>
                  <span className="text-xs bg-[#D2143A] text-white px-2 py-1 rounded font-bold">Capital City</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>2. Famagusta</span>
                  <span className="text-xs bg-cyan-600 text-white px-2 py-1 rounded font-bold">Major Student Hub</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>3. Kyrenia</span>
                  <span className="text-xs bg-amber-500 text-slate-950 px-2 py-1 rounded font-bold">Coastal Lifestyle</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>4. İskele</span>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded font-bold">Growing Area</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>5. Lefke</span>
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded font-bold">Quiet & Affordable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CountryUniversitiesSection
        countrySlug="northern-cyprus"
        countryName="Northern Cyprus"
      />

      <ApplyCard
        preferredCountry="Northern Cyprus"
        theme={applyCardThemes.northernCyprus}
      />
    </div>
  );
};

export default CyprusStudyPage;



// import React from 'react';
// import { Icon } from '@iconify/react';
// import CountryUniversitiesSection from "@/app/components/cards/CountryUniversitiesSection";
// import ApplyCard from "@/app/components/cards/ApplyCard";
// import { applyCardThemes } from "@/app/components/cards/applyCardThemes";
// const CyprusStudyPage = () => {
//   return (
//     <div className="bg-white min-h-screen">
//       {/* --- HERO SECTION --- */}
//       <section className="relative py-24 bg-[#0A1128] text-white overflow-hidden">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-transparent to-transparent z-10" />
//           <img 
//             src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=2000" 
//             alt="Cyprus Campus" 
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="max-w-7xl mx-auto px-6 relative z-20">
//           <div className="max-w-3xl">
//             <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
//               Study in <span className="text-blue-400">Northern Cyprus</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
//               Experience world-class British-standard education with affordable tuition fees, 
//               automatic scholarships, and a Mediterranean lifestyle.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
//                 <Icon icon="solar:check-circle-bold" className="text-green-400 mr-2" />
//                 <span className="text-sm font-medium">No IELTS Required (Internal Exam)</span>
//               </div>
//               <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
//                 <Icon icon="solar:check-circle-bold" className="text-green-400 mr-2" />
//                 <span className="text-sm font-medium">99% Visa Success Rate</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- LONG DESCRIPTION SECTION --- */}
//       <section className="py-20 max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-8">
//               The Education Hub of the <br />
//               <span className="text-blue-600">Mediterranean</span>
//             </h2>
//             <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
//               <p>
//                 Northern Cyprus (TRNC) has emerged as one of the fastest-growing destinations for international students globally. 
//                 With over 100,000 students from 140 different nations, the island offers a truly multicultural academic atmosphere. 
//               </p>
//               <p>
//                 Universities here are recognized by <strong>YÖK (Turkey)</strong> and <strong>YÖDAK (North Cyprus)</strong>, 
//                 ensuring that your degree is valid worldwide. Many faculties also hold international accreditations such as 
//                 <strong> ABET, FIBAA, and ASIIN</strong>, maintaining the same quality standards as universities in mainland Europe and the UK.
//               </p>
//               <p>
//                 Beyond academics, the island offers 300 days of sunshine, historical sites ranging from Roman ruins to Crusader castles, 
//                 and a safety record that ranks among the highest in the world. It is the perfect bridge between professional growth 
//                 and an unforgettable student experience.
//               </p>
//             </div>
//           </div>
//           {/* Quick Info Cards */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100">
//                         <Icon icon="solar:tea-cup-bold" className="text-emerald-700 w-10 h-10 mb-4" />
//                         <h4 className="font-bold text-gray-800 text-xl">Hospitality</h4>
//                         <p className="text-sm text-gray-600 mt-2">Rwanda is globally famous for its warm welcome and politeness to visitors.</p>
//                       </div>
//                       <div className="bg-yellow-50 p-8 rounded-[2.5rem] border border-yellow-100">
//                         <Icon icon="solar:routing-2-bold" className="text-yellow-700 w-10 h-10 mb-4" />
//                         <h4 className="font-bold text-gray-800 text-xl">Connectivity</h4>
//                         <p className="text-sm text-gray-600 mt-2">Direct flights to Europe, Middle East, and all of Africa via RwandAir.</p>
//                       </div>
//                       <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
//                         <Icon icon="solar:ranking-bold" className="text-blue-700 w-10 h-10 mb-4" />
//                         <h4 className="font-bold text-gray-800 text-xl">World Rankings</h4>
//                         <p className="text-sm text-gray-600 mt-2">Home to top-tier African research universities and tech labs.</p>
//                       </div>
//                       <div className="bg-gray-100 p-8 rounded-[2.5rem] border border-gray-200">
//                         <Icon icon="solar:plain-2-bold" className="text-gray-700 w-10 h-10 mb-4" />
//                         <h4 className="font-bold text-gray-800 text-xl">Cleanliness</h4>
//                         <p className="text-sm text-gray-600 mt-2">Famous for the plastic bag ban and being the cleanest nation in Africa.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//       {/* --- SCHOLARSHIP SECTION --- */}
//       <section className="py-20 bg-white-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900">Scholarships & Financial Aid</h2>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               Northern Cyprus is famous for its generous scholarship schemes designed to make high-quality education accessible to everyone.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
//               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
//                 <Icon icon="solar:star-shine-bold" className="w-20 h-20 text-blue-600" />
//               </div>
//               <div className="text-blue-600 font-bold text-5xl mb-4">50%</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Admission</h3>
//               <p className="text-gray-600 mb-6">
//                 Most international students are granted an <strong>automatic 50% tuition waiver</strong> upon acceptance. No separate application is needed.
//               </p>
//               <div className="flex items-center text-sm font-semibold text-blue-600">
//                 <Icon icon="solar:check-circle-bold" className="mr-2" /> Guaranteed for 4 Years
//               </div>
//             </div>

//                <div className="bg-white p-8 rounded-[2rem] border-2 border-blue-600 shadow-lg relative overflow-hidden group">
//               <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold z-20">
//                 POPULAR
//               </div>              <div className="text-blue-600 font-bold text-5xl mb-4">60-75%</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Merit</h3>
//               <p className="text-gray-600 mb-6">
//                 Offered to students with high GPA scores or specific department requirements. Great for Engineering and Business students.
//               </p>
//               <div className="flex items-center text-sm font-semibold text-blue-600">
//                 <Icon icon="solar:check-circle-bold" className="mr-2" /> Grade Dependent
//               </div>
//             </div>

//             <div className="bg-[#0A1128] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
//               <div className="text-blue-400 font-bold text-5xl mb-4">80-100%</div>
//               <h3 className="text-xl font-bold mb-3">High Honor Awards</h3>
//               <p className="text-gray-400 mb-6">
//                 Reserved for top-tier academic performers, national athletes, or transfer students with exceptional transcripts.
//               </p>
//               <div className="flex items-center text-sm font-semibold text-blue-400">
//                 <Icon icon="solar:check-circle-bold" className="mr-2" /> Exclusive & Competitive
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- LIFESTYLE & LIVING COSTS TABLE --- */}
//       {/* --- LIVING COSTS IN TURKEY (USD/TRY) --- */}
//       <section className="py-20 max-w-7xl mx-auto px-6">
//   <div className="bg-[#0A1128] rounded-[4rem] p-12 text-white">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//       <div>
//         <h2 className="text-4xl font-bold mb-6 text-blue-400">Monthly Budget</h2>
//         <p className="text-gray-400 mb-8 leading-relaxed">
//           Northern Cyprus is generally more affordable than many UK and EU study destinations.
//           A budget of <strong>$350 – $600 USD</strong> per month is usually enough for a comfortable
//           student lifestyle, depending on the city and accommodation type.
//         </p>

//         <div className="space-y-4">
//           {[
//             { label: "Dormitory / Shared Flat", price: "$170 - $420" },
//             { label: "Food & Groceries", price: "$120 - $180" },
//             { label: "Transport", price: "$0 - $30" },
//             { label: "Personal Expenses", price: "$50 - $100" }
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="flex justify-between border-b border-white/10 pb-2"
//             >
//               <span className="text-gray-300">{item.label}</span>
//               <span className="font-bold text-blue-400">{item.price}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
//         <h4 className="font-bold text-xl mb-4 text-center">Top Student Cities</h4>
//         <ul className="space-y-4">
//           <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
//             <span>1. Nicosia</span>
//             <span className="text-xs bg-blue-500 px-2 py-1 rounded">Capital City</span>
//           </li>
//           <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
//             <span>2. Famagusta</span>
//             <span className="text-xs bg-green-500 px-2 py-1 rounded">Major Student Hub</span>
//           </li>
//           <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
//             <span>3. Kyrenia</span>
//             <span className="text-xs bg-cyan-500 px-2 py-1 rounded">Coastal Lifestyle</span>
//           </li>
//           <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
//             <span>4. İskele</span>
//             <span className="text-xs bg-orange-500 px-2 py-1 rounded">Growing Area</span>
//           </li>
//           <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
//             <span>5. Lefke</span>
//             <span className="text-xs bg-purple-500 px-2 py-1 rounded">Quiet & Affordable</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </section>
//       <CountryUniversitiesSection
//   countrySlug="northern-cyprus"
//   countryName="Northern Cyprus"
// />
//    <ApplyCard
//   preferredCountry="Northern Cyprus"
//   theme={applyCardThemes.northernCyprus}
// />
//     </div>
    
//   );
// };

// export default CyprusStudyPage;