"use client";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      id="home-section"
      className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* عناصر خلفية تجميلية */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-0 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* النصوص والنداء للعمل (CTA) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            <div className="inline-block self-center lg:self-start px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-md">
              🚀 Empowering Future Leaders Worldwide
            </div>
            
            <h1 className="text-4xl sm:text-6xl  font-extrabold leading-[1.1]">
              Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Global Study</span> Success
            </h1>

            <p className="text-lg md:text-xl text-indigo-100 opacity-90 max-w-2xl leading-relaxed">
              Unlock world-class education with expert visa guidance, personalized admission support, 
              and a seamless application journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
              <Link href="#contact">
                <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-indigo-950 font-bold transition duration-300 shadow-xl hover:shadow-yellow-400/20 transform hover:-translate-y-1">
                  Start Your Journey
                </button>
              </Link>
              <Link href="#services">
                <button className="w-full sm:w-auto px-10 py-4 rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold transition duration-300 backdrop-blur-sm">
                  Explore Programs
                </button>
              </Link>
            </div>

            {/* إحصائيات سريعة */}
            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-indigo-200 uppercase tracking-wider">Students Placed</p>
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-xs text-indigo-200 uppercase tracking-wider">Partner Universities</p>
              </div>
              <div>
                <p className="text-2xl font-bold">99%</p>
                <p className="text-xs text-indigo-200 uppercase tracking-wider">Visa Success Rate</p>
              </div>
            </div>
          </div>

          {/* الصورة التوضيحية */}
          <div className="col-span-1 lg:col-span-5 flex justify-center relative">
            <div className="relative group">
              {/* إطار مضيء خلف الصورة */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <Image
                src="/pexels-yankrukov-8199172.jpg"
                alt="Students dreaming of global education"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl object-cover transform transition duration-500 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;