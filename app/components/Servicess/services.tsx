
"use client"
import { AcademicCapIcon, GlobeAltIcon, ClipboardDocumentCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const services = [
  {
    name: "Visa Guidance",
    description: "Expert support for student visa applications to ensure a smooth approval process.",
    icon: GlobeAltIcon,
  },
  {
    name: "Admission Assistance",
    description: "Personalized help with university applications and admission requirements.",
    icon: AcademicCapIcon,
  },
  {
    name: "Application Review",
    description: "Detailed review of your documents to maximize acceptance chances.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Mentorship Programs",
    description: "Connect with experienced mentors to guide you through your study journey.",
    icon: UserGroupIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 bg-gradient-to-r from-white-50 to-cyan-50">
      <h2 className="text-4xl font-bold mb-16 text-center text-indigo-700 underline-links">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white rounded-2xl shadow-xl p-10 text-center hover:scale-105 transition-transform duration-300 min-h-[300px] flex flex-col justify-center"
          >
            <service.icon className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.name}</h3>
            <p className="text-gray-600 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



