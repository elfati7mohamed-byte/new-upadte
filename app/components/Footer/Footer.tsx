"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-black tracking-tighter">
                Budhok<span className="text-indigo-400">Edu</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Take the first step. Follow us on our social media!
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/people/Budhok-Educational-Agency/61576862888725/" className="p-3 bg-blue-600 rounded-xl transition-colors">
                <FaFacebookF size={18} />
              </Link>
              <Link href="https://www.instagram.com/budhok_educational_agency " className="p-3 bg-pink-600 rounded-xl  transition-colors">
                <FaInstagram size={18} />
              </Link>
              <Link href="https://www.tiktok.com/@budhok_edu" className="p-3 bg-black rounded-xl transition-colors">
                <FaTiktok size={18} />
              </Link>
              <Link href="https://www.youtube.com/@budhokeducationalagency" className="p-3 bg-red-600 rounded-xl transition-colors">
                <FaYoutube size={18} />
              </Link>
            </div>
          </div>

{/* Column 2: Quick Links */}
<div>
  <h3 className="text-lg font-bold mb-8 border-b border-gray-800 pb-2 inline-block">
    Quick Links
  </h3>

  <ul className="space-y-4">
    {[
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Our Services", href: "/Services" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ].map((item) => (
      <li key={item.label}>
        <Link
          href={item.href}
          className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center"
        >
          <span className="mr-2">›</span> {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Column 3: Study Destinations */}
          <div>
  <h3 className="text-lg font-bold mb-8 border-b border-gray-800 pb-2 inline-block">
    Destinations
  </h3>
  <ul className="space-y-4">
    {[
      { label: "Study in Turkey", href: "/countries/turkey" },
      { label: "Study in Uganda", href: "/countries/uganda" },
      { label: "Study in Cyprus", href: "/countries/cyprus" },
      { label: "Other Destinations", href: "/#global-options" },
      
    ].map((item) => (
      <li key={item.label}>
        <Link
          href={item.href}
          className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center"
        >
          <span className="mr-2">›</span> {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 border-b border-gray-800 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPinIcon className="h-6 w-6 text-indigo-400 shrink-0" />
                <span>Lefkosa Nicosia , Cyprus - Global Education Hub</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <PhoneIcon className="h-5 w-5 text-indigo-400 shrink-0" />
                <a href="tel:+905338318151" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <span>+90 533 831 81 51</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <EnvelopeIcon className="h-5 w-5 text-indigo-400 shrink-0" />
                <a href="mailto:info@budhok.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <span>info@budhok.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">BudhokEdu</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;