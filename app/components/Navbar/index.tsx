// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import Drawer from "./Drawer";
// import DrawerData from "./Drawerdata";
// import React, { useState, useEffect } from "react";

// const navigation = [
//   { name: "Home", href: "/#home" },
//   { name: "About Us", href: "/about-us" }, // Add page  for About and link to it
//   { name: "Our Services", href: "/Services" }, // Add page  for Services and link to it
//   // { name: "Global Options", href: "/#global-options" }, 
//   // { name: "Fields", href: "/#majors" },
//   { name: "Countries", href: "/countries" },
//   { name: "Universities", href: "/universities" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentLink, setCurrentLink] = useState("#home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav 
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled 
//           ? "bg-white/90 backdrop-blur-md shadow-md py-0" 
//           : "bg-white py-0"
//       }`}
//     >
//       <div className="mx-auto max-w-7xl px-6 flex justify-between items-center">
        
// <Link href="/" className="flex items-center gap-2.5 group shrink-0">
//   <Image
//     src="/assets/logo/ED LOGO M-04.png"
//     alt="BudhokEdu Logo"
//     width={100}
//     height={100}
//     className="h-100 w-100 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
//     priority
//   />
//   <span className="text-2xl md:text-3xl font-black tracking-tighter text-indigo-900 group-hover:text-indigo-700 transition-colors leading-none">
//     Budhok<span className="text-indigo-600">Edu</span>
//   </span>
// </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center space-x-2">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               onClick={() => setCurrentLink(item.href)}
//               className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
//                 item.href === currentLink
//                   ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
//                   : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* Right Side - Apply Now Button */}
//         <div className="hidden lg:block">
//            <Link href="/#contact"> {/* FIXED: Ensure this has the leading / */}
//               <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-sm">
//                 Apply Now
//               </button>
//            </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button
//             type="button"
//             onClick={() => setIsOpen(true)}
//             className="p-2 rounded-xl bg-gray-50 text-gray-700 hover:bg-indigo-50 active:scale-95 transition-transform"
//           >
//             <Bars3Icon className="h-7 w-7" />
//           </button>
//         </div>
//       </div>

//       {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen}> */}
//         {/* <DrawerData /> */}
//         <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>

//           <DrawerData setIsOpen={setIsOpen} />
          
//          </Drawer>

      
//     </nav>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import DrawerData from "./Drawerdata";
import React, { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/Services" },
  { name: "Study Hubs", href: "/countries" },
  { name: "Universities", href: "/universities" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // توجيه المستخدم لصفحة البحث أو الجامعات
      window.location.href = `/universities?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-white py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-between items-center gap-2">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image
            src="/assets/logo/ED LOGO M-04.png"
            alt="BudhokEdu Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-indigo-900 group-hover:text-indigo-700 transition-colors leading-none">
            Budhok<span className="text-indigo-600">Edu</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setCurrentLink(item.href)}
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                item.href === currentLink
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side - Search Bar & Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Search Bar (Visually responsive for Desktop & Mobile) */}
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-28 sm:w-40 md:w-52 lg:w-48 xl:w-56 pl-8 pr-3 py-1.5 text-xs sm:text-sm bg-gray-100 text-gray-800 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
            />
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-2.5 pointer-events-none" />
          </form>

          {/* Desktop Apply Button */}
          <div className="hidden lg:block">
            <Link href="/#contact">
              <button className="bg-gray-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-sm whitespace-nowrap">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="p-1.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-indigo-50 active:scale-95 transition-transform"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Component */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <DrawerData setIsOpen={setIsOpen} />
      </Drawer>
    </nav>
  );
}