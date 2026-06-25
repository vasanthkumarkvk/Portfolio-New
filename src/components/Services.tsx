"use client";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6366F1]">Services</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">What I can do for you</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
            From idea to deployment — complete development services for startups, businesses, and enterprises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">{service.icon}</div>
              <h3 className="font-bold text-sm text-gray-900 mb-2 group-hover:text-[#6366F1] transition-colors">{service.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
              {/* Accent bar */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#6366F1] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
