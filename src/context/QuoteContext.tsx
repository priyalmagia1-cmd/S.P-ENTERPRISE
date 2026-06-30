import React, { createContext, useContext, useState, useEffect } from 'react';
import { QuoteItem } from '../types';

interface QuoteContextType {
  items: QuoteItem[];
  addItem: (item: QuoteItem) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('sp_enterprise_rfq_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('sp_enterprise_rfq_cart', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: QuoteItem) => {
    setItems((prev) => {
      // If the exact product, size, and grade are already in the cart, aggregate the quantity!
      const existingIdx = prev.findIndex(
        (i) =>
          i.productName === newItem.productName &&
          i.size === newItem.size &&
          i.grade === newItem.grade
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.length;

  return (
    <QuoteContext.Provider value={{ items, addItem, removeItem, clearCart, cartCount }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
