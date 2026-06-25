"use client";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "2+ years of professional full stack development experience",
  "20+ websites successfully delivered and deployed",
  "CRM, HRM, SaaS, and invoice systems built from scratch",
  "Team leader and intern mentor at Mindcarve Communication",
  "Hands-on with VPS, Nginx, PM2, SSL, and Cloudflare",
  "API integrations: WhatsApp, payment gateways, and more",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6366F1]">About Me</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
                A developer who ships<br />
                <span className="gradient-text">complete products</span>
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi, I&apos;m <strong className="text-gray-900">Vasanth Kumar</strong>. I have around 2 years of professional experience as a Full Stack Developer. I started as a Front-End Developer and later expanded into backend development, product development, deployment, and server management.
              </p>
              <p>
                I specialize in building complete business solutions using <strong className="text-gray-900">PHP, Laravel, MySQL, React.js, Next.js, and WordPress</strong>. I&apos;ve successfully developed and deployed 20+ websites, CRM systems, HRM platforms, SaaS products, invoice systems, and custom business applications.
              </p>
              <p>
                I also have hands-on experience in <strong className="text-gray-900">API integrations, payment gateways, WhatsApp integrations, Linux servers, VPS hosting</strong>, deployment automation, and project planning. I mentor interns, assign development tasks, and guide teams through execution.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 pt-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#6366F1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stack cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Frontend", desc: "React.js, Next.js, Tailwind CSS, JavaScript", emoji: "⚛️", bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700" },
              { label: "Backend", desc: "PHP, Laravel, MySQL, REST APIs", emoji: "🔴", bg: "bg-red-50", border: "border-red-100", text: "text-red-700" },
              { label: "WordPress", desc: "Custom Themes, WooCommerce, ACF, Elementor", emoji: "📝", bg: "bg-indigo-50", border: "border-indigo-100", text: "text-indigo-700" },
              { label: "DevOps", desc: "VPS, Nginx, PM2, SSL, Cloudflare, Linux", emoji: "☁️", bg: "bg-violet-50", border: "border-violet-100", text: "text-violet-700" },
              { label: "Products", desc: "CRM, HRM, SaaS, Invoice, Service Desk", emoji: "🚀", bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-700" },
              { label: "Leadership", desc: "Team Lead, Intern Mentor, Project Planning", emoji: "👥", bg: "bg-amber-50", border: "border-amber-100", text: "text-amber-700" },
            ].map((card) => (
              <div key={card.label} className={`${card.bg} ${card.border} border rounded-2xl p-5 card-hover`}>
                <div className="text-2xl mb-3">{card.emoji}</div>
                <div className={`text-sm font-bold ${card.text} mb-1`}>{card.label}</div>
                <div className="text-xs text-gray-600 leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
