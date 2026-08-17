"use client";

import React from "react";
import { Icon } from "@iconify/react";
import ApplyCard from "@/app/components/cards/ApplyCard";
import { applyCardThemes } from "@/app/components/cards/applyCardThemes";

const services = [
  {
    icon: "solar:global-bold",
    title: "Visa Guidance",
    description:
      "Expert support for student visa applications to help make the process smooth, clear, and organized.",
  },
  {
    icon: "solar:square-academic-cap-bold",
    title: "Admission Assistance",
    description:
      "Personalized help with choosing universities, preparing applications, and meeting admission requirements.",
  },
  {
    icon: "solar:clipboard-check-bold",
    title: "Application Review",
    description:
      "Detailed review of your documents and application materials to improve accuracy and acceptance chances.",
  },
  {
    icon: "solar:users-group-rounded-bold",
    title: "Mentorship Programs",
    description:
      "Guidance and support from experienced mentors to help students through every stage of the study journey.",
  },
  {
    icon: "solar:file-text-bold",
    title: "Document Preparation",
    description:
      "Support with organizing and preparing key application documents such as statements, transcripts, and forms.",
  },
  {
    icon: "solar:buildings-2-bold",
    title: "University Selection",
    description:
      "Helping students find the right university based on budget, goals, location, and academic interests.",
  },
  {
    icon: "solar:shield-check-bold",
    title: "Scholarship Support",
    description:
      "Assistance in identifying scholarship opportunities and preparing stronger applications for financial aid.",
  },
  {
    icon: "solar:map-point-school-bold",
    title: "Pre-Departure Support",
    description:
      "Practical guidance before travel, including planning, preparation, and settling in for student life abroad.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand the student’s goals, budget, and preferred study destination.",
  },
  {
    number: "02",
    title: "University Matching",
    description:
      "We shortlist suitable universities and programs based on the student profile.",
  },
  {
    number: "03",
    title: "Application Handling",
    description:
      "We help prepare, review, and submit the required admission documents.",
  },
  {
    number: "04",
    title: "Visa & Final Guidance",
    description:
      "We support the student through visa steps and pre-departure preparation.",
  },
];

const BudhokServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1128] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_25%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur-sm">
              BudhokEdu Services
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Our <span className="text-blue-400">Services</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              We help students move from uncertainty to enrollment with clear,
              practical, and reliable support throughout the study abroad
              journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
                <Icon
                  icon="solar:check-circle-bold"
                  className="mr-2 text-green-400"
                />
                Student-focused support
              </div>

              <div className="flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
                <Icon
                  icon="solar:check-circle-bold"
                  className="mr-2 text-green-400"
                />
                End-to-end guidance
              </div>

              <div className="flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">
                <Icon
                  icon="solar:check-circle-bold"
                  className="mr-2 text-green-400"
                />
                Admissions to visa help
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-blue-600">
              What We Offer
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              Services Designed Around Student Success
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              BudhokEdu provides practical and structured support for students
              who want to study abroad. From university applications to visa
              preparation, we make the process easier to understand and easier
              to complete.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)] p-8 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition-all duration-300 ease-out"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <Icon
                    icon={service.icon}
                    className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="text-sm font-semibold tracking-[0.18em] uppercase text-blue-600">
                Why BudhokEdu
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                More Than a Service,
                <br />
                <span className="text-blue-600">A Guided Journey</span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We know that studying abroad can feel overwhelming. Our goal is
                to simplify every step, reduce confusion, and give students the
                confidence to move forward with the right choices.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Clear step-by-step support",
                  "Help with admission and visa preparation",
                  "Personalized guidance based on student goals",
                  "Professional review of applications and documents",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon
                      icon="solar:check-circle-bold"
                      className="text-green-500 w-6 h-6 mt-0.5 shrink-0"
                    />

                    <p className="text-gray-700 text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* WHY CHOOSE US CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Accurate Documentation */}
              <div
                className="group bg-white p-8 rounded-[2rem] border border-blue-100 shadow-sm text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-blue-200"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-50 mx-auto transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <Icon
                    icon="solar:document-text-bold"
                    className="h-7 w-7 text-blue-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h4 className="mt-5 text-xl font-bold text-gray-900">
                  Accurate Documentation
                </h4>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  We help students prepare their documents correctly and reduce
                  avoidable mistakes.
                </p>
              </div>

              {/* Goal-Based Advice */}
              <div
                className="group bg-white p-8 rounded-[2rem] border border-emerald-100 shadow-sm text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-emerald-200"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-50 mx-auto transition-all duration-300 group-hover:bg-emerald-600 group-hover:scale-110">
                  <Icon
                    icon="solar:target-bold"
                    className="h-7 w-7 text-emerald-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h4 className="mt-5 text-xl font-bold text-gray-900">
                  Goal-Based Advice
                </h4>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  University choices are guided by the student’s future plans,
                  not random recommendations.
                </p>
              </div>

              {/* Personal Support */}
              <div
                className="group bg-white p-8 rounded-[2rem] border border-yellow-100 shadow-sm text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-yellow-200"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-yellow-50 mx-auto transition-all duration-300 group-hover:bg-yellow-500 group-hover:scale-110">
                  <Icon
                    icon="solar:users-group-rounded-bold"
                    className="h-7 w-7 text-yellow-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h4 className="mt-5 text-xl font-bold text-gray-900">
                  Personal Support
                </h4>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Students receive real guidance throughout the process instead
                  of being left on their own.
                </p>
              </div>

              {/* Ongoing Guidance */}
              <div
                className="group bg-white p-8 rounded-[2rem] border border-purple-100 shadow-sm text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-purple-200"
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-purple-50 mx-auto transition-all duration-300 group-hover:bg-purple-600 group-hover:scale-110">
                  <Icon
                    icon="solar:airbuds-case-open-bold"
                    className="h-7 w-7 text-purple-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h4 className="mt-5 text-xl font-bold text-gray-900">
                  Ongoing Guidance
                </h4>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Our support continues through application, visa, and
                  preparation before departure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-blue-600">
              How It Works
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              Our Process
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              A simple and structured process that helps students move from
              inquiry to enrollment with clarity.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-blue-100"
              >
                <div className="text-5xl font-extrabold text-blue-100 mb-6 transition-colors duration-300 group-hover:text-blue-200">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ApplyCard
        preferredCountry="your preferred destination"
        theme={applyCardThemes.northernCyprus}
      />
    </div>
  );
};

export default BudhokServicesPage;
