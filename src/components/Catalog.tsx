import React, { useState, useMemo } from 'react';
import { CATALOG } from '../data';
import { ProductCategory, ProductItem, QuoteItem } from '../types';
import { useQuote } from '../context/QuoteContext';
import { Search, Filter, Plus, Check, X, FileText, ChevronRight, HelpCircle, ArrowUpRight } from 'lucide-react';
import FastenerSvg from './FastenerSvg';

interface CatalogProps {
  initialCategoryId?: string;
  onGoToContact: () => void;
}

export default function Catalog({ initialCategoryId = 'all', onGoToContact }: CatalogProps) {
  const { addItem } = useQuote();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeCategoryOfProduct, setActiveCategoryOfProduct] = useState<ProductCategory | null>(null);

  // Cart form state for adding products
  const [rfqQty, setRfqQty] = useState<number>(100);
  const [rfqSize, setRfqSize] = useState<string>('');
  const [rfqGrade, setRfqGrade] = useState<string>('');
  const [rfqNotes, setRfqNotes] = useState<string>('');
  const [showAddedCheck, setShowAddedCheck] = useState<boolean>(false);

  // Filter products based on category and search query
  const filteredCategories = useMemo(() => {
    return CATALOG.map(cat => {
      // If category is selected, or if we are searching globally
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
        return null;
      }

      const matchingProducts = cat.products.filter(prod => {
        const query = searchQuery.toLowerCase();
        if (!query) return true;

        return (
          prod.name.toLowerCase().includes(query) ||
          prod.description.toLowerCase().includes(query) ||
          (prod.specs.standards && prod.specs.standards.toLowerCase().includes(query)) ||
          (prod.specs.grade && prod.specs.grade.toLowerCase().includes(query)) ||
          (prod.specs.finish && prod.specs.finish.toLowerCase().includes(query)) ||
          (prod.specs.threads && prod.specs.threads.toLowerCase().includes(query)) ||
          (prod.type && prod.type.toLowerCase().includes(query))
        );
      });

      if (matchingProducts.length === 0) return null;

      return {
        ...cat,
        products: matchingProducts
      };
    }).filter(Boolean) as ProductCategory[];
  }, [selectedCategory, searchQuery]);

  const handleOpenProduct = (product: ProductItem, category: ProductCategory) => {
    setSelectedProduct(product);
    setActiveCategoryOfProduct(category);
    // Auto populate defaults from specs
    const sizeOpts = product.specs.sizeRange ? product.specs.sizeRange.split(',')[0].replace('to', '-').trim() : 'M8';
    setRfqSize(sizeOpts);
    const gradeOpts = product.specs.grade ? product.specs.grade.split(',')[0].trim() : '8.8 / SS 304';
    setRfqGrade(gradeOpts);
    setRfqQty(100);
    setRfqNotes('');
    setShowAddedCheck(false);
  };

  const handleAddProductToRfq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct || !activeCategoryOfProduct) return;

    const rfqItem: QuoteItem = {
      productName: selectedProduct.name,
      categoryName: activeCategoryOfProduct.name,
      quantity: Number(rfqQty),
      size: rfqSize || 'As specified in drawing',
      grade: rfqGrade || 'Standard grade',
      notes: rfqNotes
    };

    addItem(rfqItem);
    setShowAddedCheck(true);
    setTimeout(() => {
      setShowAddedCheck(false);
      setSelectedProduct(null);
    }, 1500);
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-left mb-12">
          <span className="text-xs font-black text-accent-orange uppercase tracking-[0.25em] font-heading">
            50,000+ Fasteners in stock
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-primary-blue mt-1 font-heading tracking-tighter uppercase leading-none">
            Industrial Fastener Catalogue
          </h1>
          <p className="text-sm text-steel-grey mt-2 max-w-3xl font-semibold">
            Filter by product family or search globally to browse standards, material grades, protective finishes, and size metrics. Click on any product to view technical tables and request custom batch pricing.
          </p>
          <div className="h-1.5 w-24 bg-accent-orange mt-4 rounded-none"></div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-light-grey rounded-none p-4 md:p-6 mb-10 border-2 border-dark-charcoal flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-steel-grey">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, grade, standard (e.g. DIN 933)..."
              className="w-full bg-white text-dark-charcoal text-xs font-semibold py-3.5 pl-11 pr-4 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-steel-grey hover:text-dark-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Stats Summary */}
          <div className="text-xs text-dark-charcoal font-black uppercase tracking-widest font-sans">
            Catalogue Index: <span className="text-primary-blue">{filteredCategories.reduce((acc, c) => acc + c.products.length, 0)}</span> items listed
          </div>
        </div>

        {/* Main Catalog Layout: Sidebar categories + grid items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Sidebar Selector */}
          <div className="lg:col-span-3 space-y-1 bg-light-grey/50 p-3 rounded-none border-2 border-dark-charcoal">
            <p className="text-[10px] font-black text-steel-grey uppercase tracking-[0.15em] px-3 py-2 text-left">
              Product Categories
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`w-full text-left px-4 py-3 rounded-none text-xs font-black uppercase tracking-wider transition-all flex justify-between items-center ${
                selectedCategory === 'all'
                  ? 'bg-primary-blue text-white shadow-none'
                  : 'text-dark-charcoal hover:bg-light-grey'
              }`}
            >
              <span>All Products</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            {CATALOG.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full text-left px-4 py-3 rounded-none text-xs font-black uppercase tracking-wider transition-all flex justify-between items-center ${
                  selectedCategory === cat.id
                    ? 'bg-primary-blue text-white shadow-none'
                    : 'text-dark-charcoal hover:bg-light-grey'
                }`}
              >
                <span className="truncate">{cat.name}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-55" />
              </button>
            ))}
          </div>

          {/* Grid Products content */}
          <div className="lg:col-span-9 space-y-12">
            {filteredCategories.length === 0 ? (
              <div className="bg-light-grey/40 border-2 border-dark-charcoal rounded-none py-16 px-4 text-center">
                <HelpCircle className="w-12 h-12 text-steel-grey mx-auto mb-4" />
                <h3 className="text-lg font-black text-primary-blue font-heading uppercase">No matching fasteners found</h3>
                <p className="text-xs text-steel-grey mt-1 font-semibold">
                  Try clearing your search query or selecting "All Products" to browse the full inventory.
                </p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="mt-4 bg-accent-orange text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-none border-b-4 border-accent-orange-hover"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div key={category.id} className="space-y-4">
                  {/* Category Title Header */}
                  <div className="flex items-center space-x-3 pb-2 border-b-2 border-dark-charcoal">
                    <div className="text-primary-blue bg-primary-blue/5 p-2 rounded-none border-2 border-primary-blue">
                      <FastenerSvg type={category.id} className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-xl font-black text-primary-blue font-heading tracking-tighter uppercase leading-none">
                        {category.name}
                      </h2>
                      <p className="text-xs text-steel-grey font-semibold mt-0.5">{category.description}</p>
                    </div>
                  </div>

                  {/* Products list in Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.products.map((product) => (
                      <div 
                        key={product.id}
                        className="bg-white rounded-none border-2 border-dark-charcoal p-5 text-left shadow-none hover:shadow-[6px_6px_0px_0px_rgba(11,79,138,0.15)] hover:bg-light-grey/10 transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          {/* Top part with Product Photo and Title details */}
                          <div className="flex gap-4 items-start">
                            {/* Product Photo */}
                            {product.imageUrl && (
                              <div className="w-20 h-20 shrink-0 rounded-none border-2 border-dark-charcoal overflow-hidden relative bg-light-grey/40">
                                <img
                                  src={product.imageUrl}
                                  alt={product.name}
                                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            )}
                            
                            <div className="flex-grow min-w-0">
                              <h3 className="text-base font-black text-primary-blue font-heading tracking-tight leading-snug uppercase">
                                {product.name}
                              </h3>
                              <span className="text-[9px] text-steel-grey font-mono mt-0.5 block uppercase tracking-wider font-bold">
                                SPEC-ID: {product.id.toUpperCase()}
                              </span>
                            </div>

                            <div className="bg-light-grey/50 p-1 rounded-none border border-dark-charcoal shrink-0">
                              <FastenerSvg type={category.id} className="w-8 h-8 text-primary-blue" />
                            </div>
                          </div>

                          <p className="text-xs text-steel-grey font-semibold line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>

                          {/* Quick spec badges */}
                          <div className="pt-2 space-y-1.5">
                            {product.specs.standards && (
                              <div className="text-[11px] font-sans text-dark-charcoal font-semibold">
                                <strong className="text-steel-grey font-bold uppercase tracking-wider text-[9px]">Standards:</strong> {product.specs.standards}
                              </div>
                            )}
                            {product.specs.grade && (
                              <div className="text-[11px] font-sans text-dark-charcoal font-semibold">
                                <strong className="text-steel-grey font-bold uppercase tracking-wider text-[9px]">Grades:</strong> {product.specs.grade}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Card button */}
                        <div className="pt-4 mt-4 border-t-2 border-dark-charcoal flex items-center justify-between">
                          <span className="text-[9px] font-black text-accent-orange uppercase tracking-widest">
                            ISO 9001 APPROVED
                          </span>
                          <button
                            onClick={() => handleOpenProduct(product, category)}
                            className="flex items-center space-x-1 text-[10px] font-black uppercase tracking-widest text-primary-blue hover:text-accent-orange transition-colors"
                          >
                            <span>Detailed Specs</span>
                            <ChevronRight className="w-4 h-4 text-accent-orange" />
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              ))
            )}
          </div>

        </div>

      </div>

      {/* Product Spec Modal / RFQ Sheet Overlay */}
      {selectedProduct && activeCategoryOfProduct && (
        <div className="fixed inset-0 bg-dark-charcoal/65 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-none w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[12px_12px_0px_0px_rgba(11,79,138,0.2)] relative border-4 border-primary-blue text-left">
            
            {/* Modal sticky top close button */}
            <div className="sticky top-0 bg-white border-b-4 border-accent-orange px-6 py-4 flex justify-between items-center z-10">
              <div className="flex items-center space-x-2">
                <FastenerSvg type={activeCategoryOfProduct.id} className="w-8 h-8 text-primary-blue" />
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-primary-blue font-heading">{selectedProduct.name}</h3>
                  <span className="text-[10px] font-black text-accent-orange tracking-widest uppercase font-sans">
                    Category Index: {activeCategoryOfProduct.name}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 rounded-none border-2 border-dark-charcoal bg-white hover:bg-light-grey text-dark-charcoal transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Technical Visual + Specification Table */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Visual Representation box - Dual Photo & CAD Blueprint */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Real Product Photo */}
                  {selectedProduct.imageUrl && (
                    <div className="bg-light-grey/40 rounded-none border-2 border-dark-charcoal p-4 flex flex-col items-center justify-center min-h-[220px]">
                      <div className="w-full h-36 rounded-none border-2 border-dark-charcoal overflow-hidden bg-white">
                        <img
                          src={selectedProduct.imageUrl}
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-[10px] font-black text-steel-grey mt-2 uppercase tracking-widest text-center">
                        Actual Product Photograph
                      </p>
                    </div>
                  )}

                  {/* CAD Vector projection */}
                  <div className="bg-light-grey/40 rounded-none border-2 border-dark-charcoal p-4 flex flex-col items-center justify-center min-h-[220px]">
                    <div className="h-36 flex items-center justify-center">
                      <FastenerSvg type={activeCategoryOfProduct.id} className="w-28 h-28 text-primary-blue" />
                    </div>
                    <p className="text-[10px] font-black text-steel-grey mt-2 uppercase tracking-widest text-center">
                      Vector projection schematic [ISO]
                    </p>
                  </div>
                </div>

                {/* Specification Table */}
                <div className="space-y-3">
                  <h4 className="text-xs font-black text-primary-blue font-heading uppercase tracking-widest">
                    Technical Specifications
                  </h4>
                  <div className="overflow-hidden border-2 border-dark-charcoal rounded-none">
                    <table className="min-w-full divide-y divide-light-grey text-xs font-sans">
                      <tbody className="bg-white divide-y divide-light-grey">
                        
                        {Object.entries(selectedProduct.specs).map(([key, val]) => {
                          if (!val) return null;
                          
                          // Format key name nicely
                          const formattedKey = key
                              .replace(/([A-Z])/g, ' $1')
                              .replace(/^./, (str) => str.toUpperCase());

                          return (
                            <tr key={key} className="hover:bg-light-grey/40">
                              <td className="px-4 py-3 bg-light-grey/25 text-steel-grey font-bold uppercase tracking-wider text-[9px] w-1/3">
                                {formattedKey}
                              </td>
                              <td className="px-4 py-3 text-dark-charcoal font-semibold">
                                {val}
                              </td>
                            </tr>
                          );
                        })}

                        {selectedProduct.type && (
                          <tr className="hover:bg-light-grey/40">
                            <td className="px-4 py-3 bg-light-grey/25 text-steel-grey font-bold uppercase tracking-wider text-[9px] w-1/3">
                              Available Types
                            </td>
                            <td className="px-4 py-3 text-dark-charcoal font-semibold">
                              {selectedProduct.type}
                            </td>
                          </tr>
                        )}
                        
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Key Features Block */}
                {selectedProduct.features && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-black text-primary-blue font-heading uppercase tracking-wider">
                      Core Strengths &amp; Engineering Features
                    </h4>
                    <ul className="list-disc pl-5 text-xs text-steel-grey space-y-1 font-semibold">
                      {selectedProduct.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Right Column: RFQ Add to Cart Form */}
              <div className="lg:col-span-5 bg-light-grey/45 rounded-none border-2 border-dark-charcoal p-5 md:p-6 h-fit space-y-6">
                <div className="text-left">
                  <h4 className="text-sm font-black text-primary-blue font-heading uppercase tracking-widest">
                    Request Batch RFQ
                  </h4>
                  <p className="text-[11px] text-steel-grey font-semibold mt-1">
                    Enter your batch requirement sizing and estimated count. We will provide a price quotation PAN India.
                  </p>
                </div>

                <form onSubmit={handleAddProductToRfq} className="space-y-4">
                  
                  {/* Sizing Input */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                      Select Size Range / Dimensions
                    </label>
                    <input
                      type="text"
                      required
                      value={rfqSize}
                      onChange={(e) => setRfqSize(e.target.value)}
                      placeholder="e.g. M12 x 50mm, 1/2 UNC"
                      className="w-full bg-white text-dark-charcoal text-xs font-semibold p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange"
                    />
                    <span className="text-[10px] text-steel-grey mt-1 block font-semibold">
                      Range: {selectedProduct.specs.sizeRange || 'M3 to M100'}
                    </span>
                  </div>

                  {/* Material / Grade Sizing */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                      Material Grade / Finishing Choice
                    </label>
                    <input
                      type="text"
                      required
                      value={rfqGrade}
                      onChange={(e) => setRfqGrade(e.target.value)}
                      placeholder="e.g. Grade 8.8 High Tensile, SS 316, Plain"
                      className="w-full bg-white text-dark-charcoal text-xs font-semibold p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange"
                    />
                    <span className="text-[10px] text-steel-grey mt-1 block font-semibold">
                      Options: {selectedProduct.specs.grade || 'Standard Mild Steel'}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                      Requirement Quantity (Pieces)
                    </label>
                    <input
                      type="number"
                      required
                      min={1}
                      value={rfqQty}
                      onChange={(e) => setRfqQty(Number(e.target.value))}
                      className="w-full bg-white text-dark-charcoal text-xs font-semibold p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange"
                    />
                    <span className="text-[10px] text-accent-orange font-bold mt-1 block">
                      Bulk wholesale discounts apply at 500+ pieces.
                    </span>
                  </div>

                  {/* Custom spec description notes */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-dark-charcoal mb-1.5 font-sans">
                      Special Drawing or Packaging Notes (Optional)
                    </label>
                    <textarea
                      value={rfqNotes}
                      onChange={(e) => setRfqNotes(e.target.value)}
                      rows={3}
                      placeholder="Specify custom coatings, threaded pitch tolerances, test certificate needs, etc."
                      className="w-full bg-white text-dark-charcoal text-xs font-semibold p-3 rounded-none border-2 border-dark-charcoal focus:outline-none focus:border-accent-orange resize-none"
                    />
                  </div>

                  {/* Action Add Button */}
                  <button
                    type="submit"
                    disabled={showAddedCheck}
                    className={`w-full flex items-center justify-center space-x-2 py-3.5 rounded-none text-xs font-black uppercase tracking-widest transition-all ${
                      showAddedCheck
                        ? 'bg-emerald-600 text-white'
                        : 'bg-primary-blue hover:bg-primary-blue-hover text-white border-b-4 border-primary-blue'
                    }`}
                  >
                    {showAddedCheck ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to RFQ List!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 animate-pulse" />
                        <span>Add to Quotation Draft</span>
                      </>
                    )}
                  </button>

                  {/* Contact directly button */}
                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-steel-grey font-bold">
                      Have a PDF CAD Drawing file?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProduct(null);
                          onGoToContact();
                        }}
                        className="text-primary-blue font-black hover:underline"
                      >
                        Upload directly on Contact page
                      </button>
                    </span>
                  </div>

                </form>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
