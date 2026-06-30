import React, { useState } from 'react';
import { QuoteProvider } from './context/QuoteContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Industries from './components/Industries';
import Catalog from './components/Catalog';
import Quality from './components/Quality';
import Brands from './components/Brands';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';
import SearchModal from './components/SearchModal';
import QuoteRequest from './components/QuoteRequest';
import { ProductItem, ProductCategory } from './types';
import { useQuote } from './context/QuoteContext';
import { 
  ShieldCheck, 
  Settings, 
  Layers, 
  Truck, 
  HelpCircle, 
  DollarSign, 
  Award, 
  Network,
  X,
  FileText,
  AlertCircle
} from 'lucide-react';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [rfqDrawerOpen, setRfqDrawerOpen] = useState(false);
  const [catalogInitialCategory, setCatalogInitialCategory] = useState('all');

  // To support clicking spec in search modal, opening detail directly inside Catalog tab
  const [activeProductForDetail, setActiveProductForDetail] = useState<{product: ProductItem; category: ProductCategory} | null>(null);

  const handleSearchSelectProduct = (product: ProductItem, category: ProductCategory) => {
    // Switch to products tab
    setActiveTab('products');
    setCatalogInitialCategory('all');
    
    // Smooth scroll to catalog
    window.scrollTo({ top: 400, behavior: 'smooth' });
    
    // We can directly open the modal by simulating a click or passing state.
    // To support this, we will pass a ref or handle state inside App to trigger opening the spec modal.
    // Let's store the product so Catalog component can auto-open it!
    // We can do this by wrapping a temporary trigger or passing activeProductForDetail to Catalog!
    // This is incredibly robust!
    setActiveProductForDetail({ product, category });
  };

  const handleSelectCategoryFilterFromHome = (categoryId: string) => {
    setActiveTab('products');
    setCatalogInitialCategory(categoryId);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const whyChooseUsData = [
    {
      title: "34+ Years Experience",
      desc: "Serving Indian manufacturing and infrastructure since 1992 under the expert guidance of Mr. Ashok P. Magia.",
      icon: Award
    },
    {
      title: "50,000+ Products",
      desc: "An exhaustive ready inventory of bolts, nuts, studs, washers, self-clinching screws, and accessories.",
      icon: Layers
    },
    {
      title: "Superior Quality",
      desc: "ISO 9001:2015 certified processes (TÜV Austria) with Rockwell hardness and full batch tensile stress tests.",
      icon: ShieldCheck
    },
    {
      title: "Fast Delivery",
      desc: "Active fleet coordination and cargo partnerships assuring rapid, safe PAN India supply shipments.",
      icon: Truck
    },
    {
      title: "Technical Support",
      desc: "Sizing analysis, pitch tolerances, and custom drawing evaluations handled by senior estimators.",
      icon: Settings
    },
    {
      title: "Competitive Pricing",
      desc: "Direct-from-plant bulk wholesale pricing with scalable multi-tier commercial discounts.",
      icon: DollarSign
    },
    {
      title: "Trusted by Industries",
      desc: "Authorised suppliers to critical railways, automotive giants, offshore vessels, and petrochemical lines.",
      icon: HelpCircle
    },
    {
      title: "Reliable Supply Chain",
      desc: "Sustained inventory reserves preventing raw material shocks or assembly line delays.",
      icon: Network
    }
  ];

  return (
    <div className="relative min-h-screen bg-white text-dark-charcoal font-sans flex flex-col justify-between">
      
      {/* Central Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // Reset custom filter if clicking header tab directly
          if (tab === 'products') {
            setCatalogInitialCategory('all');
            setActiveProductForDetail(null);
          }
        }} 
        openRfqDrawer={() => setRfqDrawerOpen(true)}
        onSearchClick={() => setSearchModalOpen(true)}
      />

      {/* Main Dynamic View routing based on active tab */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="space-y-0">
            {/* Hero Section */}
            <Hero 
              onBrowseProducts={() => {
                setActiveTab('products');
                setCatalogInitialCategory('all');
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              onRequestQuote={() => setActiveTab('contact')}
            />

            {/* Why Choose Us Section (Meets PRD Icon Cards Section) */}
            <div className="py-16 md:py-24 bg-white border-b border-light-grey text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-xs font-bold text-accent-orange uppercase tracking-widest font-heading">
                    Our Core Advantages
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-2 font-heading tracking-tight">
                    Why S.P. Enterprise is Trusted PAN India
                  </h2>
                  <div className="h-1 w-20 bg-accent-orange mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {whyChooseUsData.map((item, idx) => (
                    <div 
                      key={idx}
                      className="bg-white rounded-2xl border border-light-grey p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="bg-primary-blue/5 text-primary-blue border border-primary-blue/10 p-3 rounded-xl w-fit">
                          {React.createElement(item.icon, { className: "w-6 h-6 text-accent-orange" })}
                        </div>
                        <h3 className="text-base font-bold text-primary-blue font-heading tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-steel-grey leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Industries served preview */}
            <Industries onSelectCategoryFilter={handleSelectCategoryFilterFromHome} />

            {/* Brief Brands marquee preview */}
            <Brands />

            {/* Quality Certifications callout */}
            <Quality />

            {/* FAQ segment */}
            <FAQ />
          </div>
        )}

        {activeTab === 'about' && <About />}

        {activeTab === 'products' && (
          <Catalog 
            initialCategoryId={catalogInitialCategory} 
            onGoToContact={() => setActiveTab('contact')}
          />
        )}

        {activeTab === 'industries' && (
          <Industries onSelectCategoryFilter={handleSelectCategoryFilterFromHome} />
        )}

        {activeTab === 'quality' && <Quality />}

        {activeTab === 'brands' && <Brands />}

        {activeTab === 'gallery' && <Gallery />}

        {activeTab === 'faqs' && <FAQ />}

        {activeTab === 'contact' && <Contact />}
      </main>

      {/* Global Corporate Footer */}
      <Footer 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'products') {
            setCatalogInitialCategory('all');
          }
        }} 
        openRfqDrawer={() => setRfqDrawerOpen(true)}
      />

      {/* WhatsApp & Call floating controls */}
      <FloatingControls />

      {/* Search Modal Overlay */}
      {searchModalOpen && (
        <SearchModal 
          onClose={() => setSearchModalOpen(false)}
          onSelectProduct={handleSearchSelectProduct}
        />
      )}

      {/* RFQ Sidebar Drawer overlay (Slides from right, beautifully matches usability) */}
      {rfqDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-dark-charcoal/60 backdrop-blur-xs transition-opacity"
            onClick={() => setRfqDrawerOpen(false)}
          ></div>

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            {/* Drawer Panel */}
            <div className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col">
              {/* Header */}
              <div className="px-6 py-5 bg-primary-blue text-white flex items-center justify-between border-b-4 border-accent-orange">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-accent-orange" />
                  <h3 className="text-base font-bold font-heading uppercase tracking-wider">
                    Commercial RFQ Draft List
                  </h3>
                </div>
                <button 
                  onClick={() => setRfqDrawerOpen(false)}
                  className="p-1 rounded-lg hover:bg-white/10 text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                <QuoteRequest 
                  onClose={() => setRfqDrawerOpen(false)} 
                  onGoToCatalog={() => {
                    setRfqDrawerOpen(false);
                    setActiveTab('products');
                  }}
                />
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Custom callback handler to auto-open spec modal if state is set */}
      {activeProductForDetail && (
        <CatalogAutoOpenSpec 
          data={activeProductForDetail} 
          onClear={() => setActiveProductForDetail(null)} 
          onGoToContact={() => setActiveTab('contact')}
        />
      )}

    </div>
  );
}

