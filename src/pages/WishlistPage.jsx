import React from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';

export const WishlistPage = () => {
  const { wishlist, products, addToCart, goToPage } = useStore();

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  const handleAddAllToCart = () => {
    wishlistedProducts.forEach((p) => addToCart(p, 1));
  };

  if (wishlistedProducts.length === 0) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 rounded-full bg-navy-card border border-navy-border flex items-center justify-center text-cyan mx-auto mb-5">
          <Heart className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-extrabold text-white mb-2">Your Wishlist is Empty</h2>
        <p className="text-navy-muted text-xs mb-8">
          Save electrical products while browsing so you can easily review and order them later.
        </p>
        <button
          onClick={() => goToPage('shop')}
          className="px-8 py-3.5 rounded-full bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300"
        >
          EXPLORE CATALOGUE
        </button>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-navy-border">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              My Saved Wishlist
            </h1>
            <p className="text-xs sm:text-sm text-navy-muted mt-1">
              {wishlistedProducts.length} items saved for upcoming installations
            </p>
          </div>

          <button
            onClick={handleAddAllToCart}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 transition-all"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
            <span>MOVE ALL TO CART</span>
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
};
