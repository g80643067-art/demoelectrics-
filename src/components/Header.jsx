import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  ShoppingBag, 
  Heart, 
  User, 
  Search, 
  Home, 
  Menu, 
  X, 
  Zap, 
  Package, 
  Truck, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export const Header = () => {
  const { 
    activePage, 
    goToPage, 
    cartItemsCount, 
    wishlist, 
    setIsSearchOpen 
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shop', label: 'Shop' },
    { id: 'new-arrivals', label: 'New Arrivals' },
    { id: 'categories', label: 'Collections' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    goToPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-navy via-navy-section to-navy border-b border-navy-border py-1.5 px-4 text-xs text-center text-navy-muted flex items-center justify-between">
        <div className="hidden md:flex items-center gap-4 text-navy-muted">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-cyan" /> IS 694 Certified Electricals</span>
          <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-cyan" /> Express 48h Delivery</span>
        </div>
        <div className="w-full md:w-auto text-center font-medium text-white">
          ⚡ Free Express Shipping on orders over <span className="text-cyan font-bold">$49</span> | Use code <span className="bg-cyan/15 text-cyan border border-cyan/30 px-1.5 py-0.5 rounded font-mono font-bold">VOLT10</span> for 10% off
        </div>
        <div className="hidden md:flex items-center gap-4 text-navy-muted">
          <button onClick={() => goToPage('track-order')} className="hover:text-cyan transition-colors flex items-center gap-1">
            <Package className="w-3.5 h-3.5" /> Track Order
          </button>
        </div>
      </div>

      {/* Desktop Top Brand Title (Exact match to ODDAWURLD in reference) */}
      <div className="hidden lg:flex items-center justify-center pt-5 pb-2 bg-navy/95 backdrop-blur-xl">
        <button 
          onClick={() => handleNavClick('home')}
          className="group cursor-pointer focus:outline-none"
        >
          <span className="text-2xl font-black tracking-[0.28em] text-white uppercase font-display group-hover:text-cyan transition-colors">
            ODDAWURLD
          </span>
        </button>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-navy/95 backdrop-blur-xl border-b border-navy-border py-2.5 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Mobile hamburger & brand (on mobile only) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-muted hover:text-cyan focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan to-blue-600 flex items-center justify-center shadow-glow-cyan text-navy">
                <Zap className="w-4 h-4 fill-navy stroke-navy" />
              </div>
              <span className="text-lg font-black tracking-widest text-white uppercase font-display">
                ODDAWURLD
              </span>
            </button>
          </div>

          {/* Desktop Left Spacer for Perfect Centering */}
          <div className="hidden lg:block w-40"></div>

          {/* Floating Pill Navbar (Centered - Exact Replica of Reference Design) */}
          <nav className="hidden lg:flex items-center glass-pill rounded-full p-1 shadow-xl border border-white/40">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-navy text-cyan shadow-md border border-cyan/40'
                      : 'text-gray-700 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Cart with badge, Wishlist, Account, Search) */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 lg:w-40">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full text-navy-muted hover:text-cyan hover:bg-white/5 transition-colors"
              title="Search Products"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => goToPage('wishlist')}
              className="relative p-2.5 rounded-full text-navy-muted hover:text-cyan hover:bg-white/5 transition-colors"
              title="View Wishlist"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-cyan fill-cyan/20' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-navy-card border border-cyan text-cyan text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag (Midnight Navy + Electric Blue badge) */}
            <button
              onClick={() => goToPage('cart')}
              className="relative p-2.5 rounded-full text-navy-muted hover:text-cyan hover:bg-white/5 transition-colors group"
              title="Shopping Cart"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-cyan text-navy text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-glow-cyan">
                {cartItemsCount}
              </span>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                className="p-2.5 rounded-full text-navy-muted hover:text-cyan hover:bg-white/5 transition-colors focus:outline-none"
                title="Account Menu"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {accountMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-52 py-2 rounded-2xl bg-navy-card border border-navy-border shadow-card-dark backdrop-blur-xl z-50 text-sm animate-fade-in"
                  onMouseLeave={() => setAccountMenuOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-navy-border">
                    <p className="text-xs text-navy-muted">Signed in as</p>
                    <p className="font-semibold text-white truncate">Electrician Pro</p>
                  </div>
                  <button
                    onClick={() => { goToPage('orders'); setAccountMenuOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-navy-muted hover:bg-white/5 hover:text-cyan flex items-center gap-2.5 transition-colors"
                  >
                    <Package className="w-4 h-4 text-cyan" /> My Orders
                  </button>
                  <button
                    onClick={() => { goToPage('track-order'); setAccountMenuOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-navy-muted hover:bg-white/5 hover:text-cyan flex items-center gap-2.5 transition-colors"
                  >
                    <Truck className="w-4 h-4 text-cyan" /> Track Order
                  </button>
                  <button
                    onClick={() => { goToPage('wishlist'); setAccountMenuOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-navy-muted hover:bg-white/5 hover:text-cyan flex items-center gap-2.5 transition-colors"
                  >
                    <Heart className="w-4 h-4 text-cyan" /> Saved Items ({wishlist.length})
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy/98 border-b border-navy-border px-6 py-5 shadow-2xl backdrop-blur-2xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-cyan text-navy font-bold shadow-glow-cyan'
                      : 'text-navy-muted hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{link.label}</span>
                </button>
              );
            })}
            <div className="pt-3 border-t border-navy-border flex items-center justify-between text-xs text-navy-muted">
              <button onClick={() => handleNavClick('track-order')} className="flex items-center gap-1.5 hover:text-cyan">
                <Truck className="w-4 h-4 text-cyan" /> Track Shipment
              </button>
              <button onClick={() => handleNavClick('contact')} className="hover:text-cyan">
                24/7 Helpline
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
