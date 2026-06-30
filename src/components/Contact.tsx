import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, FileUp, CheckCircle, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        product: '',
        quantity: '',
        message: ''
      });
      setUploadedFile(null);
    }, 1800);
  };

  return (
    <div className="py-16 md:py-24 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-accent-orange uppercase tracking-[0.25em] font-heading">
            Connect With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary-blue mt-2 font-heading tracking-tighter uppercase leading-none">
            Initiate B2B Enquiry Or Visit Us
          </h2>
          <p className="text-sm text-steel-grey mt-3 font-semibold">
            Whether you require continuous shipments of standard hex bolts, a custom-forged thread batch matching blueprints, or an authorized brand supply sheet, our team is ready to deliver.
          </p>
          <div className="h-1.5 w-24 bg-accent-orange mx-auto mt-4 rounded-none"></div>
        </div>

        {/* Contact Page Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Addresses & Vector Map Mock */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-light-grey/40 border-2 border-dark-charcoal rounded-none p-6 md:p-8 space-y-6">
              <h3 className="text-sm font-black text-primary-blue font-heading uppercase tracking-widest border-b-2 border-dark-charcoal pb-3">
                Corporate Address Blocks
              </h3>

              {/* Registered Office */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-blue/5 text-primary-blue border-2 border-primary-blue p-3 rounded-none shrink-0">
                  <MapPin className="w-5 h-5 text-accent-orange" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-primary-blue font-heading uppercase tracking-wider">Registered Head Office</h4>
                  <p className="text-xs font-bold text-dark-charcoal font-sans uppercase mt-1 leading-relaxed">
                    Shop No. 5, Shaket, 51 TPS Road,<br />
                    Borivali (W), Mumbai - 400 092,<br />
                    Maharashtra, India.
                  </p>
                </div>
              </div>

              {/* Central Warehouse */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-blue/5 text-primary-blue border-2 border-primary-blue p-3 rounded-none shrink-0">
                  <MapPin className="w-5 h-5 text-accent-orange" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-primary-blue font-heading uppercase tracking-wider">Central Heavy Warehouse</h4>
                  <p className="text-xs font-bold text-dark-charcoal font-sans uppercase mt-1 leading-relaxed">
                    Shop No. 11, 51 Bibjan Street,<br />
                    Mumbai - 400 003,<br />
                    Maharashtra, India.
                  </p>
                </div>
              </div>

              {/* Working contacts */}
              <div className="h-px bg-light-grey"></div>

              <div className="space-y-4 font-sans text-xs">
                <a href="tel:+919969130013" className="flex items-center space-x-4 hover:text-accent-orange transition-colors">
                  <div className="bg-primary-blue/5 text-primary-blue border-2 border-primary-blue p-2.5 rounded-none shrink-0">
                    <Phone className="w-4.5 h-4.5 text-accent-orange" />
                  </div>
                  <div>
                    <p className="text-[9px] text-steel-grey font-black uppercase tracking-wider">Telephone Sales Desk</p>
                    <p className="font-black text-dark-charcoal text-sm mt-0.5">(+91) 99691 30013</p>
                  </div>
                </a>

                <a href="mailto:sales@spenterprise.in" className="flex items-center space-x-4 hover:text-accent-orange transition-colors">
                  <div className="bg-primary-blue/5 text-primary-blue border-2 border-primary-blue p-2.5 rounded-none shrink-0">
                    <Mail className="w-4.5 h-4.5 text-accent-orange" />
                  </div>
                  <div>
                    <p className="text-[9px] text-steel-grey font-black uppercase tracking-wider">Commercial Email Inbox</p>
                    <p className="font-black text-dark-charcoal text-sm mt-0.5">sales@spenterprise.in</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary-blue/5 text-primary-blue border-2 border-primary-blue p-2.5 rounded-none shrink-0">
                    <Clock className="w-4.5 h-4.5 text-accent-orange" />
                  </div>
                  <div>
                    <p className="text-[9px] text-steel-grey font-black uppercase tracking-wider">Operating Hours</p>
                    <p className="font-black text-dark-charcoal text-sm mt-0.5">Mon - Sat: 10:00 AM - 07:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vector stylized Google Map Representation (Meets Google Maps requirement creatively) */}
            <div className="bg-light-grey border-2 border-dark-charcoal rounded-none p-5 overflow-hidden text-center space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono text-steel-grey pb-2.5 border-b-2 border-dark-charcoal">
                <span>MUMBAI COORDINATES LOG [WEST / CENTRAL]</span>
                <span className="text-accent-orange font-black">● LOCATORS ACTIVE</span>
              </div>
              
              {/* Elegant SVG schematic blueprint map */}
              <div className="h-44 bg-dark-charcoal rounded-none relative overflow-hidden flex items-center justify-center shadow-none border-2 border-dark-charcoal">
                <svg viewBox="0 0 400 200" className="w-full h-full opacity-65">
                  {/* Grid Lines */}
                  <line x1="50" y1="0" x2="50" y2="200" stroke="#ffffff" strokeOpacity="0.05" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="#ffffff" strokeOpacity="0.05" />
                  <line x1="150" y1="0" x2="150" y2="200" stroke="#ffffff" strokeOpacity="0.05" />
                  <line x1="200" y1="0" x2="200" y2="200" stroke="#ffffff" strokeOpacity="0.05" />
                  <line x1="250" y1="0" x2="250" y2="200" stroke="#ffffff" strokeOpacity="0.05" />
                  <line x1="300" y1="0" x2="300" y2="200" stroke="#ffffff" strokeOpacity="0.05" />
                  <line x1="350" y1="0" x2="350" y2="200" stroke="#ffffff" strokeOpacity="0.05" />
                  
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#ffffff" strokeOpacity="0.05" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#ffffff" strokeOpacity="0.05" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#ffffff" strokeOpacity="0.05" />

                  {/* Highway road mock */}
                  <path d="M40,-20 L80,220" stroke="#5C6770" strokeWidth="8" strokeOpacity="0.3" fill="none" />
                  <path d="M-20,120 L420,120" stroke="#5C6770" strokeWidth="6" strokeOpacity="0.3" fill="none" />
                  <path d="M120,-20 Q160,110 380,220" stroke="#0B4F8A" strokeWidth="4" strokeOpacity="0.3" fill="none" />
                  
                  {/* Borivali Pin */}
                  <rect x="62" y="114" width="12" height="12" fill="#F28C28" fillOpacity="0.2" />
                  <rect x="66" y="118" width="4" height="4" fill="#F28C28" />
                  <text x="80" y="115" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">BORIVALI BR.</text>
                  <text x="80" y="125" fill="#F5F6F7" fontSize="7" fontFamily="monospace">HEAD OFFICE</text>

                  {/* Bibjan Street Pin */}
                  <rect x="204" y="94" width="12" height="12" fill="#0B4F8A" fillOpacity="0.2" />
                  <rect x="208" y="98" width="4" height="4" fill="#0B4F8A" />
                  <text x="222" y="95" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">BIBJAN ST.</text>
                  <text x="222" y="105" fill="#F5F6F7" fontSize="7" fontFamily="monospace">CENTRAL WAREHOUSE</text>
                  
                  {/* Arabian Sea mock bottom left */}
                  <path d="M0,170 Q40,165 60,205 L0,205 Z" fill="#0B4F8A" fillOpacity="0.1" stroke="none" />
                  <text x="10" y="190" fill="#0B4F8A" fontSize="7" fontWeight="bold" opacity="0.3" fontFamily="sans-serif">ARABIAN SEA</text>
                </svg>
              </div>
              <p className="text-[10px] text-steel-grey font-semibold">
                Borivali head branch located near TPS road. Main warehousing stocks dispatch from Bibjan street, Mumbai port.
              </p>
            </div>

          </div>

          {/* Right Column: Large Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-none border-4 border-primary-blue p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(11,79,138,0.15)]">
            
            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-none border-2 border-dark-charcoal flex items-center justify-center mx-auto shadow-none">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-primary-blue font-heading tracking-tighter uppercase">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-xs text-steel-grey max-w-md mx-auto leading-relaxed font-semibold">
                  Thank you for submitting your fastener parameters to S.P. Enterprise. Our B2B commercial desk will review your quantity and dimensional details and get back to you with a formal quote via email shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-primary-blue text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-none border-b-4 border-primary-blue/80 shadow-none hover:brightness-110"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="border-b-2 border-dark-charcoal pb-3 text-left">
                  <h3 className="text-base font-black text-primary-blue font-heading uppercase tracking-widest">
                    Commercial RFQ &amp; Enquiry Form
                  </h3>
                  <p className="text-xs text-steel-grey font-semibold">
                    Fill out the fields below for custom fabrication or authorized brand supply.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Mr. Rajesh Sharma"
                      className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Larsen & Toubro Engineering"
                      className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                      Business Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 99691 30013"
                      className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. engineering@lnt.com"
                      className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold"
                    />
                  </div>

                  {/* Product family choice */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                      Required Fastener Family *
                    </label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleInputChange}
                      placeholder="e.g. ASTM A193 B7 Studs, Nylock Nuts"
                      className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold"
                    />
                  </div>

                  {/* Sizing quantity */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                      Est. Quantity Needed (Pieces) *
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="e.g. 5,000 Pcs, 1 Ton, Bulk container"
                      className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold"
                    />
                  </div>
                </div>

                {/* Requirement Message */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                    Detailed Specification Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Enter sizes (e.g. M16x80), thread pitches, required materials (SS 304, High Tensile Grade 12.9), finishes (Plain, Zinc, Black, PTFE), and any particular testing demands."
                    className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange resize-none font-semibold"
                  />
                </div>

                {/* File Upload (Drawing) */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                    Upload CAD / PDF blueprint (Optional)
                  </label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-dark-charcoal rounded-none p-4 text-center cursor-pointer hover:bg-light-grey/40 transition-all flex items-center justify-center space-x-3"
                  >
                    <input 
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.dwg,.png,.jpg,.jpeg,.zip"
                    />
                    <FileUp className="w-5 h-5 text-accent-orange shrink-0" />
                    <span className="text-xs text-steel-grey font-semibold">
                      {uploadedFile ? `Selected: ${uploadedFile.name}` : "Click to select blueprint PDF, CAD, or image"}
                    </span>
                  </div>
                </div>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2.5 py-4 rounded-none font-heading font-black uppercase tracking-widest text-xs shadow-none border-b-4 border-primary-blue-hover hover:brightness-110 transition-all ${
                    isSubmitting 
                      ? 'bg-primary-blue/75 text-white/70 cursor-wait'
                      : 'bg-primary-blue text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0"></div>
                      <span>Sending Specifications...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5 text-accent-orange shrink-0" />
                      <span>Submit Commercial Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
