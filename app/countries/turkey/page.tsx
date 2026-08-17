"use client";
import React from "react";
import { Icon } from "@iconify/react";
import CountryUniversitiesSection from "@/app/components/cards/CountryUniversitiesSection";
import ApplyCard from "@/app/components/cards/ApplyCard";
import { applyCardThemes } from "@/app/components/cards/applyCardThemes";
import Image from "next/image";

const TurkeyStudyPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-transparent to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=2000"
            alt="Istanbul Skyline"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Study in <span className="text-[#E30A17]">Turkey</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Where East meets West. Build your future in one of the region’s most
              dynamic higher-education systems, with globally recognized universities
              and a rich cultural experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Icon icon="solar:globus-bold" className="text-[#E30A17] mr-2" />
                <span className="text-sm font-medium">Top Global University Rankings</span>
              </div>

              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Icon icon="solar:card-2-bold" className="text-[#E30A17] mr-2" />
                <span className="text-sm font-medium">Affordable Student Lifestyle</span>
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
              A Bridge Between <br />
              <span className="text-[#E30A17]">Continents</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
              <p>
                Turkey is one of the largest and most established higher-education destinations
                in the wider region, offering a broad range of public and private universities,
                strong city ecosystems, and growing international recognition. Students can find
                quality programs in <strong>Engineering, Medicine, Business, Architecture, and Social Sciences</strong>.
              </p>

              <p>
                Turkish universities operate within internationally aligned academic frameworks,
                and many institutions have strong reputations across Europe, the Middle East,
                and beyond. Whether you choose Istanbul, Ankara, or Izmir, you gain access to
                modern campuses, large academic communities, and diverse cultural exposure.
              </p>

              <p>
                Beyond academics, Turkey offers a uniquely rich student lifestyle, combining
                affordable living, historical depth, modern infrastructure, and access to both
                European and Asian networks. It is an ideal destination for students who want
                both opportunity and experience.
              </p>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-50/60 p-8 rounded-[2.5rem] border border-red-100">
              <Icon icon="solar:medal-ribbons-star-bold" className="text-[#E30A17] w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Global Recognition</h4>
              <p className="text-sm text-gray-600 mt-2">
                Turkish degrees are widely recognized, with many universities active in international academic systems.
              </p>
            </div>

            <div className="bg-amber-50/60 p-8 rounded-[2.5rem] border border-amber-100">
              <Icon icon="solar:routing-2-bold" className="text-amber-600 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Strategic Location</h4>
              <p className="text-sm text-gray-600 mt-2">
                Study at the crossroads of Europe and Asia with strong travel and business connectivity.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded-[2.5rem] border border-slate-200">
              <Icon icon="solar:buildings-3-bold" className="text-slate-700 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Modern Campuses</h4>
              <p className="text-sm text-gray-600 mt-2">
                From major state universities to private institutions, students benefit from well-developed facilities.
              </p>
            </div>

            <div className="bg-red-50/30 p-8 rounded-[2.5rem] border border-red-50">
              <Icon icon="solar:city-bold" className="text-[#E30A17] w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Vibrant City Life</h4>
              <p className="text-sm text-gray-600 mt-2">
                Enjoy a strong student lifestyle with diverse cities, public transport, and rich cultural experiences.
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
              Turkey offers a structured scholarship landscape through private university discounts,
              merit awards, and highly competitive government-funded programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Icon icon="solar:star-shine-bold" className="w-20 h-20 text-[#E30A17]" />
              </div>
              <div className="text-[#E30A17] font-bold text-5xl mb-4">25-50%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Institutional Waiver</h3>
              <p className="text-gray-600 mb-6">
                Commonly offered by private universities based on early application,
                school grades, and general academic profile.
              </p>
              <div className="flex items-center text-sm font-semibold text-[#E30A17]">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Common in Private Universities
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border-2 border-[#E30A17] shadow-lg relative overflow-visible group">
              <div className="absolute top-4 right-4 bg-[#E30A17] text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                POPULAR
              </div>
              <div className="text-[#E30A17] font-bold text-5xl mb-4">75-80%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Merit</h3>
              <p className="text-gray-600 mb-6">
                Awarded to strong students with excellent GPA, strong academic records,
                or competitive standardized test performance.
              </p>
              <div className="flex items-center text-sm font-semibold text-[#E30A17]">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Merit Based
              </div>
            </div>

            <div className="bg-[#0F172A] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-15 group-hover:scale-110 transition-transform">
                <Icon icon="solar:medal-ribbons-star-bold" className="w-20 h-20 text-amber-400" />
              </div>
              <div className="text-[#E30A17] font-bold text-5xl mb-4">100%</div>
              <h3 className="text-xl font-bold mb-3">Türkiye Bursları</h3>
              <p className="text-slate-300 mb-6">
                The flagship government scholarship covering tuition, accommodation,
                stipend, and key support costs for selected students.
              </p>
              <div className="flex items-center text-sm font-semibold text-amber-400">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Fully Competitive
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MONTHLY BUDGET SECTION --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-[#0F172A] rounded-[4rem] p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#E30A17]">Monthly Budget</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Turkey remains one of the more affordable study destinations compared to many
                Western countries. A budget of <strong>$400 – $650 USD</strong> per month is
                usually enough for a comfortable student lifestyle depending on the city and accommodation.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Dormitory / Shared Flat", price: "$150 - $350" },
                  { label: "Food & Dining", price: "$150 - $220" },
                  { label: "Public Transport", price: "$15 - $30" },
                  { label: "Personal Expenses", price: "$50 - $120" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-white/10 pb-2"
                  >
                    <span className="text-slate-300">{item.label}</span>
                    <span className="font-bold text-[#E30A17]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-xl mb-4 text-center text-[#E30A17]">Top Student Cities</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>1. Istanbul</span>
                  <span className="text-xs bg-[#E30A17] text-white px-2 py-1 rounded font-bold">Main Hub</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>2. Ankara</span>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded font-bold">Capital City</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>3. Izmir</span>
                  <span className="text-xs bg-emerald-600 text-white px-2 py-1 rounded font-bold">Coastal Life</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>4. Antalya</span>
                  <span className="text-xs bg-amber-500 text-slate-950 px-2 py-1 rounded font-bold">Tourism Center</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>5. Eskişehir</span>
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded font-bold">Student Favorite</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CountryUniversitiesSection
        countrySlug="turkey"
        countryName="Turkey"
      />

      <ApplyCard
        preferredCountry="Turkey"
        theme={applyCardThemes.turkey}
      />
    </div>
  );
};

export default TurkeyStudyPage;

