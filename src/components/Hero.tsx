import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBrowseProducts: () => void;
  onRequestQuote: () => void;
}

export default function Hero({ onBrowseProducts, onRequestQuote }: HeroProps) {
  const stats = [
    { value: '1992', label: 'Established Year', subtitle: '34+ Years of Trust' },
    { value: '50,000+', label: 'Products & Sizes', subtitle: 'In Stock Catalog' },
    { value: '9+', label: 'Industries Serviced', subtitle: 'Automobile, Energy, Infra' },
    { value: 'PAN India', label: 'Supply Network', subtitle: 'Active Fleet Logistics' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-white via-light-grey to-white overflow-hidden border-b-4 border-primary-blue">
      {/* Decorative blueprint grid background of 12 columns */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-primary-blue/5 h-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 relative">
        <div className="max-w-4xl text-left space-y-8">
          
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-accent-orange font-bold uppercase tracking-[0.25em] text-xs italic">
                Engineering Excellence Since 1992
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-blue tracking-tighter leading-none uppercase font-heading">
                Your Trusted Industrial <br />
                <span className="text-accent-orange">Fastener Partner.</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-steel-grey max-w-2xl font-semibold leading-relaxed font-sans">
              Manufacturing, supplying, and trading over 50,000+ industrial fasteners for PAN India critical energy, marine, automotive, and heavy infrastructure projects. ISO 9001:2015 fully certified quality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onRequestQuote}
                className="flex items-center justify-center space-x-2 bg-accent-orange hover:bg-accent-orange-hover text-white px-8 py-4 rounded-none font-heading font-black text-xs uppercase tracking-widest border-b-4 border-accent-orange-hover hover:brightness-110 transition-all shadow-sm group"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onBrowseProducts}
                className="flex items-center justify-center space-x-2 bg-white hover:bg-light-grey text-primary-blue border-2 border-primary-blue px-8 py-4 rounded-none font-heading font-black text-xs uppercase tracking-widest transition-all shadow-sm"
              >
                <span>Browse Catalogue</span>
              </button>
            </div>
          </div>

        </div>

        {/* Corporate Statistics Row */}
        <div className="mt-20 border-t-2 border-dark-charcoal pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="text-left bg-white p-6 rounded-none border-2 border-primary-blue shadow-[6px_6px_0px_0px_rgba(11,79,138,0.15)] transition-all"
              >
                <div className="text-4xl md:text-5xl font-black text-primary-blue font-heading tracking-tighter leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] font-black text-dark-charcoal mt-2 uppercase tracking-widest font-heading">
                  {stat.label}
                </div>
                <div className="text-xs font-semibold text-steel-grey mt-0.5">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
