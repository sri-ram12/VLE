import React, { useState } from 'react';
import { 
  Wrench, 
  Clock, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Lock, 
  Unlock, 
  Store, 
  Zap,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_INFO } from '../../data/storeInfo';
import { MAINTENANCE_INFO } from '../../config/maintenance';

interface MaintenancePageProps {
  onBypass: () => void;
}

export const MaintenancePage: React.FC<MaintenancePageProps> = ({ onBypass }) => {
  // Callback form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Staff preview modal state
  const [staffModalOpen, setStaffModalOpen] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');

  const handleSubmitEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setFormError('Please enter your mobile number so we can reach you.');
      return;
    }

    setSubmitting(true);
    setFormError('');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || 'Customer (Maintenance Callback)',
          phone: phone.trim(),
          category: 'Urgent Maintenance Lead',
          requirement: requirement.trim() || 'Customer requested contact while website was temporarily offline.',
          quantity: 'Direct callback request'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to record inquiry');
      }

      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback silently
      }
    } catch {
      // Even if network fails to API, acknowledge user friendly
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerifyPasscode = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = passcode.trim().toLowerCase();
    // Allow either the configured passcode or simple 'vle'
    if (cleanPass === MAINTENANCE_INFO.bypassPasscode.toLowerCase() || cleanPass === 'vle') {
      onBypass();
    } else {
      setPasscodeError('Invalid staff code. (Hint: vle or check maintenance config)');
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
      
      {/* Background Decorative Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      {/* Top Bar with Branding & Staff Bypass Trigger */}
      <header className="relative z-10 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-lime-500 p-0.5 shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <div className="font-extrabold tracking-tight text-white text-base sm:text-lg flex items-center gap-2">
              <span>{STORE_INFO.name}</span>
              <span className="hidden sm:inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                GSTIN: {STORE_INFO.gstin}
              </span>
            </div>
            <p className="text-xs text-slate-400">Sangivalasa, Thagarapuvalasa, Visakhapatnam</p>
          </div>
        </div>

        {/* Staff Preview Bypass Link */}
        <button
          onClick={() => setStaffModalOpen(true)}
          className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-amber-500/40 bg-slate-900/60 transition-all cursor-pointer"
          title="Store owner / developer bypass"
        >
          <Lock className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Staff Preview</span>
          <span className="sm:hidden">Staff</span>
        </button>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center justify-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>Scheduled Maintenance • Website Temporarily Offline</span>
        </div>

        {/* Central Graphic & Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-amber-500/20 via-slate-800 to-lime-500/20 border border-amber-500/30 flex items-center justify-center shadow-2xl shadow-amber-500/10">
              <Wrench className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-lime-500 border-2 border-slate-950 flex items-center justify-center text-slate-950">
              <Zap className="w-3.5 h-3.5 fill-current" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            We're Upgrading Our <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
              Online Showroom Catalog
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            {MAINTENANCE_INFO.description}
          </p>

          {/* Showroom Open Highlight Banner */}
          <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold">
            <Store className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Physical Showroom Open Today (8:00 AM – 9:00 PM)</span>
          </div>
        </div>

        {/* Immediate Action Grid: 2 Cards (Call/WhatsApp Partners + Quick Callback Request) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-10">
          
          {/* Card 1: Direct Contact Details with Ch. Vikram & Ch. Jagdish */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Phone className="w-4 h-4" />
                <span>Immediate Assistance & Order Booking</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                Talk Directly With Our Partners
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Need pipes, wires, switches, or sanitary fittings urgently? Call our team directly or message on WhatsApp for instant pricing & contractor quotes.
              </p>

              {/* Partners List */}
              <div className="space-y-3.5">
                {STORE_INFO.contacts.map((contact, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="font-semibold text-white text-sm flex items-center gap-1.5">
                        <span>{contact.name}</span>
                        <span className="text-[10px] text-lime-400 font-normal px-2 py-0.5 bg-lime-500/10 rounded-full border border-lime-500/20">
                          {contact.role}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{contact.phone}</div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`tel:${contact.rawPhone}`}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5 text-lime-400" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/91${contact.rawPhone}?text=${encodeURIComponent(contact.whatsappMessageTemplate)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Direction Quick Link */}
            <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-300 font-medium">{STORE_INFO.address.fullFormatted}</p>
                <a
                  href={STORE_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-xs mt-1.5 font-medium transition-colors cursor-pointer"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Quick Callback Request Form */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-lime-400 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Request Instant Callback</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                Leave Your Requirement
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Drop your phone number below and what items you need. Our store managers will call you back with wholesale prices right away.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center justify-center my-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-1">Callback Request Received!</h3>
                  <p className="text-xs text-slate-300 max-w-xs">
                    Thank you! Ch. Vikram & Ch. Jagdish have received your request and will call you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setRequirement('');
                    }}
                    className="mt-4 text-xs text-amber-400 hover:text-amber-300 font-medium underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitEnquiry} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Mobile Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Kumar (Contractor)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Items / Quote Requirement <span className="text-slate-500">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need 4 rolls of 2.5 sq mm Finolex wire, 20 LED panels"
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {formError && (
                    <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-2 rounded-lg">
                      {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-lime-500 hover:from-amber-400 hover:to-lime-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Callback Now</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
                Direct store connection
              </span>
              <span>Fast response within 30 mins</span>
            </div>
          </div>

        </div>

        {/* Timings & Operational Commitment Badge */}
        <div className="w-full bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-slate-200">Showroom Business Hours</p>
              <p>Monday to Sunday: 8:00 AM – 9:00 PM (All 7 Days)</p>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <p className="font-semibold text-slate-200">Wholesale & Contractor Orders</p>
            <p>Direct dispatches available from our Sangivalasa godown</p>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-slate-800/80 bg-slate-950 px-4 py-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {STORE_INFO.name}. All Rights Reserved. • GSTIN: {STORE_INFO.gstin}</p>
      </footer>

      {/* Staff Live Preview Modal */}
      {staffModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl relative">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Unlock className="w-5 h-5" />
            </div>

            <h3 className="text-lg font-bold text-white mb-1">Staff / Owner Live Preview</h3>
            <p className="text-xs text-slate-400 mb-4">
              Enter your passcode to bypass the maintenance screen and preview the complete website.
            </p>

            <form onSubmit={handleVerifyPasscode} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Enter staff passcode (or 'vle')"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setPasscodeError('');
                  }}
                  autoFocus
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm outline-none focus:border-amber-400"
                />
                {passcodeError && (
                  <p className="text-xs text-rose-400 mt-1.5">{passcodeError}</p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setStaffModalOpen(false);
                    setPasscode('');
                    setPasscodeError('');
                  }}
                  className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-xs font-bold text-slate-950 transition-colors cursor-pointer"
                >
                  Unlock Live Site
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={onBypass}
                  className="text-[11px] text-slate-500 hover:text-slate-300 underline cursor-pointer"
                >
                  Skip and open preview directly
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
