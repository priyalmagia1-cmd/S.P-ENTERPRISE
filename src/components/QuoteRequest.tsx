import React, { useState, useRef } from 'react';
import { useQuote } from '../context/QuoteContext';
import { Trash2, FileText, Send, Building2, User, Phone, Mail, FileUp, CheckCircle, HelpCircle, AlertCircle, RefreshCw } from 'lucide-react';

interface QuoteRequestProps {
  onClose?: () => void;
  onGoToCatalog?: () => void;
}

export default function QuoteRequest({ onClose, onGoToCatalog }: QuoteRequestProps) {
  const { items, removeItem, clearCart, cartCount } = useQuote();
  
  // RFQ sender details state
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // File upload state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // RFQ Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqReference, setRfqReference] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleSubmitRfq = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsSubmitting(true);
    
    // Simulate real network submission with progress
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randRef = 'RFQ-' + Math.floor(100000 + Math.random() * 90000);
      setRfqReference(randRef);
      clearCart();
    }, 2000);
  };

  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-left mb-12">
          <span className="text-xs font-black text-accent-orange uppercase tracking-[0.25em] font-heading">
            B2B Commercial Quotations
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary-blue mt-1 font-heading tracking-tighter uppercase leading-none flex items-center space-x-3">
            <FileText className="w-8 h-8 text-accent-orange shrink-0" />
            <span>RFQ Quotation Builder</span>
          </h2>
          <p className="text-sm text-steel-grey mt-2 font-semibold">
            Review your selected industrial fasteners, specify sizes, add corporate contact info, and upload technical drawings (PDF/CAD) for rapid PAN India wholesale pricing.
          </p>
          <div className="h-1.5 w-24 bg-accent-orange mt-4 rounded-none"></div>
        </div>

        {/* Submitted Success Screen */}
        {isSubmitted ? (
          <div className="bg-primary-blue text-white rounded-none p-8 md:p-16 text-center max-w-3xl mx-auto shadow-[12px_12px_0px_0px_rgba(242,140,40,1)] relative overflow-hidden border-4 border-dark-charcoal">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="bg-white/10 w-20 h-20 rounded-none flex items-center justify-center mx-auto mb-6 border-2 border-white">
              <CheckCircle className="w-10 h-10 text-accent-orange" />
            </div>

            <h3 className="text-3xl font-black font-heading tracking-tight uppercase mb-2">
              RFQ Submitted Successfully!
            </h3>
            <p className="text-accent-orange font-black font-mono tracking-widest text-lg mb-6">
              REFERENCE NO: {rfqReference}
            </p>
            
            <p className="text-sm text-white/80 max-w-lg mx-auto leading-relaxed mb-8 font-semibold">
              We have received your fastener parameters. Mr. Ashok P. Magia or one of our senior technical estimators will audit your specifications and email you a formalized commercial catalog quotation sheet within <strong>2-4 working hours</strong>.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  if (onGoToCatalog) onGoToCatalog();
                }}
                className="bg-accent-orange hover:bg-accent-orange-hover text-white px-8 py-3 rounded-none font-black text-xs uppercase tracking-widest border-b-4 border-accent-orange-hover shadow-none transition-all hover:brightness-110"
              >
                Browse Catalog Again
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-none font-black text-xs uppercase tracking-widest transition-all"
                >
                  Close Screen
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Draft Items List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-light-grey/40 rounded-none border-2 border-dark-charcoal p-5 md:p-6 text-left">
                <div className="flex justify-between items-center pb-4 border-b-2 border-dark-charcoal mb-4">
                  <h3 className="text-base font-black text-primary-blue font-heading uppercase tracking-wider">
                    Selected Fasteners Draft ({cartCount})
                  </h3>
                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-xs text-red-500 hover:text-red-700 font-black flex items-center space-x-1 uppercase tracking-wider"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Clear All</span>
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="py-12 text-center space-y-4">
                    <AlertCircle className="w-12 h-12 text-steel-grey mx-auto opacity-55" />
                    <p className="text-sm font-black text-primary-blue font-heading uppercase tracking-wide">
                      No fasteners selected for quote
                    </p>
                    <p className="text-xs text-steel-grey max-w-sm mx-auto font-semibold">
                      Explore S.P. Enterprise’s catalogue, configure sizes/grades for hexagon bolts, nuts, studs, or self-clinching screws, and click "Add to Quotation Draft".
                    </p>
                    {onGoToCatalog && (
                      <button
                        onClick={onGoToCatalog}
                        className="bg-primary-blue text-white text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-none border-2 border-dark-charcoal shadow-none hover:bg-accent-orange transition-all"
                      >
                        Browse Product Catalogue
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="divide-y-2 divide-dark-charcoal max-h-[480px] overflow-y-auto pr-2">
                    {items.map((item, idx) => (
                      <div key={idx} className="py-4 flex justify-between items-start first:pt-0 last:pb-0 group">
                        <div className="space-y-1 text-left flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-sm font-black text-primary-blue font-heading uppercase tracking-tight">
                              {item.productName}
                            </h4>
                            <span className="bg-primary-blue text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-none border-2 border-dark-charcoal">
                              {item.categoryName}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-1.5 font-sans font-semibold">
                            <p className="text-[11px] text-dark-charcoal">
                              <span className="text-steel-grey font-bold uppercase tracking-wider text-[9px]">Specs/Size:</span> {item.size}
                            </p>
                            <p className="text-[11px] text-dark-charcoal">
                              <span className="text-steel-grey font-bold uppercase tracking-wider text-[9px]">Qty Needed:</span> {item.quantity.toLocaleString()} pcs
                            </p>
                            <p className="text-[11px] text-dark-charcoal col-span-2">
                              <span className="text-steel-grey font-bold uppercase tracking-wider text-[9px]">Material Grade:</span> {item.grade}
                            </p>
                            {item.notes && (
                              <p className="text-[10px] text-accent-orange col-span-2 italic mt-0.5 font-bold">
                                Notes: "{item.notes}"
                              </p>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => removeItem(idx)}
                          className="p-2 text-steel-grey hover:text-red-500 rounded-none border-2 border-transparent hover:border-dark-charcoal hover:bg-light-grey ml-4 self-center transition-all"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* PDF CAD Drawing Upload (Meets Usability Patterns: File Upload) */}
              <div className="bg-light-grey/40 rounded-none border-2 border-dark-charcoal p-5 md:p-6 text-left space-y-4">
                <div>
                  <h3 className="text-base font-black text-primary-blue font-heading uppercase tracking-wider">
                    Upload Technical Drawing File
                  </h3>
                  <p className="text-[11px] text-steel-grey mt-1 font-semibold">
                    If you require custom-threaded fasteners or parts matching specific blue-prints, drag &amp; drop or upload PDF/CAD files directly.
                  </p>
                </div>

                {/* Drag and Drop Zone */}
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border-4 border-dashed rounded-none p-6 text-center cursor-pointer transition-all ${
                    isDragActive
                      ? 'border-accent-orange bg-primary-blue/5 scale-[1.01]'
                      : uploadedFile
                      ? 'border-emerald-500 bg-emerald-50/20'
                      : 'border-dark-charcoal bg-white hover:bg-light-grey/25'
                  }`}
                  onClick={triggerFileSelect}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.zip"
                  />
                  
                  {uploadedFile ? (
                    <div className="space-y-2">
                      <div className="bg-emerald-500/10 text-emerald-600 w-12 h-12 rounded-none border-2 border-emerald-500 flex items-center justify-center mx-auto">
                        <FileUp className="w-6 h-6" />
                      </div>
                      <p className="text-xs font-bold text-emerald-800 truncate px-4">
                        Selected: {uploadedFile.name}
                      </p>
                      <p className="text-[10px] text-steel-grey font-bold">
                        {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB • Click to replace file
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="bg-primary-blue/5 text-primary-blue w-12 h-12 rounded-none border-2 border-dark-charcoal flex items-center justify-center mx-auto">
                        <FileUp className="w-6 h-6 text-accent-orange" />
                      </div>
                      <p className="text-xs font-black text-dark-charcoal uppercase tracking-wider">
                        Drag &amp; drop your drawing here, or <span className="text-primary-blue underline">browse files</span>
                      </p>
                      <p className="text-[10px] text-steel-grey font-semibold">
                        Accepted files: PDF, DWG, CAD blueprints, ZIP, Images (Max 10MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Sender Corporate Info */}
            <div className="lg:col-span-5">
              <form onSubmit={handleSubmitRfq} className="bg-white border-4 border-primary-blue rounded-none p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(11,79,138,0.15)] text-left space-y-5">
                
                <div className="border-b-2 border-dark-charcoal pb-4">
                  <h3 className="text-base font-black text-primary-blue font-heading uppercase tracking-wider">
                    Company Contact Info
                  </h3>
                  <p className="text-[11px] text-steel-grey mt-0.5 font-semibold">
                    We only supply to legitimate B2B manufacturers, traders, and heavy developers.
                  </p>
                </div>

                {/* Company name */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                    Corporate / Company Name *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-steel-grey">
                      <Building2 className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Reliance Projects Ltd, Larsen & Toubro"
                      className="w-full bg-white text-dark-charcoal text-xs py-3 pl-10 pr-4 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold"
                    />
                  </div>
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                    Purchasing / Technical Engineer Name *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-steel-grey">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Mr. Rajesh Sharma"
                      className="w-full bg-white text-dark-charcoal text-xs py-3 pl-10 pr-4 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold"
                    />
                  </div>
                </div>

                {/* Business Phone */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                    Contact Phone Number (WhatsApp Enabled preferred) *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-steel-grey">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-white text-dark-charcoal text-xs py-3 pl-10 pr-4 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold"
                    />
                  </div>
                </div>

                {/* Business Email */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                    Corporate Email Address *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-steel-grey">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. purchasing@company.com"
                      className="w-full bg-white text-dark-charcoal text-xs py-3 pl-10 pr-4 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold"
                    />
                  </div>
                </div>

                {/* General message instructions */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                    Specific Dispatch / Testing Instructions (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Provide shipping address, dispatch timeline (e.g. emergency shutdown), MTC certificate requirements, or custom surface galvanized zinc thickness demands."
                    className="w-full bg-white text-dark-charcoal text-xs p-3.5 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange font-semibold resize-none"
                  />
                </div>

                {/* Submit RFQ trigger */}
                <button
                  type="submit"
                  disabled={items.length === 0 || isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2.5 py-4 rounded-none font-heading font-black text-xs uppercase tracking-widest shadow-none transition-all ${
                    items.length === 0
                      ? 'bg-steel-grey/30 text-steel-grey/60 cursor-not-allowed border-2 border-dashed border-dark-charcoal'
                      : isSubmitting
                      ? 'bg-primary-blue/75 text-white/70 cursor-wait border-2 border-dark-charcoal'
                      : 'bg-primary-blue hover:bg-primary-blue-hover text-white border-b-4 border-primary-blue hover:brightness-110 active:translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Formalizing Quotation Draft...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5 text-accent-orange" />
                      <span>Submit RFQ to S.P. Enterprise</span>
                    </>
                  )}
                </button>

                {items.length === 0 && (
                  <p className="text-[10px] text-center text-red-500 font-bold uppercase tracking-wider leading-relaxed">
                    * Please add at least 1 fastener to your list before submitting.
                  </p>
                )}

              </form>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
