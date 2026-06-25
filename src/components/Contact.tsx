"use client";
import { useState } from "react";
import { Send, Github, ExternalLink, Mail, Phone, Linkedin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const links = [
    { icon: Github, label: "GitHub", value: "vasanthkumarkvk", href: "https://github.com/vasanthkumarkvk" },
    { icon: ExternalLink, label: "Portfolio", value: "portfolio-blush-theta-76.vercel.app", href: "https://portfolio-blush-theta-76.vercel.app/" },
    { icon: Mail, label: "Email", value: "vasanthkvk248@gmail.com", href: "mailto:vasanthkvk248@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 86676 42578", href: "tel:+918667642578" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6366F1]">Contact</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Let&apos;s work together</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
            Open to full-time roles, freelance projects, and consultations. Let&apos;s discuss how I can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: links */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-5 text-sm">Get in touch</h3>
              <div className="space-y-4">
                {links.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-[#6366F1] transition-colors flex-shrink-0">
                      <Icon size={15} className="text-[#6366F1] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">{label}</div>
                      <div className="text-sm font-semibold text-gray-800 group-hover:text-[#6366F1] transition-colors truncate max-w-xs">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-[#6366F1] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Available Now</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Open to opportunities</h3>
              <p className="text-indigo-200 text-xs leading-relaxed">
                Looking for full-time roles, contract work, or freelance projects. Based in Chennai, open to remote.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Message sent!</h3>
                <p className="text-sm text-gray-500">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-xs font-semibold text-[#6366F1] hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="company name"
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all ${errors.name ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="****@domain.com"
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all ${errors.email ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Job opportunity / Project inquiry"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role or project..."
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#6366F1] focus:bg-white transition-all resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#6366F1] text-white font-semibold text-sm rounded-xl hover:bg-[#4F46E5] transition-all shadow-lg shadow-indigo-200"
                >
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
