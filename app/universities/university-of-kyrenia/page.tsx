// "use client";
// import React from 'react';
// import { Icon } from '@iconify/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Universityprice from '@/components/ui/Universityprice';
// import { Activity } from 'lucide-react';
// import ReactPlayer from 'react-player';
// const UniversityOfKyreniaPage = () => {
//   // FIXED Image Paths - Removing /public/ prefix for Next.js
//   const universityImages = [
//     "/universities/keyrenia.jpg",
//     "/universities/Kyrenia.webp",
//     "/universities/keyrenia-1.jpg"
    
    
//   ];

//   const stats = [
//     { label: "Students", val: "5,000+", icon: "solar:users-group-rounded-bold" },
//     { label: "Programs", val: "20+", icon: "solar:notebook-bold" },
//     { label: "Location", icon: "solar:map-point-bold", val: "Kyrenia Coast" },
//     { label: "Focus", val: "Aviation/Sea", icon: "solar:plain-bold" },
//   ];

//   return (
//     <div className="bg-sky-50/50 min-h-screen pt-28 pb-20 font-sans">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* --- Header Section (Sky Blue & Navy Theme) --- */}
//         <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
//           <div className="space-y-2">
//             <div className="flex items-center gap-2 text-sm font-bold text-sky-700 uppercase tracking-widest">
//               <Link href="/universities" className="hover:underline">Universities</Link>
//               <span>/</span>
//               <span className="text-gray-400">UoK Kyrenia</span>
//             </div>
//             <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
//               University of <span className="text-sky-600">Kyrenia</span>
//             </h1>
//             <div className="flex items-center gap-3 text-lg text-gray-600 font-medium">
//               <Icon icon="solar:map-point-wave-bold" className="text-sky-500 w-6 h-6" />
//               Kyrenia (Girne), Northern Cyprus
//             </div>
//           </div>
          
//           <div className="hidden md:block">
//              <div className="bg-white px-6 py-4 rounded-3xl shadow-xl shadow-sky-100 border border-sky-100 flex items-center gap-4">
//                 <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center">
//                   <Icon icon="solar:buildings-bold" className="text-sky-600 w-7 h-7" />
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold text-gray-400 uppercase">Specialization</p>
//                   <p className="text-gray-900 font-extrabold text-lg uppercase">Maritime & Aviation</p>
//                 </div>
//              </div>
//           </div>
//         </div>

//         {/* --- Hero Gallery Grid --- */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16 h-[500px]">
//           <div className="md:col-span-8 relative overflow-hidden rounded-[2.5rem] shadow-2xl group">
//                                 <ReactPlayer 
//                                     src='https://youtu.be/H8A2gxovwN4' 
//                                     width="100%" 
//                                     height="100%" 
//                                     className="absolute top-0 left-0"
//                                     controls // <-- This brings back the play button and timeline
//                                   />
//             <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent flex items-end p-10 pointer-events-none">            </div>
//           </div>
//           <div className="md:col-span-4 grid grid-rows-2 gap-4">
//             <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
//               <Image src={universityImages[1]} alt="UoK Education" fill className="object-cover" />
//             </div>
//             <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
//               <Image src={universityImages[2]} alt="UoK Student Life" fill className="object-cover" />
//             </div>
//           </div>
//         </div>

//         {/* --- Main Content --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           <div className="lg:col-span-8 space-y-12">
//             <div className="prose prose-lg max-w-none">
//               <h2 className="text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
//                 <span className="w-1.5 h-8 bg-sky-500 rounded-full"></span>
//                 University Details
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed text-justify font-medium">
//                 The University of Kyrenia is the first university in Cyprus specializing in 
//                 <span className="text-sky-700 font-bold"> Maritime and Aviation studies</span>. 
//                 Located along the beautiful coast of Girne, it offers students a unique Mediterranean lifestyle 
//                 combined with high-tech simulation centers and a focus on practical, career-ready education.
//               </p>
//             </div>

