"use client";
import Slider from "react-slick";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  { profession: "Senior Admissions Consultant", name: "Shoo Thar Mien", imgSrc: "/assets/mentor/user1.png" },
  { profession: "Visa Strategy Expert", name: "Dr. Ahmed Mansour", imgSrc: "/assets/mentor/user2.png" },
  { profession: "International Education Advisor", name: "Sarah Jenkins", imgSrc: "/assets/mentor/user3.png" },
  { profession: "Scholarship Coordinator", name: "Michael Wong", imgSrc: "/assets/mentor/user1.png" },
];

const MentorCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="mentors" className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Expert Guidance</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Meet Our Professional Mentors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of experts is here to provide you with personalized support and insights for your academic journey.
          </p>
        </div>

        <Slider {...settings} className="mentor-slider">
          {postData.map((mentor, i) => (
            <div key={i} className="px-4 pb-10">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 group">
                
                {/* Image & Social */}
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <Image
                    src={mentor.imgSrc}
                    alt={mentor.name}
                    width={160}
                    height={160}
                    className="relative rounded-full border-4 border-white shadow-lg object-cover w-full h-full"
                  />
                  <div className="absolute -bottom-2 right-2 bg-indigo-600 rounded-full p-3 shadow-lg hover:bg-indigo-700 transition cursor-pointer text-white">
                    <FaLinkedinIn size={18} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{mentor.name}</h3>
                <p className="text-indigo-600 font-medium text-sm mb-6 uppercase tracking-wide">
                  {mentor.profession}
                </p>
                
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  Dedicated to helping students navigate the complexities of international admissions with ease and confidence.
                </p>

                <button className="w-full py-3 px-6 bg-gray-900 text-white rounded-xl font-semibold hover:bg-indigo-600 transition-colors shadow-md">
                  Book a Session
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MentorCarousel;