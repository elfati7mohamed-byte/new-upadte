"use client";
import React from "react";
import Link from "next/link";

interface DrawerDataProps {
  setIsOpen?: (isOpen: boolean) => void;
}

const navigation = [
  { name: "Home", href: "/#home" },
  { name: "Our Services", href: "/#services" },
  { name: "Global Options", href: "/#global-options" },
  { name: "Study Hubs", href: "/countries" },
  { name: "Universities", href: "/universities" },
  { name: "About Us", href: "/#about" },
];

const DrawerData = ({ setIsOpen }: DrawerDataProps) => {
  const handleLinkClick = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between bg-black p-4">
      <div>
        {/* Navigation Links */}
        <nav className="space-y-1 mt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-100 hover:text-white hover:bg-gray-800/80 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Help Banner */}
      <div className="mt-6 mb-4">
        <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
          <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-1">
            Need Help?
          </p>
          <p className="text-xs text-gray-300">
            Contact our advisors for free guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrawerData;