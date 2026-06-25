export const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js", "Next.js"],
  Backend: ["PHP", "Laravel", "MySQL", "REST APIs", "Authentication Systems"],
  WordPress: ["WordPress", "WooCommerce", "ACF", "Elementor", "Custom Theme Dev", "Plugin Development"],
  Deployment: ["Linux", "VPS Hosting", "Nginx", "Apache", "PM2", "SSL", "DNS", "Cloudflare"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "WSL"],
};

export const skillIcons: Record<string, string> = {
  "HTML5": "🌐", "CSS3": "🎨", "JavaScript": "⚡", "Bootstrap": "🅱️",
  "Tailwind CSS": "💨", "React.js": "⚛️", "Next.js": "▲",
  "PHP": "🐘", "Laravel": "🔴", "MySQL": "🗄️", "REST APIs": "🔌",
  "Authentication Systems": "🔐", "WordPress": "📝", "WooCommerce": "🛒",
  "ACF": "🏗️", "Elementor": "⚙️", "Custom Theme Dev": "🎭", "Plugin Development": "🔧",
  "Linux": "🐧", "VPS Hosting": "☁️", "Nginx": "🌊", "Apache": "🪶",
  "PM2": "🚀", "SSL": "🔒", "DNS": "🌍", "Cloudflare": "☁️",
  "Git": "📦", "GitHub": "🐙", "Postman": "📮", "VS Code": "💻", "WSL": "🐚",
};

export const experience = [
  {
    company: "VSM Global Technologies",
    role: "Frontend Developer",
    period: "Jun 2024 – feb 2025",
    current: false,
    highlights: ["Building scalable web applications", "Full stack product development", "API design & integration", "Server deployment & management"],
    color: "#6366F1",
  },
  {
    company: "Markerz Global Solution",
    role: "WordPress Developer",
    period: "Feb 2025 – May 2025",
    current: false,
    highlights: ["Custom WordPress theme development", "WooCommerce integrations", "Plugin customization", "Performance optimization"],
    color: "#8B5CF6",
  },
  {
    company: "Mindcarve Communication",
    role: "Senior Full Stack Developer & Team Lead",
    period: "june 2025 –  Present",
    current: true,
    highlights: ["Team Leadership & Intern Mentoring", "CRM System Development", "SaaS Product Development", "Laravel Application Architecture", "Server Deployment & DevOps"],
    color: "#A78BFA",
  },
];

export type Project = {
  name: string;
  category: string;
  tech: string[];
  description: string;
  url: string;
  placeholder: string;
};

