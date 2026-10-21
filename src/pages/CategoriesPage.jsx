import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Zap, Layers } from 'lucide-react';

export const CategoriesPage = () => {
  const { categories, products, goToPage, setSelectedCategory } = useStore();

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    goToPage('shop', { category: catId });
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-left">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-navy-muted mb-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-cyan font-medium">Collections</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Electrical Systems & Collections
          </h1>
          <p className="text-navy-muted text-sm mt-2 max-w-2xl leading-relaxed">
            From smart modular switches and low-loss electrolytic copper cables to arc-suppressing circuit breakers, discover hardware engineered for total electrical integrity.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const itemCount = products.filter((p) => p.category === cat.id).length || cat.count;
            return (
              <div
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className="group cursor-pointer rounded-3xl bg-gradient-to-b from-bistre-surface to-bistre-card border border-navy-border hover:border-cyan/60 shadow-card-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-cyan flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-cyan/20 text-cyan border border-cyan/40">
                      {cat.tag || "Collection"}
                    </span>
                    <span className="text-xs text-navy-muted font-medium">
                      {itemCount} Models
                    </span>
                  </div>

                  {/* Image container on pedestal shadow */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-navy/80 mb-5 flex items-center justify-center p-4 border border-navy-border">
                    <div className="absolute inset-0 gobo-overlay opacity-30 pointer-events-none" />
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-navy-muted leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="pt-4 border-t border-navy-border flex items-center justify-between text-xs font-bold text-cyan">
                  <span>Browse Collection</span>
                  <div className="w-7 h-7 rounded-full bg-cyan/10 group-hover:bg-cyan group-hover:text-navy text-cyan flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
