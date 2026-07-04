import React, { useState } from 'react';
import { Bolt, ArrowRight, ShieldCheck, Truck, Warehouse, HelpCircle } from 'lucide-react';
import FastenerSvg from './FastenerSvg';

interface HeroProps {
  onBrowseProducts: () => void;
  onRequestQuote: () => void;
}

export default function Hero({ onBrowseProducts, onRequestQuote }: HeroProps) {
  const [activeSandboxFastener, setActiveSandboxFastener] = useState('hexagon-bolts');

  const fastenerList = [
    { id: 'hexagon-bolts', name: 'Hex Bolts', desc: 'Standards: IS 1364, DIN 933. Grades up to 14.9' },
    { id: 'nuts', name: 'Industrial Nuts', desc: 'Heavy hex, Nylock, Dom, & SA-194-2H nuts' },
    { id: 'studs-rods', name: 'Studs & Rods', desc: 'High-temp ASTM A193 B7 stud bolts' },
    { id: 'socket-products', name: 'Socket Cap', desc: 'High tensile 12.9 Socket screws' },
    { id: 'washers', name: 'Lock Washers', desc: 'Wedge-lock, DTI, & spring washers' },
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
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

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-dark-charcoal">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-accent-orange" />
                <span className="text-[10px] font-black text-dark-charcoal uppercase tracking-widest">TÜV ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-accent-orange" />
                <span className="text-[10px] font-black text-dark-charcoal uppercase tracking-widest">PAN India Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Warehouse className="w-5 h-5 text-accent-orange" />
                <span className="text-[10px] font-black text-dark-charcoal uppercase tracking-widest">500+ Tons Stock</span>
              </div>
            </div>
          </div>

          {/* Hero Right Interactive CAD Fastener Sandbox */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white rounded-none border-4 border-primary-blue p-6 relative group overflow-hidden shadow-[8px_8px_0px_0px_rgba(11,79,138,0.15)]">
              {/* Technical drawing aesthetic background corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-blue/25"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-blue/25"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary-blue/25"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-blue/25"></div>

              {/* Dynamic Svg Display Area */}
              <div className="w-full h-64 flex items-center justify-center bg-white rounded-none border border-light-grey py-4 relative overflow-hidden">
                {activeSandboxFastener === 'hexagon-bolts' ? (
                  <div className="w-full h-full relative flex items-center justify-center p-2 bg-white">
                    <img
                      src="/src/assets/images/regenerated_image_1783145024175.png"
                      alt="Black Hexagon Bolts"
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <FastenerSvg 
                    type={activeSandboxFastener} 
                    className="w-48 h-48 text-primary-blue transition-all duration-300 transform group-hover:scale-105" 
                    strokeWidth={1.5}
                  />
                )}
              </div>

              {/* Fastener Selector list */}
              <div className="mt-6 space-y-3">
                <p className="text-[10px] font-black text-steel-grey uppercase tracking-widest text-left">
                  Interactive Fastener Showcase
                </p>
                <div className="grid grid-cols-5 gap-1">
                  {fastenerList.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setActiveSandboxFastener(f.id)}
                      className={`py-2.5 rounded-none font-heading text-[10px] font-extrabold uppercase tracking-wider border transition-all ${
                        activeSandboxFastener === f.id
                          ? 'bg-primary-blue text-white border-primary-blue font-black'
                          : 'bg-white text-dark-charcoal hover:bg-light-grey border-light-grey'
                      }`}
                    >
                      {f.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
                {/* Active info card */}
                <div className="bg-primary-blue/5 rounded-none p-3 text-left border border-primary-blue/15">
                  <p className="text-[11px] font-black text-primary-blue uppercase tracking-wider">
                    {fastenerList.find(f => f.id === activeSandboxFastener)?.name} SPECIFICATIONS
                  </p>
                  <p className="text-xs font-semibold text-steel-grey mt-0.5">
                    {fastenerList.find(f => f.id === activeSandboxFastener)?.desc}
                  </p>
                </div>
              </div>
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
