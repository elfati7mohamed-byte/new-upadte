// "use client";
// import React from 'react';
// import { Icon } from '@iconify/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Universityprice from '@/components/ui/Universityprice';
// import { Cpu } from 'lucide-react';
// import ReactPlayer from 'react-player'


// const BahcesehirCyprusPage = () => {
//   // BAU Cyprus Images
//   const universityImages = [
//     "/universities/bahcesehir-university-cyprus-hvac-system-800x400.webp",
//     "/universities/E6ktGOFXIAAH4pb.jpg",
//     "/universities/HVXBIJRNMJGMYWT1JJLW.webp",
//     "/universities/2_compressed.jpg",
//     "/universities/bahcesehir_11_8_20-74_compressed.jpg",
//   ];

//   const stats = [
//     { label: "Students", val: "15,000+", icon: "solar:users-group-rounded-bold" },
//     { label: "Programs", val: "45", icon: "solar:notebook-bold" },
//     { label: "Global Rank", val: "BAU Network", icon: "solar:medal-star-bold" },
//     { label: "Campus Tech", val: "10+ Labs", icon: "solar:test-tube-bold" },
//   ];

//   return (
//     <div className="bg-slate-50 min-h-screen pt-28 pb-20 font-sans">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* --- Header Section (BAU Deep Blue Theme) --- */}
//         <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
//           <div className="space-y-4">
//             <div className="flex items-center gap-2 text-sm font-bold text-[#0B2545] uppercase tracking-widest">
//               <Link href="/universities" className="hover:underline">Universities</Link>
//               <span>/</span>
//               <span className="text-gray-400">BAU Cyprus</span>
//             </div>

//             {/* Logo Section (Commented Out as requested) */}
//             <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//               {/* <div className="relative w-20 h-20 bg-white p-2 rounded-2xl shadow-md border border-gray-100 shrink-0 flex items-center justify-center">
//                 <Image 
//                   src="/universities/bau-logo.png" 
//                   alt="Bahçeşehir Cyprus University Logo"
//                   width={70}
//                   height={70}
//                   className="object-contain"
//                   priority
//                 />
//               </div> 
//               */}
//               <h1 className="text-5xl md:text-6xl font-black text-gray-950 leading-tight">
//                 Bahçeşehir Cyprus <span className="text-[#2162AE]">University</span>
//               </h1>
//             </div>

//             <div className="flex items-center gap-3 text-lg text-gray-600 font-medium">
//               <Icon icon="solar:map-point-wave-bold" className="text-[#134074] w-6 h-6" />
//               Alayköy, Northern Cyprus
//             </div>
//           </div>
          
//           <div className="hidden md:block">
//              <div className="bg-white px-6 py-4 rounded-3xl shadow-xl shadow-blue-50 border border-gray-100 flex items-center gap-4">
//                 <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
//                   <Icon icon="solar:medal-star-bold" className="text-[#0B2545] w-7 h-7" />
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold text-gray-400 uppercase">Academic Status</p>
//                   <p className="text-gray-900 font-extrabold text-lg uppercase">Global Network</p>
//                 </div>
//              </div>
//           </div>
//         </div>

//         {/* --- Hero Gallery Section --- */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16 h-[500px]">
// <div className="md:col-span-8 relative overflow-hidden rounded-[2.5rem] shadow-2xl group ">
//                               <ReactPlayer 
//                                 src='https://youtu.be/XkB9Z1Pkjhw' 
//                                 width="100%" 
//                                 height="100%" 
//                                 className="absolute top-0 left-0"
//                                 controls // don't touch this
//                               />
//     <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent flex items-end p-10 pointer-events-none">
//   </div>
// </div>
//           <div className="md:col-span-4 grid grid-rows-2 gap-4">
//             <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
//               <Image src={universityImages[1]} alt="BAU Cyprus Facilities" fill className="object-cover" />
//             </div>
//             <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
//               <Image src={universityImages[2]} alt="BAU Cyprus Labs" fill className="object-cover" />
//             </div>
//           </div>
//         </div>

