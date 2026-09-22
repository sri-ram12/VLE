export type ProductCategory = 'electricals' | 'plumbing' | 'sanitary' | 'hardware';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory: string;
  brand: string;
  demoPrice: number;
  unit: string;
  shortDescription: string;
  fullDescription: string;
  specifications: Record<string, string>;
  applications: string[];
  image: string;
  availability: 'In Stock' | 'Wholesale Bulk Available' | 'Available on Demand';
  featured: boolean;
  isWholesaleBulk?: boolean;
  tags: string[];
}

export interface Brand {
  id: string;
  name: string;
  category: string;
  tagline: string;
  popularItems: string[];
  accentColor?: string;
}

export interface EnquiryData {
  name: string;
  phone: string;
  email?: string;
  category: ProductCategory | 'General';
  productRequired: string;
  quantity: string;
  enquiryType: 'retail' | 'wholesale';
  message: string;
}

export interface FilterState {
  searchQuery: string;
  category: 'all' | ProductCategory;
  brand: 'all' | string;
  availability: 'all' | string;
  minPrice: number;
  maxPrice: number;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'name-asc';
}
