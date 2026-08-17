



"use client";
import React from "react";
import { Icon } from "@iconify/react";
import CountryUniversitiesSection from "@/app/components/cards/CountryUniversitiesSection";
import ApplyCard from "@/app/components/cards/ApplyCard";
import { applyCardThemes } from "@/app/components/cards/applyCardThemes";
import Image from "next/image";

const MalaysiaStudyPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-[#002B7F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B7F] via-transparent to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000"
            alt="Malaysia Campus"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Study in <span className="text-[#FFCC00]">Malaysia</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Unlock global opportunities with affordable international degrees,
              modern campuses, and a vibrant student lifestyle in the heart of Southeast Asia.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Icon icon="solar:check-circle-bold" className="text-[#FFCC00] mr-2" />
                <span className="text-sm font-medium">No IELTS Required (Internal Test)</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Icon icon="solar:check-circle-bold" className="text-[#FFCC00] mr-2" />
                <span className="text-sm font-medium">Fast EMGS Visa Process</span>
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
              A Global Education Hub in <br />
              <span className="text-[#E31C25]">Southeast Asia</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
              <p>
                Malaysia is one of Asia’s most attractive study destinations, offering
                internationally recognized education at a cost far lower than many Western countries.
                Through twinning and branch campus models, students can earn degrees linked to the
                <strong> UK, Australia, and other global systems</strong> while studying in Malaysia.
              </p>

              <p>
                The country is known for its strong academic ecosystem, with institutions recognized by
                the <strong>Malaysia Qualifications Agency (MQA)</strong> and supported by a streamlined
                student visa system under <strong>EMGS</strong>. This makes the study journey more transparent,
                efficient, and student-friendly.
              </p>

              <p>
                Beyond academics, Malaysia offers multicultural city life, strong infrastructure,
                modern transport, excellent food, and a safe environment for international students.
                It is especially appealing for students interested in
                <strong> Engineering, Business, IT, Hospitality, and Health Sciences</strong>.
              </p>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50/60 p-8 rounded-[2.5rem] border border-blue-100">
              <Icon icon="solar:global-bold" className="text-[#002B7F] w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Global Degrees</h4>
              <p className="text-sm text-gray-600 mt-2">
                Study British and Australian-linked programs at a much lower cost.
              </p>
            </div>

            <div className="bg-yellow-50/60 p-8 rounded-[2.5rem] border border-yellow-100">
              <Icon icon="solar:routing-2-bold" className="text-[#FFCC00] w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Easy Connectivity</h4>
              <p className="text-sm text-gray-600 mt-2">
                A major Southeast Asian hub with strong airport access and modern transport.
              </p>
            </div>

            <div className="bg-red-50/60 p-8 rounded-[2.5rem] border border-red-100">
              <Icon icon="solar:buildings-3-bold" className="text-[#E31C25] w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Modern Campuses</h4>
              <p className="text-sm text-gray-600 mt-2">
                Home to advanced campuses, research centers, and international branch universities.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded-[2.5rem] border border-slate-200">
              <Icon icon="solar:shield-check-bold" className="text-slate-700 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Student Friendly</h4>
              <p className="text-sm text-gray-600 mt-2">
                Affordable lifestyle, multicultural society, and a welcoming environment for internationals.
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
              Malaysia offers a range of institutional scholarships and tuition discounts for
              international students based on merit, partnerships, and academic performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Icon icon="solar:medal-ribbons-star-bold" className="w-20 h-20 text-[#002B7F]" />
              </div>
              <div className="text-[#002B7F] font-bold text-5xl mb-4">20-35%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">International Support</h3>
              <p className="text-gray-600 mb-6">
                Many universities offer tuition discounts for international applicants to help reduce
                first-year study costs.
              </p>
              <div className="flex items-center text-sm font-semibold text-[#002B7F]">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Common Across Private Universities
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border-2 border-[#E31C25] shadow-lg relative group overflow-visible">
              <div className="absolute top-4 right-4 bg-[#E31C25] text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                POPULAR
              </div>

              <div className="text-[#E31C25] font-bold text-5xl mb-4">40-60%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Merit</h3>
              <p className="text-gray-600 mb-6">
                Offered to students with strong grades, especially in competitive programs such as
                Business, IT, and Engineering.
              </p>
              <div className="flex items-center text-sm font-semibold text-[#E31C25]">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Merit Based
              </div>
            </div>

            <div className="bg-[#002B7F] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Icon icon="solar:star-fall-bold" className="w-20 h-20 text-[#FFCC00]" />
              </div>
              <div className="text-[#FFCC00] font-bold text-5xl mb-4">70-100%</div>
              <h3 className="text-xl font-bold mb-3">Special Awards</h3>
              <p className="text-gray-300 mb-6">
                Reserved for exceptional academic achievers, strategic scholarship schemes,
                or top-performing applicants under selected university programs.
              </p>
              <div className="flex items-center text-sm font-semibold text-[#FFCC00]">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Competitive & Limited
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MONTHLY BUDGET SECTION --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-[#002B7F] rounded-[4rem] p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#FFCC00]">Monthly Budget</h2>
              <p className="text-blue-200 mb-8 leading-relaxed">
                Malaysia offers one of the best balances between quality education and affordable living
                in Asia. A budget of <strong>$350 – $650 USD</strong> per month is typically enough
                for a comfortable student lifestyle depending on the city and accommodation style.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Dormitory / Shared Flat", price: "$150 - $300" },
                  { label: "Food & Groceries", price: "$120 - $180" },
                  { label: "Transport", price: "$20 - $40" },
                  { label: "Personal Expenses", price: "$60 - $130" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-white/10 pb-2"
                  >
                    <span className="text-blue-100">{item.label}</span>
                    <span className="font-bold text-[#FFCC00]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-xl mb-4 text-center text-[#FFCC00]">Top Student Cities</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>1. Kuala Lumpur</span>
                  <span className="text-xs bg-[#E31C25] text-white px-2 py-1 rounded font-bold">Main Hub</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>2. Subang Jaya</span>
                  <span className="text-xs bg-amber-500 text-slate-950 px-2 py-1 rounded font-bold">Student District</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>3. Johor Bahru</span>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded font-bold">Southern Gateway</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>4. Penang</span>
                  <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded font-bold">Island Lifestyle</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>5. Cyberjaya</span>
                  <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded font-bold">Tech City</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CountryUniversitiesSection
        countrySlug="malaysia"
        countryName="Malaysia"
      />

      <ApplyCard
        preferredCountry="Malaysia"
        theme={applyCardThemes.malaysia}
      />
    </div>
  );
};

export default MalaysiaStudyPage;