//         {/* --- Content Grid --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           {/* Left Side: Info */}
//           <div className="lg:col-span-8 space-y-12">
//             <div className="prose prose-lg max-w-none">
//               <h2 className="text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
//                 <span className="w-1.5 h-8 bg-[#0B2545] rounded-full"></span>
//                 University Details
//               </h2>
//               <p className="text-gray-700 text-xl leading-relaxed text-justify font-medium">
//                 Bahçeşehir Cyprus University is a strong choice for international students seeking 
//                 a modern academic environment with global exposure. As part of the{" "}
//                 <a 
//                   href="https://bauglobal.com" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="text-[#0B2545] font-bold underline"
//                 >
//                   BAU Global Network
//                 </a>
//                 , it offers internationally connected education, advanced campus facilities, and a 
//                 vibrant student experience in Northern Cyprus.
//               </p>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 { t: "International network", d: "Part of BAU Global with worldwide academic connections and mobility opportunities.", i: "solar:global-bold" },
//                 { t: "Modern learning", d: "Technology-driven classrooms, labs, and practical academic programs.", i: "solar:test-tube-bold" },
//                 { t: "Student experience", d: "A multicultural environment with support for international students.", i: "solar:users-group-rounded-bold" },
//                 { t: "Mediterranean lifestyle", d: "Study in Northern Cyprus with a relaxed climate and accessible living.", i: "solar:sun-bold" },
//               ].map((item, i) => (
//                 <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-5 hover:border-blue-200 transition-all">
//                   <div className="w-14 h-14 bg-blue-50/50 rounded-2xl flex items-center justify-center shrink-0">
//                     <Icon icon={item.i} className="text-[#0B2545] w-8 h-8" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-950 text-lg">{item.t}</h4>
//                     <p className="text-gray-500 text-sm leading-snug">{item.d}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* University Price Component */}
//             <Universityprice
//               name="Bahçeşehir Cyprus University" 
//               color="#0B2545" 
//               icon={<Cpu />}
//               scholarshipLabel="80%"
//               rows={[
//                 { program: "Pharmacy", fiftyPrice: "5,100$", fiftyScholarship: "5,100$", eightyPrice: "—", eightyScholarship: "No Scholarship", oneHundredPrice: "10,200$", oneHundredScholarship: "900$" },
//                 { program: "Engineering and other program", fiftyPrice: "3,870$", fiftyScholarship: "3,870$", eightyPrice: "1,728$", eightyScholarship: "1,728$", oneHundredPrice: "7,740$", oneHundredScholarship: "900$" },
//               ]}
//             />

//             {/* Map Area */}
//             <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-white h-[450px] overflow-hidden relative">
//                <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.644155823547!2d33.3087363!3d35.1530184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de10a1586b4649%3A0xc3f8f1a14c1d1a1a!2sBahcesehir%20Cyprus%20University!5e0!3m2!1sen!2str!4v1700000000000"
//                 width="100%" 
//                 height="100%" 
//                 style={{ border: 0 }} 
//                 allowFullScreen 
//                 loading="lazy"
//                 className="rounded-[2.2rem]"
//               ></iframe>
//             </div>
//           </div>

