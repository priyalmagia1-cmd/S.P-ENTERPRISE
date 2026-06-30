import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronUp, MessageCircle } from 'lucide-react';

export default function FloatingControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 font-sans">
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919969130013?text=Hello%20S.P.%20Enterprise%20sales%20desk,%20I%20visited%20your%20website%20and%20would%20like%20to%20enquire%20about%20industrial%20fasteners."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3.5 rounded-none border-2 border-dark-charcoal shadow-none hover:shadow-[4px_4px_0px_0px_rgba(43,45,49,1)] transition-all flex items-center justify-center relative group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5.5 h-5.5 fill-current" />
        <span className="absolute right-14 bg-white text-dark-charcoal font-black text-[9px] uppercase tracking-widest py-1 px-2.5 rounded-none border-2 border-dark-charcoal whitespace-nowrap shadow-none opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp Sales Desk
        </span>
      </a>

      {/* Quick Phone Call Button */}
      <a
        href="tel:+919969130013"
        className="bg-primary-blue text-white p-3.5 rounded-none border-2 border-dark-charcoal shadow-none hover:shadow-[4px_4px_0px_0px_rgba(43,45,49,1)] transition-all flex items-center justify-center relative group"
        title="Call Sales Desk"
      >
        <Phone className="w-5.5 h-5.5" />
        <span className="absolute right-14 bg-white text-dark-charcoal font-black text-[9px] uppercase tracking-widest py-1 px-2.5 rounded-none border-2 border-dark-charcoal whitespace-nowrap shadow-none opacity-0 group-hover:opacity-100 transition-opacity">
          Call +91 99691 30013
        </span>
      </a>

      {/* Quick Email Button */}
      <a
        href="mailto:sales@spenterprise.in"
        className="bg-accent-orange text-white p-3.5 rounded-none border-2 border-dark-charcoal shadow-none hover:shadow-[4px_4px_0px_0px_rgba(43,45,49,1)] transition-all flex items-center justify-center relative group"
        title="Email Sales Desk"
      >
        <Mail className="w-5.5 h-5.5" />
        <span className="absolute right-14 bg-white text-dark-charcoal font-black text-[9px] uppercase tracking-widest py-1 px-2.5 rounded-none border-2 border-dark-charcoal whitespace-nowrap shadow-none opacity-0 group-hover:opacity-100 transition-opacity">
          Email sales@spenterprise.in
        </span>
      </a>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-dark-charcoal text-white p-3.5 rounded-none border-2 border-white/20 shadow-none hover:shadow-[4px_4px_0px_0px_rgba(242,140,40,1)] transition-all flex items-center justify-center relative group"
          title="Scroll to Top"
        >
          <ChevronUp className="w-5.5 h-5.5" />
          <span className="absolute right-14 bg-white text-dark-charcoal font-black text-[9px] uppercase tracking-widest py-1 px-2.5 rounded-none border-2 border-dark-charcoal whitespace-nowrap shadow-none opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll to Top
          </span>
        </button>
      )}

    </div>
  );
}
