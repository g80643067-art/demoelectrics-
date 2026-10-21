import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { 
  SlidersHorizontal, 
  Search, 
  X, 
  ChevronDown, 
  RotateCcw,
  Sparkles,
  Zap
} from 'lucide-react';

export const ShopPage = () => {
  const { products, categories, selectedCategory, setSelectedCategory } = useStore();

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'all');
  const [maxPrice, setMaxPrice] = useState(150);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Synchronize when store context selectedCategory changes
  React.useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (activeCategory !== 'all' && p.category !== activeCategory) {
          return false;
        }
        // Price filter
        if (p.price > maxPrice) {
          return false;
        }
        // In stock filter
        if (inStockOnly && !p.inStock) {
          return false;
        }
        // Search filter
        if (
          search.trim() &&
          !p.name.toLowerCase().includes(search.toLowerCase()) &&
          !p.shortDesc.toLowerCase().includes(search.toLowerCase())
        ) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured default
      });
  }, [products, activeCategory, maxPrice, inStockOnly, search, sortBy]);

  const resetFilters = () => {
    setActiveCategory('all');
    setSelectedCategory('all');
    setMaxPrice(150);
    setInStockOnly(false);
    setSearch('');
    setSortBy('featured');
  };

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Breadcrumb & Header */}
        <div className="text-left mb-8">
          <div className="flex items-center gap-2 text-xs text-navy-muted mb-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-cyan font-medium">Electrical Catalog</span>
            {activeCategory !== 'all' && (
              <>
                <span>/</span>
                <span className="text-white capitalize">{activeCategory}</span>
              </>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complete Electrical Catalogue
          </h1>
          <p className="text-navy-muted text-sm mt-1 max-w-xl">
            Explore commercial and residential grade electrical supplies, tested to international safety benchmarks.
          </p>
        </div>

        {/* Filter & Search Bar Top Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-navy-card p-4 rounded-2xl border border-navy-border">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-navy-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by keyword, voltage, or standard..."
              className="w-full bg-navy border border-navy-border rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan"
            />
            {search && (
              <button 
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-muted hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy border border-navy-border text-xs font-semibold text-white"
            >
              <SlidersHorizontal className="w-4 h-4 text-cyan" />
              <span>Filters</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-navy-muted hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-navy text-white text-xs border border-navy-border rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-cyan"
              >
                <option value="featured">Featured / Best Match</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Main Grid + Sidebar Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          {/* Desktop Left Sidebar Filters */}
          <div className="hidden md:block md:col-span-3 space-y-6">
            
            {/* Active Filters Summary & Reset */}
            <div className="p-5 rounded-2xl bg-navy-card border border-navy-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-cyan" /> Filters
                </span>
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-navy-muted hover:text-cyan flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Category Radio/Pill list */}
              <div className="space-y-1.5 pt-2 border-t border-navy-border">
                <p className="text-[11px] font-bold text-navy-muted uppercase tracking-wider mb-2">
                  Category
                </p>
                <button
                  onClick={() => { setActiveCategory('all'); setSelectedCategory('all'); }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                    activeCategory === 'all'
                      ? 'bg-cyan text-navy font-bold shadow-glow-cyan'
                      : 'text-navy-muted hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>All Categories</span>
                  <span className="text-[10px] opacity-70">{products.length}</span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setSelectedCategory(cat.id); }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                      activeCategory === cat.id
                        ? 'bg-cyan text-navy font-bold shadow-glow-cyan'
                        : 'text-navy-muted hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-70">
                      {products.filter((p) => p.category === cat.id).length}
                    </span>
                  </button>
                ))}
              </div>

              {/* Price Range Slider */}
              <div className="pt-4 border-t border-navy-border">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-bold text-navy-muted uppercase tracking-wider text-[11px]">Max Price</span>
                  <span className="font-bold text-cyan">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="150"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-cyan cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-navy-muted mt-1">
                  <span>$20</span>
                  <span>$150</span>
                </div>
              </div>

              {/* In-Stock Only Toggle */}
              <div className="pt-4 border-t border-navy-border flex items-center justify-between">
                <span className="text-xs text-navy-muted font-medium">In-Stock Only</span>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 accent-cyan rounded cursor-pointer"
                />
              </div>

            </div>

            {/* Quick Promo Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-section to-navy-card border border-navy-border text-xs">
              <Zap className="w-5 h-5 text-cyan mb-2" />
              <p className="font-bold text-white mb-1">Contractor Bulk Discounts</p>
              <p className="text-navy-muted text-[11px] leading-relaxed mb-3">
                Ordering over 50 units for commercial construction? Get direct wholesale pricing and tax invoices.
              </p>
              <a href="#contact" className="text-cyan font-bold hover:underline">
                Contact B2B Desk →
              </a>
            </div>

          </div>

          {/* Product Grid Area */}
          <div className="col-span-1 md:col-span-9">
            
            {/* Products count and active filter tags */}
            <div className="flex items-center justify-between mb-6 text-xs text-navy-muted">
              <p>
                Showing <span className="font-bold text-white">{filteredProducts.length}</span> of {products.length} products
              </p>
              {activeCategory !== 'all' && (
                <span className="bg-cyan/15 text-cyan border border-cyan/30 px-2.5 py-1 rounded-full font-semibold flex items-center gap-1">
                  Category: {activeCategory}
                  <button onClick={() => { setActiveCategory('all'); setSelectedCategory('all'); }}>
                    <X className="w-3 h-3 ml-1 hover:text-white" />
                  </button>
                </span>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center bg-navy-card/50 rounded-3xl border border-navy-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center text-navy-muted">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">No matching electricals</h3>
                <p className="text-sm text-navy-muted max-w-sm mx-auto mb-6">
                  We couldn't find any products matching your specific filters. Try loosening your price limit or clearing filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full bg-cyan text-navy font-bold text-xs shadow-glow-cyan"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