//           {/* Right Side: GAU Navy Sticky Sidebar */}
//           <div className="lg:col-span-4">
//             <div className="bg-[#0B2545] text-white p-8 rounded-[2.5rem] shadow-2xl sticky top-28 border-b-8 border-[#134074]">
//               <h3 className="text-2xl font-bold mb-8 tracking-tight">University Highlights</h3>
//               <div className="space-y-6">
//                 {stats.map((s, i) => (
//                   <div key={i} className="flex items-center justify-between group">
//                     <div className="flex items-center gap-4">
//                       <div className="w-10 h-10 bg-[#134074] rounded-xl flex items-center justify-center border border-blue-900/30">
//                         <Icon icon={s.icon} className="text-blue-200 w-6 h-6" />
//                       </div>
//                       <span className="text-blue-100 font-medium">{s.label}</span>
//                     </div>
//                     <span className="text-xl font-black text-white">{s.val}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-10 pt-8 border-t border-[#134074]">
//                 <p className="text-blue-200 text-sm italic leading-relaxed opacity-95">
//                   Studying at BAU Cyprus gave me an international learning experience with strong academic support and a modern campus atmosphere.
//                 </p>
//                 <div className="mt-4 flex items-center gap-3">
//                   <div className="w-10 h-10 bg-[#134074] rounded-full flex items-center justify-center font-bold text-white border border-blue-900/40">AO</div>
//                   <div>
//                     <p className="font-bold text-sm">Amara Okoro</p>
//                     <p className="text-xs text-blue-300 tracking-wide uppercase">International Student</p>
//                   </div>
//                 </div>
//               </div>

//               <a 
//                 href="/#contact"
//                 target="_blank"
//                 className="mt-8 w-full py-4 bg-white hover:bg-gray-100 text-[#0B2545] font-black rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg"
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

// export default BahcesehirCyprusPage;




// // // // pages/countries/cyprus.tsx
// // // import React from "react";
// // // import DetailPageTemplate, { DetailPageItem } from "@/app/components/templates/DetailPageTemplate";

// // // const cyprus: DetailPageItem = {
// // //   name: "Bahcesehir Cyprus University",
// // //   slug: "bahcesehir-cyprus-university",
// // //   location: "Alokoy, Cyprus",
// // //   rate: "Avg cost of living: €900–€1,300/mo",
// // //   stat1: 55000,
// // //   stat2: 20,
// // //   stat3: 1252000,
// // //   description:
// // //     "Cyprus is a popular destination for international students thanks to affordable living, English-taught programs, and a warm Mediterranean lifestyle.",
// // //   images: [
// // //     { src: "/Site-New/public/Near east 1.jpg" },
// // //     { src: "/Site-New/public/Near east 2.jpg" },
// // //     { src: "/Site-New/public/Near east 3.jpg" },
// // //     { src: "/Site-New/public/Near east 4.jpg" },
// // //   ],
// // // };

// // // export default function CyprusPage() {
// // //   return (
// // //     <DetailPageTemplate
// // //       item={cyprus}
// // //       basePath="universities"
// // //       backHref="/universities"
// // //       stats={{
// // //         stat1: { label: "Students", icon: "solar:users-group-rounded-linear" },
// // //         stat2: { label: "Programs", icon: "solar:book-linear" },
// // //         stat3: { label: "Ranking", icon: "solar:ranking-linear" },
// // //       }}
// // //       labels={{
// // //         backText: "Back to Universities",
// // //         breadcrumbBase: "universities",
// // //         detailsTitle: "University details",
// // //         offersTitle: "What this university offers",
// // //         mapTitle: "Location map",
// // //         ctaText: "Get in touch",
// // //       }}
// // //       features={[
// // //         {
// // //           title: "Student friendly",
// // //           desc: "Large international student communities and many English-taught programs.",
// // //           icon: "solar:users-group-rounded-linear",
// // //         },
// // //         {
// // //           title: "Affordable lifestyle",
// // //           desc: "Lower living costs compared to many EU destinations.",
// // //           icon: "solar:wallet-money-linear",
// // //         },
// // //         {
// // //           title: "Mediterranean climate",
// // //           desc: "Warm weather, beaches, and a relaxed lifestyle throughout the year.",
// // //           icon: "solar:sun-linear",
// // //         },
// // //       ]}
// // //       offers={[
// // //         { icon: "solar:book-linear", text: "English-taught programs" },
// // //         { icon: "solar:buildings-2-linear", text: "Modern universities" },
// // //         { icon: "solar:home-linear", text: "Student housing options" },
// // //         { icon: "solar:bus-linear", text: "City transport access" },
// // //         { icon: "solar:shield-check-linear", text: "Safe student cities" },
// // //         { icon: "solar:global-linear", text: "International communities" },
// // //       ]}
// // //       testimonial={{
// // //         text:
// // //           "I found my university path in Cyprus through this platform. The process was smooth and the housing options helped a lot.",
// // //         name: "Emily & John Smith",
// // //         role: "Student & Guardian",
// // //       }}
// // //       quickLinks={[
// // //         { href: "/universities?country=cyprus", text: "Browse universities" },
// // //         { href: "/housing?country=cyprus", text: "View housing options" },
// // //       ]}
// // //       mapSubtitle="Cyprus • Eastern Mediterranean"
// // //     />
// // //   );
// // // }
// // // pages/countries/cyprus.tsx
// // // app/countries/cyprus/bahcesehir/page.tsx
// // // app/countries/cyprus/bahcesehir/page.tsx
// // // app/countries/cyprus/bahcesehir/page.tsx

