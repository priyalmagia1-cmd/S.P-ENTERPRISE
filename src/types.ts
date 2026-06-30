export interface Specification {
  standards?: string;
  grade?: string;
  finish?: string;
  sizeRange?: string;
  threads?: string;
  material?: string;
  availableSizes?: string;
  type?: string;
  range?: string;
  clinchNutSize?: string;
  clinchStudSize?: string;
  coatingType?: string;
  thickness?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  subName?: string;
  description: string;
  specs: Specification;
  type?: string;
  images?: string[]; // We will draw highly detailed SVG icons dynamically
  features?: string[];
  applications?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  iconName: string; // e.g., 'bolt', 'nut', 'anchor'
  products: ProductItem[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  iconName: string; // Lucide icon name
  imageUrl?: string;
  applications: string[];
}

export interface Brand {
  id: string;
  name: string;
  logoText: string;
  description: string;
  specialty: string;
  featured?: boolean;
}

export interface QuoteItem {
  productName: string;
  categoryName: string;
  quantity: number;
  size: string;
  grade: string;
  notes?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
