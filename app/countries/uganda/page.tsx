"use client";
import React from "react";
import { Icon } from "@iconify/react";
import CountryUniversitiesSection from "@/app/components/cards/CountryUniversitiesSection";
import ApplyCard from "@/app/components/cards/ApplyCard";
import { applyCardThemes } from "@/app/components/cards/applyCardThemes";

const UgandaStudyPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-[#0A1128] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=2000"
            alt="Uganda Landscape"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Study in <span className="text-amber-400">Uganda</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              The academic heart of East Africa, offering respected universities,
              English-medium education, and one of the most affordable student lifestyles in the region.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Icon icon="solar:sun-bold" className="text-amber-400 mr-2" />
                <span className="text-sm font-medium">Warm Climate & Hospitality</span>
              </div>

              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Icon icon="solar:letter-bold" className="text-amber-400 mr-2" />
                <span className="text-sm font-medium">English-Medium Instruction</span>
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
              The Pearl of <br />
              <span className="text-amber-600">Africa</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
              <p>
                Uganda has long held an important place in East African higher education, with
                respected institutions such as <strong>Makerere University</strong> continuing to shape
                the region’s academic reputation. Alongside it, several private universities provide
                accessible options for students in fields such as business, health sciences, education,
                and information technology.
              </p>

              <p>
                For international students, Uganda offers the major advantage of an
                <strong> English-speaking academic environment</strong>, making the transition smoother
                for students from across Africa and beyond. The country is especially attractive for
                those seeking quality education at a much lower cost than many Western destinations.
              </p>

              <p>
                Beyond academics, Uganda offers a naturally rich lifestyle filled with cultural depth,
                green landscapes, and regional connectivity. From Kampala’s city life to Entebbe’s
                calm environment and the country’s wider natural beauty, students can enjoy both
                academic growth and memorable life experience.
              </p>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100">
              <Icon icon="solar:case-minimalistic-bold" className="text-amber-700 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Accessible Entry</h4>
              <p className="text-sm text-gray-600 mt-2">
                Uganda remains approachable for regional and international students seeking an affordable study path.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
              <Icon icon="solar:users-group-rounded-bold" className="text-blue-700 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Community</h4>
              <p className="text-sm text-gray-600 mt-2">
                Join a diverse student environment with strong East African and international representation.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-[2.5rem] border border-green-100">
              <Icon icon="solar:shield-user-bold" className="text-green-700 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Welcoming Environment</h4>
              <p className="text-sm text-gray-600 mt-2">
                Uganda is known for its warm hospitality and student-friendly social environment.
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-[2.5rem] border border-red-100">
              <Icon icon="solar:diploma-bold" className="text-red-700 w-10 h-10 mb-4" />
              <h4 className="font-bold text-gray-800 text-xl">Recognized Degrees</h4>
              <p className="text-sm text-gray-600 mt-2">
                Universities in Uganda offer regionally respected qualifications across a wide range of fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCHOLARSHIP SECTION --- */}
      <section className="py-20 bg-white-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Scholarships & Financial Aid</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Uganda offers affordable tuition overall, with additional support available through
              merit awards, sports scholarships, and special fee structures at selected institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Icon icon="solar:star-shine-bold" className="w-20 h-20 text-amber-600" />
              </div>
              <div className="text-amber-600 font-bold text-5xl mb-4">10-25%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sports Scholarship</h3>
              <p className="text-gray-600 mb-6">
                Available for talented student-athletes representing their institutions
                in competitive regional and university-level events.
              </p>
              <div className="flex items-center text-sm font-semibold text-amber-600">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Talent Based
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border-2 border-amber-500 shadow-lg relative overflow-visible group">
              <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold z-20">
                POPULAR
              </div>
              <div className="text-amber-600 font-bold text-5xl mb-4">25-30%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Scholar</h3>
              <p className="text-gray-600 mb-6">
                Offered by several universities to students with strong entry grades,
                excellent school performance, or high CGPA pathways.
              </p>
              <div className="flex items-center text-sm font-semibold text-amber-600">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Merit Linked
              
              </div>
            </div>

            <div className="bg-[#0A1128] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
              <div className="text-amber-400 font-bold text-5xl mb-4">Flexible</div>
              <h3 className="text-xl font-bold mb-3">International Fee Support</h3>
              <p className="text-gray-400 mb-6">
                Some institutions offer special tuition structures or regional pricing
                for students from East Africa and neighboring countries.
              </p>
              <div className="flex items-center text-sm font-semibold text-amber-400">
                <Icon icon="solar:check-circle-bold" className="mr-2" /> Institution Specific
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MONTHLY BUDGET SECTION --- */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-[#0A1128] rounded-[4rem] p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-400">Monthly Budget</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Uganda is one of the more affordable study destinations in Africa.
                A budget of <strong>$280 – $500 USD</strong> per month is often enough for a
                comfortable student lifestyle, depending on the city and accommodation choices.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Dormitory / Shared Flat", price: "$120 - $250" },
                  { label: "Food & Groceries", price: "$100 - $150" },
                  { label: "Transport", price: "$30 - $50" },
                  { label: "Personal Expenses", price: "$40 - $100" }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-white/10 pb-2"
                  >
                    <span className="text-gray-300">{item.label}</span>
                    <span className="font-bold text-amber-400">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
              <h4 className="font-bold text-xl mb-4 text-center">Top Student Cities</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                  <span>1. Kampala</span>
                  <span className="text-xs bg-amber-500 px-2 py-1 rounded">Main Hub</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                  <span>2. Entebbe</span>
                  <span className="text-xs bg-blue-500 px-2 py-1 rounded">Airport City</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                  <span>3. Mbarara</span>
                  <span className="text-xs bg-green-500 px-2 py-1 rounded">Western Center</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                  <span>4. Gulu</span>
                  <span className="text-xs bg-orange-500 px-2 py-1 rounded">Northern Growth</span>
                </li>
                <li className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                  <span>5. Jinja</span>
                  <span className="text-xs bg-purple-500 px-2 py-1 rounded">Nile City</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CountryUniversitiesSection
        countrySlug="uganda"
        countryName="Uganda"
      />

      <ApplyCard
        preferredCountry="Uganda"
        theme={applyCardThemes.uganda}
      />
    </div>
  );
};

export default UgandaStudyPage;