// Small helper component to handle auto-opening a spec details sheet when searched
function CatalogAutoOpenSpec({ data, onClear, onGoToContact }: { 
  data: {product: ProductItem; category: ProductCategory}; 
  onClear: () => void;
  onGoToContact: () => void;
}) {
  const { addItem } = useQuote();
  const [rfqQty, setRfqQty] = useState(100);
  const [rfqSize, setRfqSize] = useState(data.product.specs.sizeRange?.split(',')[0].replace('to', '-').trim() || 'M8');
  const [rfqGrade, setRfqGrade] = useState(data.product.specs.grade?.split(',')[0].trim() || '8.8');
  const [rfqNotes, setRfqNotes] = useState('');
  const [showAdded, setShowAdded] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addItem({
      productName: data.product.name,
      categoryName: data.category.name,
      quantity: rfqQty,
      size: rfqSize,
      grade: rfqGrade,
      notes: rfqNotes
    });
    setShowAdded(true);
    setTimeout(() => {
      setShowAdded(false);
      onClear();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-dark-charcoal/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-light-grey text-left">
        
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white border-b border-light-grey px-6 py-4 flex justify-between items-center z-10">
          <div className="flex items-center space-x-2">
            <div className="bg-primary-blue/5 p-1.5 rounded-lg border border-primary-blue/10">
              <span className="text-accent-orange font-bold text-lg">⚙</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary-blue font-heading">{data.product.name}</h3>
              <span className="text-[10px] font-semibold text-steel-grey tracking-wider uppercase font-sans">
                Search Result • Category: {data.category.name}
              </span>
            </div>
          </div>
          <button 
            onClick={onClear}
            className="p-2 rounded-full hover:bg-light-grey text-steel-grey hover:text-dark-charcoal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content body */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-light-grey/40 rounded-xl border border-light-grey p-8 flex flex-col items-center justify-center min-h-[220px]">
              {/* Small schematic drawing */}
              <span className="text-6xl text-primary-blue font-extrabold select-none opacity-20">⚙</span>
              <p className="text-[10px] font-mono text-steel-grey mt-4 uppercase">
                Schematic Projection [ID: {data.product.id.toUpperCase()}]
              </p>
            </div>

            {/* Spec tables */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-primary-blue font-heading uppercase tracking-wider">
                Technical Specifications
              </h4>
              <div className="overflow-hidden border border-light-grey rounded-xl">
                <table className="min-w-full divide-y divide-light-grey text-xs font-sans">
                  <tbody className="bg-white divide-y divide-light-grey">
                    {Object.entries(data.product.specs).map(([key, val]) => {
                      if (!val) return null;
                      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                      return (
                        <tr key={key} className="hover:bg-light-grey/40">
                          <td className="px-4 py-3 bg-light-grey/25 text-steel-grey font-semibold w-1/3">
                            {formattedKey}
                          </td>
                          <td className="px-4 py-3 text-dark-charcoal font-medium">
                            {val}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column form */}
          <div className="lg:col-span-5 bg-light-grey/45 rounded-2xl border border-light-grey p-5 md:p-6 h-fit space-y-6">
            <div className="text-left">
              <h4 className="text-sm font-bold text-primary-blue font-heading uppercase tracking-wider">
                Request Batch RFQ
              </h4>
            </div>

            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-dark-charcoal mb-1.5">
                  Sizing Parameters
                </label>
                <input
                  type="text"
                  required
                  value={rfqSize}
                  onChange={(e) => setRfqSize(e.target.value)}
                  placeholder="e.g. M12 x 50mm"
                  className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-lg border border-steel-grey/15 focus:outline-none focus:border-primary-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-charcoal mb-1.5">
                  Material Grade / Finish
                </label>
                <input
                  type="text"
                  required
                  value={rfqGrade}
                  onChange={(e) => setRfqGrade(e.target.value)}
                  placeholder="e.g. Grade 8.8, SS 316"
                  className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-lg border border-steel-grey/15 focus:outline-none focus:border-primary-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-charcoal mb-1.5">
                  Quantity
                </label>
                <input
                  type="number"
                  required
                  min={1}
                  value={rfqQty}
                  onChange={(e) => setRfqQty(Number(e.target.value))}
                  className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-lg border border-steel-grey/15 focus:outline-none focus:border-primary-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-charcoal mb-1.5">
                  Notes
                </label>
                <textarea
                  value={rfqNotes}
                  onChange={(e) => setRfqNotes(e.target.value)}
                  rows={2}
                  placeholder="Additional notes"
                  className="w-full bg-white text-dark-charcoal text-xs p-3 rounded-lg border border-steel-grey/15 focus:outline-none focus:border-primary-blue resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={showAdded}
                className={`w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl text-xs font-bold font-heading shadow-md transition-all ${
                  showAdded ? 'bg-emerald-600 text-white' : 'bg-primary-blue hover:bg-primary-blue-hover text-white'
                }`}
              >
                {showAdded ? 'Added to RFQ List!' : 'Add to Quotation Draft'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <QuoteProvider>
      <AppContent />
    </QuoteProvider>
  );
}
