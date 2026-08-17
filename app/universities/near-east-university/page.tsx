"use client";
import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import Universityprice from '@/components/ui/Universityprice';
import { Microscope } from 'lucide-react';
import ReactPlayer from 'react-player';

const NearEastUniversityPage = () => {
  // Image Paths
  const universityImages = [
    "/universities/Near east 4.jpg",
    "/universities/near east 3.jpg",
    "/universities/near eas-2.jpg",
    "/Near east 3.jpg",
    "/Near east 4.jpg",
  ];

  const stats = [
    { label: "Students", val: "55,000+", icon: "solar:users-group-rounded-bold" },
    { label: "Programs", val: "20+", icon: "solar:notebook-bold" },
    { label: "Global Rank", icon: "solar:ranking-bold", val: "Top 1252" },
    { label: "Living Cost", val: "€900+", icon: "solar:wallet-money-bold" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 sm:pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- Header Section --- */}
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#7A0016] uppercase tracking-widest">
              <Link href="/universities" className="hover:underline">Universities</Link>
              <span>/</span>
              <span className="text-gray-400">NEU Nicosia</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-950 leading-tight">
                Near East <span className="text-[#7A0016]">University</span>
              </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-gray-600 font-medium">
              <Icon icon="solar:map-point-wave-bold" className="text-[#7A0016] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              Nicosia, Northern Cyprus
            </div>
          </div>
          
          <div className="hidden md:block">
             <div className="bg-white px-6 py-4 rounded-3xl shadow-xl shadow-red-50 border border-red-50 flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                  <Icon icon="solar:medal-star-bold" className="text-[#7A0016] w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Academic Status</p>
                  <p className="text-[#7A0016] font-extrabold text-lg uppercase">Global Excellence</p>
                </div>
             </div>
          </div>
        </div>

        {/* --- Hero Gallery Grid (Responsive height) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10 sm:mb-16 h-[320px] sm:h-[420px] md:h-[500px]">
          <div className="md:col-span-8 relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] shadow-xl md:shadow-2xl group">
            <ReactPlayer 
              src='https://youtu.be/PhK_tioBixo' 
              width="100%" 
              height="100%" 
              className="absolute top-0 left-0"
              controls 
            />
            <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent flex items-end p-6 md:p-10 pointer-events-none">
            </div>
          </div>
          <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-4">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[1]} alt="NEU Facilities" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[2]} alt="NEU Labs" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* --- Main Content --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 sm:h-8 bg-[#7A0016] rounded-full"></span>
                University details
              </h2>
              
              {/* FIXED: text-left on mobile to avoid wide spaces between words, md:text-justify on desktop */}
              <p className="text-gray-700 text-base sm:text-xl leading-relaxed text-left md:text-justify font-medium">
                Near East University is a popular destination for international students thanks to its 
                <span className="text-[#7A0016] font-bold"> English-taught programs</span>, world-class facilities, and 
                a warm Mediterranean lifestyle. As a leading institution in Nicosia, it offers a multicultural 
                environment and high-standard academic resources including the largest library in the region.
              </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { t: "Student friendly", d: "Large international student communities and many English-taught programs.", i: "solar:users-group-rounded-bold" },
                { t: "Affordable lifestyle", d: "Lower living costs compared to many EU destinations.", i: "solar:wallet-money-bold" },
                { t: "Grand Library", d: "Access to millions of resources in one of the world's most modern libraries.", i: "solar:library-bold" },
                { t: "Climate", d: "Warm weather, beaches, and a relaxed lifestyle year-round.", i: "solar:sun-bold" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm flex gap-4 sm:gap-5 hover:border-red-200 transition-all">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-50/50 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon icon={item.i} className="text-[#7A0016] w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-base sm:text-lg">{item.t}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-snug mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* University Price Component */}
            <Universityprice 
              name="Near East University - Tuition Fees" 
              color="#7A0016" 
              icon={<Microscope />}
              scholarshipLabel="-" 
              rows={[
                { program: "Medicine", fiftyPrice: "10,925€", fiftyScholarship: "10,925€", oneHundredPrice: "21,850€", oneHundredScholarship: "1,250€" },
                { program: "Dentistry", fiftyPrice: "10,135€", fiftyScholarship: "10,135€", oneHundredPrice: "20,270€", oneHundredScholarship: "1,250€" },
                { program: "Pharmacy or Veterinary", fiftyPrice: "3,886€", fiftyScholarship: "3,886€", oneHundredPrice: "7,772€", oneHundredScholarship: "750€" },
                { program: "Engineering and other program", fiftyPrice: "2,705€", fiftyScholarship: "2,705€", oneHundredPrice: "5,410€", oneHundredScholarship: "750€" },
              ]}
            />

            {/* Map Area */}
            <div className="bg-white p-2 rounded-2xl sm:rounded-[2.5rem] shadow-xl sm:shadow-2xl border border-white h-[350px] sm:h-[450px] overflow-hidden relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.123456789!2d33.3303!3d35.2267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEzJzM2LjEiTiAzM8KwMTknNDkuMSJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="rounded-xl sm:rounded-[2.2rem]"
              ></iframe>
            </div>
          </div>

          {/* Right Side: NEU Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#7A0016] text-white p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-2xl lg:sticky lg:top-28 border-b-8 border-[#5c0010]">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 tracking-tight">University Highlights</h3>
              <div className="space-y-4 sm:space-y-6">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#5c0010] rounded-xl flex items-center justify-center border border-red-900/30 shrink-0">
                        <Icon icon={s.icon} className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-red-100 text-sm sm:text-base font-medium">{s.label}</span>
                    </div>
                    <span className="text-lg sm:text-xl font-black text-white">{s.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#5c0010]">
                <p className="text-red-100 text-xs sm:text-sm italic opacity-90">
                  I found my university path in Cyprus through this platform. The process was smooth and the housing options helped a lot.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#5c0010] rounded-full flex items-center justify-center font-bold text-white border border-red-900/40 shrink-0 text-sm">EJ</div>
                  <div>
                    <p className="font-bold text-xs sm:text-sm">Emily & John Smith</p>
                    <p className="text-[10px] sm:text-xs text-red-200 uppercase tracking-tighter">Student & Guardian</p>
                  </div>
                </div>
              </div>

              <a 
                href="/#contact"
                target="_blank"
                className="mt-6 sm:mt-8 w-full py-3.5 sm:py-4 bg-white hover:bg-gray-100 text-[#7A0016] font-black rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
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

export default NearEastUniversityPage;