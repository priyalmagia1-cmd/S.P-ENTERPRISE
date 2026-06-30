import React, { useState } from 'react';
import { TIMELINE } from '../data';
import { ShieldCheck, Target, Eye, Handshake, Award, Users } from 'lucide-react';

export default function About() {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(TIMELINE.length - 1);

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-accent-orange uppercase tracking-[0.25em] font-heading">
            Established 1992
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary-blue mt-2 font-heading tracking-tighter uppercase leading-none">
            Journey of Engineering Excellence
          </h2>
          <div className="h-1.5 w-24 bg-accent-orange mx-auto mt-4 rounded-none"></div>
        </div>

        {/* Founder & Corporate Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Founder Profile / Image Placeholder */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-none overflow-hidden border-4 border-primary-blue shadow-[8px_8px_0px_0px_rgba(11,79,138,0.15)] bg-white p-6 text-center">
              {/* Outer decorative line */}
              <div className="absolute inset-4 border border-primary-blue/10 rounded-none pointer-events-none"></div>
              
              {/* Profile Drawing placeholder */}
              <div className="w-40 h-40 rounded-none mx-auto bg-primary-blue/10 flex items-center justify-center border-4 border-primary-blue shadow-none relative overflow-hidden">
                <Users className="w-16 h-16 text-primary-blue" />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-black text-primary-blue font-heading uppercase tracking-tight">Mr. Mehul Magia</h3>
                <p className="text-xs font-extrabold text-accent-orange uppercase tracking-wider mt-1">Founder &amp; Dynamic Head</p>
                <div className="h-0.5 w-12 bg-primary-blue/20 mx-auto my-3 rounded-none"></div>
                <p className="text-xs text-steel-grey font-semibold italic leading-relaxed px-4">
                  "Established in 1992 with the foundational philosophy of quality, credibility, and long-term customer partnerships."
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Story Content */}
          <div className="lg:col-span-8 text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-primary-blue font-heading tracking-tighter uppercase">
              About S.P. Enterprise
            </h3>
            <p className="text-sm sm:text-base text-steel-grey font-semibold leading-relaxed">
              <strong>S.P. Enterprise</strong> is a pioneer organisation engaged in manufacturing, supplying, and trading a broad array of nuts, bolts, and industrial fasteners. Established in 1992 under the visionary leadership of Mr. Mehul Magia, the company has grown to become a premium nationwide partner for critical engineering sectors.
            </p>
            <p className="text-sm sm:text-base text-steel-grey font-semibold leading-relaxed">
              We cater to diverse heavy industries across India including <strong>Automobiles, Construction, Railway, Petroleum, Wind Power, Chemicals, Shipping, and Pharma</strong>. Our comprehensive product inventory ranges over <strong>50,000 fastener varieties</strong>, acknowledged to meet the highest national and international engineering standards. All raw materials are sourced exclusively from audited and certified steel vendors to assure uniform microstructures and strength profiles.
            </p>
            
            <div className="bg-light-grey rounded-none p-5 border-l-4 border-accent-orange">
              <h4 className="text-xs font-black text-primary-blue font-heading uppercase tracking-widest mb-2">
                Our Operational Philosophy
              </h4>
              <p className="text-sm text-steel-grey font-semibold italic leading-relaxed">
                "Survival of good quality, winning customers with absolute credibility, and respecting clients as proud pillars of our enterprise. We embody innovation, honesty, unity, and progress as we continuously satisfy standard and bespoke fastener demands."
              </p>
            </div>
          </div>

        </div>

        {/* Vision, Mission, Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Vision */}
          <div className="bg-primary-blue text-white rounded-none p-8 text-left border-2 border-primary-blue shadow-[6px_6px_0px_0px_rgba(242,140,40,1)] relative overflow-hidden group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none group-hover:scale-110 transition-transform">
              <Eye className="w-32 h-32" />
            </div>
            <div className="bg-white/10 w-12 h-12 rounded-none flex items-center justify-center mb-6 border border-white/25">
              <Eye className="w-6 h-6 text-accent-orange" />
            </div>
            <h4 className="text-lg font-black uppercase tracking-wider font-heading mb-3">Our Vision</h4>
            <p className="text-xs text-white/95 leading-relaxed font-semibold font-sans">
              To become nationally and internationally the most competitive and qualitative fastening enterprise, continuously raising standard benchmarks for structural safety.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white border-2 border-dark-charcoal rounded-none p-8 text-left shadow-[6px_6px_0px_0px_rgba(11,79,138,0.15)] relative overflow-hidden group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
              <Target className="w-32 h-32 text-primary-blue" />
            </div>
            <div className="bg-primary-blue/5 w-12 h-12 rounded-none flex items-center justify-center mb-6 border border-primary-blue/15">
              <Target className="w-6 h-6 text-accent-orange" />
            </div>
            <h4 className="text-lg font-black text-primary-blue uppercase tracking-wider font-heading mb-3">Our Mission</h4>
            <p className="text-xs text-steel-grey leading-relaxed font-semibold font-sans">
              To maintain 50,000+ ready-to-ship fastener stock items, eliminating procurement friction for India's high-tech engineering assemblies with zero-fault batches.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white border-2 border-dark-charcoal rounded-none p-8 text-left shadow-[6px_6px_0px_0px_rgba(11,79,138,0.15)] relative overflow-hidden group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
              <Handshake className="w-32 h-32 text-primary-blue" />
            </div>
            <div className="bg-primary-blue/5 w-12 h-12 rounded-none flex items-center justify-center mb-6 border border-primary-blue/15">
              <Handshake className="w-6 h-6 text-accent-orange" />
            </div>
            <h4 className="text-lg font-black text-primary-blue uppercase tracking-wider font-heading mb-3">Core Values</h4>
            <p className="text-xs text-steel-grey leading-relaxed font-semibold font-sans">
              Honesty in pricing, uncompromised safety validation (TÜV ISO), unified teamwork with clients, and persistent engineering innovation across every customized grade.
            </p>
          </div>

        </div>

        {/* Interactive Timeline Section */}
        <div className="bg-light-grey rounded-none p-8 md:p-12 border-4 border-dark-charcoal">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-primary-blue font-heading uppercase tracking-tighter">Our Growth Timeline</h3>
            <p className="text-xs text-steel-grey uppercase font-bold tracking-[0.2em] mt-1">Select a milestone year to see our progress</p>
          </div>

          {/* Year Buttons Row */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 relative">
            {/* Connecting Horizontal Line in background */}
            <div className="absolute left-10 right-10 top-1/2 h-0.5 bg-dark-charcoal/10 -translate-y-1/2 hidden md:block z-0"></div>
            
            {TIMELINE.map((evt, idx) => (
              <button
                key={evt.year}
                onClick={() => setSelectedTimelineIndex(idx)}
                className={`px-5 py-3 rounded-none font-heading font-black text-xs uppercase tracking-widest border-2 transition-all z-10 relative ${
                  selectedTimelineIndex === idx
                    ? 'bg-primary-blue text-white border-primary-blue shadow-none scale-105'
                    : 'bg-white text-dark-charcoal hover:bg-light-grey border-dark-charcoal'
                }`}
              >
                {evt.year}
              </button>
            ))}
          </div>

          {/* Timeline detail block */}
          <div className="bg-white rounded-none p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(43,45,49,1)] border-2 border-dark-charcoal text-left max-w-3xl mx-auto min-h-[160px] flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-accent-orange/15 p-2.5 rounded-none text-accent-orange border border-accent-orange/20">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-black text-primary-blue uppercase tracking-tight font-heading">
                {TIMELINE[selectedTimelineIndex].title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-steel-grey font-semibold leading-relaxed">
              {TIMELINE[selectedTimelineIndex].description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
