import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const PromoBanner = () => {
  const { goToPage, viewProduct, products } = useStore();

  // Pick the second flagship or arc shield product
  const featuredProduct = products.find((p) => p.id === 'vtx-003') || products[1];

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Banner Card Container matching reference */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-navy-card via-navy-section to-navy border border-navy-border shadow-2xl p-6 sm:p-10 lg:p-12">
          
          {/* Subtle cyan and ice blue ambient light leaks */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-ice/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Product on Pedestal with Studio Lighting (AirPods pedestal in reference) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-64 sm:w-80 aspect-square flex items-center justify-center">
                
                {/* Dappled light gobo effect */}
                <div className="absolute inset-0 gobo-overlay rounded-full pointer-events-none opacity-50" />
                
                {/* Neon glow ring */}
                <div className="absolute w-56 h-56 rounded-full border border-cyan/35 neon-ring pointer-events-none" />

                {/* Pedestal platform */}
                <div className="absolute bottom-4 w-52 sm:w-64 h-12 rounded-[50%] pedestal-base border-t border-cyan/40" />

                {/* Product image */}
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="relative z-10 w-44 sm:w-56 h-44 sm:h-56 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500 rounded-2xl"
                />

                {/* Floating badge */}
                <span className="absolute top-4 left-4 bg-navy/95 border border-cyan/50 text-cyan text-[10px] font-bold px-2.5 py-1 rounded-full shadow-glow-cyan flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 10kA Rated
                </span>
              </div>
            </div>

            {/* Right: Eyebrow, Dual-Font Headline, Description, Pill Button */}
            <div className="lg:col-span-7 flex flex-col items-start text-left lg:pl-6">
              
              {/* Eyebrow (Replicating "NEW ARRIVAL") */}
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-cyan" />
                <span className="text-xs font-bold tracking-[0.2em] text-cyan uppercase">
                  NEW ARRIVAL
                </span>
              </div>

              {/* Headline with script accent (Replicating "Small Size. / Big Performance.") */}
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Small Size. <br />
                <span className="font-script text-4xl sm:text-6xl text-cyan drop-shadow-[0_0_25px_rgba(67,217,255,0.6)]">
                  Big Performance.
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-navy-muted text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-light">
                Experience precision circuit protection and zero-loss power transmission like never before. Engineered with silver-graphite arc quenching and instant fault isolation.
              </p>

              {/* Pill Button (SHOP NOW ->) */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => goToPage('shop', { category: 'protection' })}
                  className="group flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 hover:shadow-glow-cyan-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span>SHOP NOW</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </button>

                <button
                  onClick={() => viewProduct(featuredProduct.id)}
                  className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-navy-border transition-colors"
                >
                  View Specifications
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
