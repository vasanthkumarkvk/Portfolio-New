"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Download, Mail, Github, ExternalLink, Zap, Globe, Server, Users } from "lucide-react";

const statItems = [
  { icon: Globe, value: "20+", label: "Live Websites" },
  { icon: Zap, value: "9+", label: "SaaS Products" },
  { icon: Users, value: "2+", label: "Teams Led" },
  { icon: Server, value: "VPS", label: "Deployment Exp." },
];

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      if (orb1.current) {
        orb1.current.style.transform = `translate(${x * 30 - 15}px, ${y * 30 - 15}px)`;
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${-x * 20 + 10}px, ${-y * 20 + 10}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dot-grid bg-white pt-16">
      {/* Glow orbs */}
      <div ref={orb1} className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none transition-transform duration-700 ease-out" />
      <div ref={orb2} className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-violet-200/20 rounded-full blur-3xl pointer-events-none transition-transform duration-700 ease-out" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-[#6366F1]">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Available for new opportunities
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight">
                Vasantha
                <span>Kumar</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-gray-500 tracking-tight">Full Stack Developer</p>
            </div>

            {/* Tagline */}
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Building{" "}
              <span className="font-semibold text-gray-900">Scalable Web Applications</span>,{" "}
              SaaS Products, CRM Systems & Business Solutions.
              <br />
              <span className="text-sm text-gray-500 mt-1 block">2+ Years Professional Experience</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366F1] text-white font-semibold rounded-xl hover:bg-[#4F46E5] transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 text-sm"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="/Vasanth-Fullstack-Developer.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm text-sm"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-600 font-medium rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-sm"
              >
                <Mail size={16} /> Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/vasanthkumarkvk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                <Github size={16} /> GitHub
              </a>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <a href="https://portfolio-blush-theta-76.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                <ExternalLink size={16} /> Portfolio
              </a>
            </div>
          </div>

          {/* Right: Profile card + stats */}
          <div className="space-y-6">
            {/* Profile card */}
            <div className="relative">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 p-8 flex flex-col items-center gap-5">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-2 ring-indigo-100">
                    <img
                      src="/profile.jpg"
                      alt="Vasanth Kumar"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-900">VasanthaKumar K</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Full Stack Developer</p>
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <span className="text-xs text-gray-400">📍</span>
                    <span className="text-xs text-gray-500">Chennai, Tamil Nadu</span>
                  </div>
                </div>
                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Next.js", "Laravel", "React.js", "MySQL", "WordPress"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-indigo-50 text-[#6366F1] text-xs font-semibold rounded-lg border border-indigo-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-[#6366F1] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-indigo-300">
                2+ Yrs Exp
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {statItems.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3 hover:border-indigo-200 hover:shadow-indigo-50 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#6366F1]" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-gray-900">{value}</div>
                    <div className="text-xs text-gray-500 font-medium">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}