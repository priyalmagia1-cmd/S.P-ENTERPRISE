import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { Bolt, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openRfqDrawer: () => void;
}

export default function Footer({ setActiveTab, openRfqDrawer }: FooterProps) {
  const { cartCount } = useQuote();

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-charcoal text-white pt-16 pb-8 border-t-8 border-primary-blue text-left font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Company Info column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleTabClick('home')}>
            <div className="bg-primary-blue text-white w-10 h-10 rounded-none flex items-center justify-center font-black text-xl border-2 border-accent-orange">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black font-heading tracking-tighter leading-none text-white">
                S.P. ENTERPRISE
              </span>
              <span className="text-[9px] text-steel-grey uppercase tracking-[0.2em] font-black mt-0.5">
                ESTABLISHED 1992
              </span>
            </div>
          </div>
          <p className="text-xs text-white/70 leading-relaxed font-semibold">
            Manufacturer, stockist, and premium trader of over 50,000+ industrial fastener varieties. Serving critical energy, marine, automotive, and infrastructure sectors PAN India.
          </p>
          <div className="pt-2 text-xs text-white/55 font-semibold">
            <strong className="text-accent-orange">ISO 9001:2015 Certified</strong> <br />
            Certificate No: TÜV Austria Registered Batch
          </div>
        </div>

        {/* Quick links column */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-accent-orange font-heading">
            Corporate Navigation
          </h4>
          <ul className="space-y-2 text-xs text-white/80 font-bold">
            <li>
              <button onClick={() => handleTabClick('home')} className="hover:text-accent-orange transition-colors">Home</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('about')} className="hover:text-accent-orange transition-colors">About Us</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('products')} className="hover:text-accent-orange transition-colors">Product Catalogue</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('industries')} className="hover:text-accent-orange transition-colors">Sectors We Serve</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('quality')} className="hover:text-accent-orange transition-colors">Quality Assurance</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('brands')} className="hover:text-accent-orange transition-colors">Authorized Brands</button>
            </li>
          </ul>
        </div>

        {/* Fastener Families Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-accent-orange font-heading">
            Fastener Catalogue
          </h4>
          <ul className="space-y-2 text-xs text-white/80 font-bold">
            <li>
              <button onClick={() => handleTabClick('products')} className="hover:text-accent-orange transition-colors">Hexagon Bolts</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('products')} className="hover:text-accent-orange transition-colors">Threaded Studs &amp; Rods</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('products')} className="hover:text-accent-orange transition-colors">Industrial Nuts &amp; Washers</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('products')} className="hover:text-accent-orange transition-colors">Socket Cap Screws</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('products')} className="hover:text-accent-orange transition-colors">Self-Clinching Fasteners</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('products')} className="hover:text-accent-orange transition-colors">Stainless Steel Fasteners</button>
            </li>
          </ul>
        </div>

        {/* Direct Contacts Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase tracking-widest text-accent-orange font-heading">
            Commercial Desks
          </h4>
          <ul className="space-y-3.5 text-xs text-white/80 font-sans">
            <li className="flex items-start space-x-2">
              <Phone className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
              <a href="tel:+919969130013" className="hover:text-accent-orange transition-colors font-black">+91 99691 30013</a>
            </li>
            <li className="flex items-start space-x-2">
              <Mail className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
              <div className="flex flex-col space-y-1">
                <a href="mailto:spenterprise2403@gmail.com" className="hover:text-accent-orange transition-colors font-black">spenterprise2403@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start space-x-2 leading-relaxed uppercase text-[10px] font-bold">
              <MapPin className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
              <span>
                Shop No. 5, Shaket, 51 TPS Road, Borivali (W), Mumbai - 400 092, Maharashtra, India.
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 space-y-4 sm:space-y-0">
        <div className="font-semibold">
          © {new Date().getFullYear()} S.P. Enterprise. All Rights Reserved. Est. 1992.
        </div>
        <div className="flex space-x-6 font-semibold">
          <button onClick={() => handleTabClick('contact')} className="hover:text-white transition-colors">Privacy Policy</button>
          <button onClick={() => handleTabClick('contact')} className="hover:text-white transition-colors">Terms of Supply</button>
          <button onClick={() => handleTabClick('contact')} className="hover:text-white transition-colors">Sitemap</button>
        </div>
      </div>
    </footer>
  );
}
