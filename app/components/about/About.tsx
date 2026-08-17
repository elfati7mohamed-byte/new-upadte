"use client";
import Image from "next/image";
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* الجانب الأيسر: الصورة */}
          <div className="flex-1 relative w-full group">
            <div className="absolute -inset-4 bg-indigo-100 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
              <Image
                src="/pexels-george-pak-7972541.jpg" 
                width={800}
                height={600}
                alt="Global Education Journey"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* الجانب الأيمن: المحتوى النصي */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase mb-2">Who We Are</h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                <span className="leading-[1.4]"> Empowering Your Journey to </span> <span className="text-indigo-600">Global Education</span>
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed ">
              We are dedicated to guiding students on their path to global study success. 
              Our mission is to provide expert visa & admission guidance, seamless application 
              processes, and personalized support to help you achieve your academic dreams.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-indigo-50 rounded-xl border-l-4 border-indigo-500 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To empower students worldwide with the knowledge and support they need 
                  to access quality education abroad.
                </p>
              </div>

              <div className="p-6 bg-purple-50 rounded-xl border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To be the leading bridge connecting ambitious students with the world 
                  top universities.
                </p>
              </div>
            </div>

            {/* --- FIXED SECTION --- */}
            <div className="pt-4">
              <Link href="/about-us">
                <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors">
                  Learn More About Us
                </button>
              </Link>
            </div>
            {/* ------------------- */}

          </div>
        </div>
      </div>
    </section>
  );
}