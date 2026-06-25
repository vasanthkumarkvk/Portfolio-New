import { Code2, Heart, Github, ExternalLink, Linkedin, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#6366F1] rounded-lg flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-sm">Vasanth Kumar</span>
            </div>
            <p className="text-xs leading-relaxed">
              Full Stack Developer specializing in Laravel, React.js, Next.js, and WordPress. Building scalable products from Chennai, India.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a 
                href="https://github.com/vasanthkumarkvk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6366F1] transition-colors"
                aria-label="GitHub"
              >
                <Github size={14} className="text-gray-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vasanthkumarkvk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} className="text-gray-300" />
              </a>
              <a 
                href="https://wa.me/918667642578" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={14} className="text-gray-300" />
              </a>
              <a 
                href="mailto:vasanthkvk248@gmail.com" 
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#EA4335] transition-colors"
                aria-label="Email"
              >
                <Mail size={14} className="text-gray-300" />
              </a>
              <a 
                href="https://portfolio-blush-theta-76.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6366F1] transition-colors"
                aria-label="Portfolio"
              >
                <ExternalLink size={14} className="text-gray-300" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-xs hover:text-[#818CF8] transition-colors py-0.5">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React.js", "Laravel", "PHP", "MySQL", "WordPress", "Tailwind CSS", "Nginx"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} VasanthaKumar. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1.5">
            Built with <Heart size={11} className="text-red-400 fill-red-400" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}