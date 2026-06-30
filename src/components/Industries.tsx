import React, { useState } from 'react';
import { INDUSTRIES } from '../data';
import { 
  Car, 
  Building2, 
  Train, 
  Droplet, 
  Wind, 
  FlaskConical, 
  Zap, 
  Ship, 
  ShieldPlus,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

// Map icon string names to components
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Car,
  Building2,
  Train,
  Droplet,
  Wind,
  FlaskConical,
  Zap,
  Ship,
  ShieldPlus
};

interface IndustriesProps {
  onSelectCategoryFilter: (categoryId: string) => void;
}

export default function Industries({ onSelectCategoryFilter }: IndustriesProps) {
  const [activeIndustryId, setActiveIndustryId] = useState<string | null>(INDUSTRIES[0].id);

  const activeIndustry = INDUSTRIES.find(ind => ind.id === activeIndustryId) || INDUSTRIES[0];

  return (
    <div className="py-16 md:py-24 bg-light-grey/40 border-b-4 border-primary-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-accent-orange uppercase tracking-[0.25em] font-heading">
            Sectors We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary-blue mt-2 font-heading tracking-tighter uppercase leading-none">
            Fastening Solutions for Critical Infrastructure
          </h2>
          <p className="text-sm text-steel-grey mt-3 max-w-2xl mx-auto font-semibold">
            Our fasteners are universally acknowledged for high-tensile resistance and chemical immunity, providing secure joints in high-stress industrial applications.
          </p>
          <div className="h-1.5 w-24 bg-accent-orange mx-auto mt-4 rounded-none"></div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive list of industries */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 w-full">
            {INDUSTRIES.map((ind) => {
              const IconComp = IconMap[ind.iconName] || Car;
              const isActive = ind.id === activeIndustryId;

              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`flex items-center space-x-4 p-4 rounded-none text-left border-2 transition-all ${
                    isActive
                      ? 'bg-primary-blue border-primary-blue text-white shadow-[4px_4px_0px_0px_rgba(242,140,40,1)] scale-[1.01]'
                      : 'bg-white border-dark-charcoal text-dark-charcoal hover:bg-light-grey'
                  }`}
                >
                  <div className={`p-2 rounded-none border-2 ${
                    isActive ? 'bg-white/10 text-accent-orange border-white/20' : 'bg-primary-blue/5 text-primary-blue border-primary-blue/15'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-black font-heading uppercase tracking-wider truncate ${isActive ? 'text-white' : 'text-primary-blue'}`}>
                      {ind.name}
                    </p>
                    <p className={`text-[10px] uppercase font-bold tracking-widest mt-0.5 ${isActive ? 'text-white/75' : 'text-steel-grey'}`}>
                      Specifications Menu
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Rich detail display of active industry */}
          <div className="lg:col-span-7 bg-white rounded-none border-4 border-primary-blue shadow-[8px_8px_0px_0px_rgba(11,79,138,0.15)] p-6 md:p-8 text-left relative overflow-hidden min-h-[460px] flex flex-col justify-between">
            {/* Blueprint grid accent */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#0b4f8a_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-blue/5 text-primary-blue border-2 border-primary-blue p-3.5 rounded-none">
                  {React.createElement(IconMap[activeIndustry.iconName] || Car, { className: "w-8 h-8 text-accent-orange" })}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-primary-blue font-heading tracking-tighter uppercase text-primary-blue">
                    {activeIndustry.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.15em] font-black text-accent-orange font-heading">
                    Critical Safety Sector
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-steel-grey font-semibold leading-relaxed">
                {activeIndustry.description}
              </p>

              <div className="h-px bg-light-grey"></div>

              <div>
                <p className="text-xs font-black text-primary-blue uppercase tracking-widest font-heading mb-3">
                  Core Assembly Fastening Points:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeIndustry.applications.map((app, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-accent-orange mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-dark-charcoal font-bold font-sans">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-light-grey mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
              <div className="text-[11px] text-steel-grey font-bold uppercase tracking-wider max-w-xs text-center sm:text-left">
                Every batch manufactured for this sector receives full hardness and metallurgical tensile tests.
              </div>
              <button
                onClick={() => onSelectCategoryFilter('all')}
                className="flex items-center space-x-2 bg-accent-orange hover:bg-accent-orange-hover text-white px-5 py-3 rounded-none text-xs font-extrabold uppercase tracking-widest border-b-4 border-accent-orange-hover hover:brightness-110 transition-all whitespace-nowrap self-stretch sm:self-auto justify-center"
              >
                <span>Browse Compliant Fasteners</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
