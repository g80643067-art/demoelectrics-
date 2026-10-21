import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Search, X, ArrowRight, Zap, Star } from 'lucide-react';

export const SearchModal = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    products, 
    categories, 
    viewProduct, 
    goToPage, 
    setSelectedCategory 
  } = useStore();

  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDesc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelectProduct = (productId) => {
    setIsSearchOpen(false);
    viewProduct(productId);
  };

  const handleSelectCategory = (catId) => {
    setIsSearchOpen(false);
    setSelectedCategory(catId);
    goToPage('shop', { category: catId });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-navy-card border border-cyan/40 rounded-3xl p-6 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-navy-border pb-4">
          <Search className="w-5 h-5 text-cyan mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search LED bulbs, switches, MCBs, wires, fans..."
            autoFocus
            className="w-full bg-transparent text-lg text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-navy-muted hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Category Chips */}
        <div className="py-4 border-b border-navy-border">
          <p className="text-[11px] font-bold text-navy-muted uppercase tracking-wider mb-2 text-left">
            Popular Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className="px-3 py-1 rounded-full bg-navy border border-navy-border text-xs text-gray-300 hover:border-cyan hover:text-cyan transition-colors"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-3">
          {query.trim() && filtered.length === 0 ? (
            <div className="py-8 text-center text-navy-muted text-sm">
              No electrical products found for "{query}". Try "switch", "bulb", or "copper".
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {(query.trim() ? filtered : products.slice(0, 4)).map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product.id)}
                  className="flex items-center gap-4 py-3 px-2 rounded-xl hover:bg-white/5 cursor-pointer transition-colors text-left group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-contain rounded-lg bg-navy p-1 border border-navy-border"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-cyan font-semibold uppercase">
                      {product.category}
                    </p>
                    <p className="text-sm font-bold text-white truncate group-hover:text-cyan transition-colors">
                      {product.name}
                    </p>
                    <p className="text-xs text-navy-muted truncate">
                      {product.shortDesc}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-extrabold text-white">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-cyan justify-end">
                      <Star className="w-3 h-3 fill-cyan" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