// // "use client";
// // import React from "react";
// // import { Icon } from "@iconify/react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import Universityprice from "@/components/ui/Universityprice";
// // import { Cpu } from "lucide-react";

// // const BahcesehirCyprusPage = () => {
// //   const universityImages = [
// //     "/universities/bahcesehir-university-cyprus-hvac-system-800x400.webp",
// //     "/universities/E6ktGOFXIAAH4pb.jpg",
// //     "/universities/HVXBIJRNMJGMYWT1JJLW.webp",
// //     "/universities/2_compressed.jpg",
// //     "/universities/bahcesehir_11_8_20-74_compressed.jpg",
// //   ];

// //   const stats = [
// //     { label: "Students", val: "15,000+", icon: "solar:users-group-rounded-bold" },
// //     { label: "Programs", val: "45", icon: "solar:notebook-bold" },
// //     { label: "Global Rank", val: "BAU Network", icon: "solar:medal-star-bold" },
// //     { label: "Campus Tech", val: "10+ Labs", icon: "solar:test-tube-bold" },
// //   ];

// //   return (
// //     <div className="bg-slate-50 min-h-screen pt-28 pb-20 font-sans">
// //       <div className="max-w-7xl mx-auto px-6">
// //         {/* Header Section */}
// //         <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
// //           <div className="space-y-2">
// //             <div className="flex items-center gap-2 text-sm font-bold text-blue-900 uppercase tracking-widest">
// //               <Link href="/universities" className="hover:underline">
// //                 Universities
// //               </Link>
// //               <span>/</span>
// //               <span className="text-gray-400">BAU Cyprus</span>
// //             </div>
// //             <h1 className="text-5xl md:text-6xl font-black text-gray-950 leading-tight">
// //               Bahçeşehir Cyprus <span className="text-blue-800">University</span>
// //             </h1>
// //             <div className="flex items-center gap-3 text-lg text-gray-600 font-medium">
// //               <Icon icon="solar:map-point-wave-bold" className="text-blue-500 w-6 h-6" />
// //               Alokoy, Northern Cyprus
// //             </div>
// //           </div>

// //           <div className="hidden md:block">
// //             <div className="bg-white px-6 py-4 rounded-3xl shadow-xl shadow-blue-100 border border-blue-50 flex items-center gap-4">
// //               <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
// //                 <Icon icon="solar:medal-star-bold" className="text-blue-600 w-7 h-7" />
// //               </div>
// //               <div>
// //                 <p className="text-xs font-bold text-gray-400 uppercase">Academic Status</p>
// //                 <p className="text-blue-950 font-extrabold text-lg uppercase">Global Network</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Hero Gallery Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16 h-[500px]">
// //           <div className="md:col-span-8 relative overflow-hidden rounded-[2.5rem] shadow-2xl group">
// //             <Image
// //               src={universityImages[0]}
// //               alt="BAU Cyprus Campus Main"
// //               fill
// //               className="object-cover transition-transform duration-700 group-hover:scale-105"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent flex items-end p-10">
// //               <p className="text-white text-2xl font-bold">Main Campus With Innovation Spaces</p>
// //             </div>
// //           </div>

