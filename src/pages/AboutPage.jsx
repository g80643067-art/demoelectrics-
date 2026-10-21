import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, Award, Zap, Cpu, Flame, Users, CheckCircle2 } from 'lucide-react';

export const AboutPage = () => {
  const { goToPage } = useStore();

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        {/* Hero Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-bistre-surface via-bistre-card to-bistre-deep border border-cyan/30 p-8 sm:p-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold tracking-[0.2em] text-cyan uppercase">
              OUR HERITAGE & MISSION
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4 leading-tight">
              Engineering Electrical Hardware That Endures Decades
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Founded by electrical engineers, ODDAWURLD bridges architectural aesthetics with uncompromising high-voltage safety standards. We believe every circuit in your home or commercial structure should be safe, tactile, and engineered to perfection.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
            The Oddawurld Engineering Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-navy-card border border-navy-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/40 text-cyan flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Full Arc Quenching Protection</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                All Oddawurld MCBs and RCCBs feature 12-plate de-ionizing arc chutes that extinguish lethal electrical arcs in under 3 milliseconds, safeguarding homes from electrical fires.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-card border border-navy-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/40 text-cyan flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">UL94 V-0 Self-Extinguishing</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                We use pure virgin polycarbonate infused with flame-retardant polymers that will not support combustion when exposed to 850°C glowing wire test needles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-card border border-navy-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/40 text-cyan flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Matter & Zigbee 3.0 Open Mesh</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                We believe smart homes should operate without relying on external cloud servers. Our smart relays run local millisecond automations even when internet goes down.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-card border border-navy-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/40 text-cyan flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Traceable Batch Quality</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Every copper wire coil and circuit protector carries a unique laser-etched QR code linking directly to its laboratory batch test report and resistivity certificate.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="p-8 rounded-3xl bg-navy-card border border-navy-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Are you an Electrical Contractor or Architect?</h3>
            <p className="text-xs text-navy-muted">Join over 2,400 verified trade partners receiving trade discounts and priority project dispatch.</p>
          </div>
          <button
            onClick={() => goToPage('contact')}
            className="px-6 py-3 rounded-full bg-cyan text-navy font-bold text-xs tracking-wider shadow-glow-cyan flex-shrink-0"
          >
            APPLY FOR TRADE ACCOUNT
          </button>
        </div>

      </div>
    </div>
  );
};
