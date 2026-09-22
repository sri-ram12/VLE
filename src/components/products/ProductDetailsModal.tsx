import React from 'react';
import { 
  X, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Tag, 
  AlertCircle,
  Building2
} from 'lucide-react';
import type { Product } from '../../types';
import { STORE_INFO } from '../../data/storeInfo';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenEnquiry: (product: Product) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onOpenEnquiry
}) => {
  if (!product) return null;

  const whatsappMessage = `Hello Vijaya Lakshmi Electricals, I am looking at ${product.name} (${product.brand}) on your website. 
Category: ${product.category}
Demo Reference Price: ₹${product.demoPrice} / ${product.unit}
Please share current stock availability, discounts, and dispatch details for Sangivalasa/Visakhapatnam.`;

  const whatsappUrl = `https://wa.me/91${STORE_INFO.whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Background click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-slate-900">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-lime-100 border border-lime-300 text-lime-800 text-xs font-bold uppercase tracking-wider">
              {product.category}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-xs font-bold text-slate-700">
              {product.brand}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Col: High-Res Image & Pricing */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-white/95 border border-slate-200 shadow-sm backdrop-blur-xs text-slate-800 text-xs font-bold px-2.5 py-1 rounded-md">
                  {product.availability}
                </div>
              </div>

              {/* Demo Price Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Indicative Demo Price
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black text-slate-950">
                    ₹{product.demoPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">
                    / {product.unit}
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-200 flex items-start gap-1.5 text-[11px] text-slate-500">
                  <AlertCircle className="w-3.5 h-3.5 text-lime-600 shrink-0 mt-0.5" />
                  <span>
                    Demo price shown. Wholesale rates apply for builders, electrical contractors, and volume purchases.
                  </span>
                </div>
              </div>

              {/* Direct Store Call Cards */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Direct Inquiries &amp; Stock Check:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="tel:9441160851"
                    className="flex flex-col p-2.5 bg-white rounded-xl border border-slate-200 hover:border-lime-500 transition-colors shadow-2xs"
                  >
                    <span className="font-bold text-slate-900">Ch. Vikram</span>
                    <span className="font-mono text-lime-700 font-bold">9441160851</span>
                  </a>
                  <a
                    href="tel:7296856740"
                    className="flex flex-col p-2.5 bg-white rounded-xl border border-slate-200 hover:border-lime-500 transition-colors shadow-2xs"
                  >
                    <span className="font-bold text-slate-900">Ch. Jagdish</span>
                    <span className="font-mono text-lime-700 font-bold">7296856740</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Col: Details, Specifications, Applications */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-lime-700 uppercase tracking-wider block mb-1">
                  {product.subCategory}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  {product.name}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  {product.fullDescription}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
                  <FileText className="w-4 h-4 text-lime-600" />
                  <span>Technical Specifications</span>
                </div>
                <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200 text-xs">
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <div key={idx} className="grid grid-cols-12 p-3 bg-white hover:bg-slate-50 transition-colors">
                      <span className="col-span-5 font-semibold text-slate-500">
                        {key}
                      </span>
                      <span className="col-span-7 font-bold text-slate-900">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Applications */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
                  <Building2 className="w-4 h-4 text-lime-600" />
                  <span>Ideal Applications &amp; Uses</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-600 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Tags */}
              <div className="flex items-center gap-1.5 flex-wrap pt-2">
                <Tag className="w-3.5 h-3.5 text-slate-400" />
                {product.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Modal Bottom Sticky Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-lime-600" />
            <span>Store Guarantee: Genuine Inspected Factory Goods</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm shadow-2xs transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>

            {/* Enquire Modal Form CTA */}
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(product);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-lime-600 hover:bg-lime-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-lime-600/20 transition-all cursor-pointer"
            >
              <span>Request Formal Quote</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
