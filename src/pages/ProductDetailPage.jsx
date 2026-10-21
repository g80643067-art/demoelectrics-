import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  ArrowRight, 
  Zap, 
  Share2,
  FileText
} from 'lucide-react';

export const ProductDetailPage = () => {
  const { 
    selectedProductId, 
    products, 
    addToCart, 
    goToPage, 
    toggleWishlist, 
    isInWishlist,
    showToast 
  } = useStore();

  const product = products.find((p) => p.id === selectedProductId) || products[0];
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'desc' | 'reviews'

  // Update selected image if product changes
  React.useEffect(() => {
    setSelectedImage(product.image);
    setQuantity(1);
  }, [product]);

  const isFavorited = isInWishlist(product.id);
  const discountAmount = (product.originalPrice - product.price).toFixed(2);
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    goToPage('checkout');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast("Product link copied to clipboard!");
  };

  return (
    <div className="py-8 sm:py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-navy-muted mb-8">
          <button onClick={() => goToPage('home')} className="hover:text-white">Home</button>
          <span>/</span>
          <button onClick={() => goToPage('shop')} className="hover:text-white">Shop</button>
          <span>/</span>
          <span className="text-cyan font-medium capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-white truncate max-w-xs">{product.name}</span>
        </div>

        {/* Top Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Image Gallery on Studio Pedestal */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative rounded-3xl bg-gradient-to-b from-navy-card to-navy border border-navy-border p-8 sm:p-12 aspect-square flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 gobo-overlay opacity-40 pointer-events-none" />
              <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-cyan/30 neon-ring pointer-events-none" />
              <div className="absolute bottom-6 w-64 h-12 rounded-[50%] pedestal-base" />

              <img
                src={selectedImage}
                alt={product.name}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)] transition-all duration-300 hover:scale-105"
              />

              {product.badge && (
                <span className="absolute top-4 left-4 bg-cyan text-navy text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-glow-cyan">
                  {product.badge}
                </span>
              )}

              <button
                onClick={handleShare}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-navy/90 border border-navy-border text-navy-muted hover:text-white hover:border-cyan transition-colors"
                title="Share Product"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`w-20 h-20 rounded-2xl bg-navy-card border p-2 flex-shrink-0 transition-all ${
                      selectedImage === imgUrl
                        ? 'border-cyan shadow-glow-cyan'
                        : 'border-navy-border opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${idx}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Right Column: Purchasing & Technical Overview */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            
            {/* Category and stock tag */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan uppercase">
                {product.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan/10 text-cyan border border-cyan/25 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                In Stock ({product.stockCount} available)
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1 text-cyan">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-cyan'
                        : 'text-navy-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-white">{product.rating}</span>
              <span className="text-xs text-navy-muted">
                ({product.reviewsCount} contractor reviews)
              </span>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-navy-card border border-navy-border mb-6 flex items-baseline gap-4">
              <span className="text-3xl sm:text-4xl font-black text-white">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-base text-navy-muted line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-xs font-bold text-navy bg-cyan px-2.5 py-1 rounded-md shadow-glow-cyan">
                Save ${discountAmount} ({discountPercent}% OFF)
              </span>
            </div>

            {/* Short summary */}
            <p className="text-navy-muted text-sm leading-relaxed mb-6 font-light">
              {product.description}
            </p>

            {/* Key features bullets */}
            <div className="space-y-2 mb-8">
              {product.features?.map((feat, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs text-navy-muted">
                  <div className="mt-0.5 p-0.5 rounded-full bg-cyan/20 text-cyan">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Quantity Selector + Add to Cart + Buy Now */}
            <div className="space-y-3 pt-6 border-t border-navy-border">
              
              <div className="flex items-center gap-4">
                
                {/* Quantity */}
                <div className="flex items-center rounded-xl bg-navy-card border border-navy-border p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-navy-muted hover:text-white text-base font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-white text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-navy-muted hover:text-white text-base font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 transition-all transform hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                  <span>ADD TO CART</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3.5 rounded-xl border transition-colors ${
                    isFavorited
                      ? 'border-cyan bg-cyan text-navy'
                      : 'border-navy-border bg-navy-card text-navy-muted hover:text-white'
                  }`}
                  title={isFavorited ? "In Wishlist" : "Save to Wishlist"}
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-navy' : ''}`} />
                </button>

              </div>

              {/* Instant Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs tracking-wider border border-navy-border transition-colors flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-cyan" />
                <span>BUY NOW WITH 1-CLICK CHECKOUT</span>
              </button>

            </div>

            {/* Trust assurances box */}
            <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-navy-border text-center">
              <div className="p-3 rounded-xl bg-navy-card border border-navy-border">
                <Truck className="w-5 h-5 text-cyan mx-auto mb-1" />
                <p className="text-[11px] font-bold text-white">Free Express</p>
                <p className="text-[10px] text-navy-muted">On orders $49+</p>
              </div>

              <div className="p-3 rounded-xl bg-navy-card border border-navy-border">
                <ShieldCheck className="w-5 h-5 text-cyan mx-auto mb-1" />
                <p className="text-[11px] font-bold text-white">2 Yr Warranty</p>
                <p className="text-[10px] text-navy-muted">Replacement</p>
              </div>

              <div className="p-3 rounded-xl bg-navy-card border border-navy-border">
                <RotateCcw className="w-5 h-5 text-cyan mx-auto mb-1" />
                <p className="text-[11px] font-bold text-white">30 Day Returns</p>
                <p className="text-[10px] text-navy-muted">Zero hassle</p>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs: Specifications, Description, Reviews */}
        <div className="border-t border-navy-border pt-10 mb-16">
          
          <div className="flex border-b border-navy-border gap-6 sm:gap-8 mb-8">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-4 text-sm font-bold tracking-wider uppercase transition-colors relative ${
                activeTab === 'specs'
                  ? 'text-cyan'
                  : 'text-navy-muted hover:text-white'
              }`}
            >
              Technical Specifications
              {activeTab === 'specs' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan shadow-glow-cyan" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('desc')}
              className={`pb-4 text-sm font-bold tracking-wider uppercase transition-colors relative ${
                activeTab === 'desc'
                  ? 'text-cyan'
                  : 'text-navy-muted hover:text-white'
              }`}
            >
              Safety & Standards
              {activeTab === 'desc' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan shadow-glow-cyan" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 text-sm font-bold tracking-wider uppercase transition-colors relative ${
                activeTab === 'reviews'
                  ? 'text-cyan'
                  : 'text-navy-muted hover:text-white'
              }`}
            >
              Contractor Reviews ({product.reviewsCount})
              {activeTab === 'reviews' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan shadow-glow-cyan" />
              )}
            </button>
          </div>

          {/* Specs Table */}
          {activeTab === 'specs' && (
            <div className="rounded-2xl bg-navy-card border border-navy-border overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-navy-border">
                  {Object.entries(product.specs || {}).map(([key, val], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                      <td className="px-6 py-3.5 font-semibold text-navy-muted w-1/3 sm:w-1/4">
                        {key}
                      </td>
                      <td className="px-6 py-3.5 font-medium text-white">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Safety & Standards Tab */}
          {activeTab === 'desc' && (
            <div className="p-6 rounded-2xl bg-navy-card border border-navy-border space-y-4 text-sm text-gray-300 leading-relaxed">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan" /> Quality & Code Compliance
              </h4>
              <p>
                This product is certified under national electrical codes and subjected to rigorous dielectric withstand tests at 2000V AC. Conductor materials are inspected via optical emission spectrometry to certify 99.9% electrolytic purity.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-navy-muted">
                <li>Compliant with IEC 60898-1 and IS 694 : 2010 regulations</li>
                <li>UL94 V-0 Self-extinguishing polycarbonate flammability standard</li>
                <li>RoHS 3 Compliant (Lead, Cadmium and Mercury free construction)</li>
                <li>Thermal trip tested over 10,000 mechanical duty cycles</li>
              </ul>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="p-6 rounded-2xl bg-navy-card border border-navy-border space-y-6">
              <div className="flex items-center justify-between border-b border-navy-border pb-4">
                <div>
                  <span className="text-2xl font-black text-white">{product.rating} out of 5</span>
                  <p className="text-xs text-navy-muted">Based on verified contractor orders</p>
                </div>
                <button
                  onClick={() => showToast("Review form opened for verified purchasers", "info")}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-navy-border text-xs text-white hover:border-cyan transition-colors"
                >
                  Write a Review
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-navy/80 border border-navy-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-xs">Arun Patel, Master Electrician</span>
                    <div className="flex text-cyan">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-cyan" />)}
                    </div>
                  </div>
                  <p className="text-xs text-gray-300">
                    Installed 24 units of this model in a newly wired residential villa. Extremely high tolerance on terminals, doesn't strip screw threads, and handles continuous load with zero thermal heating.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="pt-8 border-t border-navy-border">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Complementary Hardware in {product.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
