import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  Layers, 
  Zap, 
  ShieldCheck,
  LayoutDashboard
} from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenEnquiry: (productName?: string) => void;
  onOpenAdminPreview: () => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenEnquiry,
  onOpenAdminPreview,
  activeCategory: _activeCategory,
  onSelectCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Categories', href: '#categories' },
    { label: 'Electricals', href: '#products', category: 'electricals' },
    { label: 'Plumbing', href: '#products', category: 'plumbing' },
    { label: 'Sanitary', href: '#products', category: 'sanitary' },
    { label: 'Hardware', href: '#products', category: 'hardware' },
    { label: 'Brands', href: '#brands' },
    { label: 'Live Showroom', href: '#showroom-gallery' },
    { label: 'Wholesale & Retail', href: '#wholesale' },
    { label: 'Store & Contact', href: '#store' }
  ];

  const handleCategoryClick = (category?: string, href?: string) => {
    if (category) {
      onSelectCategory(category);
    }
    if (href) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro bar for GSTIN & Local Notice */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-lime-400" />
              Sangivalasa, Thagarapuvalasa, Visakha Dist.
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="inline-flex items-center gap-1 text-slate-300 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              GSTIN: <span className="font-semibold text-white tracking-wider">{STORE_INFO.gstin}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="bg-lime-900/60 text-lime-300 font-bold px-2 py-0.5 rounded border border-lime-700/50">
              WHOLESALE &amp; RETAIL
            </span>
            <button
              onClick={onOpenAdminPreview}
              className="text-lime-300 hover:text-lime-200 inline-flex items-center gap-1 transition-colors ml-1 font-semibold underline underline-offset-2 cursor-pointer"
              title="Preview Future Store Admin Architecture"
            >
              <LayoutDashboard className="w-3 h-3" />
              <span>Admin Preview</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-md py-2.5' : 'bg-white/95 backdrop-blur-xl py-3 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-lg p-1"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-lime-500 via-lime-600 to-emerald-700 flex items-center justify-center text-white font-black shadow-md shadow-lime-500/25 border border-lime-400/40 group-hover:scale-105 transition-transform">
              <span className="text-lg tracking-tighter">VL</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-lime-400 rounded-full border-2 border-white animate-ping opacity-75"></span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-lime-400 rounded-full border-2 border-white"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-tight group-hover:text-lime-700 transition-colors uppercase">
                Vijaya Lakshmi
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-xs font-extrabold tracking-widest text-lime-700 uppercase">
                  Electricals
                </span>
                <span className="text-[10px] text-lime-900 bg-lime-100 font-bold px-1.5 py-0.2 rounded border border-lime-300">
                  Wholesale &amp; Retail
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-xs lg:text-sm font-bold text-slate-700">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryClick(link.category, link.href)}
                className="px-2.5 py-1.5 rounded-lg hover:text-lime-800 hover:bg-lime-50 transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg border border-slate-200 transition-all cursor-pointer"
              title="Search products (wire, pipe, tap, MCB...)"
            >
              <Search className="w-4 h-4 text-lime-700" />
              <span className="hidden md:inline font-semibold">Search Catalog...</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-white border border-slate-300 rounded text-slate-500 shadow-xs">
                /
              </kbd>
            </button>

            {/* Direct Call Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCallDropdownOpen(!callDropdownOpen)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-lime-600" />
                <span>Call Store</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${callDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {callDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setCallDropdownOpen(false)}
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1 border-b border-slate-100 mb-1">
                    Direct Store Lines
                  </div>
                  {STORE_INFO.contacts.map((contact, idx) => (
                    <a
                      key={idx}
                      href={`tel:${contact.rawPhone}`}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-lime-50 transition-colors group"
                      onClick={() => setCallDropdownOpen(false)}
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-lime-700">
                          {contact.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {contact.role}
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-lime-700 bg-lime-100 px-2 py-1 rounded border border-lime-300">
                        {contact.phone}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Direct WhatsApp Action */}
            <a
              href={`https://wa.me/91${STORE_INFO.whatsappPhone}?text=${encodeURIComponent(
                'Hello Vijaya Lakshmi Electricals, I am inquiring about product prices and stock availability.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm shadow-emerald-600/30 transition-all hover:scale-102"
              title="Chat on WhatsApp with store"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Request Quote Button */}
            <button
              onClick={() => onOpenEnquiry()}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-black text-slate-950 bg-lime-400 hover:bg-lime-300 rounded-lg shadow-md shadow-lime-400/30 transition-all hover:scale-102 cursor-pointer border border-lime-500/40"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Enquire Now</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top-3 duration-200">
            <div className="grid grid-cols-2 gap-2 mb-4 pb-3 border-b border-slate-100">
              <button
                onClick={() => handleCategoryClick('electricals', '#products')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-lime-50 border border-lime-200 text-lime-900 font-bold text-xs text-left"
              >
                <Zap className="w-4 h-4 text-lime-600" />
                <span>Electricals</span>
              </button>
              <button
                onClick={() => handleCategoryClick('plumbing', '#products')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 font-bold text-xs text-left"
              >
                <Layers className="w-4 h-4 text-teal-600" />
                <span>Plumbing</span>
              </button>
              <button
                onClick={() => handleCategoryClick('sanitary', '#products')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-xs text-left"
              >
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Sanitary</span>
              </button>
              <button
                onClick={() => handleCategoryClick('hardware', '#products')}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs text-left"
              >
                <Layers className="w-4 h-4 text-slate-600" />
                <span>Hardware</span>
              </button>
            </div>

            <div className="flex flex-col space-y-2 mb-5">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryClick(link.category, link.href)}
                  className="text-left px-3 py-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-lime-50 font-bold text-sm transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Call Direct Buttons */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Call Direct:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:9441160851`}
                  className="flex flex-col items-center justify-center p-2.5 bg-slate-50 border border-slate-200 hover:bg-lime-50 rounded-lg text-center"
                >
                  <span className="text-xs font-bold text-slate-900">Ch. Vikram</span>
                  <span className="text-[11px] font-mono font-bold text-lime-700">9441160851</span>
                </a>
                <a
                  href={`tel:7296856740`}
                  className="flex flex-col items-center justify-center p-2.5 bg-slate-50 border border-slate-200 hover:bg-lime-50 rounded-lg text-center"
                >
                  <span className="text-xs font-bold text-slate-900">Ch. Jagdish</span>
                  <span className="text-[11px] font-mono font-bold text-lime-700">7296856740</span>
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full mt-3 py-3 rounded-lg bg-lime-500 text-slate-950 font-black text-sm shadow-md hover:bg-lime-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>Submit Product Enquiry</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