//             {/* Features Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { t: "Student Friendly", d: "Dynamic international student community with global support.", i: "solar:users-group-rounded-bold" },
//                 { t: "Affordable Living", d: "Average cost of living ranges from €900 to €1,300 per month.", i: "solar:wallet-money-bold" },
//                 { t: "Specialized Training", d: "Home to advanced flight and marine bridge simulators.", i: "solar:rocket-bold" },
//                 { t: "Coastal Campus", d: "Warm weather and beach access just minutes away.", i: "solar:sun-bold" },
//               ].map((item, i) => (
//                 <div key={i} className="bg-white p-6 rounded-3xl border border-sky-50 shadow-sm flex gap-5 hover:border-sky-200 transition-all">
//                   <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center shrink-0">
//                     <Icon icon={item.i} className="text-sky-600 w-8 h-8" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-950 text-lg">{item.t}</h4>
//                     <p className="text-gray-500 text-sm leading-snug">{item.d}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//               <Universityprice
//         name="University of Kyrenia" 
//         color="#0284c7 " 
//         icon={<Activity />}
//         rows={[
//           { program: "Medicine", fiftyPrice: "7,615€", fiftyScholarship: "7,615€", oneHundredPrice: "15,230€", oneHundredScholarship: "1,250€" },
//           { program: "Dentistry", fiftyPrice: "5,935€", fiftyScholarship: "5,935€", oneHundredPrice: "11,870€", oneHundredScholarship: "1,250€" },
//           { program: "Pharmacy + Veterinary", fiftyPrice: "4,300€", fiftyScholarship: "4,300€", seventyFivePrice: "1,400€", seventyFiveScholarship: "1,400€", oneHundredPrice: "—", oneHundredScholarship: "No Scholarship" },
//         ]}
//       />
//             {/* Map Area */}
//             <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-white h-[450px] overflow-hidden relative">
//                <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.456!2d33.33!3d35.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIwJzAwLjAiTiAzM8KwMTknNDguMCJF!5e0!3m2!1sen!2s!4v123456789"
//                 width="100%" 
//                 height="100%" 
//                 style={{ border: 0 }} 
//                 allowFullScreen 
//                 loading="lazy"
//                 className="rounded-[2.2rem]"
//               ></iframe>
//             </div>
//           </div>

//           {/* Right Side: Sky Blue Sticky Sidebar */}
//           <div className="lg:col-span-4">
//             <div className="bg-sky-900 text-white p-8 rounded-[2.5rem] shadow-2xl sticky top-28 border-b-8 border-sky-400">
//               <h3 className="text-2xl font-bold mb-8 tracking-tight">Quick Insights</h3>
//               <div className="space-y-6">
//                 {stats.map((s, i) => (
//                   <div key={i} className="flex items-center justify-between group">
//                     <div className="flex items-center gap-4">
//                       <div className="w-10 h-10 bg-sky-800 rounded-xl flex items-center justify-center">
//                         <Icon icon={s.icon} className="text-sky-300 w-6 h-6" />
//                       </div>
//                       <span className="text-sky-100 font-medium">{s.label}</span>
//                     </div>
//                     <span className="text-xl font-black text-white">{s.val}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 pt-8 border-t border-sky-800">
//                 <p className="text-sky-200 text-sm italic">
//                   The process was smooth and the housing options helped a lot. Living in Kyrenia is like being on a permanent holiday.
//                 </p>
//                 <div className="mt-4 flex items-center gap-3">
//                   <div className="w-10 h-10 bg-sky-700 rounded-full flex items-center justify-center font-bold">ES</div>
//                   <div>
//                     <p className="font-bold text-sm">Emily Smith</p>
//                     <p className="text-xs text-sky-300 uppercase tracking-tighter">Student</p>
//                   </div>
//                 </div>
//               </div>

//               <a 
//                 href="/#contact"
//                 target="_blank"
//                 className="mt-8 w-full py-4 bg-sky-400 hover:bg-sky-300 text-sky-950 font-black rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg"
//               >
//                 Apply Now
//                 <Icon icon="solar:arrow-right-up-linear" />
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default UniversityOfKyreniaPage;

"use client";
import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import Universityprice from '@/components/ui/Universityprice';
import { Activity } from 'lucide-react';
import ReactPlayer from 'react-player';

