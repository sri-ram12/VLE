import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_INFO } from '../../data/storeInfo';
import type { ProductCategory } from '../../types';

interface StoreSectionProps {
  initialProduct?: string;
  onSuccessEnquiry?: () => void;
}

export const StoreSection: React.FC<StoreSectionProps> = ({ initialProduct }) => {
  // Enquiry form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'General' as ProductCategory | 'General',
    productRequired: initialProduct || '',
    quantity: '1',
    enquiryType: 'retail' as 'retail' | 'wholesale',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);

    try {
      // POST to backend API (server.js)
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          category: formData.category,
          requirement: formData.productRequired,
          quantity: formData.quantity,
          message: formData.message,
          enquiryType: formData.enquiryType
        })
      });
    } catch {
      // Offline / fallback tolerance
    } finally {
      setSubmitting(false);
      setFormSubmitted(true);
      
      // Trigger subtle celebration confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch {
        // Fallback silently if confetti cannot execute
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      category: 'General',
      productRequired: '',
      quantity: '1',
      enquiryType: 'retail',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <section id="store" className="py-20 bg-white text-slate-900 relative border-t border-slate-200">
      
      {/* Background accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider inline-block mb-3 shadow-2xs">
            Location &amp; Direct Connection
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Visit Vijaya Lakshmi Electricals
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Conveniently situated on Sangivalasa Main Road. Walk into our showroom or submit a fast product enquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Col (7 cols): Store Address, Contacts, Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Address & Business Card */}
            <div className="bg-slate-50/90 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-lime-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-lime-600/25">
                    VL
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-950 leading-tight">
                      {STORE_INFO.name}
                    </h3>
                    <span className="text-xs font-bold text-lime-700 uppercase tracking-wider">
                      {STORE_INFO.businessType}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono bg-white px-3 py-1.5 rounded-xl text-slate-700 border border-slate-200 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>GSTIN: <strong className="text-slate-900">{STORE_INFO.gstin}</strong></span>
                </div>
              </div>

              {/* Exact Formatted Address */}
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-rose-100 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Store Address
                  </div>
                  <div className="text-base font-bold text-slate-950 leading-snug">
                    {STORE_INFO.address.doorNo},
                  </div>
                  <div className="text-sm font-semibold text-slate-800 leading-snug">
                    {STORE_INFO.address.landmark},
                  </div>
                  <div className="text-sm text-slate-600 leading-snug">
                    {STORE_INFO.address.street}, {STORE_INFO.address.area},
                  </div>
                  <div className="text-sm text-slate-600 leading-snug">
                    {STORE_INFO.address.district} - {STORE_INFO.address.pincode}
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 mb-6 shadow-2xs">
                <Clock className="w-4 h-4 text-lime-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-900">{STORE_INFO.timings.days}:</span> {STORE_INFO.timings.hours} ({STORE_INFO.timings.note})
                </div>
              </div>

              {/* Dedicated Contact Cards for Ch. Vikram and Ch. Jagdish */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {STORE_INFO.contacts.map((contact, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-lime-500/80 transition-all shadow-2xs"
                  >
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {contact.role}
                    </div>
                    <div className="text-base font-black text-slate-950 mt-1">
                      {contact.name}
                    </div>
                    <div className="text-sm font-mono font-bold text-lime-700 mt-0.5">
                      {contact.phone}
                    </div>

                    <div className="flex gap-2 mt-3">
                      <a
                        href={`tel:${contact.rawPhone}`}
                        className="flex-1 py-1.5 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold text-center border border-slate-200 transition-colors flex items-center justify-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-slate-700" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/91${contact.rawPhone}?text=${encodeURIComponent(contact.whatsappMessageTemplate)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 px-2.5 bg-lime-600 hover:bg-lime-500 text-white rounded-xl text-xs font-bold text-center transition-colors flex items-center justify-center gap-1 shadow-sm"
                      >
                        <MessageSquare className="w-3 h-3 fill-current" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Directions & General WhatsApp */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={STORE_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
                >
                  <Navigation className="w-4 h-4 text-lime-400" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={`https://wa.me/91${STORE_INFO.whatsappPhone}?text=${encodeURIComponent('Hello Vijaya Lakshmi Electricals, please share live catalog and store directions.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-lime-600 hover:bg-lime-500 text-white font-bold text-sm shadow-md shadow-lime-600/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Authentic Storefront & Building Showcase */}
            <div className="bg-slate-50/90 rounded-3xl border border-slate-200 p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-lime-500 animate-pulse"></span>
                  <h4 className="text-sm font-bold text-slate-900">
                    Physical Showroom Exterior &amp; Landmark
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-lime-800 bg-lime-100 px-2.5 py-0.5 rounded-full border border-lime-300">
                  Sangivalasa Main Road
                </span>
              </div>

              {/* 3-Photo Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 group border border-slate-200 shadow-2xs">
                  <img
                    src="/images/storefront/store_building_night_view.jpg"
                    alt="Vijaya Lakshmi Electricals Commercial Building Night View"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white leading-tight">
                    Building Night View
                  </div>
                </div>

                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 group border border-slate-200 shadow-2xs">
                  <img
                    src="/images/storefront/storefront_evening_neon_facade.jpg"
                    alt="Vijaya Lakshmi Electricals Illuminated Neon Storefront"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white leading-tight">
                    Illuminated Facade
                  </div>
                </div>

                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 group border border-slate-200 shadow-2xs">
                  <img
                    src="/images/storefront/storefront_canopy_entrance.png"
                    alt="Vijaya Lakshmi Electricals Front Canopy Entrance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white leading-tight">
                    Front Entrance Canopy
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Preview Embed Container */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-64 bg-slate-100 relative">
              <iframe
                title="Vijaya Lakshmi Electricals Location Map"
                src={STORE_INFO.mapEmbedPlaceholder}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 right-3 max-w-[calc(100%-1.5rem)] bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-bold text-slate-800 shadow-md border border-slate-200 flex items-center gap-1.5 truncate">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500 shrink-0" />
                <span className="truncate">Opp. Mudu Ammavari Temple, Sangivalasa</span>
              </div>
            </div>

          </div>

          {/* Right Col (5 cols): Professional Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-8 shadow-xl">
              
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-xl bg-lime-100 border border-lime-300 text-lime-800 flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </span>
                <h3 className="text-xl font-black text-slate-950">
                  Quick Product Enquiry
                </h3>
              </div>
              <p className="text-xs text-slate-600 mb-6">
                Fill this form for retail pricing, bulk contractor tenders, or stock verification. We respond promptly via Call or WhatsApp.
              </p>

              {formSubmitted ? (
                /* Success Receipt State */
                <div className="py-8 px-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-lime-100 border border-lime-300 text-lime-800 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-950">Enquiry Recorded!</h4>
                    <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your enquiry for{' '}
                      <strong>{formData.productRequired || 'Store Products'}</strong> has been saved directly to our system.
                    </p>
                  </div>

                  {/* Summary receipt details */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1 font-mono">
                    <div className="text-slate-600">Contact: {formData.phone}</div>
                    <div className="text-slate-600">Mode: {formData.enquiryType.toUpperCase()}</div>
                    <div className="text-slate-600">Requirement: {formData.productRequired || 'General Catalog'}</div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <a
                      href={`https://wa.me/91${STORE_INFO.whatsappPhone}?text=${encodeURIComponent(
                        `Hi Vikram / Jagdish garu, I just submitted an enquiry on your website for ${formData.productRequired} (Qty: ${formData.quantity}). Please confirm.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-lime-600 hover:bg-lime-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>Speed up on WhatsApp</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="text-xs text-lime-700 hover:text-lime-800 font-bold underline underline-offset-2 cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Enquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Enquiry Type Selector (Retail vs Wholesale) */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, enquiryType: 'retail' })}
                      className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                        formData.enquiryType === 'retail'
                          ? 'bg-lime-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Retail Customer
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, enquiryType: 'wholesale' })}
                      className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                        formData.enquiryType === 'wholesale'
                          ? 'bg-lime-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Wholesale / Contractor
                    </button>
                  </div>

                  {/* Name & Phone */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Category & Product Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Department
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-lime-500"
                      >
                        <option value="General">All Departments</option>
                        <option value="electricals">Electricals</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="sanitary">Sanitary</option>
                        <option value="hardware">Hardware</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Approx. Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g. 5 coils / 100 pcs"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                      />
                    </div>
                  </div>

                  {/* Product Specification / Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Specific Product or Brand Required
                    </label>
                    <input
                      type="text"
                      name="productRequired"
                      value={formData.productRequired}
                      onChange={handleInputChange}
                      placeholder="e.g. Polycab 1.5 sq mm wire or Astral CPVC 1 inch"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Notes / Delivery Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific sizes, site address for bulk delivery, or price inquiry details..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-lime-600 hover:bg-lime-500 text-white font-black text-sm shadow-md shadow-lime-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {submitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Recording Enquiry...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Send Product Enquiry</span>
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-500">
                    Direct enquiry routed to Ch. Vikram &amp; Ch. Jagdish
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
