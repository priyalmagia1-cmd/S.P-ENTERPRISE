import React from 'react';
import { ShieldCheck, Award, Microscope, PackageCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function Quality() {
  const qcSteps = [
    {
      title: "Premium Raw Materials",
      desc: "All raw wire rods are sourced from audited national steel mills. We certify steel carbon content, metallurgical grain structure, and alloy elements before heat processing.",
      icon: Microscope
    },
    {
      title: "certified vendors Only",
      desc: "Our trade stock brands (e.g. Unbrako, Hilti, Fischer) are strictly sourced from certified global distributors with absolute proof-stress verification.",
      icon: Award
    },
    {
      title: "ISO 9001:2015 Standards",
      desc: "Certified by TÜV Austria (M/S S.P. Enterprise, Mumbai, India). Our testing laboratory audits batch hardness (Rockwell HRB/HRC), dimensions, and threading thread profiles.",
      icon: ShieldCheck
    },
    {
      title: "Batch Testing & Calibration",
      desc: "High-tensile fasteners undergo strict tensile stress testing, proof load checks, and microscopic microcrack inspections under rigorous engineering load profiles.",
      icon: FileText
    },
    {
      title: "Moisture-Proof Packaging",
      desc: "Fasteners are oiled with rust preventives, bulk packed inside thick polypacks, and loaded in heavy plywood crates designed to protect against sea moisture during transit.",
      icon: PackageCheck
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-white to-light-grey border-b-4 border-primary-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-accent-orange uppercase tracking-[0.25em] font-heading">
            TÜV Austria ISO Certified
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary-blue mt-2 font-heading tracking-tighter uppercase leading-none">
            ISO 9001:2015 Quality Validation
          </h2>
          <p className="text-sm text-steel-grey mt-3 max-w-2xl mx-auto font-semibold">
            At S.P. Enterprise, quality is our survival philosophy. We validate mechanical limits, dimensions, and alloy composition for zero-fault batch security.
          </p>
          <div className="h-1.5 w-24 bg-accent-orange mx-auto mt-4 rounded-none"></div>
        </div>

        {/* Certificate Display Column Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Certificate Badge Representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white border-4 border-primary-blue rounded-none p-8 max-w-sm w-full text-center shadow-[8px_8px_0px_0px_rgba(11,79,138,0.15)] relative overflow-hidden">
              <div className="absolute inset-4 border border-primary-blue/5 rounded-none pointer-events-none"></div>
              
              <div className="bg-primary-blue text-white w-20 h-20 rounded-none flex items-center justify-center mx-auto mb-6 shadow-none border-2 border-dark-charcoal">
                <ShieldCheck className="w-10 h-10 text-accent-orange" />
              </div>

              <span className="text-[10px] font-black text-accent-orange uppercase tracking-widest block font-heading">
                TÜV AUSTRIA CERT
              </span>
              <h3 className="text-xl font-black text-primary-blue font-heading mt-2 uppercase tracking-tight">
                ISO 9001:2015
              </h3>
              <p className="text-xs text-steel-grey font-bold mt-1 uppercase tracking-wider">
                Management System Certification
              </p>
              
              <div className="h-0.5 bg-dark-charcoal/10 my-4"></div>
              
              <div className="space-y-2 text-left text-xs text-dark-charcoal font-sans font-semibold uppercase tracking-wider">
                <p className="flex justify-between">
                  <span className="text-steel-grey text-[10px]">Certified Scope:</span>
                  <span className="font-bold text-right text-[10px]">Mfg. &amp; Trading of Nuts, Bolts &amp; Fasteners</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-steel-grey text-[10px]">Auditing Body:</span>
                  <span className="font-bold text-[10px]">TÜV Austria Cert GmbH</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-steel-grey text-[10px]">Status:</span>
                  <span className="text-emerald-600 font-black text-[10px]">● Active &amp; Verified</span>
                </p>
              </div>
            </div>
          </div>

          {/* QC Process details */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h3 className="text-2xl font-black text-primary-blue font-heading tracking-tight uppercase">
              Rigorous Laboratory Inspections
            </h3>
            <p className="text-sm text-steel-grey leading-relaxed font-semibold">
              Every shipment leaving our warehouse undergoes rigorous double audits. High-tensile fasteners utilized in chemical reactors, railway tracks, or oil refineries must withstand immense mechanical forces. We run testing on:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-none border-2 border-dark-charcoal flex items-start space-x-3 shadow-none hover:shadow-[4px_4px_0px_0px_rgba(242,140,40,1)] transition-all">
                <CheckCircle2 className="w-4 h-4 text-accent-orange mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-black text-primary-blue font-heading uppercase tracking-wide">Rockwell Hardness</h4>
                  <p className="text-[11px] text-steel-grey font-semibold mt-0.5">Checking core material carbon temper</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-none border-2 border-dark-charcoal flex items-start space-x-3 shadow-none hover:shadow-[4px_4px_0px_0px_rgba(242,140,40,1)] transition-all">
                <CheckCircle2 className="w-4 h-4 text-accent-orange mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-black text-primary-blue font-heading uppercase tracking-wide">Thread Pitch Accuracy</h4>
                  <p className="text-[11px] text-steel-grey font-semibold mt-0.5">Ensuring fluid movement and tight lock</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-none border-2 border-dark-charcoal flex items-start space-x-3 shadow-none hover:shadow-[4px_4px_0px_0px_rgba(242,140,40,1)] transition-all">
                <CheckCircle2 className="w-4 h-4 text-accent-orange mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-black text-primary-blue font-heading uppercase tracking-wide">Proof Stress Pull</h4>
                  <p className="text-[11px] text-steel-grey font-semibold mt-0.5">Verifying Grade 8.8/10.9 structural safety</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-none border-2 border-dark-charcoal flex items-start space-x-3 shadow-none hover:shadow-[4px_4px_0px_0px_rgba(242,140,40,1)] transition-all">
                <CheckCircle2 className="w-4 h-4 text-accent-orange mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs font-black text-primary-blue font-heading uppercase tracking-wide">X-Ray Coating Depth</h4>
                  <p className="text-[11px] text-steel-grey font-semibold mt-0.5">Confirming zinc plating thickness</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quality Milestones & Steps cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {qcSteps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-none border-2 border-dark-charcoal p-5 text-left shadow-none hover:shadow-[6px_6px_0px_0px_rgba(11,79,138,0.15)] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="bg-primary-blue/5 text-primary-blue border-2 border-primary-blue p-2.5 rounded-none w-fit">
                  {React.createElement(step.icon, { className: "w-5 h-5 text-accent-orange" })}
                </div>
                <h4 className="text-xs font-black text-primary-blue font-heading uppercase tracking-widest">
                  {step.title}
                </h4>
                <p className="text-[11px] text-steel-grey leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
