import React, { useState, useMemo } from 'react';
import { CATALOG } from '../data';
import { ProductItem, ProductCategory } from '../types';
import { Search, X, CornerDownRight, Bolt } from 'lucide-react';

interface SearchModalProps {
  onClose: () => void;
  onSelectProduct: (product: ProductItem, category: ProductCategory) => void;
}

export default function SearchModal({ onClose, onSelectProduct }: SearchModalProps) {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const results: { product: ProductItem; category: ProductCategory }[] = [];
    const lowerQuery = query.toLowerCase();

    CATALOG.forEach(cat => {
      cat.products.forEach(prod => {
        if (
          prod.name.toLowerCase().includes(lowerQuery) ||
          prod.description.toLowerCase().includes(lowerQuery) ||
          (prod.specs.standards && prod.specs.standards.toLowerCase().includes(lowerQuery)) ||
          (prod.specs.grade && prod.specs.grade.toLowerCase().includes(lowerQuery)) ||
          (prod.specs.finish && prod.specs.finish.toLowerCase().includes(lowerQuery)) ||
          (prod.specs.threads && prod.specs.threads.toLowerCase().includes(lowerQuery)) ||
          (prod.type && prod.type.toLowerCase().includes(lowerQuery))
        ) {
          results.push({ product: prod, category: cat });
        }
      });
    });

    return results.slice(0, 8); // Max 8 results for clean display
  }, [query]);

  return (
    <div className="fixed inset-0 bg-dark-charcoal/60 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4">
      <div className="bg-white rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl border border-light-grey text-left">
        
        {/* Search header bar */}
        <div className="p-4 border-b border-light-grey flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <Search className="w-5 h-5 text-accent-orange shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by DIN, ISO, Grade, Standard..."
              className="w-full bg-transparent text-dark-charcoal font-sans text-sm outline-none placeholder-steel-grey/60 font-semibold"
            />
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-light-grey text-steel-grey hover:text-dark-charcoal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Panel */}
        <div className="max-h-96 overflow-y-auto p-2">
          {!query.trim() ? (
            <div className="py-12 text-center text-xs text-steel-grey font-medium font-sans">
              Type above to search over 50,000+ fastener varieties in our inventory.
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-xs text-steel-grey font-medium font-sans">
              No matching fasteners found for "{query}"
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-[10px] font-extrabold text-steel-grey uppercase tracking-wider px-3 py-1.5 font-heading">
                Matching Inventory Items
              </p>
              {searchResults.map(({ product, category }) => (
                <button
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product, category);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-none hover:bg-light-grey flex items-start space-x-3 transition-colors group border border-transparent hover:border-dark-charcoal"
                >
                  {product.imageUrl ? (
                    <div className="w-12 h-12 rounded-none border border-dark-charcoal overflow-hidden shrink-0 bg-white">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="bg-primary-blue/5 text-primary-blue border border-primary-blue/10 p-2 rounded-lg shrink-0 group-hover:bg-primary-blue/15 transition-colors">
                      <Bolt className="w-4 h-4 text-accent-orange" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-primary-blue font-heading truncate">
                        {product.name}
                      </p>
                      <span className="text-[10px] bg-primary-blue/5 text-primary-blue px-2 py-0.5 rounded border border-primary-blue/10 font-bold uppercase truncate max-w-[40%]">
                        {category.name}
                      </span>
                    </div>
                    <p className="text-xs text-steel-grey font-medium truncate mt-0.5">
                      {product.description}
                    </p>
                    <div className="flex items-center space-x-1 text-[10px] text-accent-orange font-semibold mt-1">
                      <CornerDownRight className="w-3 h-3 shrink-0" />
                      <span>Standards: {product.specs.standards || 'Corporate Spec'}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
