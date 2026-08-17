"use client";
import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import Universityprice from '@/components/ui/Universityprice';
import { BookOpen } from 'lucide-react';
import ReactPlayer from 'react-player';

const GirneAmericanUniversityPage = () => {
  // GAU Images - Using the ones provided
  const universityImages = [
    "/universities/garne -3.jpg",
    "/universities/garne-4.jpg",
    "/universities/garne-5.png",
  ];

  const stats = [
    { label: "Students", val: "18,000+", icon: "solar:users-group-rounded-bold" },
    { label: "Programs", val: "150+", icon: "solar:notebook-bold" },
    { label: "Global Campus", icon: "solar:globus-bold", val: "7 Locations" },
    { label: "Years Exp", val: "35+", icon: "solar:history-bold" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 sm:pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- Header Section (GAU Navy Blue Theme) --- */}
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A2540] uppercase tracking-widest">
              <Link href="/universities" className="hover:underline">Universities</Link>
              <span>/</span>
              <span className="text-gray-400">GAU Cyprus</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-950 leading-tight">
                Girne American <span className="text-[#0A2540]">University</span>
              </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg text-gray-600 font-medium">
              <Icon icon="solar:map-point-wave-bold" className="text-[#0A2540] w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              Kyrenia (Girne), Northern Cyprus
            </div>
          </div>
          
          <div className="hidden md:block">
             <div className="bg-white px-6 py-4 rounded-3xl shadow-xl shadow-blue-50 border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Icon icon="solar:verified-check-bold" className="text-[#0A2540] w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Accreditation</p>
                  <p className="text-gray-900 font-extrabold text-lg uppercase">Global Recognition</p>
                </div>
             </div>
          </div>
        </div>

        {/* --- Hero Gallery Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10 sm:mb-16 h-[320px] sm:h-[420px] md:h-[500px]">
          <div className="md:col-span-8 relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] shadow-xl md:shadow-2xl group">
            <ReactPlayer 
              src='https://youtu.be/8_wt5HWuAxE' 
              width="100%" 
              height="100%" 
              className="absolute top-0 left-0"
              controls
            />
            <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent flex items-end p-6 md:p-10 pointer-events-none"></div>
          </div>
          <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-4">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[1]} alt="GAU Campus 2" fill className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-2 border-white">
              <Image src={universityImages[2]} alt="GAU Campus 3" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 sm:h-8 bg-[#0A2540] rounded-full"></span>
                About the University
              </h2>
              {/* FIXED: Changed to text-left on mobile to prevent wide gaps between words */}
              <p className="text-gray-700 text-base sm:text-xl leading-relaxed text-left md:text-justify font-medium">
                Girne American University (GAU) is a pioneering institution in Northern Cyprus, offering an 
                <span className="text-[#0A2540] font-bold"> American-style education system</span>. 
                With a focus on global citizenship, GAU provides students with the opportunity to study across 
                its international campuses, creating a truly borderless educational experience.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { t: "American Curriculum", d: "Standardized global educational models.", i: "solar:star-bold" },
                { t: "Global Network", d: "Campuses in USA, UK, and Hong Kong.", i: "solar:globus-bold" },
                { t: "Student Life", d: "Over 50+ student clubs and sports teams.", i: "solar:users-group-rounded-bold" },
                { t: "Scholarships", d: "Guaranteed funding for international students.", i: "solar:wad-of-money-bold" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm flex gap-4 sm:gap-5 hover:border-blue-200 transition-all">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50/50 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon icon={item.i} className="text-[#0A2540] w-6 h-6 sm:w-8 sm:h-8" />
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
              name="Girne American University" 
              color="#0A2540" 
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.23456789!2d33.4089!3d35.2185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de10d123456789%3A0x1234567890abcdef!2sCyprus%20International%20University!5e0!3m2!1sen!2s!4v12345678900"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                className="rounded-xl sm:rounded-[2.2rem]"
              ></iframe>
            </div>
          </div>

          {/* Right Side: GAU Navy Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#0A2540] text-white p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-2xl lg:sticky lg:top-28 border-b-8 border-[#F2A900]">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 tracking-tight">Quick Facts</h3>
              <div className="space-y-4 sm:space-y-6">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#14395E] rounded-xl flex items-center justify-center border border-blue-900/30 shrink-0">
                        <Icon icon={s.icon} className="text-blue-200 w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-blue-100 text-sm sm:text-base font-medium">{s.label}</span>
                    </div>
                    <span className="text-lg sm:text-xl font-black text-white">{s.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#14395E]">
                <p className="text-blue-200 text-xs sm:text-sm italic leading-relaxed opacity-95">
                  GAU offers a unique bridge between Mediterranean culture and American academic standards.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#14395E] rounded-full flex items-center justify-center font-bold text-white border border-blue-900/40 text-xs sm:text-sm shrink-0">
                    GA
                  </div>
                  <div>
                    <p className="font-bold text-xs sm:text-sm">GAU Admissions</p>
                    <p className="text-[10px] sm:text-xs text-blue-300 tracking-wide uppercase">Official Center</p>
                  </div>
                </div>
              </div>

              <a 
                href="/#contact"
                target="_blank"
                className="mt-6 sm:mt-8 w-full py-3.5 sm:py-4 bg-white hover:bg-gray-100 text-[#0A2540] font-black rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
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

export default GirneAmericanUniversityPage;