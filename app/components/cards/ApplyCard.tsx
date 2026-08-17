"use client";
import React, { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

export type ApplyCardTheme = {
  accentText: string;
  accentBg: string;
  accentSoftBg: string;
  accentIcon: string;
  accentFocus: string;
  buttonHover: string;
  secureCardBg: string;
  secureText: string;
  secureSubtext: string;
  secureBlob: string;
};

type ApplyCardProps = {
  preferredCountry?: string;
  theme?: ApplyCardTheme;
};

const routeCountryMap: Record<string, string> = {
  turkey: "Turkey",
  malaysia: "Malaysia",
  uganda: "Uganda",
  rwanda: "Rwanda",
  cyprus: "Cyprus",
  "northern-cyprus": "Northern Cyprus",
};

const defaultTheme: ApplyCardTheme = {
  accentText: "text-blue-600",
  accentBg: "bg-blue-600",
  accentSoftBg: "bg-blue-50",
  accentIcon: "text-blue-400",
  accentFocus: "focus:ring-blue-500/20 focus:border-blue-400",
  buttonHover: "hover:bg-blue-600",
  secureCardBg: "bg-slate-900",
  secureText: "text-white",
  secureSubtext: "text-slate-300",
  secureBlob: "text-blue-400/15",
};

export default function ApplyCard({ preferredCountry, theme }: ApplyCardProps) {
  const pathname = usePathname();
  const mergedTheme = theme || defaultTheme;

  const detectedCountry = useMemo(() => {
    if (preferredCountry) return preferredCountry;

    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];

    if (!lastSegment) return "Turkey";
    return routeCountryMap[lastSegment] || "Turkey";
  }, [pathname, preferredCountry]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: detectedCountry,
    major: "Engineering",
    message: "",
  });

  React.useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      country: detectedCountry,
    }));
  }, [detectedCountry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Success! Thank you ${formData.name}. Our counselor will contact you soon.`);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-28 bg-white-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${mergedTheme.accentSoftBg} ${mergedTheme.accentText} text-sm font-bold uppercase tracking-widest shadow-sm`}
          >
            <Icon icon="solar:document-add-bold" />
            Admissions 2026
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Start Your <span className={mergedTheme.accentText}>Journey</span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Fill out the official application form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-white rounded-[2rem] shadow-xl border border-slate-100">
              <div
                className={`w-12 h-12 ${mergedTheme.accentBg} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
              >
                <Icon icon="solar:chat-round-line-bold" className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Expert Guidance</h4>
              <p className="text-slate-500 text-sm mt-2">
                Get personalized advice on visas and scholarships.
              </p>
            </div>


<div
  className={`p-6 ${mergedTheme.secureCardBg} rounded-[2rem] shadow-xl text-white relative overflow-hidden group`}
>
  <div
    className={`absolute -right-2 -top-2 w-24 h-24 rounded-full ${mergedTheme.secureBlob} transition-transform duration-300 group-hover:scale-110`}
  />

  <Icon
    icon="solar:shield-check-bold"
    className="absolute right-4 top-4 text-4xl text-white transition-transform duration-300 group-hover:scale-110"
  />

  <h4 className={`text-xl font-bold relative z-10 ${mergedTheme.secureText}`}>
    Secure Process
  </h4>
  <p className={`text-sm mt-2 relative z-10 ${mergedTheme.secureSubtext}`}>
    Your data is protected and private.
  </p>
</div>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900 rounded-[3rem] shadow-xl p-8 md:p-12 border border-slate-800"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-bold text-slate-300 ml-1"
                  >
                    <Icon icon="solar:user-bold" className={mergedTheme.accentIcon} />
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className={`w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl ${mergedTheme.accentFocus} transition-all outline-none text-white placeholder:text-slate-500`}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-bold text-slate-300 ml-1"
                  >
                    <Icon icon="solar:letter-bold" className={mergedTheme.accentIcon} />
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={`w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl ${mergedTheme.accentFocus} transition-all outline-none text-white placeholder:text-slate-500`}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label
                    htmlFor="country"
                    className="flex items-center gap-2 text-sm font-bold text-slate-300 ml-1"
                  >
                    <Icon icon="solar:map-point-bold" className={mergedTheme.accentIcon} />
                    Preferred Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl ${mergedTheme.accentFocus} transition-all outline-none text-white appearance-none`}
                  >
                    <option value="Turkey">Turkey</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Northern Cyprus">Northern Cyprus</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="major"
                    className="flex items-center gap-2 text-sm font-bold text-slate-300 ml-1"
                  >
                    <Icon icon="solar:notebook-bold" className={mergedTheme.accentIcon} />
                    Field of Study
                  </label>
                  <select
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl ${mergedTheme.accentFocus} transition-all outline-none text-white appearance-none`}
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Business">Business Management</option>
                    <option value="IT">Information Technology</option>
                    <option value="Medical">Medical Sciences</option>
                    <option value="Law">Law</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-10 space-y-2">
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm font-bold text-slate-300 ml-1"
                >
                  <Icon icon="solar:pen-new-square-bold" className={mergedTheme.accentIcon} />
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your background..."
                  className={`w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-2xl ${mergedTheme.accentFocus} transition-all outline-none text-white resize-none placeholder:text-slate-500`}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-5 bg-white text-slate-900 font-black text-lg rounded-[2rem] ${mergedTheme.buttonHover} hover:text-white transition-all flex items-center justify-center gap-3 shadow-xl`}
              >
                Send Application Now
                <Icon icon="solar:plain-bold" className="rotate-45" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}