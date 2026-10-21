import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Award, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const Footer = () => {
  const { goToPage, setSelectedCategory, showToast } = useStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast("Please enter a valid email address", "warning");
      return;
    }
    setSubscribed(true);
    showToast("Subscribed! Your 15% discount code is VOLT15");
    setEmail('');
  };

  return (
    <footer className="bg-navy border-t border-navy-border text-navy-muted text-sm mt-16 relative">
      {/* Top subtle cyan ambient border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 text-left">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => goToPage('home')}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan to-blue-600 flex items-center justify-center text-navy shadow-glow-cyan">
                <Zap className="w-5 h-5 fill-navy stroke-navy" />
              </div>
              <span className="text-2xl font-black tracking-widest text-white uppercase font-display">
                ODDAWURLD
              </span>
            </div>

            <p className="text-navy-muted text-sm leading-relaxed max-w-sm">
              Engineers and purveyors of next-generation architectural lighting, tempered glass switchboards, 99.9% electrolytic copper cables, and high-breaking circuit protection hardware.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-navy-muted">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-card border border-navy-border">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan" /> IS 694 : 2010
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-card border border-navy-border">
                <Award className="w-3.5 h-3.5 text-cyan" /> ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => goToPage('home')} className="hover:text-cyan transition-colors">
                  Home Studio
                </button>
              </li>
              <li>
                <button onClick={() => goToPage('shop')} className="hover:text-cyan transition-colors">
                  All Products
                </button>
              </li>
              <li>
                <button onClick={() => goToPage('categories')} className="hover:text-cyan transition-colors">
                  Category Directory
                </button>
              </li>
              <li>
                <button onClick={() => goToPage('new-arrivals')} className="hover:text-cyan transition-colors">
                  New Arrivals
                </button>
              </li>
              <li>
                <button onClick={() => goToPage('wishlist')} className="hover:text-cyan transition-colors">
                  Saved Wishlist
                </button>
              </li>
              <li>
                <button onClick={() => goToPage('track-order')} className="hover:text-cyan transition-colors">
                  Track Consignment
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setSelectedCategory('lighting'); goToPage('shop', { category: 'lighting' }); }} className="hover:text-cyan transition-colors">
                  Architectural LED Lighting
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('switches'); goToPage('shop', { category: 'switches' }); }} className="hover:text-cyan transition-colors">
                  Modular Glass Switches
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('protection'); goToPage('shop', { category: 'protection' }); }} className="hover:text-cyan transition-colors">
                  MCBs & RCCB Protectors
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('cables'); goToPage('shop', { category: 'cables' }); }} className="hover:text-cyan transition-colors">
                  FR-LSH Copper Cables
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('smart-home'); goToPage('shop', { category: 'smart-home' }); }} className="hover:text-cyan transition-colors">
                  Zigbee 3.0 Automation
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('fans'); goToPage('shop', { category: 'fans' }); }} className="hover:text-cyan transition-colors">
                  BLDC Energy Star Fans
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Support */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Electrician Desk
            </h4>
            <p className="text-xs text-navy-muted">
              Subscribe for electrical wiring blueprints, NEC code updates, and wholesale trade discounts.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-navy-card border border-navy-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan"
                />
                <button
                  type="submit"
                  className="absolute right-1 p-2 rounded-lg bg-cyan text-navy hover:bg-cyan-300 transition-colors shadow-glow-cyan"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </form>

            <div className="pt-2 text-xs space-y-1.5 text-navy-muted">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan" />
                <span>24/7 Helpline: +1 (800) 489-VOLT</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan" />
                <span>support@oddawurld.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-10 mt-10 border-t border-navy-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-muted">
          <p>© 2026 ODDAWURLD Electrical Hardware Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => goToPage('about')} className="hover:text-white">About Us</button>
            <button onClick={() => goToPage('contact')} className="hover:text-white">Safety Compliance</button>
            <button onClick={() => goToPage('contact')} className="hover:text-white">Terms of Service</button>
            <button onClick={() => goToPage('contact')} className="hover:text-white">Privacy Policy</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
