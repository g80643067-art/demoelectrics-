import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  X, 
  Star, 
  ShoppingBag, 
  Heart, 
  Check, 
  ShieldCheck, 
  Truck, 
  ArrowRight 
} from 'lucide-react';

export const QuickViewModal = () => {
  const { 
    quickViewProduct, 
    setQuickViewProduct, 
    addToCart, 
    viewProduct, 
    toggleWishlist, 
    isInWishlist 
  } = useStore();

  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const isFavorited = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setQuickViewProduct(null);
  };

  const handleViewFullDetails = () => {
    viewProduct(quickViewProduct.id);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-navy-card border border-cyan/40 p-6 sm:p-8 shadow-card-dark overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-navy-muted hover:text-white hover:bg-white/10 transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Product Image */}
          <div className="relative rounded-2xl bg-navy/80 p-6 flex items-center justify-center border border-navy-border">
            <div className="absolute inset-0 gobo-overlay opacity-30 pointer-events-none rounded-2xl" />
            <div className="absolute w-44 h-44 rounded-full border border-cyan/30 neon-ring pointer-events-none" />
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="relative z-10 w-full max-h-72 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right: Info & Controls */}
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-cyan tracking-widest uppercase mb-1">
              {quickViewProduct.category}
            </span>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              {quickViewProduct.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center text-cyan">
                <Star className="w-4 h-4 fill-cyan" />
              </div>
              <span className="text-sm font-bold text-white">{quickViewProduct.rating}</span>
              <span className="text-xs text-navy-muted">({quickViewProduct.reviewsCount} customer reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl font-black text-white">
                ${quickViewProduct.price.toFixed(2)}
              </span>
              <span className="text-sm text-navy-muted line-through">
                ${quickViewProduct.originalPrice.toFixed(2)}
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan/20 text-cyan">
                IN STOCK
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              {quickViewProduct.shortDesc}
            </p>

            {/* Key Specs Preview */}
            <div className="bg-navy-card/80 rounded-xl p-3 border border-navy-border mb-6 text-xs text-gray-300 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-navy-muted">Compliance:</span>
                <span className="text-white font-medium">IS 694 / IEC 60898 Certified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-muted">Warranty:</span>
                <span className="text-cyan font-medium">Direct Replacement Guarantee</span>
              </div>
            </div>

            {/* Quantity Selector + Add to Cart */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center rounded-xl bg-navy border border-navy-border p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center text-navy-muted hover:text-white"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-bold text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center text-navy-muted hover:text-white"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 transition-all"
              >
                <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                <span>ADD TO CART</span>
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className={`p-3 rounded-xl border transition-colors ${
                  isFavorited
                    ? 'border-cyan bg-cyan text-navy'
                    : 'border-navy-border bg-navy text-navy-muted hover:text-white'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-bistre-deep' : ''}`} />
              </button>
            </div>

            {/* Full Details Link */}
            <button
              onClick={handleViewFullDetails}
              className="text-xs font-semibold text-navy-muted hover:text-cyan flex items-center gap-1 transition-colors"
            >
              <span>View full specifications & technical test data</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
