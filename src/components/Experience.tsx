"use client";
import { experience } from "@/data/portfolio";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6366F1]">Career</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Professional Experience</h2>
          <p className="text-gray-500 mt-3 text-sm">A track record of building real products at growing companies.</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-gray-200 hidden sm:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-4 border-white hidden sm:flex items-center justify-center" style={{ background: exp.color }}>
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-[#6366F1]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#6366F1]">{exp.period}</span>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-extrabold text-gray-900">{exp.company}</h3>
                      <p className="text-sm font-semibold text-gray-500 mt-0.5">{exp.role}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {exp.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#6366F1] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-600 font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
