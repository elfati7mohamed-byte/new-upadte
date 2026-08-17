"use client";

import React from "react";
import { Icon } from "@iconify/react";
import ApplyCard from "@/app/components/cards/ApplyCard";
import { applyCardThemes } from "@/app/components/cards/applyCardThemes";

const pillars = [
  {
    title: "Who We Are",
    description:
      "Budhok empowers individuals through modern education, global opportunities, and innovative solutions. We are dedicated to helping students and clients navigate a rapidly changing world with confidence.",
    icon: "solar:user-rounded-bold",
    className: "bg-[#EEF1FF] text-[#4F46E5]",
  },
  {
    title: "What We Do",
    description:
      "We connect global education, digital solutions, and future-focused support under one vision. From student admissions and visa guidance to broader growth-oriented services, Budhok is built to open doors and simplify progress.",
    icon: "solar:widget-5-bold",
    className: "bg-[#071133] text-white",
  },
  {
    title: "Why We Exist",
    description:
      "We believe opportunities should not feel distant or confusing. Budhok exists to make growth more accessible by guiding people toward better education, stronger systems, and real pathways for long-term success.",
    icon: "solar:star-fall-bold",
    className: "bg-[#4F46E5] text-white",
  },
];

const values = [
  {
    title: "Empowerment",
    description:
      "We aim to give people the confidence, tools, and direction they need to build a better future.",
    icon: "solar:bolt-bold",
  },
  {
    title: "Trust",
    description:
      "We value honesty, clarity, and dependable support in every interaction and service we provide.",
    icon: "solar:shield-check-bold",
  },
  {
    title: "Growth",
    description:
      "We are built around progress—personal, academic, professional, and organizational.",
    icon: "solar:graph-up-bold",
  },
  {
    title: "Innovation",
    description:
      "We embrace modern ideas and practical solutions that help people and businesses move forward.",
    icon: "solar:lightbulb-bolt-bold",
  },
];

const AboutUsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071133] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            About <span className="text-[#6366F1]">Budhok</span>
          </h1>

          <p className="mt-8 max-w-4xl mx-auto text-lg md:text-2xl text-gray-300 leading-relaxed italic">
            Budhok is a dynamic company focused on empowering individuals through education, opportunity, and modern solutions. We are committed to helping students and clients move forward with confidence in a rapidly changing world
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((item, index) => {
              const isDark = index !== 0;

              return (
                <div
                  key={index}
                  className={`${item.className} rounded-[2.5rem] p-8 md:p-10 shadow-sm min-h-[280px] flex flex-col justify-between relative overflow-hidden`}
                >
                  <div>
                    <h3 className="text-3xl font-extrabold mb-5">
                      {item.title}
                    </h3>
                    <p
                      className={`text-base leading-8 max-w-md ${
                        isDark ? "text-gray-200" : "text-[#5B6280]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute right-6 bottom-4 opacity-10">
                    <Icon icon={item.icon} className="w-24 h-24" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-16">
            <div className="w-16 h-1 rounded-full bg-[#6366F1]" />
          </div>

          <div className="max-w-5xl mx-auto text-center mt-10">
            <p className="text-2xl md:text-[2rem] font-bold text-[#44506A] leading-relaxed">
              Budhok is more than a company. We are a trusted partner focused on
              building futures, creating opportunities, and helping people grow
              across education, technology, and career pathways.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <Icon
                  icon="solar:flag-2-bold"
                  className="w-8 h-8 text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Our Mission
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                To guide individuals toward better opportunities through
                accessible education support, practical solutions, and services
                that create real impact in their academic and professional
                journeys.
              </p>
            </div>

            <div className="bg-[#071133] rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Icon
                  icon="solar:eye-bold"
                  className="w-8 h-8 text-[#818CF8]"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-5">
                Our Vision
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                To become a recognized force in shaping global opportunity by
                bridging education, innovation, and growth into one trusted and
                future-ready ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-[#6366F1]">
              Our Core Values
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              The Principles Behind Budhok
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Everything we do is shaped by the values that define how we serve,
              guide, and build.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-5">
                  <Icon
                    icon={value.icon}
                    className="w-7 h-7 text-[#4F46E5]"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-7">{value.description}</p>
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

export default AboutUsPage;