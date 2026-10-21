import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  Truck, 
  QrCode, 
  DollarSign, 
  CheckCircle2, 
  ChevronLeft,
  AlertCircle,
  Zap
} from 'lucide-react';

export const CheckoutPage = () => {
  const { 
    cart, 
    cartSubtotal, 
    shippingCost, 
    couponDiscount, 
    cartTotal, 
    appliedCoupon, 
    placeOrder, 
    goToPage, 
    showToast 
  } = useStore();

  const [formData, setFormData] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@voltix.com',
    phone: '+1 (555) 349-8219',
    address: '742 Evergreen Terrace, Sector 4',
    city: 'Metropolis',
    state: 'California',
    zipCode: '90210',
    deliveryNotes: 'Please ring the buzzer for workshop storage.'
  });

  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'cod' | 'upi' | 'razorpay'
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvc: '884'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4">
        <h2 className="text-xl font-bold text-white mb-3">No items to checkout</h2>
        <p className="text-navy-muted text-xs mb-6">Your shopping cart is currently empty.</p>
        <button
          onClick={() => goToPage('shop')}
          className="px-6 py-2.5 rounded-full bg-cyan text-navy font-bold text-xs"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const validateForm = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.address.trim()) errs.address = 'Street address is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.zipCode.trim()) errs.zipCode = 'ZIP code is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast("Please fill in all required shipping fields", "warning");
      return;
    }

    setIsSubmitting(true);

    // Simulate secure order verification
    setTimeout(() => {
      placeOrder({
        customer: formData,
        paymentMethod: paymentMethod === 'card' ? 'Credit Card' : paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod === 'upi' ? 'Instant UPI QR' : 'Razorpay (Secure Sandbox)'
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="py-8 sm:py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-navy-border">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Secure Checkout
            </h1>
            <p className="text-xs sm:text-sm text-navy-muted mt-1">
              Encrypted end-to-end electrical fulfillment
            </p>
          </div>

          <button
            onClick={() => goToPage('cart')}
            className="text-xs font-semibold text-navy-muted hover:text-cyan flex items-center gap-1.5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Cart</span>
          </button>
        </div>

        <form onSubmit={handleSubmitOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Delivery Address & Payment Method */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Step 1: Customer & Shipping Details */}
              <div className="p-6 sm:p-8 rounded-3xl bg-navy-card border border-navy-border space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-navy-border">
                  <div className="w-7 h-7 rounded-full bg-cyan text-navy font-bold flex items-center justify-center text-xs">
                    1
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    Delivery Address & Contact
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full bg-navy border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none ${
                        errors.fullName ? 'border-rose-500' : 'border-navy-border focus:border-cyan'
                      }`}
                      placeholder="e.g. Alex Morgan"
                    />
                    {errors.fullName && <p className="text-[10px] text-rose-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Email Address (for Invoice & Tracking) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-navy border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none ${
                        errors.email ? 'border-rose-500' : 'border-navy-border focus:border-cyan'
                      }`}
                      placeholder="alex.morgan@voltix.com"
                    />
                    {errors.email && <p className="text-[10px] text-rose-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Mobile Number (for Courier Dispatch) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-navy border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none ${
                        errors.phone ? 'border-rose-500' : 'border-navy-border focus:border-cyan'
                      }`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-[10px] text-rose-400 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Street Address / Project Site *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full bg-navy border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none ${
                        errors.address ? 'border-rose-500' : 'border-navy-border focus:border-cyan'
                      }`}
                      placeholder="742 Evergreen Terrace"
                    />
                    {errors.address && <p className="text-[10px] text-rose-400 mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full bg-navy border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none ${
                        errors.city ? 'border-rose-500' : 'border-navy-border focus:border-cyan'
                      }`}
                      placeholder="Metropolis"
                    />
                    {errors.city && <p className="text-[10px] text-rose-400 mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      ZIP / Postal Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`w-full bg-navy border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none ${
                        errors.zipCode ? 'border-rose-500' : 'border-navy-border focus:border-cyan'
                      }`}
                      placeholder="90210"
                    />
                    {errors.zipCode && <p className="text-[10px] text-rose-400 mt-1">{errors.zipCode}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Delivery Instructions (Optional)
                  </label>
                  <textarea
                    name="deliveryNotes"
                    value={formData.deliveryNotes}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full bg-navy border border-navy-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan"
                    placeholder="Instructions for courier driver..."
                  />
                </div>
              </div>

              {/* Step 2: Payment Selector */}
              <div className="p-6 sm:p-8 rounded-3xl bg-navy-card border border-navy-border space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-navy-border">
                  <div className="w-7 h-7 rounded-full bg-cyan text-navy font-bold flex items-center justify-center text-xs">
                    2
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    Select Payment Method
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Credit / Debit Card */}
                  <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === 'card'
                      ? 'border-cyan bg-cyan/5 shadow-glow-cyan'
                      : 'border-navy-border bg-navy hover:border-white/20'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="mt-1 accent-cyan"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-cyan" />
                        <span className="text-xs font-bold text-white">Credit / Debit Card</span>
                      </div>
                      <p className="text-[11px] text-navy-muted mt-1">Visa, Mastercard, RuPay, Amex</p>
                    </div>
                  </label>

                  {/* Cash on Delivery (COD) */}
                  <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === 'cod'
                      ? 'border-cyan bg-cyan/5 shadow-glow-cyan'
                      : 'border-navy-border bg-navy hover:border-white/20'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-1 accent-cyan"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-cyan" />
                        <span className="text-xs font-bold text-white">Cash on Delivery</span>
                      </div>
                      <p className="text-[11px] text-navy-muted mt-1">Pay when order arrives at site</p>
                    </div>
                  </label>

                  {/* UPI QR Code */}
                  <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === 'upi'
                      ? 'border-cyan bg-cyan/5 shadow-glow-cyan'
                      : 'border-navy-border bg-navy hover:border-white/20'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="mt-1 accent-cyan"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <QrCode className="w-4 h-4 text-cyan" />
                        <span className="text-xs font-bold text-white">Instant UPI / QR</span>
                      </div>
                      <p className="text-[11px] text-navy-muted mt-1">GooglePay, PhonePe, Paytm</p>
                    </div>
                  </label>

                  {/* Razorpay Online */}
                  <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    paymentMethod === 'razorpay'
                      ? 'border-cyan bg-cyan/5 shadow-glow-cyan'
                      : 'border-navy-border bg-navy hover:border-white/20'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="razorpay"
                      checked={paymentMethod === 'razorpay'}
                      onChange={() => setPaymentMethod('razorpay')}
                      className="mt-1 accent-cyan"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-cyan" />
                        <span className="text-xs font-bold text-white">Razorpay Secure</span>
                      </div>
                      <p className="text-[11px] text-navy-muted mt-1">NetBanking, Wallets & EMI</p>
                    </div>
                  </label>

                </div>

                {/* Sub-form preview for Card */}
                {paymentMethod === 'card' && (
                  <div className="p-4 rounded-2xl bg-navy border border-navy-border space-y-3">
                    <div>
                      <label className="block text-[11px] text-navy-muted mb-1">Card Number</label>
                      <input
                        type="text"
                        value={cardDetails.cardNumber}
                        onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                        className="w-full bg-navy-card border border-navy-border rounded-xl px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-navy-muted mb-1">Expiry Date</label>
                        <input
                          type="text"
                          value={cardDetails.cardExpiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, cardExpiry: e.target.value })}
                          className="w-full bg-navy-card border border-navy-border rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-navy-muted mb-1">Security Code (CVV)</label>
                        <input
                          type="password"
                          value={cardDetails.cardCvc}
                          onChange={(e) => setCardDetails({ ...cardDetails, cardCvc: e.target.value })}
                          className="w-full bg-navy-card border border-navy-border rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* UPI QR Display */}
                {paymentMethod === 'upi' && (
                  <div className="p-4 rounded-2xl bg-navy border border-navy-border flex items-center gap-4">
                    <div className="w-20 h-20 bg-white p-1 rounded-xl flex items-center justify-center text-black font-mono text-[9px] text-center font-bold">
                      [UPI QR DEMO]
                    </div>
                    <div className="text-xs text-gray-300">
                      <p className="font-bold text-white">Scan to pay with any UPI App</p>
                      <p className="text-navy-muted mt-1">VPA: voltix.payments@icici</p>
                      <p className="text-cyan text-[11px] mt-1 font-mono">Amount: ${cartTotal.toFixed(2)}</p>
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* Right Column: Order Review & Placement */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 rounded-3xl bg-navy-card border border-navy-border shadow-card-dark space-y-5">
                <h2 className="text-lg font-bold text-white pb-3 border-b border-navy-border">
                  Order Summary ({cart.length} items)
                </h2>

                {/* Cart Items Miniature */}
                <div className="divide-y divide-white/5 max-h-56 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="py-2.5 flex items-center gap-3 text-xs">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-contain rounded-lg bg-navy p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{item.name}</p>
                        <p className="text-navy-muted text-[10px]">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-bold text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="pt-3 border-t border-navy-border space-y-2 text-xs">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span className="font-semibold text-white">${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
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
                      <span>Discount ({appliedCoupon.code})</span>
                      <span>-${couponDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-navy-border flex justify-between items-baseline text-base">
                    <span className="font-bold text-white">Total to Pay</span>
                    <span className="text-xl font-black text-cyan">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Place Order CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 transition-all disabled:opacity-50"
                >
                  <Lock className="w-4 h-4" />
                  <span>{isSubmitting ? "AUTHORIZING ORDER..." : "CONFIRM & PLACE ORDER"}</span>
                </button>

                <p className="text-[10px] text-navy-muted text-center leading-relaxed">
                  By clicking "Confirm & Place Order", you authorize Oddawurld Hardware to fulfill and dispatch your electrical shipment under warranty terms.
                </p>

              </div>

            </div>

          </div>
        </form>

      </div>
    </div>
  );
};
