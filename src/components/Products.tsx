"use client";
import { products } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6366F1]">Products</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Products & Software Solutions</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
            Enterprise-grade business applications built from scratch — architected, developed, and deployed end-to-end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: product.color + "15" }}>
                    {product.icon}
                  </div>
                  <div className="flex gap-1.5">
                    {product.tech.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-base font-extrabold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{product.description}</p>
              </div>

              {/* Divider */}
              <div className="mx-6 border-t border-gray-50" />

              {/* Features */}
              <div className="p-6 pt-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Features</p>
                <div className="space-y-2">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 size={13} style={{ color: product.color }} className="flex-shrink-0" />
                      <span className="text-xs text-gray-700 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                {/* Tech stack */}
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <div className="flex flex-wrap gap-1.5">
                    {product.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-semibold rounded-lg" style={{ background: product.color + "12", color: product.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