export const projects: Project[] = [
  // Real Estate
  { name: "Vishwak Properties", category: "Real Estate", tech: ["Next.js", "Laravel", "MySQL"], description: "Premium real estate platform with property listings, admin CMS, and lead management.", placeholder: "🏠", url: "https://www.vishwakproperties.in/" },
  { name: "Neilgen Housing", category: "Real Estate", tech: ["WordPress", "Elementor"], description: "Modern housing company website with property showcase and contact management.", placeholder: "🏡", url: "https://neilgenhousing.com/" },
  { name: "PKR Estates", category: "Real Estate", tech: ["WordPress", "ACF"], description: "Professional estates website with custom property filters and inquiry forms.", placeholder: "🏢", url: "https://pkrestates.com/" },
  { name: "Sri Housing Infra", category: "Real Estate", tech: ["React.js", "PHP"], description: "Infrastructure housing platform with project timelines and booking flow.", placeholder: "🏗️", url: "https://www.srihousinginfra.com/" },
  { name: "Genuine Property Developers", category: "Real Estate", tech: ["Next.js", "GSAP", "Laravel"], description: "Premium plotted land developer website with GSAP animations and site visit booking.", placeholder: "🌳", url: "https://genuinepropertydevelopers.com/" },
  // Healthcare
  { name: "Athma Hospitals", category: "Healthcare", tech: ["WordPress", "Custom Theme"], description: "Hospital website with department listings, doctor profiles, and appointment booking.", placeholder: "🏥", url: "https://athmahospitals.com/" },
  { name: "Krishna Health Centre", category: "Healthcare", tech: ["WordPress", "Elementor"], description: "Healthcare centre website with service showcase and online consultation flow.", placeholder: "⚕️", url: "https://krishnahealthcentre.in/" },
  // Corporate
  { name: "Qubinex", category: "Corporate", tech: ["React.js", "Tailwind CSS"], description: "Tech company landing page with modern SaaS-inspired design and service showcase.", placeholder: "💼", url: "https://qubinex.com/" },
  { name: "Double Slash Software", category: "Corporate", tech: ["Next.js", "Tailwind CSS"], description: "Software company portfolio with project showcase and team section.", placeholder: "💻", url: "https://doubleslashsoftware.com/" },
  { name: "KEK LLP", category: "Corporate", tech: ["WordPress"], description: "Professional corporate website with custom branding and service listings.", placeholder: "🏛️", url: "https://www.kekllp.com/" },
  { name: "Zetsap", category: "Corporate", tech: ["WordPress", "Custom Theme"], description: "Business solutions company website with dynamic content and lead capture.", placeholder: "⚡", url: "https://zetsap.in/" },
  { name: "Forepeak Logistics", category: "Corporate", tech: ["React.js", "PHP"], description: "Logistics company platform with shipment tracking and service booking.", placeholder: "🚢", url: "https://forepeaklogistics.com/" },
  // Hospitality & Travel
  { name: "La Casa Hotel", category: "Hospitality", tech: ["WordPress", "WooCommerce"], description: "Boutique hotel website with room booking, gallery, and amenities showcase.", placeholder: "🏨", url: "https://www.lacasahotel.in/" },
  { name: "Hasini Travels", category: "Hospitality", tech: ["WordPress", "Elementor"], description: "Travel agency website with tour packages, itineraries, and inquiry system.", placeholder: "✈️", url: "https://hasinitravels.net/" },
  // Education
  { name: "Learnovita", category: "Education", tech: ["React.js", "Laravel", "MySQL"], description: "EdTech platform with course listings, enrollment, and student management.", placeholder: "📚", url: "https://www.learnovita.com/" },
  { name: "Tuning Minds", category: "Education", tech: ["WordPress", "LMS"], description: "Online learning platform with course catalog and student portal.", placeholder: "🎓", url: "https://tuningminds.in/" },
  { name: "Pencilkraft", category: "Education", tech: ["HTML", "CSS", "GSAP", "Three.js"], description: "Creative agency portfolio with Three.js animations, arch carousel, and GSAP scroll effects.", placeholder: "✏️", url: "https://pencilkraft.com/" },
  // E-Commerce & Others
  { name: "Krazy Story", category: "E-Commerce", tech: ["WooCommerce", "PHP", "MySQL"], description: "E-commerce store with custom product catalog, cart, and payment integration.", placeholder: "🛒", url: "https://krazystory.in/" },
  { name: "Magnum Wood", category: "E-Commerce", tech: ["WooCommerce", "WordPress"], description: "Wood products store with category management and order tracking.", placeholder: "🪵", url: "https://magnumwood.in/" },
  { name: "Sesaicraft", category: "E-Commerce", tech: ["WooCommerce", "Custom Theme"], description: "Craft products e-commerce with custom filters and product showcase.", placeholder: "🎨", url: "https://sesaicraft.in/" },
  { name: "Comfort Services", category: "E-Commerce", tech: ["WordPress", "PHP"], description: "Service-based business platform with booking and payment flow.", placeholder: "🛋️", url: "https://comfortservicesomr.com/" },
  { name: "Kavinika Dry Fruits", category: "E-Commerce", tech: ["WooCommerce", "WordPress"], description: "Online dry fruits store with bulk ordering and subscription features.", placeholder: "🥜", url: "http://kavinikadryfruits.com/" },
  { name: "Pallavi Events", category: "E-Commerce", tech: ["WordPress", "Elementor"], description: "Event management website with gallery, packages, and inquiry forms.", placeholder: "🎉", url: "https://pallavievents.com/" },
  { name: "Carvespace", category: "E-Commerce", tech: ["React.js", "Laravel"], description: "Custom carving products platform with portfolio gallery and order system.", placeholder: "🗿", url: "https://carvespace.in/" },
  { name: "Aksan", category: "E-Commerce", tech: ["WordPress", "WooCommerce"], description: "Multi-category online store with advanced product filtering and checkout.", placeholder: "🏪", url: "https://www.aksan.in/" },
  // Additional
  { name: "RSV HR Services", category: "Corporate", tech: ["WordPress", "Elementor"], description: "HR consultancy website with service listings and contact management.", placeholder: "👔", url: "https://rsvhrservices.com/" },
  { name: "VSM Global Technologies", category: "Corporate", tech: ["React.js", "Laravel", "MySQL"], description: "Service desk application for IT support and ticket management.", placeholder: "🖥️", url: "https://vsmglobaltechnologies.com/service_desk/" },
];

