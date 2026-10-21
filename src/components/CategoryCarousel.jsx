import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';

export const CategoryCarousel = () => {
  const { categories, goToPage, setSelectedCategory } = useStore();

  // Top 5 categories matching the 5 cards in the reference image
  const featuredCategories = categories.slice(0, 5);

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    goToPage('shop', { category: catId });
  };

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header (Replicating "Shop By Category ————— View All Categories ->") */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
              Shop By Category
            </h2>
            <div className="hidden sm:block w-24 h-[1.5px] bg-navy-border rounded-full" />
          </div>

          <button
            onClick={() => goToPage('categories')}
            className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy-muted hover:text-cyan transition-colors"
          >
            <span>View All Categories</span>
            <div className="w-6 h-6 rounded-full bg-cyan/20 text-cyan flex items-center justify-center group-hover:bg-cyan group-hover:text-navy transition-all shadow-glow-cyan">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </button>
        </div>

        {/* 5-Card Grid (Midnight Navy + Deep Blue-Black cards with Electric Cyan accents) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {featuredCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="group cursor-pointer rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-navy-card/95 to-navy/95 border border-navy-border hover:border-cyan/60 shadow-card-dark transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-cyan"
            >
              {/* Top ambient highlight on card */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Category Product Image on Studio Shadow Pedestal */}
              <div className="relative w-full aspect-square flex items-center justify-center my-3 sm:my-4">
                {/* Subtle soft pedestal shadow */}
                <div className="absolute bottom-1 w-3/4 h-4 bg-black/80 blur-md rounded-full" />
                
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 shadow-md"
                />

                {/* Subtle category item count tag */}
                <span className="absolute top-1 right-1 bg-navy/90 backdrop-blur-sm border border-navy-border text-[10px] text-navy-muted font-medium px-2 py-0.5 rounded-full">
                  {category.count}+ items
                </span>
              </div>

              {/* Bottom Title & Link (Exact reference: "Audio / Shop Now ->") */}
              <div className="mt-2 text-left z-10">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan transition-colors line-clamp-1">
                  {category.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-navy-muted group-hover:text-cyan mt-1 transition-colors">
                  <span>Shop Now</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
