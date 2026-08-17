"use client";
import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import Universityprice from '@/components/ui/Universityprice';
import { BookOpen } from 'lucide-react';
import ReactPlayer from 'react-player';

const EMUPage = () => {
  const universityImages = [
    "/universities/Easter Med3.jpg", 
    "/universities/Easter Med4.jpg",
    "/universities/Easter Med.jpg",
    "/Near east 4.jpg",
  ];

  const stats = [
    { label: "Faculties", val: "12", icon: "solar:library-bold" },
    { label: "Programs", val: "141+", icon: "solar:notebook-bold" },
    { label: "Ranking", icon: "solar:ranking-bold", val: "World Top 600" },
    { label: "Students", val: "17,500+", icon: "solar:users-group-rounded-bold" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 sm:pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- Header Section (EMU Clean Theme) --- */}
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0047ab] uppercase tracking-widest">
              <Link href="/universities" className="hover:underline">Universities</Link>
              <span>/</span>
              <span className="text-gray-400">EMU Famagusta</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-950 leading-tight">
                Eastern Mediterranean <span className="text-[#0047ab]">University</span>
              </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-gray-600 font-medium">
              <Icon icon="solar:map-point-wave-bold" className="text-[#0047ab] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              Famagusta (Gazimağusa), Northern Cyprus
            </div>
          </div>
          
          <div className="hidden md:block">
             <div className="bg-white px-6 py-4 rounded-3xl shadow-xl shadow-orange-50 border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Icon icon="solar:globus-bold" className="text-[#ea580c] w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Prestige</p>
                  <p className="text-gray-900 font-extrabold text-lg uppercase">State Institution</p>
                </div>
             </div>
          </div>
        </div>

        {/* --- Hero Gallery --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10 sm:mb-16 h-[320px] sm:h-[420px] md:h-[500px]">
          <div className="md:col-span-8 relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] shadow-xl md:shadow-2xl group">
            <ReactPlayer 
              src='https://youtu.be/uuOL_mPvbcU' 
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
              <Image src={universityImages[1]} alt="EMU Campus" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[2]} alt="EMU Social" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* --- Main Content --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 sm:h-8 bg-[#0047ab] rounded-full"></span>
                Academic Excellence & Global Reach
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-xl leading-relaxed text-left md:text-justify font-medium">
                <p>
                  Established in 1979 as a high technology institute, <strong className="text-gray-950">Eastern Mediterranean University (EMU)</strong> has evolved into the most prestigious 
                  <span className="text-[#0047ab] font-bold"> state-funded university</span> in Northern Cyprus. It is the only university in the region 
                  to consistently appear in the Times Higher Education (THE) World University Rankings.
                </p>
                <p>
                  With a massive 2,200-acre campus, EMU offers a vibrant international atmosphere, hosting students from over <strong className="text-gray-950">110 different countries</strong>. 
                  All programs are accredited by internationally recognized bodies such as <strong className="text-gray-950">ABET, AACSB, and TEDQUAL</strong>, ensuring your degree is 
                  valid and respected globally.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { t: "International Accreditations", d: "Programs certified by ABET, AACSB, and MÜDEK.", i: "solar:verified-check-bold" },
                { t: "Modern Social Life", d: "Over 50 student clubs and annual international festivals.", i: "solar:music-note-bold" },
                { t: "Research Pioneers", d: "Home to 30+ research centers focusing on energy and health.", i: "solar:test-tube-bold" },
                { t: "Strategic Location", d: "Located in Famagusta, blending modern education with history.", i: "solar:city-bold" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm flex gap-4 sm:gap-5 hover:border-blue-200 transition-all">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50/60 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon icon={item.i} className="text-[#0047ab] w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-base sm:text-lg">{item.t}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-snug mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Component */}
            <Universityprice
              name="Eastern Mediterranean University" 
              color="#0047ab" 
              icon={<BookOpen />}
              scholarshipLabel="75%"
              rows={[
                { program: "Medicine", fiftyPrice: "7,823€", fiftyScholarship: "7,823€", oneHundredPrice: "—", oneHundredScholarship: "No Scholarship" },
                { program: "Dentistry", fiftyPrice: "6,495€", fiftyScholarship: "6,495€", oneHundredPrice: "12,990€", oneHundredScholarship: "577€" },
                { program: "Pharmacy", fiftyPrice: "4,883€", fiftyScholarship: "4,883€", seventyFivePrice: "2,730€", seventyFiveScholarship: "2,730€", oneHundredPrice: "9,765€", oneHundredScholarship: "577€" },
              ]}
            />

            {/* Map Area */}
            <div className="space-y-4 sm:space-y-6">
               <h3 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-3">
                <Icon icon="solar:map-bold-duotone" className="text-[#0047ab]" />
                University Campus Location
              </h3>
              <div className="bg-white p-2 rounded-2xl sm:rounded-[2.5rem] shadow-xl sm:shadow-2xl border border-white h-[350px] sm:h-[450px] overflow-hidden relative">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.2758133595!2d33.90483837633219!3d35.14352995964998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc949704e6d3d%3A0xc665780f2d4f208!2sEastern%20Mediterranean%20University!5e0!3m2!1sen!2s!4v1709800000000!5m2!1sen!2s"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="rounded-xl sm:rounded-[2.2rem]"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side: Premium Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#0047ab] text-white p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-2xl lg:sticky lg:top-28 border-b-8 border-[#ea580c]">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 tracking-tight">University Snapshot</h3>
              <div className="space-y-4 sm:space-y-6">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 shrink-0">
                        <Icon icon={s.icon} className="text-amber-300 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-slate-100 text-sm sm:text-base font-medium">{s.label}</span>
                    </div>
                    <span className="text-lg sm:text-xl font-black text-white">{s.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
                <p className="text-blue-100 text-xs sm:text-sm italic leading-relaxed opacity-90">
                  EMU provided me with a truly global perspective and a degree that opened doors for my career in Europe.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-400 rounded-full flex items-center justify-center font-bold text-blue-950 text-xs sm:text-sm shrink-0">MA</div>
                  <div>
                    <p className="font-bold text-xs sm:text-sm">Mehmet Ali</p>
                    <p className="text-[10px] sm:text-xs text-amber-200">Computer Science Alumnus</p>
                  </div>
                </div>
              </div>

              <a 
                href="/#contact"
                target="_blank"
                className="mt-6 sm:mt-8 w-full py-3.5 sm:py-4 bg-white hover:bg-slate-100 text-[#0047ab] font-black rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
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

export default EMUPage;