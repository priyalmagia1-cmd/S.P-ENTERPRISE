import React from 'react';
import { BRANDS } from '../data';
import { ShieldCheck, Award, Zap, CheckCircle } from 'lucide-react';

export default function Brands() {
  // Separate featured brands for specialized highlight cards
  const featuredBrands = BRANDS.filter(b => b.featured);
  const remainingBrands = BRANDS.filter(b => !b.featured);

  return (
    <div className="py-16 md:py-24 bg-white border-b-4 border-primary-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-accent-orange uppercase tracking-[0.25em] font-heading">
            Suppliers &amp; Stockists
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary-blue mt-2 font-heading tracking-tighter uppercase leading-none">
            Premium Brands We Actively Supply
          </h2>
          <p className="text-sm text-steel-grey mt-3 font-semibold">
            S.P. Enterprise is an authorized partner and largest stockist of major national and international fastener brands, guaranteeing absolute authenticity and physical tracking.
          </p>
          <div className="h-1.5 w-24 bg-accent-orange mx-auto mt-4 rounded-none"></div>
        </div>

        {/* Infinite Scrolling Marquee of Brand Names (Meets Brands Marquee PRD Requirement) */}
        <div className="bg-light-grey rounded-none py-8 px-4 border-2 border-dark-charcoal overflow-hidden relative mb-16">
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-light-grey to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-light-grey to-transparent z-10 pointer-events-none"></div>

          <div className="flex select-none overflow-hidden relative">
            <div className="animate-marquee flex items-center space-x-12 shrink-0">
              {/* Double items for infinite scrolling loop */}
              {[...BRANDS, ...BRANDS].map((brand, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center space-x-2 px-6 py-3.5 bg-white rounded-none border-2 border-dark-charcoal font-heading font-black tracking-widest text-primary-blue hover:text-accent-orange transition-colors"
                >
                  {/* Decorative orange bolt square */}
                  <span className="w-2.5 h-2.5 bg-accent-orange shrink-0"></span>
                  <span className="text-xs md:text-sm uppercase font-black">{brand.logoText}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Brands Grid Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-black text-primary-blue font-heading uppercase tracking-widest text-left border-b-2 border-dark-charcoal pb-3">
            Strategic Brand Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBrands.map((brand) => (
              <div 
                key={brand.id}
                className="bg-white rounded-none border-2 border-dark-charcoal hover:shadow-[6px_6px_0px_0px_rgba(242,140,40,1)] p-6 text-left transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Stylized Logo Frame */}
                  <div className="bg-primary-blue text-white font-black text-xl tracking-widest font-heading rounded-none h-14 flex items-center justify-center shadow-none uppercase border-b-4 border-accent-orange">
                    {brand.logoText}
                  </div>
                  <div>
                    <h4 className="text-base font-black uppercase text-primary-blue font-heading">
                      {brand.name}
                    </h4>
                    <span className="text-[10px] text-accent-orange font-black uppercase tracking-widest">
                      Featured Stockist Partner
                    </span>
                  </div>
                  <p className="text-xs text-steel-grey font-semibold leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-light-grey text-[11px] text-dark-charcoal font-sans">
                  <strong className="text-steel-grey font-bold uppercase tracking-wider text-[10px]">Specialty:</strong> {brand.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Authorized Brands List */}
        <div className="mt-16 bg-light-grey/40 rounded-none p-8 border-2 border-dark-charcoal">
          <h3 className="text-base font-black text-primary-blue font-heading uppercase tracking-widest text-left mb-6">
            Other Major Brands Available in Ready Stock
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {remainingBrands.map((brand) => (
              <div 
                key={brand.id}
                className="bg-white rounded-none border-2 border-dark-charcoal p-4 text-left hover:border-primary-blue transition-all shadow-none flex flex-col justify-between min-h-[140px]"
              >
                <div className="space-y-2">
                  <span className="text-xs font-black text-primary-blue uppercase font-heading tracking-widest block">
                    {brand.logoText}
                  </span>
                  <p className="text-[11px] text-steel-grey font-semibold line-clamp-2 leading-relaxed">
                    {brand.description}
                  </p>
                </div>
                <div className="text-[10px] text-accent-orange font-black uppercase tracking-wider pt-2 mt-2 border-t border-light-grey/55 truncate">
                  {brand.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
