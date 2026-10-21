import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { HeroSection } from '../components/HeroSection';
import { CategoryCarousel } from '../components/CategoryCarousel';
import { PromoBanner } from '../components/PromoBanner';
import { ProductCard } from '../components/ProductCard';
import { REVIEWS } from '../data/products';
import { 
  ArrowRight, 
  Sparkles, 
  Flame, 
  Cpu, 
  CheckCircle2, 
  Star, 
  Zap, 
  ShieldAlert,
  Layers
} from 'lucide-react';

export const HomePage = () => {
  const { products, goToPage } = useStore();
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'lighting', label: 'LED Lighting' },
    { id: 'switches', label: 'Modular Switches' },
    { id: 'protection', label: 'Circuit Protection' },
    { id: 'cables', label: 'Wires & Cables' }
  ];

  const filteredProducts = activeFilter === 'all'
    ? products.slice(0, 8)
    : products.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-4">
      {/* 1. Hero Section (Exact Replica of Reference Design adapted to Electrical) */}
      <HeroSection />

      {/* 2. Category Carousel (5 Glassmorphic Cards from Reference) */}
      <CategoryCarousel />

      {/* 3. Featured Products Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-cyan" />
                <span className="text-xs font-bold tracking-[0.2em] text-cyan uppercase">
                  ENGINEERED HARDWARE
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Electricals
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeFilter === tab.id
                      ? 'bg-cyan text-navy shadow-glow-cyan'
                      : 'bg-navy-card text-navy-muted hover:bg-navy-section hover:text-white border border-navy-border'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => goToPage('shop')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-navy-card border border-navy-border text-white font-bold text-xs tracking-wider hover:bg-cyan hover:text-navy hover:border-cyan transition-all shadow-md hover:shadow-glow-cyan"
            >
              <span>EXPLORE COMPLETE INVENTORY (100+ ITEMS)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. Promo Banner */}
      <PromoBanner />

      {/* 5. Engineering Standards & Laboratory Testing Spotlight */}
      <section className="py-14 bg-gradient-to-b from-transparent via-navy-section to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-cyan uppercase">
              CERTIFIED SAFETY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
              Why Professionals Choose Oddawurld
            </h2>
            <p className="text-navy-muted text-sm leading-relaxed">
              Every switch, breaker, and wire coil is stress-tested in certified laboratories for thermal overload, arc suppression, and dielectric breakdown.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            <div className="p-6 rounded-3xl bg-navy-card border border-navy-border hover:border-cyan/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan mb-5">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">UL94 V-0 Flame Retardancy</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Self-extinguishing polycarbonate enclosures halt combustion within 10 seconds, preventing flame spread across wall cavities.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-navy-card border border-navy-border hover:border-cyan/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">99.9% Electrolytic Copper</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Ultra-pure copper conductors cut resistive heat by 18%, saving long-term energy while preventing voltage drop over extended runs.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-navy-card border border-navy-border hover:border-cyan/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Constant Current IC Drivers</h3>
              <p className="text-xs text-navy-muted leading-relaxed">
                Zero-flicker architectural drivers eliminate high-frequency eye fatigue and safeguard LEDs against erratic line voltage spikes up to 4kV.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Contractor & Architect Verified Testimonials */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-left">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-cyan uppercase">
                TESTED ON SITES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Trusted by Contractors & Architects
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-3xl bg-navy-card border border-navy-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-cyan mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyan" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 italic">
                    "{review.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-navy-border flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-navy-muted text-[11px]">{review.role}</p>
                  </div>
                  <span className="text-navy-muted text-[10px]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
