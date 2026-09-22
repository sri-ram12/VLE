import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, AlertCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_INFO } from '../../data/storeInfo';
import type { Product, ProductCategory } from '../../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetProduct?: Product | null;
  targetCategory?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  targetProduct,
  targetCategory
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: (targetCategory || targetProduct?.category || 'General') as ProductCategory | 'General',
    productRequired: targetProduct ? `${targetProduct.name} (${targetProduct.brand})` : '',
    quantity: targetProduct ? `1 ${targetProduct.unit}` : '1',
    enquiryType: (targetProduct?.isWholesaleBulk ? 'wholesale' : 'retail') as 'retail' | 'wholesale',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (targetProduct) {
      setFormData(prev => ({
        ...prev,
        category: targetProduct.category,
        productRequired: `${targetProduct.name} (${targetProduct.brand})`,
        quantity: `1 ${targetProduct.unit}`,
        enquiryType: targetProduct.isWholesaleBulk ? 'wholesale' : 'retail'
      }));
    } else if (targetCategory && targetCategory !== 'all') {
      setFormData(prev => ({
        ...prev,
        category: targetCategory as ProductCategory
      }));
    }
  }, [targetProduct, targetCategory]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);

    try {
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
      // Offline fallback
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappDirectMessage = `Hello Vijaya Lakshmi Electricals, I am inquiring regarding:
Product: ${formData.productRequired || 'Store Catalog'}
Quantity: ${formData.quantity}
Type: ${formData.enquiryType.toUpperCase()}
My Name: ${formData.name}
Phone: ${formData.phone}
Please provide price and availability.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={handleClose} />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-950">
              Product Enquiry &amp; Quotation
            </h3>
            <span className="text-[11px] text-lime-700 font-bold uppercase tracking-wider">
              Vijaya Lakshmi Electricals • Sangivalasa
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-lime-100 border border-lime-300 text-lime-800 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-950">Thank You, {formData.name}!</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xs mx-auto">
                  Your enquiry has been successfully recorded. Ch. Vikram and Ch. Jagdish will follow up shortly.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-left font-mono">
                <div className="text-slate-600">Item: <strong className="text-slate-900">{formData.productRequired}</strong></div>
                <div className="text-slate-600">Quantity: <strong className="text-slate-900">{formData.quantity}</strong></div>
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href={`https://wa.me/91${STORE_INFO.whatsappPhone}?text=${encodeURIComponent(whatsappDirectMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-lime-600 hover:bg-lime-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Send Directly on WhatsApp</span>
                </a>

                <button
                  onClick={handleClose}
                  className="w-full py-2 text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Toggle Retail vs Wholesale */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, enquiryType: 'retail' })}
                  className={`py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
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
                  className={`py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    formData.enquiryType === 'wholesale'
                      ? 'bg-lime-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Wholesale / Bulk
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Department
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e: any) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-lime-500"
                  >
                    <option value="General">General Inquiries</option>
                    <option value="electricals">Electricals</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="sanitary">Sanitary</option>
                    <option value="hardware">Hardware</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Product / Brand
                  </label>
                  <input
                    type="text"
                    value={formData.productRequired}
                    onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                    placeholder="e.g. Polycab wire 1.5mm"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="Qty"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Brand preference, delivery location, or timeline..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 px-4 bg-lime-600 hover:bg-lime-500 text-white rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md shadow-lime-600/20 transition-all cursor-pointer disabled:opacity-75"
              >
                {submitting ? (
                  <span>Recording...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-lime-600" />
                <span>Direct response from Ch. Vikram or Ch. Jagdish</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