const UniversityOfKyreniaPage = () => {
  // Image Paths
  const universityImages = [
    "/universities/keyrenia.jpg",
    "/universities/Kyrenia.webp",
    "/universities/keyrenia-1.jpg"
  ];

  const stats = [
    { label: "Students", val: "5,000+", icon: "solar:users-group-rounded-bold" },
    { label: "Programs", val: "20+", icon: "solar:notebook-bold" },
    { label: "Location", icon: "solar:map-point-bold", val: "Kyrenia Coast" },
    { label: "Focus", val: "Aviation/Sea", icon: "solar:plain-bold" },
  ];

  return (
    <div className="bg-sky-50/50 min-h-screen pt-24 sm:pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- Header Section (Sky Blue & Navy Theme) --- */}
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-sky-700 uppercase tracking-widest">
              <Link href="/universities" className="hover:underline">Universities</Link>
              <span>/</span>
              <span className="text-gray-400">UoK Kyrenia</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              University of <span className="text-sky-600">Kyrenia</span>
            </h1>
            <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-gray-600 font-medium">
              <Icon icon="solar:map-point-wave-bold" className="text-sky-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              Kyrenia (Girne), Northern Cyprus
            </div>
          </div>
          
          <div className="hidden md:block">
             <div className="bg-white px-6 py-4 rounded-3xl shadow-xl shadow-sky-100 border border-sky-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center">
                  <Icon icon="solar:buildings-bold" className="text-sky-600 w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Specialization</p>
                  <p className="text-gray-900 font-extrabold text-lg uppercase">Maritime & Aviation</p>
                </div>
             </div>
          </div>
        </div>

        {/* --- Hero Gallery Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10 sm:mb-16 h-[320px] sm:h-[420px] md:h-[500px]">
          <div className="md:col-span-8 relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] shadow-xl md:shadow-2xl group">
            <ReactPlayer 
              src='https://youtu.be/H8A2gxovwN4' 
              width="100%" 
              height="100%" 
              className="absolute top-0 left-0"
              controls
            />
            <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent flex items-end p-6 md:p-10 pointer-events-none"></div>
          </div>
          <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-4">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[1]} alt="UoK Education" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[2]} alt="UoK Student Life" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* --- Main Content --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 sm:h-8 bg-sky-500 rounded-full"></span>
                University Details
              </h2>
              
              {/* FIXED: Changed to text-left on mobile to stop word splitting and wide gaps */}
              <p className="text-gray-700 text-base sm:text-xl leading-relaxed text-left md:text-justify font-medium">
                The University of Kyrenia is the first university in Cyprus specializing in 
                <span className="text-sky-700 font-bold"> Maritime and Aviation studies</span>. 
                Located along the beautiful coast of Girne, it offers students a unique Mediterranean lifestyle 
                combined with high-tech simulation centers and a focus on practical, career-ready education.
              </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { t: "Student Friendly", d: "Dynamic international student community with global support.", i: "solar:users-group-rounded-bold" },
                { t: "Affordable Living", d: "Average cost of living ranges from €900 to €1,300 per month.", i: "solar:wallet-money-bold" },
                { t: "Specialized Training", d: "Home to advanced flight and marine bridge simulators.", i: "solar:rocket-bold" },
                { t: "Coastal Campus", d: "Warm weather and beach access just minutes away.", i: "solar:sun-bold" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-sky-50 shadow-sm flex gap-4 sm:gap-5 hover:border-sky-200 transition-all">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-sky-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon icon={item.i} className="text-sky-600 w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-base sm:text-lg">{item.t}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-snug mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* University Price Section */}
            <Universityprice
              name="University of Kyrenia" 
              color="#0284c7" 
              icon={<Activity />}
              rows={[
                { program: "Medicine", fiftyPrice: "7,615€", fiftyScholarship: "7,615€", oneHundredPrice: "15,230€", oneHundredScholarship: "1,250€" },
                { program: "Dentistry", fiftyPrice: "5,935€", fiftyScholarship: "5,935€", oneHundredPrice: "11,870€", oneHundredScholarship: "1,250€" },
                { program: "Pharmacy + Veterinary", fiftyPrice: "4,300€", fiftyScholarship: "4,300€", seventyFivePrice: "1,400€", seventyFiveScholarship: "1,400€", oneHundredPrice: "—", oneHundredScholarship: "No Scholarship" },
              ]}
            />

            {/* Map Area */}
            <div className="bg-white p-2 rounded-2xl sm:rounded-[2.5rem] shadow-xl sm:shadow-2xl border border-white h-[350px] sm:h-[450px] overflow-hidden relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.456!2d33.33!3d35.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDIwJzAwLjAiTiAzM8KwMTknNDguMCJF!5e0!3m2!1sen!2s!4v123456789"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="rounded-xl sm:rounded-[2.2rem]"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Sky Blue Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-sky-900 text-white p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-2xl lg:sticky lg:top-28 border-b-8 border-sky-400">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 tracking-tight">Quick Insights</h3>
              <div className="space-y-4 sm:space-y-6">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-sky-800 rounded-xl flex items-center justify-center shrink-0">
                        <Icon icon={s.icon} className="text-sky-300 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-sky-100 text-sm sm:text-base font-medium">{s.label}</span>
                    </div>
                    <span className="text-lg sm:text-xl font-black text-white">{s.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-sky-800">
                <p className="text-sky-200 text-xs sm:text-sm italic">
                  The process was smooth and the housing options helped a lot. Living in Kyrenia is like being on a permanent holiday.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-sky-700 rounded-full flex items-center justify-center font-bold text-sm shrink-0">ES</div>
                  <div>
                    <p className="font-bold text-xs sm:text-sm">Emily Smith</p>
                    <p className="text-[10px] sm:text-xs text-sky-300 uppercase tracking-tighter">Student</p>
                  </div>
                </div>
              </div>

              <a 
                href="/#contact"
                target="_blank"
                className="mt-6 sm:mt-8 w-full py-3.5 sm:py-4 bg-sky-400 hover:bg-sky-300 text-sky-950 font-black rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
              >
                Apply Now
                <Icon icon="solar:arrow-right-up-linear" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UniversityOfKyreniaPage;