export const products = [
  {
    name: "CRM System",
    icon: "👥",
    tech: ["Laravel", "Next.js", "MySQL"],
    description: "A comprehensive Customer Relationship Management platform built for sales teams to track leads, manage follow-ups, and drive conversions.",
    features: ["Lead Management", "Customer Tracking", "Follow-up Scheduler", "Reports & Analytics", "Role-based Access"],
    color: "#6366F1",
  },
  {
    name: "Lead Management System",
    icon: "📊",
    tech: ["Laravel", "Next.js", "MySQL"],
    description: "Advanced lead pipeline system with automated follow-ups, status tracking, and team assignment workflows.",
    features: ["Pipeline View", "Lead Scoring", "Auto Follow-ups", "Team Assignment", "Conversion Tracking"],
    color: "#8B5CF6",
  },
  {
    name: "HRM System",
    icon: "🏢",
    tech: ["Laravel", "React.js", "MySQL"],
    description: "Complete Human Resource Management system handling the entire employee lifecycle from onboarding to payroll.",
    features: ["Employee Management", "Attendance Tracking", "Payroll Processing", "Leave Management", "HR Reports"],
    color: "#A78BFA",
  },
  {
    name: "Employee Management System",
    icon: "👤",
    tech: ["Laravel", "Next.js", "MySQL"],
    description: "Streamlined employee directory and management platform with performance tracking and document management.",
    features: ["Employee Directory", "Performance Tracking", "Document Management", "Team Structure", "Notifications"],
    color: "#7C3AED",
  },
  {
    name: "Invoice Management System",
    icon: "🧾",
    tech: ["Next.js", "Laravel", "MySQL"],
    description: "Professional invoicing platform with pro forma support, quotation conversion, and payment tracking.",
    features: ["Invoice Generation", "Pro Forma Invoices", "Quotation to Invoice", "Payment Tracking", "PDF Export"],
    color: "#4F46E5",
  },
  {
    name: "Service Desk Application",
    icon: "🎧",
    tech: ["Laravel", "React.js", "MySQL"],
    description: "IT service desk system with ticket management, SLA tracking, and multi-tier support workflows.",
    features: ["Ticket Management", "SLA Tracking", "Priority Queue", "Agent Assignment", "Client Portal"],
    color: "#6366F1",
  },
  {
    name: "Reminder Alert Software",
    icon: "⏰",
    tech: ["Laravel", "MySQL", "Cron Jobs"],
    description: "Automated reminder system with multi-channel alerts via email, SMS, and WhatsApp for business workflows.",
    features: ["Email Alerts", "SMS Reminders", "WhatsApp Notifications", "Recurring Schedules", "Custom Triggers"],
    color: "#8B5CF6",
  }
  ,
 {
    name: "AI Chatbot & Automated Enquiry System",
    icon: "🤖",
    tech: ["Next.js", "Laravel", "MCP", "WebSocket", "MySQL"],
    description: "Intelligent AI-powered chatbot for automated 24/7 customer support, enquiry handling, and lead qualification with real-time responses.",
    features: [
        "24/7 Automated Customer Support",
        "Instant Enquiry Response System",
        "Lead Qualification & Scoring",
        "Multi-channel Integration (Website, WhatsApp)",
        "Conversation Analytics Dashboard"],
    color: "#7C3AED",
},
  {
    name: "Online Plot Booking System",
    icon: "🗺️",
    tech: ["Laravel", "React.js", "MySQL"],
    description: "Real estate plot booking platform with interactive layout maps, slot availability, and payment tracking.",
    features: ["Interactive Plot Map", "Slot Availability", "Booking Workflow", "Payment Tracking", "Admin Dashboard"],
    color: "#A78BFA",
  },
  {
    name: "Bulk WhatsApp & Email Marketing",
    icon: "📱",
    tech: ["Laravel", "WhatsApp API", "MySQL"],
    description: "Marketing automation platform for bulk outreach via WhatsApp and email with campaign tracking and analytics.",
    features: ["Bulk WhatsApp Messages", "Email Campaigns", "Contact Management", "Delivery Reports", "Campaign Analytics"],
    color: "#4F46E5",
  }
];

export const stats = [
  { value: 20, suffix: "+", label: "Live Websites" },
  { value: 5, suffix: "+", label: "E-Commerce Projects" },
  { value: 10, suffix: "+", label: "WordPress Projects" },
  { value: 9, suffix: "", label: "Business Products" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

export const services = [
  { icon: "⚡", title: "Full Stack Development", desc: "End-to-end web apps from architecture to deployment using React, Next.js, PHP & Laravel." },
  { icon: "🔴", title: "Laravel Development", desc: "Robust backend APIs, admin panels, and business logic with Laravel & MySQL." },
  { icon: "📝", title: "WordPress Development", desc: "Custom themes, plugins, WooCommerce stores and performance-optimized sites." },
  { icon: "👥", title: "CRM Development", desc: "Custom CRM platforms with lead management, follow-ups, and analytics dashboards." },
  { icon: "🚀", title: "SaaS Product Development", desc: "Multi-tenant SaaS applications with subscription management and scalable architecture." },
  { icon: "🔌", title: "API Development", desc: "RESTful APIs, third-party integrations, WhatsApp, payment gateways, and webhooks." },
  { icon: "☁️", title: "VPS Deployment", desc: "Linux VPS setup, Nginx, PM2, SSL, Cloudflare, CI/CD — full server management." },
  { icon: "⚙️", title: "Website Optimization", desc: "Performance audits, Core Web Vitals improvement, SEO, and speed optimization." },
  { icon: "🤖", title: "AI Chatbot Development", desc: "Intelligent AI-powered chatbots for 24/7 automated customer support, enquiry handling, and lead qualification." },
  { icon: "🧠", title: "AI & Automation Solutions", desc: "Custom AI integrations, automated workflows, MCP implementations, and smart business process automation." },
];

export const categoryFilters = ["All", "Real Estate", "Healthcare", "Corporate", "Hospitality", "Education", "E-Commerce"];