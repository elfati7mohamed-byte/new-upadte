
// "use client";
// import React from 'react';
// import { Icon } from '@iconify/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Universityprice from '@/components/ui/Universityprice';
// import { BookOpen } from 'lucide-react';
// import ReactPlayer from 'react-player';
// const CIUPage = () => {
//   // CIU Images from your code
//   const universityImages = [
//     "/universities/Ciu-University-Banner-Hamiholding.webp",
//     "/universities/ciu-1.webp",
//     "/universities/ciu-2.jpg",
//     "/universities/ciu-3.jpg",
//   ];

//   const stats = [
//     { label: "Students", val: "22,000+", icon: "solar:users-group-rounded-bold" },
//     { label: "Programs", val: "100+", icon: "solar:notebook-bold" },
//     { label: "Campus", icon: "solar:leaf-bold", val: "Green Tech" },
//     { label: "Scholarship", val: "Up to 100%", icon: "solar:wad-of-money-bold" },
//   ];

//   return (
//     <div className="bg-rose-50/50 min-h-screen pt-28 pb-20 font-sans">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* --- Header Section (Rose Red Theme) --- */}
//         <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
//           <div className="space-y-2">
//             <div className="flex items-center gap-2 text-sm font-bold text-rose-700 uppercase tracking-widest">
//               <Link href="/universities" className="hover:underline">Universities</Link>
//               <span>/</span>
//               <span className="text-gray-400">CIU Cyprus</span>
//             </div>
//             <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.05]">
//               Cyprus International <span className="text-rose-600 leading-[1.45]">University</span>
//             </h1>
//             <div className="flex items-center gap-3 text-lg text-gray-600 font-medium">
//               <Icon icon="solar:map-point-wave-bold" className="text-rose-500 w-6 h-6" />
//               Haspolat, Nicosia, Northern Cyprus
//             </div>
//           </div>
          
//           <div className="hidden md:block">
//              <div className="bg-white px-6 py-4 rounded-3xl shadow-xl shadow-rose-100 border border-rose-100 flex items-center gap-4">
//                 <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center">
//                   <Icon icon="solar:leaf-bold" className="text-rose-600 w-7 h-7" />
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold text-gray-400 uppercase">Sustainability</p>
//                   <p className="text-gray-900 font-extrabold text-lg uppercase">Green Campus</p>
//                 </div>
//              </div>
//           </div>
//         </div>

//         {/* --- Hero Gallery Grid --- */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16 h-[500px]">
//           <div className="md:col-span-8 relative overflow-hidden rounded-[2.5rem] shadow-2xl group">
//                                               <ReactPlayer 
//                                                   src='https://youtu.be/2HfvH5PA-ro' 
//                                                   width="100%" 
//                                                   height="100%" 
//                                                   className="absolute top-0 left-0"
//                                                   controls // don't touch this
//                                                 />
//             <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent flex items-end p-10 pointer-events-none">
//             </div>
//           </div>
//           <div className="md:col-span-4 grid grid-rows-2 gap-4">
//             <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
//               <Image src={universityImages[1]} alt="CIU Campus 1" fill className="object-cover" />
//             </div>
//             <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
//               <Image src={universityImages[2]} alt="CIU Campus 2" fill className="object-cover" />
//             </div>
//           </div>
//         </div>

//         {/* --- Main Content --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           <div className="lg:col-span-8 space-y-12">
//             <div className="prose prose-lg max-w-none">
//               <h2 className="text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
//                 <span className="w-1.5 h-8 bg-rose-600 rounded-full"></span>
//                 University Academic Profile
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed text-justify font-medium">
//                 Cyprus International University (CIU) is a modern, innovative institution known for its high-tech campus and sustainable 
//                 <span className="text-rose-700 font-bold"> Green Campus</span> initiatives. It offers a wide range of English-taught programs 
//                 and is one of the most preferred universities for international students, offering 
//                 <span className="text-rose-600 italic font-bold"> guaranteed scholarships ranging from 50% to 100%</span>.
//               </p>
//             </div>

