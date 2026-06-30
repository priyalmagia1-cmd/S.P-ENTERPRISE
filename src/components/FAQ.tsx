import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('q1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="py-16 md:py-24 bg-light-grey/40 border-b-4 border-primary-blue text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-black text-accent-orange uppercase tracking-[0.25em] font-heading">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-primary-blue mt-2 font-heading tracking-tighter uppercase leading-none">
            Frequently Answered B2B Questions
          </h2>
          <div className="h-1.5 w-24 bg-accent-orange mx-auto mt-4 rounded-none"></div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = faq.id === openFaqId;
            return (
              <div 
                key={faq.id}
                className="bg-white border-2 border-dark-charcoal rounded-none overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(11,79,138,0.15)] transition-all duration-200"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center space-x-4 focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-accent-orange shrink-0" />
                    <span className="font-heading font-black text-sm md:text-base text-primary-blue leading-tight uppercase tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-steel-grey shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-accent-orange" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary-blue" />
                    )}
                  </div>
                </button>

                {/* Accordion body content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-3 border-t-2 border-dark-charcoal bg-light-grey/25 animate-fadeIn">
                    <p className="text-xs md:text-sm text-steel-grey leading-relaxed font-sans font-semibold">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help callout card */}
        <div className="mt-12 bg-primary-blue rounded-none p-6 md:p-8 text-white border-4 border-dark-charcoal flex flex-col md:flex-row justify-between items-center gap-6 shadow-[6px_6px_0px_0px_rgba(242,140,40,1)]">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-base font-black font-heading tracking-wider uppercase">
              Have a highly specialized structural or chemical requirement?
            </h4>
            <p className="text-xs text-white/90 max-w-xl font-sans font-semibold leading-relaxed">
              Connect directly with our technical director, Mr. Ashok P. Magia. We will review DIN/ISO tolerances and formulate a tailored quote.
            </p>
          </div>
          <a
            href="tel:+919969130013"
            className="bg-accent-orange hover:bg-accent-orange-hover text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-none border-b-4 border-accent-orange-hover hover:brightness-110 self-stretch md:self-auto text-center transition-all"
          >
            Call Technical Sales
          </a>
        </div>

      </div>
    </div>
  );
}
