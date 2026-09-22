import React, { useState } from 'react';
import { 
  X, 
  LayoutDashboard, 
  MessageSquareText, 
  Plus, 
  Search,
  ShieldCheck
} from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/products';
import { STORE_INFO } from '../../data/storeInfo';

interface AdminPreviewModalProps {
  onClose: () => void;
}

export const AdminPreviewModal: React.FC<AdminPreviewModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'enquiries' | 'pricing'>('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample mock enquiries waiting in the conceptual backend
  const mockEnquiries = [
    {
      id: 'ENQ-8821',
      customer: 'Srikanth Raju (Civil Contractor)',
      phone: '9848123456',
      product: 'Polycab 1.5 sq mm FR Wire & DB Boxes',
      category: 'Electricals',
      type: 'Wholesale Bulk',
      qty: '20 coils + 4 DBs',
      time: '18 mins ago',
      status: 'Pending Quotation'
    },
    {
      id: 'ENQ-8820',
      customer: 'M. Anand (Homeowner)',
      phone: '9989012345',
      product: 'Jaquar Basin Mixer & Rain Shower',
      category: 'Sanitary',
      type: 'Retail',
      qty: '2 sets',
      time: '2 hours ago',
      status: 'Contacted via WhatsApp'
    },
    {
      id: 'ENQ-8819',
      customer: 'G. Varun (Plumbing Contractor)',
      phone: '8919098765',
      product: 'Astral CPVC Pro 1" Pipes & Fittings',
      category: 'Plumbing',
      type: 'Wholesale Bulk',
      qty: '50 lengths + elbows',
      time: '5 hours ago',
      status: 'Dispatched to Site'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-white">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950 text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-black">
                  Vijaya Lakshmi Electricals — Future Store Admin
                </h2>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-500/30">
                  Concept Preview
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Architectural blueprint for connecting database, inventory, and automated quote dispatch.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center px-6 border-b border-slate-800 bg-slate-950/80 gap-2 overflow-x-auto text-xs font-bold scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-blue-500 text-blue-400 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Store Overview &amp; Metrics
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`py-3 px-3.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'products'
                ? 'border-blue-500 text-blue-400 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Catalog &amp; Inventory ({PRODUCTS_DATA.length})
          </button>
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`py-3 px-3.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'enquiries'
                ? 'border-blue-500 text-blue-400 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Live Customer Enquiries ({mockEnquiries.length})
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`py-3 px-3.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'pricing'
                ? 'border-blue-500 text-blue-400 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Wholesale Price Matrices
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stat Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-bold text-blue-400">Total Live Catalog Items</div>
                  <div className="text-2xl font-black text-white mt-1">{PRODUCTS_DATA.length} Items</div>
                  <div className="text-[11px] text-slate-400 mt-1">Across 4 core categories</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-bold text-emerald-400">Wholesale Contractors</div>
                  <div className="text-2xl font-black text-white mt-1">48 Active</div>
                  <div className="text-[11px] text-slate-400 mt-1">Visakha district network</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-bold text-amber-400">Pending Quote Requests</div>
                  <div className="text-2xl font-black text-white mt-1">3 Leads</div>
                  <div className="text-[11px] text-slate-400 mt-1">Ready for Vikram &amp; Jagdish</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-bold text-purple-400">Inventory Status</div>
                  <div className="text-2xl font-black text-white mt-1">98% In Stock</div>
                  <div className="text-[11px] text-slate-400 mt-1">Counter pickup ready</div>
                </div>
              </div>

              {/* Ready for Backend Architecture Schema */}
              <div className="p-5 rounded-xl bg-slate-950 text-white space-y-3 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Future Backend Architecture Blueprint
                  </span>
                  <span className="text-xs font-mono text-emerald-400">REST / GraphQL Ready</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The frontend is architected with modular TypeScript contracts (<code className="text-amber-300">src/types/index.ts</code>). 
                  When you are ready to connect a backend (e.g. Node.js/PostgreSQL or Supabase), the UI is already prepared to consume authenticated endpoints:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-slate-300">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">GET /api/v1/products</div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">POST /api/v1/enquiry</div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">PATCH /api/v1/prices</div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">POST /api/v1/whatsapp-bot</div>
                </div>
              </div>

              {/* Recent Enquiries Preview */}
              <div>
                <h3 className="text-sm font-bold text-white mb-3">
                  Recent Incoming Customer Enquiries (Mock Stream)
                </h3>
                <div className="border border-slate-800 rounded-xl overflow-hidden divide-y divide-slate-800 text-xs">
                  {mockEnquiries.map((enq) => (
                    <div key={enq.id} className="p-3.5 flex flex-wrap items-center justify-between gap-3 bg-slate-950/60 hover:bg-slate-900">
                      <div>
                        <div className="font-bold text-white flex items-center gap-2">
                          <span>{enq.customer}</span>
                          <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-600/40">
                            {enq.type}
                          </span>
                        </div>
                        <div className="text-slate-400 mt-0.5">
                          Requires: <strong className="text-white">{enq.product}</strong> ({enq.qty})
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-600/40">
                          {enq.status}
                        </span>
                        <div className="text-[10px] text-slate-500 mt-1">{enq.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTS */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Filter products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => alert('Demo Mode: Future Backend will enable adding new product SKUs with image uploads.')}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-blue-500 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Product SKU</span>
                </button>
              </div>

              <div className="border border-slate-800 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left divide-y divide-slate-800">
                  <thead className="bg-slate-950 font-bold text-slate-300">
                    <tr>
                      <th className="p-3">Product Name</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Brand</th>
                      <th className="p-3">Demo Price</th>
                      <th className="p-3">Stock Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-900">
                    {PRODUCTS_DATA.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 8).map((p) => (
                      <tr key={p.id} className="hover:bg-slate-850">
                        <td className="p-3 font-bold text-white">{p.name}</td>
                        <td className="p-3 capitalize text-slate-300">{p.category}</td>
                        <td className="p-3 font-semibold text-blue-400">{p.brand}</td>
                        <td className="p-3 font-mono font-bold text-amber-400">₹{p.demoPrice} / {p.unit}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-600/40">
                            {p.availability}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: ENQUIRIES */}
          {activeTab === 'enquiries' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-300">
                Customer submissions from the website form will automatically route here, with automatic WhatsApp push notifications to <strong>Vikram (9441160851)</strong> and <strong>Jagdish (7296856740)</strong>.
              </div>

              <div className="space-y-3">
                {mockEnquiries.map((enq) => (
                  <div key={enq.id} className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-blue-400">{enq.id}</span>
                      <span className="text-[11px] text-slate-500">{enq.time}</span>
                    </div>
                    <div className="text-sm font-bold text-white">{enq.customer} — {enq.phone}</div>
                    <div className="text-xs text-slate-400">
                      Product Requested: <strong className="text-white">{enq.product}</strong> ({enq.qty})
                    </div>
                    <div className="flex gap-2 pt-2">
                      <a
                        href={`https://wa.me/91${enq.phone}?text=${encodeURIComponent(`Hello ${enq.customer}, regarding your enquiry for ${enq.product} at Vijaya Lakshmi Electricals:`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                      >
                        <MessageSquareText className="w-3 h-3" />
                        <span>Send WhatsApp Quote</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PRICING */}
          {activeTab === 'pricing' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-950/80 border border-blue-500/30 text-xs text-blue-300">
                <strong>Dynamic Contractor Price Tiers:</strong> This future interface will allow Vikram and Jagdish to update copper wire index margins, Astral pipe discounts, and bulk contractor brackets in one click.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80">
                  <div className="font-bold text-white mb-2">Copper Wire Margin Index</div>
                  <div className="text-slate-400 mb-3">Polycab &amp; RR Kabel 90m base coils</div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-amber-400">Standard Discount: 28% off MRP</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80">
                  <div className="font-bold text-white mb-2">Plumbing Bulk Tier</div>
                  <div className="text-slate-400 mb-3">Astral CPVC Pro &amp; Sudhakar uPVC</div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-amber-400">Builder Rate: 32% off MRP</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Vijaya Lakshmi Electricals • GSTIN: {STORE_INFO.gstin}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
