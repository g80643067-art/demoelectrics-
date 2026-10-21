import React from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Heart, 
  ShoppingBag, 
  Eye, 
  Star, 
  Zap, 
  Check 
} from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { 
    viewProduct, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setQuickViewProduct 
  } = useStore();

  const isFavorited = isInWishlist(product.id);
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group relative rounded-2xl bg-gradient-to-b from-navy-card/95 to-navy/95 border border-navy-border hover:border-cyan/60 shadow-card-dark transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-cyan flex flex-col justify-between overflow-hidden">
      
      {/* Top Bar inside card: Badge + Wishlist */}
      <div className="p-3.5 flex items-center justify-between z-10">
        {product.badge ? (
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan text-navy shadow-glow-cyan">
            {product.badge}
          </span>
        ) : (
          <span className="text-[10px] font-semibold text-navy-muted uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-navy-border">
            {discountPercent}% OFF
          </span>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`p-2 rounded-full transition-all duration-200 ${
            isFavorited
              ? 'bg-cyan text-navy shadow-glow-cyan'
              : 'bg-black/40 text-navy-muted hover:text-white hover:bg-black/60'
          }`}
          title={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-navy' : ''}`} />
        </button>
      </div>

      {/* Product Image on Studio Shadow Pedestal */}
      <div 
        onClick={() => viewProduct(product.id)}
        className="relative w-full aspect-square px-4 flex items-center justify-center cursor-pointer"
      >
        {/* Soft shadow base */}
        <div className="absolute bottom-2 w-2/3 h-4 bg-black/80 blur-md rounded-full" />
        
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Quick View Trigger */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewProduct(product);
          }}
          className="absolute inset-x-8 bottom-3 py-2 rounded-xl bg-navy/95 border border-cyan/40 text-cyan text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-md hover:bg-cyan hover:text-navy shadow-lg"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Information */}
      <div className="p-4 pt-2 flex flex-col flex-grow justify-between text-left">
        
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex items-center text-cyan">
              <Star className="w-3.5 h-3.5 fill-cyan" />
            </div>
            <span className="text-xs font-bold text-white">{product.rating}</span>
            <span className="text-[10px] text-navy-muted">({product.reviewsCount})</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => viewProduct(product.id)}
            className="text-sm font-bold text-white group-hover:text-cyan transition-colors line-clamp-2 cursor-pointer mb-2"
          >
            {product.name}
          </h3>

          {/* Short specs bullet */}
          <p className="text-xs text-navy-muted line-clamp-1 mb-3">
            {product.shortDesc}
          </p>
        </div>

        {/* Price & Add to Cart button */}
        <div className="pt-3 border-t border-navy-border flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-col">
            <span className="text-[11px] text-navy-muted line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="text-base font-extrabold text-white">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 transition-all active:scale-95"
            title="Add to Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>

    </div>
  );
};
