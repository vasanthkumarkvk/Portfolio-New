"use client";
import { useState } from "react";
import { projects, categoryFilters, type Project } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Real Estate": "bg-emerald-100 text-emerald-700",
  "Healthcare": "bg-red-100 text-red-700",
  "Corporate": "bg-blue-100 text-blue-700",
  "Hospitality": "bg-amber-100 text-amber-700",
  "Education": "bg-violet-100 text-violet-700",
  "E-Commerce": "bg-indigo-100 text-indigo-700",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:shadow-gray-100 hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300">
      {/* Screenshot placeholder */}
      <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {project.placeholder}
        </div>
        <div className="text-xs text-gray-400 font-medium">{project.name}</div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#6366F1]/0 group-hover:bg-[#6366F1]/5 transition-all duration-300 flex items-center justify-center">
          <a
            href={project.url || "#"}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2 px-4 py-2 bg-white text-[#6366F1] text-xs font-bold rounded-xl shadow-lg border border-indigo-100"
          >
            <ExternalLink size={12} /> Visit Site
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-sm text-gray-900 leading-tight">{project.name}</h3>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${categoryColors[project.category] || "bg-gray-100 text-gray-600"}`}>
            {project.category}
          </span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium rounded-md">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6366F1]">Portfolio</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Website Showcase</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
            20+ websites delivered across industries — real estate, healthcare, education, e-commerce, and more.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categoryFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                active === cat
                  ? "bg-[#6366F1] text-white shadow-md shadow-indigo-200"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className={`ml-1.5 text-xs ${active === cat ? "opacity-70" : "text-gray-400"}`}>
                  ({projects.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            Showing <strong className="text-gray-900">{filtered.length}</strong> of <strong className="text-gray-900">{projects.length}</strong> projects
          </p>
        </div>
      </div>
    </section>
  );
}
