import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Zap, 
  Pipette, 
  Bath, 
  Wrench, 
  ArrowUpDown, 
  Info, 
  RefreshCw
} from 'lucide-react';
import type { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { BRANDS_DATA } from '../../data/brands';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onViewDetails: (product: Product) => void;
  onEnquire: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onViewDetails,
  onEnquire
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(6000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name-asc'>('featured');

  // Search keyword suggestions
  const searchSuggestions = ['Wire', 'CPVC Pipe', 'Switch', 'MCB', 'Tap', 'Basin', 'Lock', 'Polycab', 'CERA', 'Havells'];

  const categoriesList = [
    { id: 'all', label: 'All Categories', icon: null },
    { id: 'electricals', label: 'Electricals', icon: Zap },
    { id: 'plumbing', label: 'Plumbing', icon: Pipette },
    { id: 'sanitary', label: 'Sanitary', icon: Bath },
    { id: 'hardware', label: 'Hardware', icon: Wrench },
  ];

  // Filtered and Sorted products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Brand match
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }

      // Availability match
      if (selectedAvailability !== 'all' && product.availability !== selectedAvailability) {
        return false;
      }

      // Max price match
      if (product.demoPrice > maxPriceFilter) {
        return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesSub = product.subCategory.toLowerCase().includes(q);
        const matchesTags = product.tags.some(tag => tag.toLowerCase().includes(q));
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);

        if (!matchesName && !matchesBrand && !matchesSub && !matchesTags && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.demoPrice - b.demoPrice;
      if (sortBy === 'price-desc') return b.demoPrice - a.demoPrice;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [products, selectedCategory, selectedBrand, selectedAvailability, maxPriceFilter, searchQuery, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    onSelectCategory('all');
    setSelectedBrand('all');
    setSelectedAvailability('all');
    setMaxPriceFilter(6000);
    setSortBy('featured');
  };

  const activeFilterCount = (selectedCategory !== 'all' ? 1 : 0) +
    (selectedBrand !== 'all' ? 1 : 0) +
    (selectedAvailability !== 'all' ? 1 : 0) +
    (maxPriceFilter < 6000 ? 1 : 0) +
    (searchQuery.trim() !== '' ? 1 : 0);

  return (
    <section id="products" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider mb-2">
              Digital Showroom Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Featured Products &amp; Materials
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Popular products across electrical, plumbing, sanitary, and hardware categories. 
              Search specs, inspect indicative demo pricing, and request instant store quotes.
            </p>
          </div>

          {/* Demo Pricing Notice Badge */}
          <div className="bg-lime-50 border border-lime-200 rounded-xl p-3 text-xs text-lime-900 max-w-sm flex items-start gap-2.5 shadow-2xs">
            <Info className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
            <span className="leading-snug">
              <strong>Demo Pricing Notice:</strong> Indicative demo prices shown. Actual store billing depends on volume, market raw materials, and contractor rates.
            </span>
          </div>
        </div>

        {/* Search Bar & Suggestion Tags */}
        <div className="mb-8 space-y-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name, brand (Polycab, Astral, CERA...), type (wire, pipe, tap, MCB)..."
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 focus:bg-white text-sm sm:text-base transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Search Suggestions */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-500 font-medium">Quick suggestions:</span>
            {searchSuggestions.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => setSearchQuery(tag)}
                className="px-2.5 py-1 bg-white border border-slate-200 hover:border-lime-400 hover:bg-lime-50 hover:text-lime-800 text-slate-700 font-medium rounded-md transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categoriesList.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-lime-500 text-slate-950 font-black shadow-md shadow-lime-500/25 border border-lime-400'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 font-semibold'
                }`}
              >
                {Icon && <Icon className={`w-4 h-4 ${isSelected ? 'text-slate-950' : 'text-slate-500'}`} />}
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isSelected ? 'bg-slate-950 text-lime-400' : 'bg-slate-100 text-slate-600'}`}>
                  {cat.id === 'all' 
                    ? products.length 
                    : products.filter(p => p.category === cat.id).length
                  }
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter Controls Bar & Sort */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 mb-8 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          
          {/* Left filters: Brand & Price Range */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
            {/* Brand Filter */}
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="text-slate-500 font-medium">Brand:</span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="all">All Available Brands</option>
                {BRANDS_DATA.map((brand) => (
                  <option key={brand.id} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Availability Filter */}
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="text-slate-500 font-medium">Status:</span>
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="all">All Availability</option>
                <option value="In Stock">In Stock (Counter Ready)</option>
                <option value="Wholesale Bulk Available">Wholesale Bulk</option>
              </select>
            </div>

            {/* Price Cap Slider */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="text-slate-500 font-medium">Max Demo Price:</span>
              <span className="font-black font-mono text-lime-700">₹{maxPriceFilter}</span>
              <input
                type="range"
                min="100"
                max="6000"
                step="100"
                value={maxPriceFilter}
                onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
                className="w-24 accent-lime-600 cursor-pointer"
              />
            </div>

            {/* Clear All Reset Button */}
            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors px-2.5 py-1 bg-rose-50 rounded border border-rose-200 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Filters ({activeFilterCount})</span>
              </button>
            )}
          </div>

          {/* Right Sort selector */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-slate-500 font-medium hidden sm:inline">Sort:</span>
            <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <span>
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {products.length} catalog items
          </span>
          {selectedCategory !== 'all' && (
            <span className="capitalize font-bold text-lime-700">
              Viewing {selectedCategory} category
            </span>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
                onEnquire={onEnquire}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              We couldn’t find products matching "{searchQuery}". Try searching for Polycab, Astral, switch, pipe, or tap.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-lime-500 text-slate-950 rounded-lg font-black text-xs hover:bg-lime-400 transition-colors cursor-pointer shadow-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
