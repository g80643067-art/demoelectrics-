import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Leaf, 
  Truck, 
  Lock, 
  Zap, 
  Sparkles,
  Info
} from 'lucide-react';

export const HeroSection = () => {
  const { goToPage, viewProduct, products } = useStore();
  const [showVideoModal, setShowVideoModal] = useState(false);

  const heroProduct = products.find((p) => p.isHero) || products[0];

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-16">
      {/* Background ambient glows in Electric Cyan and Deep Navy */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-ice/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 left-10 w-[350px] h-[350px] bg-navy-card/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Eyebrow, CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Eyebrow with horizontal line separator (Replicating "NEXT-GEN GADGETS ————") */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-cyan uppercase">
                NEXT-GEN HARDWARE
              </span>
              <div className="w-16 h-[1.5px] bg-cyan/60 rounded-full" />
            </div>

            {/* Giant Title: "Power Up Your World." with Electric Cyan handwritten accent */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-5">
              Power Up <br />
              <span className="font-script text-5xl sm:text-7xl lg:text-8xl font-normal text-cyan drop-shadow-[0_0_30px_rgba(67,217,255,0.65)] inline-block -rotate-1 transform">
                Your World.
              </span>
            </h1>

            {/* Subtext (Replicating reference two-line clean copy in Soft Grey #B8C5D1) */}
            <p className="text-navy-muted text-base sm:text-lg leading-relaxed max-w-md mb-8 font-light">
              Smart. Sleek. Reliable.<br />
              High-performance electrical hardware engineered to elevate modern living.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 w-full sm:w-auto mb-12">
              {/* Primary Pill Button: SHOP NOW -> in Electric Cyan */}
              <button
                onClick={() => goToPage('shop')}
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cyan text-navy font-extrabold text-sm tracking-wide shadow-glow-cyan hover:bg-cyan-300 hover:shadow-glow-cyan-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>

              {/* Secondary Button: Circular Play Icon + Text */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="group flex items-center gap-3 text-left focus:outline-none"
              >
                <div className="w-12 h-12 rounded-full bg-white text-navy flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-cyan transition-all duration-300">
                  <Play className="w-4 h-4 fill-navy ml-0.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white group-hover:text-cyan transition-colors">
                    Watch Collection
                  </span>
                  <span className="text-xs text-navy-muted">
                    Play video
                  </span>
                </div>
              </button>
            </div>

            {/* Trust Badges Row (Midnight Navy cards with subtle border and Cyan icons) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-navy-border w-full">
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-navy-card border border-navy-border text-cyan">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">Premium Quality</span>
                  <span className="text-[10px] text-navy-muted">IS 694 Certified</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-navy-card border border-navy-border text-cyan">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">2 Year Warranty</span>
                  <span className="text-[10px] text-navy-muted">Direct Replacement</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-navy-card border border-navy-border text-cyan">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">Free Shipping</span>
                  <span className="text-[10px] text-navy-muted">On Orders $49+</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-navy-card border border-navy-border text-cyan">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">Secure Payments</span>
                  <span className="text-[10px] text-navy-muted">256-bit Encrypted</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: 3D Studio Pedestal Scene with Glowing Aura & Flagship Product */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Outer container with studio depth and gobo leaf shadow overlay */}
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              
              {/* Studio Gobo dappled light pattern */}
              <div className="absolute inset-0 gobo-overlay z-10 pointer-events-none rounded-full opacity-60" />

              {/* Glowing Concentric Neon Rings in Electric Cyan & Ice Blue */}
              <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-cyan/40 neon-ring pointer-events-none animate-pulse-subtle" />
              <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full border border-ice/30 pointer-events-none" />
              <div className="absolute w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] rounded-full bg-cyan/10 filter blur-xl pointer-events-none" />

              {/* Pedestal Base (Dark Navy 3D cylinder platform) */}
              <div className="absolute bottom-4 sm:bottom-8 w-64 sm:w-80 h-16 sm:h-20 rounded-[50%] pedestal-base border-t border-cyan/40 z-0">
                {/* Pedestal top spotlight sheen */}
                <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-cyan/25 via-transparent to-transparent opacity-80" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-72 h-8 bg-black/90 blur-lg rounded-[50%]" />
              </div>

              {/* Floating Flagship Electrical Product Image */}
              <div 
                onClick={() => viewProduct(heroProduct.id)}
                className="relative z-20 cursor-pointer group flex flex-col items-center animate-float"
              >
                <div className="relative">
                  <img
                    src={heroProduct.image}
                    alt={heroProduct.name}
                    className="w-56 sm:w-72 h-56 sm:h-72 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)] group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                  />
                  {/* Subtle electric cyan glow reflection */}
                  <div className="absolute inset-0 bg-radial-gradient from-cyan/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
                </div>

                {/* Floating Hotspot Tag 1: Lumens */}
                <div className="absolute -top-2 -left-4 sm:left-0 bg-navy-card/95 backdrop-blur-md border border-cyan/50 px-3 py-1.5 rounded-full shadow-glow-cyan text-[11px] font-semibold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
                  <span>1100 Lumens • CRI 98</span>
                </div>

                {/* Floating Hotspot Tag 2: Price & Quick Add */}
                <div className="absolute bottom-6 -right-4 sm:right-2 bg-navy/95 backdrop-blur-md border border-navy-border px-3.5 py-1.5 rounded-xl shadow-2xl flex items-center gap-2 group-hover:border-cyan transition-colors">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-navy-muted line-through">${heroProduct.originalPrice}</span>
                    <span className="text-sm font-extrabold text-cyan">${heroProduct.price}</span>
                  </div>
                  <span className="text-[11px] font-bold bg-cyan text-navy px-2 py-0.5 rounded-md">
                    SAVE 33%
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-navy-card border border-cyan/40 rounded-3xl p-6 shadow-glow-cyan">
            <div className="flex items-center justify-between pb-4 border-b border-navy-border">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan" /> Oddawurld Studio Hardware Showcase
              </h3>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="p-1 rounded-full text-navy-muted hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="py-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cyan/10 border border-cyan flex items-center justify-center text-cyan">
                <Play className="w-8 h-8 fill-cyan ml-1" />
              </div>
              <p className="text-white font-medium text-lg mb-2">Architectural Engineering in Motion</p>
              <p className="text-navy-muted text-sm max-w-md mx-auto mb-6">
                Discover the engineering tolerances, flame retardancy tests, and smart Zigbee 3.0 mesh response times behind our 2026 electrical collection.
              </p>
              <button
                onClick={() => { setShowVideoModal(false); goToPage('shop'); }}
                className="px-6 py-2.5 bg-cyan text-navy font-bold rounded-full text-xs shadow-glow-cyan hover:bg-cyan-300"
              >
                EXPLORE CATALOGUE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
