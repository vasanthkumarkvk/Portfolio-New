"use client";
import { skills } from "@/data/portfolio";

const categoryColors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  Frontend: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", badge: "bg-blue-600" },
  Backend: { bg: "bg-red-50", border: "border-red-200", text: "text-red-800", badge: "bg-red-600" },
  WordPress: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-800", badge: "bg-indigo-600" },
  Deployment: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-800", badge: "bg-violet-600" },
  Tools: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800", badge: "bg-emerald-600" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6366F1]">Technical Skills</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Technologies I work with</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            A curated stack built over 2+ years of professional product development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => {
            const colors = categoryColors[category] || categoryColors.Frontend;
            return (
              <div key={category} className={`${colors.bg} ${colors.border} border rounded-2xl p-6 card-hover`}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className={`font-bold text-sm ${colors.text}`}>{category}</h3>
                  <span className={`${colors.badge} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                    {items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white border border-white/80 text-gray-800 text-xs font-semibold rounded-lg shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
