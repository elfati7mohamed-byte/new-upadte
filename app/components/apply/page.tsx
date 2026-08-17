"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Applay() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "Turkey", // Changed to match first select option
    major: "Engineering",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    console.log("Form Submitted:", formData);
    alert(`Success! Thank you ${formData.name}. Our counselor will contact you soon.`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen py-28 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-white-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold uppercase tracking-widest shadow-sm">
            <Icon icon="solar:document-add-bold" />
            Admissions 2026
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Start Your <span className="text-indigo-600">Journey</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Fill out the official application form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Info & Social Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-white rounded-[2rem] shadow-xl border border-slate-100">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-200">
                <Icon icon="solar:chat-round-line-bold" className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Expert Guidance</h4>
              <p className="text-slate-500 text-sm mt-2">Get personalized advice on visas and scholarships.</p>
            </div>



            <div className="p-6 bg-indigo-600 rounded-[2rem] shadow-xl text-white relative overflow-hidden group">
              <Icon icon="solar:shield-check-bold" className="absolute -right-4 -bottom-4 text-9xl text-white/10 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold">Secure Process</h4>
              <p className="text-indigo-100 text-sm mt-2 relative z-10">Your data is protected and private.</p>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900 rounded-[3rem] shadow-[0_20px_50px_rgba(79,70,229,0.2)] p-8 md:p-12 border border-slate-800 relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full"></div>

              <div className="grid md:grid-cols-2 gap-8 mb-8 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-slate-300 ml-1">
                    <Icon icon="solar:user-bold" className="text-indigo-400" />
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
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all outline-none text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-slate-300 ml-1">
                    <Icon icon="solar:letter-bold" className="text-indigo-400" />
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
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all outline-none text-white placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="country" className="flex items-center gap-2 text-sm font-bold text-slate-300 ml-1">
                    <Icon icon="solar:map-point-bold" className="text-indigo-400" />
                    Preferred Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all outline-none text-white appearance-none"
                  >
                    <option value="Turkey">Turkey</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="major" className="flex items-center gap-2 text-sm font-bold text-slate-300 ml-1">
                    <Icon icon="solar:notebook-bold" className="text-indigo-400" />
                    Field of Study
                  </label>
                  <select
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all outline-none text-white appearance-none"
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

              <div className="mb-10 space-y-2 relative z-10">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-slate-300 ml-1">
                  <Icon icon="solar:pen-new-square-bold" className="text-indigo-400" />
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your background..."
                  className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all outline-none text-white resize-none placeholder:text-slate-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-white text-slate-900 font-black text-lg rounded-[2rem] hover:bg-indigo-500 hover:text-white transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-xl relative z-10"
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