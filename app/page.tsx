"use client";

import Navbar from "./components/Navbar/index"; // تم تحديث المسار لملف النافبار الرئيسي
import Banner from "./components/Banner/index";
import GlobalOptions from "./components/GlobalOptions/GlobalOptions";
import Services from "./components/Servicess/services";
// تأكد من اسم المجلد الصغير
import Mentor from "./components/Mentor/index";
import LargeCardSection from "./components/fields/index";
import About from "./components/about/About";   
import Applay from "./components/apply/page";   
import Footer from "./components/Footer/Footer"; // تم تحديث المسار لملف الفوتر الرئيسي


export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
      {/* Navbar - يظهر هنا أو في الـ Layout، يفضل تركه في الـ Layout إذا كان ثابتاً */}
      {/* <Navbar /> */}

      {/* 1. Hero Banner Section */}
      <section id="home" className="w-full">
        <Banner />
      </section>

      {/* 2. About Us Section */}
      <section id="about">
        <About />
      </section>

      {/* 3. Our Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* 4. Global Study Options (Countries) */}
      <section id="global-options">
        <GlobalOptions />
      </section>

      {/* 5. Fields & Majors (Banner + Carousel) */}
      {/* <section id="majors">
        <LargeCardSection />
      </section> */} {/* i have removed this and added them to there places in each university page */}
 
      {/* 7. Application Form Section */}
      <section id="contact">
        <Applay />
      </section>
      {/* Footer Section */}
      {/* <Footer /> */}
    </main>
  );
}