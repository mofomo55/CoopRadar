export interface Apartment {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  city: string;
  neighborhood?: string;
  bedrooms: number;
  bathrooms: number;
  areaSqm?: number;
  availableFrom?: string;
  isFavorite?: boolean;
  companyId?: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
}
