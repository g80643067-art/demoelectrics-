import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  ShoppingBag, 
  Trash2, 
  ArrowRight, 
  Tag, 
  Truck, 
  ShieldCheck, 
  ChevronLeft,
  X
} from 'lucide-react';

export const CartPage = () => {
  const { 
    cart, 
    updateCartQuantity, 
    removeFromCart, 
    cartSubtotal, 
    shippingCost, 
    couponDiscount, 
    cartTotal, 
    appliedCoupon, 
    applyCouponCode, 
    removeCoupon, 
    goToPage, 
    viewProduct 
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCouponCode(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError('');
      setCouponInput('');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-navy-card border border-navy-border flex items-center justify-center text-navy-muted">
          <ShoppingBag className="w-12 h-12 text-cyan/50" />
        </div>
        <h2 className="text-2xl font-extrabold text-white mb-2">Your Electrical Cart is Empty</h2>
        <p className="text-navy-muted text-sm mb-8 leading-relaxed">
          Looks like you haven't added any electrical components yet. Browse our selection of smart switches, cables, and lighting fixtures.
        </p>
        <button
          onClick={() => goToPage('shop')}
          className="px-8 py-3.5 rounded-full bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 transition-all"
        >
          EXPLORE CATALOGUE
        </button>
      </div>
    );
  }

  const freeShippingThreshold = 49;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);

  return (
    <div className="py-8 sm:py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-navy-border">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-xs sm:text-sm text-navy-muted mt-1">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} items in your cart
            </p>
          </div>

          <button
            onClick={() => goToPage('shop')}
            className="text-xs font-semibold text-navy-muted hover:text-cyan flex items-center gap-1.5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {/* Free Shipping Progress Notification */}
        <div className="mb-8 p-4 rounded-2xl bg-navy-card border border-navy-border">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-gray-300 flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-cyan" />
              {cartSubtotal >= freeShippingThreshold ? (
                <span className="text-cyan font-bold">You qualify for FREE Express Shipping!</span>
              ) : (
                <span>Add <strong className="text-white">${(freeShippingThreshold - cartSubtotal).toFixed(2)}</strong> more to unlock FREE Express Shipping</span>
              )}
            </span>
            <span className="font-bold text-cyan">{Math.round(progressToFreeShipping)}%</span>
          </div>
          <div className="w-full h-1.5 bg-navy rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan transition-all duration-500 shadow-glow-cyan"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-2xl bg-navy-card border border-navy-border flex flex-col sm:flex-row items-center justify-between gap-4 group hover:border-cyan/40 transition-colors"
              >
                {/* Image & Title */}
                <div 
                  onClick={() => viewProduct(item.id)}
                  className="flex items-center gap-4 w-full sm:w-auto cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-18 sm:w-20 sm:h-20 object-contain rounded-xl bg-navy p-2 border border-navy-border"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-cyan uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-navy-muted mt-0.5">
                      ${item.price.toFixed(2)} per unit
                    </p>
                  </div>
                </div>

                {/* Quantity Controls & Line Total */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-navy-border">
                  
                  {/* Quantity Stepper */}
                  <div className="flex items-center rounded-xl bg-navy border border-navy-border p-1">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center text-navy-muted hover:text-white"
                      title="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center text-navy-muted hover:text-white"
                      title="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[70px]">
                    <p className="text-base font-extrabold text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-navy-muted hover:text-rose-400 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Order Summary & Checkout */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-3xl bg-navy-card border border-navy-border shadow-card-dark space-y-5">
              <h2 className="text-lg font-bold text-white pb-3 border-b border-navy-border">
                Order Summary
              </h2>

              {/* Price Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">${cartSubtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>Estimated Shipping</span>
                  <span>
                    {shippingCost === 0 ? (
                      <span className="text-cyan font-bold">FREE</span>
                    ) : (
                      <span className="font-semibold text-white">${shippingCost.toFixed(2)}</span>
                    )}
                  </span>
                </div>

                {appliedCoupon.applied && (
                  <div className="flex justify-between text-cyan">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" /> Discount ({appliedCoupon.code} - {appliedCoupon.discountPercent}%)
                    </span>
                    <span className="font-bold">-${couponDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-navy-border flex justify-between items-baseline text-base">
                  <span className="font-bold text-white">Estimated Total</span>
                  <span className="text-xl font-black text-cyan drop-shadow-sm">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Promo Code Input */}
              <div className="pt-2">
                {appliedCoupon.applied ? (
                  <div className="p-2.5 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-between text-xs text-cyan">
                    <span className="font-bold flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" /> Code {appliedCoupon.code} applied
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="p-1 hover:text-white"
                      title="Remove promo code"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="Promo code (e.g. VOLT10)"
                        className="flex-1 bg-navy border border-navy-border rounded-xl px-3 py-2 text-xs text-white uppercase placeholder-gray-500 focus:outline-none focus:border-cyan"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <p className="text-[11px] text-amber-400">{couponError}</p>
                    )}
                  </form>
                )}
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => goToPage('checkout')}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 transition-all transform hover:-translate-y-0.5"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="pt-3 border-t border-navy-border flex items-center justify-center gap-2 text-[11px] text-navy-muted">
                <ShieldCheck className="w-4 h-4 text-cyan" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
