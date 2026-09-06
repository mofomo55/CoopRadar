import { Injectable, signal } from '@angular/core';
import { Apartment } from '../../../core/models/apartment.model';

@Injectable({ providedIn: 'root' })
export class ApartmentService {
  private readonly apartments = signal<Apartment[]>([
    {
      id: '1',
      title: 'Modern 2-bedroom apartment',
      slug: 'modern-2-bedroom-apartment',
      description: 'Bright apartment near the city center.',
      price: 1450,
      currency: 'EUR',
      city: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      isFavorite: false,
      companyId: 'c-1'
    },
        {
      id: '2',
      title: 'Modern 2-bedroom apartment',
      slug: 'modern-2-bedroom-apartment',
      description: 'Bright apartment near the city center.',
      price: 1450,
      currency: 'EUR',
      city: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      isFavorite: false,
      companyId: 'c-1'
    },

            {
      id: '3',
      title: 'Modern 2-bedroom apartment',
      slug: 'modern-2-bedroom-apartment',
      description: 'Bright apartment near the city center.',
      price: 1450,
      currency: 'EUR',
      city: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      isFavorite: false,
      companyId: 'c-1'
    },

            {
      id: '4',
      title: 'Modern 2-bedroom apartment',
      slug: 'modern-2-bedroom-apartment',
      description: 'Bright apartment near the city center.',
      price: 1450,
      currency: 'EUR',
      city: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      isFavorite: false,
      companyId: 'c-1'
    },

            {
      id: '5',
      title: 'Modern 2-bedroom apartment',
      slug: 'modern-2-bedroom-apartment',
      description: 'Bright apartment near the city center.',
      price: 1450,
      currency: 'EUR',
      city: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      isFavorite: false,
      companyId: 'c-1'
    },

            {
      id: '6',
      title: 'Modern 2-bedroom apartment',
      slug: 'modern-2-bedroom-apartment',
      description: 'Bright apartment near the city center.',
      price: 1450,
      currency: 'EUR',
      city: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      isFavorite: false,
      companyId: 'c-1'
    },

                {
      id: '7',
      title: 'Modern 2-bedroom apartment',
      slug: 'modern-2-bedroom-apartment',
      description: 'Bright apartment near the city center.',
      price: 1450,
      currency: 'EUR',
      city: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      isFavorite: true,
      companyId: 'c-1'
    },

                {
      id: '8',
      title: 'Modern 2-bedroom apartment',
      slug: 'modern-2-bedroom-apartment',
      description: 'Bright apartment near the city center.',
      price: 1450,
      currency: 'EUR',
      city: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      isFavorite: true,
      companyId: 'c-1'
    },

                {
      id: '9',
      title: 'Modern 2-bedroom apartment',
      slug: 'modern-2-bedroom-apartment',
      description: 'Bright apartment near the city center.',
      price: 1450,
      currency: 'EUR',
      city: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      isFavorite: true,
      companyId: 'c-1'
    },

                {
      id: '10',
      title: 'Modern 2-bedroom apartment',
      slug: 'modern-2-bedroom-apartment',
      description: 'Bright apartment near the city center.',
      price: 1450,
      currency: 'EUR',
      city: 'Berlin',
      bedrooms: 2,
      bathrooms: 1,
      isFavorite: true,
      companyId: 'c-1'
    }


  ]);

  readonly list = this.apartments.asReadonly();

  getById(id: string): Apartment | undefined {
    return this.apartments().find((apartment) => apartment.id === id);
  }

  toggleFavorite(id: string): void {
    this.apartments.update((apartments) =>
      apartments.map((apartment) =>
        apartment.id === id
          ? { ...apartment, isFavorite: apartment.isFavorite !== true }
          : apartment
      )
    );
  }
}
