import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Zap } from 'lucide-react';

export const ContactPage = () => {
  const { showToast } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'trade-quote',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in your name, email, and message", "warning");
      return;
    }
    setSubmitted(true);
    showToast("Message received! An electrical engineer will reply within 4 hours.");
  };

  return (
    <div className="py-12 sm:py-16 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-cyan uppercase">
            DIRECT ENGINEERING HELPLINE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1 mb-3">
            Contact Oddawurld Electrical
          </h1>
          <p className="text-navy-muted text-sm max-w-xl">
            Have questions about load calculations, wire gauges, or wholesale commercial quotes? Our senior engineering desk is on standby.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Support Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-navy-card border border-navy-border space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/40 text-cyan flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white text-sm">24/7 Electrician Hotline</p>
                  <p className="text-navy-muted mt-0.5">Toll-free across US & Canada</p>
                  <p className="text-cyan font-bold mt-1 text-sm">+1 (800) 489-VOLT (8658)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/40 text-cyan flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white text-sm">Engineering & Trade Support</p>
                  <p className="text-navy-muted mt-0.5">Average response time: 2 hours</p>
                  <p className="text-cyan font-medium mt-1">support@voltix-electrical.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/40 text-cyan flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white text-sm">Central Logistics Depot</p>
                  <p className="text-navy-muted mt-0.5">Oddawurld High-Voltage Laboratory</p>
                  <p className="text-gray-300 mt-1">Industrial Parkway, Building 8, Sector 12, CA 94016</p>
                </div>
              </div>

            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-violet/30 to-bistre-card border border-violet-glow/30 text-xs text-gray-300 space-y-2">
              <Zap className="w-5 h-5 text-cyan" />
              <p className="font-bold text-white text-sm">Wholesale Contractor Accounts</p>
              <p className="leading-relaxed text-navy-muted">
                Are you placing orders over $2,000 for residential developments or office towers? We assign a dedicated electrical procurement manager to your account.
              </p>
            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-navy-card border border-navy-border shadow-card-dark">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan/10 border border-cyan text-cyan mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Dispatched Successfully</h3>
                  <p className="text-xs text-navy-muted max-w-sm mx-auto">
                    Your request has been routed to our technical support team. You will receive an email confirmation with ticket reference shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Send a Message to Our Engineering Team
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-navy border border-navy-border rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-medium mb-1">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-navy border border-navy-border rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-cyan"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-1">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-navy border border-navy-border rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-cyan"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-medium mb-1">Inquiry Purpose</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-navy border border-navy-border rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-cyan"
                      >
                        <option value="trade-quote">Contractor Bulk / Trade Quote</option>
                        <option value="tech-specs">Technical Wiring Specs & Verification</option>
                        <option value="order-status">Existing Order & Shipping Support</option>
                        <option value="warranty">Warranty Claim or Replacement</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-1">Your Message / Bill of Materials *</label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify required quantities, cable lengths, or breaker amperage requirements..."
                      className="w-full bg-navy border border-navy-border rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-cyan"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-cyan text-navy font-extrabold text-xs tracking-wider shadow-glow-cyan hover:bg-cyan-300 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>DISPATCH MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