// //           <div className="md:col-span-4 grid grid-rows-2 gap-4">
// //             <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
// //               <Image
// //                 src={universityImages[1]}
// //                 alt="BAU Cyprus Facilities"
// //                 fill
// //                 className="object-cover"
// //               />
// //             </div>
// //             <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
// //               <Image
// //                 src={universityImages[2]}
// //                 alt="BAU Cyprus Labs"
// //                 fill
// //                 className="object-cover"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
// //           <div className="lg:col-span-8 space-y-12">
// //             <div className="prose prose-lg max-w-none">
// //               <h2 className="text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
// //                 <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
// //                 University details
// //               </h2>
// //               <p className="text-gray-700 text-xl leading-relaxed text-justify font-medium">
// //                 Bahçeşehir Cyprus University is a strong choice for international students seeking
// //                 a modern academic environment with global exposure. As part of the{" "}
// //                 <a
// //                   href="https://bauglobal.com"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-blue-800 font-bold underline"
// //                 >
// //                   BAU Global Network
// //                 </a>
// //                 , it offers internationally connected education, advanced campus facilities, and a
// //                 vibrant student experience in Northern Cyprus.
// //               </p>
// //             </div>

// //             {/* Features Section */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {[
// //                 {
// //                   t: "International network",
// //                   d: "Part of BAU Global with worldwide academic connections and mobility opportunities.",
// //                   i: "solar:global-bold",
// //                 },
// //                 {
// //                   t: "Modern learning",
// //                   d: "Technology-driven classrooms, labs, and practical academic programs.",
// //                   i: "solar:test-tube-bold",
// //                 },
// //                 {
// //                   t: "Student experience",
// //                   d: "A multicultural environment with support for international students.",
// //                   i: "solar:users-group-rounded-bold",
// //                 },
// //                 {
// //                   t: "Mediterranean lifestyle",
// //                   d: "Study in Northern Cyprus with a relaxed climate and accessible living.",
// //                   i: "solar:sun-bold",
// //                 },
// //               ].map((item, i) => (
// //                 <div
// //                   key={i}
// //                   className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm flex gap-5 hover:border-blue-200 transition-all"
// //                 >
// //                   <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
// //                     <Icon icon={item.i} className="text-blue-800 w-8 h-8" />
// //                   </div>
// //                   <div>
// //                     <h4 className="font-bold text-gray-950 text-lg">{item.t}</h4>
// //                     <p className="text-gray-500 text-sm leading-snug">{item.d}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <Universityprice
// //         name="Bahçeşehir Cyprus University" 
// //         color="#2b5ba3" 
// //         icon={<Cpu />}
// //         scholarshipLabel="80%"
// //         rows={[
// //           { program: "Pharmacy", fiftyPrice: "5,100$", fiftyScholarship: "5,100$", eightyPrice: "—", eightyScholarship: "No Scholarship", oneHundredPrice: "10,200$", oneHundredScholarship: "900$" },
// //           { program: "Engineering and other program", fiftyPrice: "3,870$", fiftyScholarship: "3,870$", eightyPrice: "1,728$", eightyScholarship: "1,728$", oneHundredPrice: "7,740$", oneHundredScholarship: "900$" },
// //         ]}
// //       />

// //             {/* Map Area */}
// //             <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-white h-[450px] overflow-hidden relative">
// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.644155823547!2d33.3087363!3d35.1530184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de10a1586b4649%3A0xc3f8f1a14c1d1a1a!2sBahcesehir%20Cyprus%20University!5e0!3m2!1sen!2str!4v1700000000000"
// //                 width="100%"
// //                 height="100%"
// //                 style={{ border: 0 }}
// //                 allowFullScreen
// //                 loading="lazy"
// //                 className="rounded-[2.2rem]"
// //               ></iframe>
// //             </div>
// //           </div>

