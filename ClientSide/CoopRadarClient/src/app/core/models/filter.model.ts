export interface ApartmentFilter {
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  searchTerm?: string;
  onlyFavorites?: boolean;
  sortBy?: 'newest' | 'price-asc' | 'price-desc' | 'area-desc';
}

export interface AlertSettings {
  enabled: boolean;
  email: boolean;
  push: boolean;
  city?: string;
  maxPrice?: number;
  minBedrooms?: number;
  frequency?: 'instant' | 'daily' | 'weekly';
}
