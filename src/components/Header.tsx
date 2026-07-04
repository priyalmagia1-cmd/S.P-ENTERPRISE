import React, { useState } from 'react';
import { useQuote } from '../context/QuoteContext';
import { Bolt, Menu, X, ShoppingCart, Search, Phone, Mail, FileText } from 'lucide-react';
import LogoSvg from './LogoSvg';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openRfqDrawer: () => void;
  onSearchClick: () => void;
}

export default function Header({ activeTab, setActiveTab, openRfqDrawer, onSearchClick }: HeaderProps) {
  const { cartCount } = useQuote();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'industries', label: 'Industries' },
    { id: 'quality', label: 'Quality' },
    { id: 'brands', label: 'Brands' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Contact Details */}
      <div className="bg-dark-charcoal text-white text-xs py-2 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center border-b border-white/10 font-sans">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 md:gap-x-6">
          <a href="tel:+919969130013" className="flex items-center space-x-1 hover:text-accent-orange transition-colors whitespace-nowrap">
            <Phone className="w-3.5 h-3.5 text-accent-orange" />
            <span>+91 99691 30013</span>
          </a>
          <a href="mailto:spenterprise2403@gmail.com" className="flex items-center space-x-1 hover:text-accent-orange transition-colors whitespace-nowrap">
            <Mail className="w-3.5 h-3.5 text-accent-orange" />
            <span>spenterprise2403@gmail.com</span>
          </a>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <span className="text-white/60">ISO 9001:2015 Certified Supplier</span>
          <span className="text-white/30">|</span>
          <span className="text-accent-orange font-medium">Est. 1992</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-md border-b-4 border-accent-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo Brand */}
          <div 
            onClick={() => handleTabClick('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            {/* Real elegant serif interlaced SP Monogram Logo */}
            <div className="border border-dark-charcoal/10 shadow-md overflow-hidden group-hover:scale-105 transition-transform duration-200 bg-white">
              <LogoSvg className="w-14 h-17" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-primary-blue tracking-tighter font-heading flex items-center uppercase">
                S.P. ENTERPRISE
                <span className="text-accent-orange ml-0.5 text-xl font-black">.</span>
              </span>
              <span className="text-[9px] font-bold text-steel-grey uppercase tracking-[0.2em] font-sans">
                You Name It. We Have It.
              </span>
            </div>
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`px-3 py-2 rounded-none text-xs font-bold uppercase tracking-widest transition-all duration-150 ${
                  activeTab === item.id
                    ? 'text-primary-blue border-b-2 border-accent-orange font-black'
                    : 'text-dark-charcoal hover:text-primary-blue hover:bg-light-grey'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons Right */}
          <div className="flex items-center space-x-3">
            {/* Search Trigger */}
            <button
              onClick={onSearchClick}
              className="p-2.5 rounded-none hover:bg-light-grey text-dark-charcoal hover:text-primary-blue transition-colors relative group border border-transparent hover:border-light-grey"
              title="Search Fastener Catalog"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Quote Cart Button */}
            <button
              onClick={openRfqDrawer}
              className="p-2.5 rounded-none hover:bg-light-grey text-dark-charcoal hover:text-primary-blue transition-colors relative border border-transparent hover:border-light-grey"
              title="View Quote List"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-orange text-white text-[9px] font-black w-5 h-5 rounded-none flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quote Form Callout button */}
            <button
              onClick={() => handleTabClick('contact')}
              className="hidden sm:flex items-center space-x-1.5 bg-accent-orange hover:bg-accent-orange-hover text-white px-5 py-2.5 rounded-none text-[10px] font-extrabold uppercase tracking-widest shadow-sm hover:brightness-110 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>Request Quote</span>
            </button>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-light-grey text-dark-charcoal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-light-grey absolute w-full left-0 shadow-lg z-50">
            <div className="px-2 pt-3 pb-4 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-md text-sm font-semibold transition-all ${
                    activeTab === item.id
                      ? 'text-primary-blue bg-primary-blue/5 border-l-4 border-primary-blue'
                      : 'text-dark-charcoal hover:text-primary-blue hover:bg-light-grey'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 px-4 border-t border-light-grey mt-2">
                <button
                  onClick={() => {
                    handleTabClick('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-primary-blue hover:bg-primary-blue-hover text-white py-3 rounded-lg text-sm font-semibold tracking-wide shadow-md"
                >
                  <FileText className="w-4 h-4 text-accent-orange" />
                  <span>Request Instant RFQ</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