// //           {/* Right Side Sticky Sidebar */}
// //           <div className="lg:col-span-4">
// //             <div className="bg-blue-950 text-white p-8 rounded-[2.5rem] shadow-2xl sticky top-28 border-b-8 border-blue-500">
// //               <h3 className="text-2xl font-bold mb-8 tracking-tight">University Highlights</h3>

// //               <div className="space-y-6">
// //                 {stats.map((s, i) => (
// //                   <div key={i} className="flex items-center justify-between group">
// //                     <div className="flex items-center gap-4">
// //                       <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center">
// //                         <Icon icon={s.icon} className="text-blue-400 w-6 h-6" />
// //                       </div>
// //                       <span className="text-blue-100 font-medium">{s.label}</span>
// //                     </div>
// //                     <span className="text-xl font-black text-white">{s.val}</span>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="mt-10 pt-8 border-t border-blue-900">
// //                 <p className="text-blue-300 text-sm italic">
// //                   Studying at BAU Cyprus gave me an international learning experience with strong
// //                   academic support and a modern campus atmosphere.
// //                 </p>
// //                 <div className="mt-4 flex items-center gap-3">
// //                   <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-blue-950">
// //                     AO
// //                   </div>
// //                   <div>
// //                     <p className="font-bold text-sm">Amara Okoro</p>
// //                     <p className="text-xs text-blue-400 uppercase tracking-tighter">
// //                       International Student
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <a
// //                 href="/#contact"
// //                 className="mt-8 w-full py-4 bg-blue-500 hover:bg-blue-400 text-blue-950 font-black rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg"
// //               >
// //                 Apply Now
// //                 <Icon icon="solar:arrow-right-up-linear" />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BahcesehirCyprusPage;


"use client";

import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import Universityprice from '@/components/ui/Universityprice';
import { Cpu } from 'lucide-react';
import ReactPlayer from 'react-player';

