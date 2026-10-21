import React from 'react';
import { useStore } from '../context/StoreContext';
import { Package, Truck, ArrowRight, Calendar, CreditCard } from 'lucide-react';

export const OrdersPage = () => {
  const { orders, goToPage } = useStore();

  if (orders.length === 0) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4">
        <Package className="w-16 h-16 text-navy-muted mx-auto mb-4" />
        <h2 className="text-xl font-bold text-white mb-2">No Past Orders Found</h2>
        <p className="text-xs text-navy-muted mb-6">Your order history is currently empty.</p>
        <button
          onClick={() => goToPage('shop')}
          className="px-6 py-2.5 rounded-full bg-cyan text-navy font-bold text-xs"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-8 pb-4 border-b border-navy-border">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Order History & Consignments
          </h1>
          <p className="text-xs sm:text-sm text-navy-muted mt-1">
            Review past orders, view invoices, and track live transit.
          </p>
        </div>

        {/* Order Cards */}
        <div className="space-y-6">
          {orders.map((order, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-navy-card border border-navy-border shadow-card-dark space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-navy-border text-xs">
                <div>
                  <span className="text-navy-muted">Order ID:</span>
                  <span className="ml-2 font-mono font-bold text-cyan text-sm">
                    #{order.orderId}
                  </span>
                </div>
                <div>
                  <span className="text-navy-muted">Date:</span>
                  <span className="ml-2 text-white font-medium">
                    {new Date(order.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div>
                  <span className="text-navy-muted">Total:</span>
                  <span className="ml-2 font-bold text-white text-sm">
                    ${order.total?.toFixed(2)}
                  </span>
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-cyan/20 text-cyan border border-cyan/40 text-[11px] font-bold">
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="divide-y divide-white/5">
                {order.items?.map((item, i) => (
                  <div key={i} className="py-3 flex items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain rounded-xl bg-navy p-1"
                      />
                      <div>
                        <p className="font-bold text-white line-clamp-1">{item.name}</p>
                        <p className="text-navy-muted text-[11px]">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-bold text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-navy-border flex items-center justify-between">
                <button
                  onClick={() => goToPage('track-order')}
                  className="flex items-center gap-2 text-xs font-bold text-cyan hover:underline"
                >
                  <Truck className="w-4 h-4" />
                  <span>Track Live Consignment</span>
                </button>

                <span className="text-[11px] text-navy-muted">
                  Paid via {order.paymentMethod}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