//             {/* Highlights Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { t: "Sustainable Campus", d: "Producing its own solar energy and recycling water.", i: "solar:plain-bold" },
//                 { t: "Guaranteed Scholarship", d: "Financial aid opportunities for all international students.", i: "solar:wad-of-money-bold" },
//                 { t: "Modern Dorms", d: "High-standard living spaces on campus.", i: "solar:home-smile-bold" },
//                 { t: "Dual Degree", d: "Opportunities to earn degrees from UK partners.", i: "solar:globus-bold" },
//               ].map((item, i) => (
//                 <div key={i} className="bg-white p-6 rounded-3xl border border-rose-50 shadow-sm flex gap-5 hover:border-rose-200 transition-all">
//                   <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0">
//                     <Icon icon={item.i} className="text-rose-600 w-8 h-8" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-950 text-lg">{item.t}</h4>
//                     <p className="text-gray-500 text-sm leading-snug">{item.d}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <Universityprice 
//         name="Cyprus International University" 
//         color="#8a1538" 
//         icon={<BookOpen />}
//         scholarshipLabel="75%"
//         rows={[
//           { program: "Medicine", fiftyPrice: "7,823€", fiftyScholarship: "7,823€", oneHundredPrice: "—", oneHundredScholarship: "No Scholarship" },
//           { program: "Dentistry", fiftyPrice: "6,495€", fiftyScholarship: "6,495€", oneHundredPrice: "12,990€", oneHundredScholarship: "577€" },
//           { program: "Pharmacy", fiftyPrice: "4,883€", fiftyScholarship: "4,883€", seventyFivePrice: "2,730€", seventyFiveScholarship: "2,730€", oneHundredPrice: "9,765€", oneHundredScholarship: "577€" },
//         ]}
//       />

//             {/* Map Area */}
//             <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-white h-[450px] overflow-hidden relative">
//                <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.328325178496!2d33.4111!3d35.2195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de10d484439369%3A0x7f488d7f573489e2!2sCyprus%20International%20University!5e0!3m2!1sen!2s!4v1647200000000"
//                 width="100%" 
//                 height="100%" 
//                 style={{ border: 0 }} 
//                 allowFullScreen 
//                 loading="lazy"
//                 className="rounded-[2.2rem]"
//               ></iframe>
//             </div>
//           </div>

//           {/* Right Side: Rose Red Sticky Sidebar */}
//           <div className="lg:col-span-4">
//             <div className="bg-rose-900 text-white p-8 rounded-[2.5rem] shadow-2xl sticky top-28 border-b-8 border-rose-600">
//               <h3 className="text-2xl font-bold mb-8 tracking-tight">CIU Highlights</h3>
//               <div className="space-y-6">
//                 {stats.map((s, i) => (
//                   <div key={i} className="flex items-center justify-between group">
//                     <div className="flex items-center gap-4">
//                       <div className="w-10 h-10 bg-rose-800 rounded-xl flex items-center justify-center">
//                         <Icon icon={s.icon} className="text-rose-300 w-6 h-6" />
//                       </div>
//                       <span className="text-rose-100 font-medium">{s.label}</span>
//                     </div>
//                     <span className="text-xl font-black text-white">{s.val}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 pt-8 border-t border-rose-800">
//                 <p className="text-rose-300 text-sm italic">
//                   CIU is more than a university; it&apos;s a global village with high-tech labs and a green soul.
//                 </p>
//                 <div className="mt-4 flex items-center gap-3">
//                   <div className="w-10 h-10 bg-rose-700 rounded-full flex items-center justify-center font-bold">DA</div>
//                   <div>
//                     <p className="font-bold text-sm">Daniel Adeyemi</p>
//                     <p className="text-xs text-rose-400 uppercase tracking-tighter">CIU Graduate</p>
//                   </div>
//                 </div>
//               </div>

//               <a 
//                 href="/#contact"
//                 target="_blank"
//                 className="mt-8 w-full py-4 bg-rose-500 hover:bg-rose-400 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg"
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

// export default CIUPage;

"use client";
import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import Universityprice from '@/components/ui/Universityprice';
import { BookOpen } from 'lucide-react';
import ReactPlayer from 'react-player';