const BahcesehirCyprusPage = () => {
  // BAU Cyprus Images
  const universityImages = [
    "/universities/bahcesehir-university-cyprus-hvac-system-800x400.webp",
    "/universities/E6ktGOFXIAAH4pb.jpg",
    "/universities/HVXBIJRNMJGMYWT1JJLW.webp",
    "/universities/2_compressed.jpg",
    "/universities/bahcesehir_11_8_20-74_compressed.jpg",
  ];

  const stats = [
    { label: "Students", val: "15,000+", icon: "solar:users-group-rounded-bold" },
    { label: "Programs", val: "45", icon: "solar:notebook-bold" },
    { label: "Global Rank", val: "BAU Network", icon: "solar:medal-star-bold" },
    { label: "Campus Tech", val: "10+ Labs", icon: "solar:test-tube-bold" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0B2545] uppercase tracking-widest">
              <Link href="/universities" className="hover:underline">Universities</Link>
              <span>/</span>
              <span className="text-gray-400">BAU Cyprus</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h1 className="text-5xl md:text-6xl font-black text-gray-950 leading-tight">
                Bahçeşehir Cyprus <span className="text-[#2162AE]">University</span>
              </h1>
            </div>

            <div className="flex items-center gap-3 text-lg text-gray-600 font-medium">
              <Icon icon="solar:map-point-wave-bold" className="text-[#134074] w-6 h-6" />
              Alayköy, Northern Cyprus
            </div>
          </div>
          
          <div className="hidden md:block">
             <div className="bg-white px-6 py-4 rounded-3xl shadow-xl shadow-blue-50 border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Icon icon="solar:medal-star-bold" className="text-[#0B2545] w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Academic Status</p>
                  <p className="text-gray-900 font-extrabold text-lg uppercase">Global Network</p>
                </div>
             </div>
          </div>
        </div>

        {/* --- Hero Gallery Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16 h-[500px]">
          <div className="md:col-span-8 relative overflow-hidden rounded-[2.5rem] shadow-2xl group">
            <ReactPlayer 
              url='https://youtu.be/XkB9Z1Pkjhw' 
              width="100%" 
              height="100%" 
              className="absolute top-0 left-0"
              controls
            />
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-4">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[1]} alt="BAU Cyprus Facilities" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[2]} alt="BAU Cyprus Labs" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Info & Pricing */}
          <div className="lg:col-span-8 space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#0B2545] rounded-full"></span>
                University Details
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed text-justify font-medium">
                Bahçeşehir Cyprus University is a strong choice for international students seeking 
                a modern academic environment with global exposure. As part of the{" "}
                <a 
                  href="https://bauglobal.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0B2545] font-bold underline"
                >
                  BAU Global Network
                </a>
                , it offers internationally connected education, advanced campus facilities, and a 
                vibrant student experience in Northern Cyprus.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { t: "International network", d: "Part of BAU Global with worldwide academic connections and mobility opportunities.", i: "solar:global-bold" },
                { t: "Modern learning", d: "Technology-driven classrooms, labs, and practical academic programs.", i: "solar:test-tube-bold" },
                { t: "Student experience", d: "A multicultural environment with support for international students.", i: "solar:users-group-rounded-bold" },
                { t: "Mediterranean lifestyle", d: "Study in Northern Cyprus with a relaxed climate and accessible living.", i: "solar:sun-bold" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex gap-5 hover:border-blue-200 transition-all">
                  <div className="w-14 h-14 bg-blue-50/50 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon icon={item.i} className="text-[#0B2545] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-lg">{item.t}</h4>
                    <p className="text-gray-500 text-sm leading-snug">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* University Price Component */}
            <Universityprice
              name="Bahçeşehir Cyprus University" 
              color="#0B2545" 
              icon={<Cpu />}
              scholarshipLabel="80%"
              rows={[
                { program: "Pharmacy", fiftyPrice: "5,100$", fiftyScholarship: "5,100$", eightyPrice: "—", eightyScholarship: "No Scholarship", oneHundredPrice: "10,200$", oneHundredScholarship: "900$" },
                { program: "Engineering and other program", fiftyPrice: "3,870$", fiftyScholarship: "3,870$", eightyPrice: "1,728$", eightyScholarship: "1,728$", oneHundredPrice: "7,740$", oneHundredScholarship: "900$" },
              ]}
            />

            {/* Map Area */}
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-white h-[450px] overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.644155823547!2d33.3087363!3d35.1530184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de10a1586b4649%3A0xc3f8f1a14c1d1a1a!2sBahcesehir%20Cyprus%20University!5e0!3m2!1sen!2str!4v1700000000000"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="rounded-[2.2rem]"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#0B2545] text-white p-8 rounded-[2.5rem] shadow-2xl sticky top-28 border-b-8 border-[#134074]">
              <h3 className="text-2xl font-bold mb-8 tracking-tight">University Highlights</h3>
              <div className="space-y-6">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#134074] rounded-xl flex items-center justify-center border border-blue-900/30">
                        <Icon icon={s.icon} className="text-blue-200 w-6 h-6" />
                      </div>
                      <span className="text-blue-100 font-medium">{s.label}</span>
                    </div>
                    <span className="text-xl font-black text-white">{s.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-[#134074]">
                <p className="text-blue-200 text-sm italic leading-relaxed opacity-95">
                  Studying at BAU Cyprus gave me an international learning experience with strong academic support and a modern campus atmosphere.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#134074] rounded-full flex items-center justify-center font-bold text-white border border-blue-900/40">AO</div>
                  <div>
                    <p className="font-bold text-sm">Amara Okoro</p>
                    <p className="text-xs text-blue-300 tracking-wide uppercase">International Student</p>
                  </div>
                </div>
              </div>

              <a 
                href="/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-4 bg-white hover:bg-gray-100 text-[#0B2545] font-black rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg"
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

export default BahcesehirCyprusPage;