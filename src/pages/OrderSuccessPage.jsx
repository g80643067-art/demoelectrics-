import React from 'react';
import { useStore } from '../context/StoreContext';
import { 
  CheckCircle2, 
  Truck, 
  Printer, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  PackageCheck
} from 'lucide-react';

export const OrderSuccessPage = () => {
  const { lastPlacedOrder, goToPage } = useStore();

  const order = lastPlacedOrder || {
    orderId: "VTX-98241",
    date: new Date().toISOString(),
    customer: {
      fullName: "Alex Morgan",
      email: "alex.morgan@voltix.com",
      address: "742 Evergreen Terrace",
      city: "Metropolis, CA 90210"
    },
    items: [
      {
        id: "vtx-001",
        name: "Oddawurld Lumina Halo 12W Smart Pendant Bulb",
        price: 39.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
      }
    ],
    paymentMethod: "Credit Card",
    total: 39.99,
    estimatedDelivery: "Oct 25, 2026"
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Success Header Box */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-cyan/10 border-2 border-cyan mx-auto mb-5 flex items-center justify-center text-cyan shadow-glow-cyan animate-bounce">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>
          <span className="text-xs font-bold tracking-[0.2em] text-cyan uppercase">
            TRANSACTION VERIFIED
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-navy-muted text-sm max-w-md mx-auto">
            Thank you, <strong className="text-white">{order.customer?.fullName}</strong>. Your electrical consignment has been allocated in our regional fulfillment depot.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="rounded-3xl bg-navy-card border border-navy-border p-6 sm:p-8 shadow-2xl space-y-6">
          
          {/* Top Info Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-navy-border">
            <div>
              <p className="text-xs text-navy-muted">Order Reference</p>
              <p className="text-xl font-black text-cyan font-mono mt-0.5">
                #{order.orderId}
              </p>
            </div>
            <div>
              <p className="text-xs text-navy-muted">Estimated Delivery</p>
              <p className="text-sm font-bold text-white mt-0.5 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-cyan" /> {order.estimatedDelivery}
              </p>
            </div>
            <div>
              <p className="text-xs text-navy-muted">Payment Status</p>
              <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                {order.paymentStatus || "Verified Online"}
              </span>
            </div>
          </div>

          {/* Delivery & Billing Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300 pb-6 border-b border-navy-border">
            <div>
              <p className="font-bold text-white mb-1 uppercase tracking-wider text-[11px]">
                Shipping Destination
              </p>
              <p className="font-semibold text-white">{order.customer?.fullName}</p>
              <p>{order.customer?.address}</p>
              <p>{order.customer?.city}, {order.customer?.state} {order.customer?.zipCode}</p>
              <p className="text-navy-muted mt-1">Phone: {order.customer?.phone}</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1 uppercase tracking-wider text-[11px]">
                Payment Summary
              </p>
              <p>Method: <strong className="text-white">{order.paymentMethod}</strong></p>
              <p>Total Paid: <strong className="text-cyan text-sm font-extrabold">${order.total?.toFixed(2)}</strong></p>
              <p className="text-navy-muted mt-1">Tax Invoice sent to: {order.customer?.email}</p>
            </div>
          </div>

          {/* Items Purchased */}
          <div>
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Items in Consignment ({order.items?.length || 0})
            </p>
            <div className="space-y-3">
              {order.items?.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-navy/80 border border-navy-border text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-contain rounded-xl bg-navy-card p-1"
                    />
                    <div>
                      <p className="font-bold text-white line-clamp-1">{item.name}</p>
                      <p className="text-navy-muted text-[11px]">Quantity: {item.quantity} × ${item.price?.toFixed(2)}</p>
                    </div>
                  </div>
                  <span className="font-bold text-white">
                    ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-navy-border flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => goToPage('track-order')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 transition-all"
            >
              <PackageCheck className="w-4 h-4" />
              <span>LIVE CONSIGNMENT TRACKING</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-navy-border transition-colors"
              >
                <Printer className="w-4 h-4 text-navy-muted" />
                <span>Print Invoice</span>
              </button>

              <button
                onClick={() => goToPage('shop')}
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-navy-border transition-colors"
              >
                <span>Continue Shopping</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
