"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "905338318151";

  const message = encodeURIComponent(
    "Hello! I would like to know more about your services."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Chat Box */}
      {open && (
        <div className="absolute bottom-20 right-0 mb-2 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="bg-[#25D366] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <FaWhatsapp className="text-xl" />
              </div>

              <div>
                <p className="font-semibold">BudhokEdu</p>
                <p className="text-sm text-white/90">
                  Typically replies quickly
                </p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="bg-gray-50 p-4">
            <div className="max-w-[85%] rounded-xl rounded-tl-none bg-white p-3 shadow-sm">
              <p className="text-sm text-gray-700">
                Hello! 👋
                <br />
                How can we help you today?
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="bg-gray-50 p-4 pt-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-semibold text-white transition hover:bg-[#20bd5a]"
            >
              <span>💬</span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open WhatsApp chat"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a]"
      >
        {open ? (
          <span className="text-2xl">×</span>
        ) : (
          <FaWhatsapp className="text-xl" />
        )}
      </button>
    </div>
  );
}