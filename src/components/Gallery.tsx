import React, { useState } from 'react';
import { Warehouse, PackageCheck, Anchor, Wind, Car, Settings, X, ZoomIn } from 'lucide-react';
import FastenerSvg from './FastenerSvg';

export default function Gallery() {
  const [activeItemIdx, setActiveItemIdx] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "Central Fastener Warehouse",
      desc: "Our high-capacity stockroom at Bibjan Street, Mumbai housing over 500+ tons of ready fasteners.",
      category: "Storage & Logistics",
      icon: Warehouse,
      fastenerId: 'hexagon-bolts'
    },
    {
      title: "Threaded Rod Production",
      desc: "Freshly cold-forged Grade B7 alloy steel stud rods ready for high-temperature valve testing.",
      category: "Product Catalog",
      icon: Settings,
      fastenerId: 'studs-rods'
    },
    {
      title: "Automotive Fastening",
      desc: "High-tensile Grade 10.9 socket head cap screws assembled on vehicle steering linkage housings.",
      category: "Applications",
      icon: Car,
      fastenerId: 'socket-products'
    },
    {
      title: "Concrete Anchor Expansion",
      desc: "Heavy-duty steel through anchor expanding securely inside industrial concrete foundation pads.",
      category: "Applications",
      icon: Anchor,
      fastenerId: 'anchor-fasteners'
    },
    {
      title: "Wind Rotor Bolt Segments",
      desc: "Large diameter high-strength friction grip (HSFG) structural bolts clamping wind turbine blade hubs.",
      category: "Applications",
      icon: Wind,
      fastenerId: 'washers'
    },
    {
      title: "Export Moisture-Proof Packaging",
      desc: "Double-thick plastic lining and heavy wooden structural crate pack-outs resisting saline shipping air.",
      category: "Packaging",
      icon: PackageCheck,
      fastenerId: 'nuts'
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white border-b-4 border-primary-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-accent-orange uppercase tracking-[0.25em] font-heading">
            Operational Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary-blue mt-2 font-heading tracking-tighter uppercase leading-none">
            Our Warehousing &amp; Applications Showcase
          </h2>
          <p className="text-sm text-steel-grey mt-3 font-semibold">
            A visual overview of our heavy stockroom facilities, advanced thread processing, high-integrity packaging, and critical real-world application sites PAN India.
          </p>
          <div className="h-1.5 w-24 bg-accent-orange mx-auto mt-4 rounded-none"></div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-light-grey/40 rounded-none border-2 border-dark-charcoal overflow-hidden group hover:border-primary-blue shadow-none hover:shadow-[6px_6px_0px_0px_rgba(11,79,138,0.15)] transition-all flex flex-col text-left"
            >
              {/* Image Conceptual Placeholder area */}
              <div className="h-56 bg-gradient-to-br from-primary-blue/5 to-primary-blue/15 relative flex items-center justify-center p-6 overflow-hidden border-b-2 border-dark-charcoal">
                <FastenerSvg type={item.fastenerId} className="w-32 h-32 text-primary-blue/30 group-hover:scale-110 group-hover:text-primary-blue/45 transition-all duration-300" />
                
                <div className="absolute top-4 left-4 bg-white border-2 border-dark-charcoal text-[10px] font-black text-primary-blue uppercase tracking-widest px-2.5 py-1 rounded-none flex items-center space-x-1 shadow-none">
                  {React.createElement(item.icon, { className: "w-3 h-3 text-accent-orange" })}
                  <span>{item.category}</span>
                </div>

                <button 
                  onClick={() => setActiveItemIdx(idx)}
                  className="absolute bottom-4 right-4 bg-primary-blue text-white p-2 rounded-none border-2 border-dark-charcoal opacity-0 group-hover:opacity-100 transition-opacity shadow-none hover:bg-accent-orange"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Text Description */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-primary-blue font-heading uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-steel-grey leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t-2 border-dark-charcoal text-[9px] font-black text-accent-orange uppercase tracking-widest font-heading">
                  Standard batch catalog visual
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItemIdx !== null && (
        <div className="fixed inset-0 bg-dark-charcoal/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-none max-w-2xl w-full border-4 border-primary-blue text-left shadow-[12px_12px_0px_0px_rgba(242,140,40,1)] relative overflow-hidden">
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveItemIdx(null)}
              className="absolute top-4 right-4 bg-white hover:bg-light-grey text-dark-charcoal p-2 rounded-none border-2 border-dark-charcoal shadow-none z-10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image display */}
            <div className="h-72 md:h-80 bg-gradient-to-br from-primary-blue/5 to-primary-blue/20 flex items-center justify-center p-8 border-b-4 border-accent-orange relative">
              <FastenerSvg type={galleryItems[activeItemIdx].fastenerId} className="w-48 h-48 text-primary-blue" />
              <div className="absolute bottom-4 left-6 bg-primary-blue text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-none shadow-none flex items-center space-x-1.5 border-2 border-dark-charcoal">
                {React.createElement(galleryItems[activeItemIdx].icon, { className: "w-3.5 h-3.5 text-accent-orange" })}
                <span>{galleryItems[activeItemIdx].category}</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 md:p-8 space-y-3">
              <h3 className="text-xl font-black text-primary-blue font-heading tracking-tight uppercase">
                {galleryItems[activeItemIdx].title}
              </h3>
              <p className="text-sm text-steel-grey leading-relaxed font-semibold">
                {galleryItems[activeItemIdx].desc}
              </p>
              <div className="pt-4 border-t-2 border-dark-charcoal flex justify-between text-[11px] text-steel-grey font-bold uppercase tracking-wider font-sans">
                <span>Location: Mumbai Facility</span>
                <span>Verification Scope: certified vendors Only</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
