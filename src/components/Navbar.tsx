"use client";
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-gray-900 text-sm tracking-tight">VasanthaKumar</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-[#6366F1] hover:bg-indigo-50 rounded-md transition-all">
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/vasanthkumarkvk" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
            <a href="#contact" className="px-4 py-2 bg-[#6366F1] text-white text-sm font-semibold rounded-lg hover:bg-[#4F46E5] transition-all shadow-sm">Hire Me</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#6366F1] hover:bg-indigo-50 rounded-md transition-all">
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <a href="#contact" className="block w-full text-center px-4 py-2.5 bg-[#6366F1] text-white text-sm font-semibold rounded-lg" onClick={() => setOpen(false)}>Hire Me</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
