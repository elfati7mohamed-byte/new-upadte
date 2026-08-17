"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
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
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const pathname = usePathname();

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
      window.location.href = `/universities?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2" 
          : "bg-white py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image
            src="/assets/logo/ED LOGO M-04.png"
            alt="BudhokEdu Logo"
            width={38}
            height={38}
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="text-xl sm:text-2xl font-black tracking-tight text-indigo-900 group-hover:text-indigo-700 transition-colors">
            Budhok<span className="text-indigo-600">Edu</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Search & Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-48 xl:w-56 pl-8 pr-3 py-1.5 text-sm bg-gray-100 text-gray-800 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
            />
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-2.5 pointer-events-none" />
          </form>

          <Link href="/#contact">
            <button className="bg-gray-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-sm whitespace-nowrap">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Mobile Right Icons (Search & Menu) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="p-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-indigo-50 active:scale-95 transition-transform"
            aria-label="Toggle Search"
          >
            {showMobileSearch ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <MagnifyingGlassIcon className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="p-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 transition-transform shadow-md shadow-indigo-200"
            aria-label="Open Navigation Menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Expandable Search Bar */}
      {showMobileSearch && (
        <div className="lg:hidden px-4 pt-2 pb-3 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
          <form onSubmit={handleSearch} className="relative flex items-center w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programs, universities..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-100 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-600"
              autoFocus
            />
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
          </form>
        </div>
      )}

      {/* Drawer Component */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <DrawerData setIsOpen={setIsOpen} />
      </Drawer>
    </nav>
  );
}