const CIUPage = () => {
  // CIU Images from your code
  const universityImages = [
    "/universities/Ciu-University-Banner-Hamiholding.webp",
    "/universities/ciu-1.webp",
    "/universities/ciu-2.jpg",
    "/universities/ciu-3.jpg",
  ];

  const stats = [
    { label: "Students", val: "22,000+", icon: "solar:users-group-rounded-bold" },
    { label: "Programs", val: "100+", icon: "solar:notebook-bold" },
    { label: "Campus", icon: "solar:leaf-bold", val: "Green Tech" },
    { label: "Scholarship", val: "Up to 100%", icon: "solar:wad-of-money-bold" },
  ];

  return (
    <div className="bg-rose-50/50 min-h-screen pt-24 sm:pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- Header Section (Rose Red Theme) --- */}
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-700 uppercase tracking-widest">
              <Link href="/universities" className="hover:underline">Universities</Link>
              <span>/</span>
              <span className="text-gray-400">CIU Cyprus</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight md:leading-[1.05]">
              Cyprus International <span className="text-rose-600">University</span>
            </h1>
            <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-gray-600 font-medium">
              <Icon icon="solar:map-point-wave-bold" className="text-rose-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              Haspolat, Nicosia, Northern Cyprus
            </div>
          </div>
          
          <div className="hidden md:block">
             <div className="bg-white px-6 py-4 rounded-3xl shadow-xl shadow-rose-100 border border-rose-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Icon icon="solar:leaf-bold" className="text-rose-600 w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Sustainability</p>
                  <p className="text-gray-900 font-extrabold text-lg uppercase">Green Campus</p>
                </div>
             </div>
          </div>
        </div>

        {/* --- Hero Gallery Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10 sm:mb-16 h-[320px] sm:h-[420px] md:h-[500px]">
          <div className="md:col-span-8 relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] shadow-xl md:shadow-2xl group">
            <ReactPlayer 
              src='https://youtu.be/2HfvH5PA-ro' 
              width="100%" 
              height="100%" 
              className="absolute top-0 left-0"
              controls // don't touch this
            />
            <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent flex items-end p-6 md:p-10 pointer-events-none">
            </div>
          </div>
          <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-4">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[1]} alt="CIU Campus 1" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[2]} alt="CIU Campus 2" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* --- Main Content --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 sm:h-8 bg-rose-600 rounded-full"></span>
                University Academic Profile
              </h2>
              <p className="text-gray-700 text-base sm:text-xl leading-relaxed text-left md:text-justify font-medium">
                Cyprus International University (CIU) is a modern, innovative institution known for its high-tech campus and sustainable 
                <span className="text-rose-700 font-bold"> Green Campus</span> initiatives. It offers a wide range of English-taught programs 
                and is one of the most preferred universities for international students, offering 
                <span className="text-rose-600 italic font-bold"> guaranteed scholarships ranging from 50% to 100%</span>.
              </p>
            </div>

            {/* Highlights Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { t: "Sustainable Campus", d: "Producing its own solar energy and recycling water.", i: "solar:plain-bold" },
                { t: "Guaranteed Scholarship", d: "Financial aid opportunities for all international students.", i: "solar:wad-of-money-bold" },
                { t: "Modern Dorms", d: "High-standard living spaces on campus.", i: "solar:home-smile-bold" },
                { t: "Dual Degree", d: "Opportunities to earn degrees from UK partners.", i: "solar:globus-bold" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-rose-50 shadow-sm flex gap-4 sm:gap-5 hover:border-rose-200 transition-all">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon icon={item.i} className="text-rose-600 w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-base sm:text-lg">{item.t}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-snug mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <Universityprice 
              name="Cyprus International University" 
              color="#8a1538" 
              icon={<BookOpen />}
              scholarshipLabel="75%"
              rows={[
                { program: "Medicine", fiftyPrice: "7,823€", fiftyScholarship: "7,823€", oneHundredPrice: "—", oneHundredScholarship: "No Scholarship" },
                { program: "Dentistry", fiftyPrice: "6,495€", fiftyScholarship: "6,495€", oneHundredPrice: "12,990€", oneHundredScholarship: "577€" },
                { program: "Pharmacy", fiftyPrice: "4,883€", fiftyScholarship: "4,883€", seventyFivePrice: "2,730€", seventyFiveScholarship: "2,730€", oneHundredPrice: "9,765€", oneHundredScholarship: "577€" },
              ]}
            />

            {/* Map Area */}
            <div className="bg-white p-2 rounded-2xl sm:rounded-[2.5rem] shadow-xl sm:shadow-2xl border border-white h-[350px] sm:h-[450px] overflow-hidden relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.328325178496!2d33.4111!3d35.2195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de10d484439369%3A0x7f488d7f573489e2!2sCyprus%20International%20University!5e0!3m2!1sen!2s!4v1647200000000"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="rounded-xl sm:rounded-[2.2rem]"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Rose Red Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-rose-900 text-white p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-2xl lg:sticky lg:top-28 border-b-8 border-rose-600">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 tracking-tight">CIU Highlights</h3>
              <div className="space-y-4 sm:space-y-6">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-rose-800 rounded-xl flex items-center justify-center shrink-0">
                        <Icon icon={s.icon} className="text-rose-300 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-rose-100 text-sm sm:text-base font-medium">{s.label}</span>
                    </div>
                    <span className="text-lg sm:text-xl font-black text-white">{s.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-rose-800">
                <p className="text-rose-300 text-xs sm:text-sm italic leading-relaxed">
                  CIU is more than a university; it&apos;s a global village with high-tech labs and a green soul.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-rose-700 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">DA</div>
                  <div>
                    <p className="font-bold text-xs sm:text-sm">Daniel Adeyemi</p>
                    <p className="text-[10px] sm:text-xs text-rose-400 uppercase tracking-tighter">CIU Graduate</p>
                  </div>
                </div>
              </div>

              <a 
                href="/#contact"
                target="_blank"
                className="mt-6 sm:mt-8 w-full py-3.5 sm:py-4 bg-rose-500 hover:bg-rose-400 text-white font-black rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
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

export default CIUPage;