"use client";
import React from "react";
import { Icon } from "@iconify/react";
import CountryUniversitiesSection from "@/app/components/cards/CountryUniversitiesSection";
import ApplyCard from "@/app/components/cards/ApplyCard";
import { applyCardThemes } from "@/app/components/cards/applyCardThemes";
import Image from "next/image";

const RwandaStudyPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-[#00A3E0] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00A3E0] via-transparent to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1517330357046-3ab5a5dd42b1?auto=format&fit=crop&q=80&w=2000"
            alt="Kigali Cityscape"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Study in <span className="text-[#FCD116]">Rwanda</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed">
              Join the tech revolution in one of Africa’s safest and cleanest countries,
              with growing opportunities in business, innovation, and sustainability.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Icon icon="solar:shield-check-bold" className="text-[#FCD116] mr-2" />
                <span className="text-sm font-medium">Ranked Among Africa’s Safest</span>
              </div>

              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Icon icon="solar:cpu-bold" className="text-white mr-2" />
                <span className="text-sm font-medium">Rapidly Growing Tech Hub</span>
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
              The Land of a Thousand <br />
              <span className="text-[#007A33]">Hills</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
              <p>
                Rwanda has redefined itself as one of Africa’s most forward-looking countries,
                with a strong reputation for safety, order, and innovation. For international
                students, it offers a modern academic environment supported by respected institutions
                such as the <strong>University of Rwanda</strong>, <strong>Carnegie Mellon University Africa</strong>,
                and the <strong>African Leadership University</strong>.
              </p>

              <p>
                English is widely used in higher education, making Rwanda especially attractive
                for regional and international students. Kigali in particular has become known
                for its clean infrastructure, modern services, and organized city planning,
                which supports a focused and professional student lifestyle.
              </p>

              <p>
                Beyond academics, Rwanda stands out for its culture of responsibility, public safety,
                and growing startup ecosystem. It is an excellent destination for students interested in
                <strong> Software Engineering, Business, Leadership, Development Studies, and Sustainability</strong>.
              </p>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50/60 p-8 rounded-[2.5rem] border border-emerald-100">
              <Icon icon="solar:tea-cup-bold" className="text-[#007A33] w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Hospitality</h4>
              <p className="text-sm text-gray-600 mt-2">
                Rwanda is known for its warm welcome, respectful culture, and comfortable environment for visitors.
              </p>
            </div>

            <div className="bg-yellow-50/40 p-8 rounded-[2.5rem] border border-yellow-100">
              <Icon icon="solar:routing-2-bold" className="text-amber-600 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Connectivity</h4>
              <p className="text-sm text-gray-600 mt-2">
                Kigali offers strong regional access with growing links across Africa, the Middle East, and Europe.
              </p>
            </div>

            <div className="bg-blue-50/60 p-8 rounded-[2.5rem] border border-blue-100">
              <Icon icon="solar:ranking-bold" className="text-[#00A3E0] w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Innovation</h4>
              <p className="text-sm text-gray-600 mt-2">
                Home to emerging research centers, startup ecosystems, and globally connected institutions.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded-[2.5rem] border border-slate-200">
              <Icon icon="solar:plain-2-bold" className="text-slate-700 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Clean & Safe</h4>
              <p className="text-sm text-gray-600 mt-2">
                Rwanda is widely recognized for its cleanliness, organization, and strong public safety.
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
              Rwanda offers a range of funding opportunities, especially for strong academic candidates,
              STEM applicants, and regionally competitive students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Icon icon="solar:star-shine-bold" className="w-20 h-20 text-[#007A33]" />
              </div>
              <div className="text-[#007A33] font-bold text-5xl mb-4">25-50%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Merit Support</h3>
              <p className="text-gray-600 mb-6">
                Many private and international institutions offer partial tuition support
                based on academic performance and application strength.
              </p>
              <div className="flex items-center text-sm font-semibold text-[#007A33]">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Performance Based
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border-2 border-[#00A3E0] shadow-lg relative overflow-visible group">
              <div className="absolute top-4 right-4 bg-[#00A3E0] text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                POPULAR
              </div>
              <div className="text-[#00A3E0] font-bold text-5xl mb-4">50-75%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">STEM & Innovation Awards</h3>
              <p className="text-gray-600 mb-6">
                Strong applicants in IT, engineering, data science, and innovation-focused programs
                may receive more competitive scholarship packages.
              </p>
              <div className="flex items-center text-sm font-semibold text-[#00A3E0]">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Competitive Programs
              </div>
            </div>

            <div className="bg-[#00A3E0] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-15 group-hover:scale-110 transition-transform">
                <Icon icon="solar:medal-ribbons-star-bold" className="w-20 h-20 text-[#FCD116]" />
              </div>
              <div className="text-[#FCD116] font-bold text-5xl mb-4">80-100%</div>
              <h3 className="text-xl font-bold mb-3">Leadership Awards</h3>
              <p className="text-blue-100 mb-6">
                Reserved for exceptional students, top regional talent, or applicants selected
                under special academic and leadership initiatives.
              </p>
              <div className="flex items-center text-sm font-semibold text-[#FCD116]">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Exclusive & Competitive
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MONTHLY BUDGET SECTION --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-[#00A3E0] rounded-[4rem] p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#FCD116]">Monthly Budget</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Rwanda offers a practical and manageable student lifestyle compared with many larger
                global education destinations. A budget of <strong>$300 – $550 USD</strong> per month
                is often enough for a comfortable student life in Kigali, depending on accommodation choices.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Dormitory / Shared Flat", price: "$100 - $220" },
                  { label: "Food & Groceries", price: "$100 - $180" },
                  { label: "Transport", price: "$20 - $40" },
                  { label: "Personal Expenses", price: "$40 - $110" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-white/10 pb-2"
                  >
                    <span className="text-blue-500-100 text-blue-50">{item.label}</span>
                    <span className="font-bold text-[#FCD116]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-xl mb-4 text-center text-[#FCD116]">Top Student Cities</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>1. Kigali</span>
                  <span className="text-xs bg-[#007A33] text-white px-2 py-1 rounded font-bold">Main Hub</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>2. Huye</span>
                  <span className="text-xs bg-amber-500 text-slate-950 px-2 py-1 rounded font-bold">Academic City</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>3. Musanze</span>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded font-bold">Northern Growth</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>4. Rubavu</span>
                  <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded font-bold">Lakeside Area</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>5. Rwamagana</span>
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded font-bold">Developing Zone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CountryUniversitiesSection
        countrySlug="rwanda"
        countryName="Rwanda"
      />

      <ApplyCard
        preferredCountry="Rwanda"
        theme={applyCardThemes.rwanda}
      />
    </div>
  );
};

export default RwandaStudyPage;





// "use client";
// import React from "react";
// import { Icon } from "@iconify/react";
// import CountryUniversitiesSection from "@/app/components/cards/CountryUniversitiesSection";
// import ApplyCard from "@/app/components/cards/ApplyCard";
// import { applyCardThemes } from "@/app/components/cards/applyCardThemes";

// const RwandaStudyPage = () => {
//   return (
//     <div className="bg-white min-h-screen">
//       {/* --- HERO SECTION --- */}
//       <section className="relative py-24 bg-[#0A1128] text-white overflow-hidden">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-transparent to-transparent z-10" />
//           <img
//             src="https://images.unsplash.com/photo-1517330357046-3ab5a5dd42b1?auto=format&fit=crop&q=80&w=2000"
//             alt="Kigali Cityscape"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="max-w-7xl mx-auto px-6 relative z-20">
//           <div className="max-w-3xl">
//             <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
//               Study in <span className="text-emerald-400">Rwanda</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
//               Join the tech revolution in one of Africa’s safest and cleanest countries,
//               with growing opportunities in business, innovation, and sustainability.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
//                 <Icon icon="solar:shield-check-bold" className="text-green-400 mr-2" />
//                 <span className="text-sm font-medium">Ranked Among Africa’s Safest</span>
//               </div>

//               <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
//                 <Icon icon="solar:cpu-bold" className="text-yellow-400 mr-2" />
//                 <span className="text-sm font-medium">Rapidly Growing Tech Hub</span>
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
//               The Land of a Thousand <br />
//               <span className="text-emerald-600">Hills</span>
//             </h2>

//             <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
//               <p>
//                 Rwanda has redefined itself as one of Africa’s most forward-looking countries,
//                 with a strong reputation for safety, order, and innovation. For international
//                 students, it offers a modern academic environment supported by respected institutions
//                 such as the <strong>University of Rwanda</strong>, <strong>Carnegie Mellon University Africa</strong>,
//                 and the <strong>African Leadership University</strong>.
//               </p>

//               <p>
//                 English is widely used in higher education, making Rwanda especially attractive
//                 for regional and international students. Kigali in particular has become known
//                 for its clean infrastructure, modern services, and organized city planning,
//                 which supports a focused and professional student lifestyle.
//               </p>

//               <p>
//                 Beyond academics, Rwanda stands out for its culture of responsibility, public safety,
//                 and growing startup ecosystem. It is an excellent destination for students interested in
//                 <strong> Software Engineering, Business, Leadership, Development Studies, and Sustainability</strong>.
//               </p>
//             </div>
//           </div>

//           {/* Quick Info Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100">
//               <Icon icon="solar:tea-cup-bold" className="text-emerald-700 w-10 h-10 mb-4" />
//               <h4 className="font-bold text-gray-800 text-xl">Hospitality</h4>
//               <p className="text-sm text-gray-600 mt-2">
//                 Rwanda is known for its warm welcome, respectful culture, and comfortable environment for visitors.
//               </p>
//             </div>

//             <div className="bg-yellow-50 p-8 rounded-[2.5rem] border border-yellow-100">
//               <Icon icon="solar:routing-2-bold" className="text-yellow-700 w-10 h-10 mb-4" />
//               <h4 className="font-bold text-gray-800 text-xl">Connectivity</h4>
//               <p className="text-sm text-gray-600 mt-2">
//                 Kigali offers strong regional access with growing links across Africa, the Middle East, and Europe.
//               </p>
//             </div>

//             <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
//               <Icon icon="solar:ranking-bold" className="text-blue-700 w-10 h-10 mb-4" />
//               <h4 className="font-bold text-gray-800 text-xl">Innovation</h4>
//               <p className="text-sm text-gray-600 mt-2">
//                 Home to emerging research centers, startup ecosystems, and globally connected institutions.
//               </p>
//             </div>

//             <div className="bg-gray-100 p-8 rounded-[2.5rem] border border-gray-200">
//               <Icon icon="solar:plain-2-bold" className="text-gray-700 w-10 h-10 mb-4" />
//               <h4 className="font-bold text-gray-800 text-xl">Clean & Safe</h4>
//               <p className="text-sm text-gray-600 mt-2">
//                 Rwanda is widely recognized for its cleanliness, organization, and strong public safety.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- SCHOLARSHIP SECTION --- */}
//       <section className="py-20 bg-white-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900">Scholarships & Financial Aid</h2>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               Rwanda offers a range of funding opportunities, especially for strong academic candidates,
//               STEM applicants, and regionally competitive students.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
//               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
//                 <Icon icon="solar:star-shine-bold" className="w-20 h-20 text-emerald-600" />
//               </div>
//               <div className="text-emerald-600 font-bold text-5xl mb-4">25-50%</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Merit Support</h3>
//               <p className="text-gray-600 mb-6">
//                 Many private and international institutions offer partial tuition support
//                 based on academic performance and application strength.
//               </p>
//               <div className="flex items-center text-sm font-semibold text-emerald-600">
//                 <Icon icon="solar:check-circle-bold" className="mr-2" /> Performance Based
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-[2rem] border-2 border-emerald-600 shadow-lg relative overflow-visible group">
//               <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold z-20">
//                 POPULAR
//               </div>
//               <div className="text-emerald-600 font-bold text-5xl mb-4">50-75%</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">STEM & Innovation Awards</h3>
//               <p className="text-gray-600 mb-6">
//                 Strong applicants in IT, engineering, data science, and innovation-focused programs
//                 may receive more competitive scholarship packages.
//               </p>
//               <div className="flex items-center text-sm font-semibold text-emerald-600">
//                 <Icon icon="solar:check-circle-bold" className="mr-2" /> Competitive Programs
//               </div>
//             </div>

//             <div className="bg-[#0A1128] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
//               <div className="text-emerald-400 font-bold text-5xl mb-4">80-100%</div>
//               <h3 className="text-xl font-bold mb-3">Leadership Awards</h3>
//               <p className="text-gray-400 mb-6">
//                 Reserved for exceptional students, top regional talent, or applicants selected
//                 under special academic and leadership initiatives.
//               </p>
//               <div className="flex items-center text-sm font-semibold text-emerald-400">
//                 <Icon icon="solar:check-circle-bold" className="mr-2" /> Exclusive & Competitive
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- MONTHLY BUDGET SECTION --- */}
//       <section className="py-20 max-w-7xl mx-auto px-6">
//         <div className="bg-[#0A1128] rounded-[4rem] p-12 text-white">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold mb-6 text-emerald-400">Monthly Budget</h2>
//               <p className="text-gray-400 mb-8 leading-relaxed">
//                 Rwanda offers a practical and manageable student lifestyle compared with many larger
//                 global education destinations. A budget of <strong>$300 – $550 USD</strong> per month
//                 is often enough for a comfortable student life in Kigali, depending on accommodation choices.
//               </p>

//               <div className="space-y-4">
//                 {[
//                   { label: "Dormitory / Shared Flat", price: "$100 - $220" },
//                   { label: "Food & Groceries", price: "$100 - $180" },
//                   { label: "Transport", price: "$20 - $40" },
//                   { label: "Personal Expenses", price: "$40 - $110" }
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex justify-between border-b border-white/10 pb-2"
//                   >
//                     <span className="text-gray-300">{item.label}</span>
//                     <span className="font-bold text-emerald-400">{item.price}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
//               <h4 className="font-bold text-xl mb-4 text-center">Top Student Cities</h4>
//               <ul className="space-y-4">
//                 <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
//                   <span>1. Kigali</span>
//                   <span className="text-xs bg-emerald-500 px-2 py-1 rounded">Main Hub</span>
//                 </li>
//                 <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
//                   <span>2. Huye</span>
//                   <span className="text-xs bg-blue-500 px-2 py-1 rounded">Academic City</span>
//                 </li>
//                 <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
//                   <span>3. Musanze</span>
//                   <span className="text-xs bg-cyan-500 px-2 py-1 rounded">Northern Growth</span>
//                 </li>
//                 <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
//                   <span>4. Rubavu</span>
//                   <span className="text-xs bg-orange-500 px-2 py-1 rounded">Lakeside Area</span>
//                 </li>
//                 <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
//                   <span>5. Rwamagana</span>
//                   <span className="text-xs bg-purple-500 px-2 py-1 rounded">Developing Zone</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <CountryUniversitiesSection
//         countrySlug="rwanda"
//         countryName="Rwanda"
//       />

//       <ApplyCard
//         preferredCountry="Rwanda"
//         theme={applyCardThemes.rwanda}
//       />
//     </div>
//   );
// };

// export default RwandaStudyPage;