"use client";

import Slider from "react-slick";
import DetailCard from "@/app/components/cards/DetailCard";
import { universityOptions } from "@/app/data/universities";

const labels = {
  stat1: "Faculties",
  stat2: "Programs",
  stat3: "Ranking",
};

const icons = {
  stat1: "solar:buildings-2-linear",
  stat2: "solar:book-linear",
  stat3: "solar:ranking-linear",
};

export default function UniversitiesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-black/40 dark:text-white/40">
            Higher Education Institutions
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mt-3">
            Universities
          </h1>
          <p className="text-lg text-black/60 dark:text-white/60 mt-4 max-w-2xl mx-auto">
            Explore top universities, tuition fees, academic programs, and rankings.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings} className="pb-12">
          {universityOptions.map((u) => (
            <div key={u.slug} className="px-4 h-full">
                    <DetailCard
                      item={{
                        ...u,
                        stat1: u.faculties,
                        stat2: u.programs,
                        stat3: u.ranking,
                      }}
                      basePath="universities"
                      labels={labels}
                      icons={icons}
                    />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}