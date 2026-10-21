import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Package, 
  Search, 
  Truck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const TrackOrderPage = () => {
  const { orders, lastPlacedOrder } = useStore();

  const defaultId = lastPlacedOrder ? lastPlacedOrder.orderId : (orders[0] ? orders[0].orderId : 'VTX-98241');
  const [searchId, setSearchId] = useState(defaultId);
  const [searchedOrder, setSearchedOrder] = useState(
    lastPlacedOrder || orders[0] || null
  );
  const [error, setError] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    const clean = searchId.trim().toUpperCase().replace('#', '');
    const found = orders.find((o) => o.orderId.toUpperCase() === clean);

    if (found) {
      setSearchedOrder(found);
      setError('');
    } else {
      setError(`No active shipment found with reference "${clean}". Please verify your order number.`);
    }
  };

  const steps = [
    { step: 1, title: 'Order Confirmed', time: 'Oct 18, 10:30 AM', desc: 'Electronic invoice generated & payment verified' },
    { step: 2, title: 'Quality Inspection', time: 'Oct 18, 02:45 PM', desc: 'Dielectric & flame-test tolerance verification passed' },
    { step: 3, title: 'Dispatched via Express', time: 'Oct 19, 08:15 AM', desc: 'Loaded on regional courier line haul (AWB #8492019)' },
    { step: 4, title: 'Out for Delivery', time: 'Estimated Oct 22', desc: 'Assigned to site delivery van driver' },
    { step: 5, title: 'Delivered to Site', time: 'Estimated Oct 22', desc: 'Signed receipt by electrical contractor' },
  ];

  const currentStep = searchedOrder ? (searchedOrder.statusStep || 3) : 3;

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="w-14 h-14 rounded-2xl bg-cyan/10 border border-cyan/40 text-cyan flex items-center justify-center mx-auto mb-4">
            <Truck className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold tracking-[0.2em] text-cyan uppercase">
            LIVE LOGISTICS RADAR
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 mb-2">
            Track Consignment
          </h1>
          <p className="text-navy-muted text-sm">
            Enter your order reference to inspect real-time dispatch progress, line-haul checkpoints, and estimated site drop-off.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="max-w-xl mx-auto mb-12">
          <form onSubmit={handleTrack} className="flex gap-2">
            <div className="relative flex-1">
              <Package className="w-4 h-4 text-navy-muted absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter Order ID (e.g. VTX-98241)"
                className="w-full bg-navy-card border border-navy-border rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-white font-mono placeholder-gray-500 focus:outline-none focus:border-cyan"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-2xl bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 transition-all flex items-center gap-2"
            >
              <span>TRACK</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
          {error && (
            <div className="mt-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Live Timeline Display */}
        {searchedOrder && (
          <div className="rounded-3xl bg-navy-card border border-navy-border p-6 sm:p-10 shadow-card-dark space-y-8">
            
            {/* Top Shipment Meta Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-navy-border text-xs">
              <div>
                <span className="text-navy-muted">Order ID:</span>
                <span className="ml-2 font-mono font-bold text-cyan text-sm">
                  #{searchedOrder.orderId}
                </span>
              </div>
              <div>
                <span className="text-navy-muted">Status:</span>
                <span className="ml-2 px-2.5 py-0.5 rounded-full bg-cyan/20 text-cyan border border-cyan/40 font-bold">
                  {searchedOrder.status || "In Transit"}
                </span>
              </div>
              <div>
                <span className="text-navy-muted">Courier Carrier:</span>
                <span className="ml-2 text-white font-medium">Oddawurld Express Air Line</span>
              </div>
              <div>
                <span className="text-navy-muted">Destination:</span>
                <span className="ml-2 text-white font-medium">{searchedOrder.customer?.city || "Metropolis, CA"}</span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-navy-border space-y-8 ml-3 sm:ml-4">
              {steps.map((s) => {
                const isPassed = s.step <= currentStep;
                const isCurrent = s.step === currentStep;

                return (
                  <div key={s.step} className="relative group">
                    {/* Circle Node on Timeline */}
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isCurrent
                        ? 'bg-cyan text-navy shadow-glow-cyan border-2 border-white'
                        : isPassed
                        ? 'bg-emerald-500 text-black'
                        : 'bg-navy border border-white/20 text-navy-muted'
                    }`}>
                      {isPassed ? (
                        <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <span className="text-xs font-bold">{s.step}</span>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="text-xs">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h4 className={`text-sm font-bold ${isCurrent ? 'text-cyan' : isPassed ? 'text-white' : 'text-navy-muted'}`}>
                          {s.title}
                        </h4>
                        <span className="text-[11px] text-navy-muted bg-white/5 px-2 py-0.5 rounded">
                          {s.time}
                        </span>
                      </div>
                      <p className="text-navy-muted leading-relaxed max-w-lg">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Courier Dispatch Assistant Box */}
            <div className="pt-6 border-t border-navy-border flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy border border-navy-border flex items-center justify-center text-cyan">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white">Courier Dispatch Desk</p>
                  <p className="text-[11px] text-navy-muted">Need to modify address or reschedule drop-off?</p>
                </div>
              </div>

              <a
                href="tel:+18004898658"
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-navy-border transition-colors"
              >
                Call Hotline: 1-800-489-VOLT
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
