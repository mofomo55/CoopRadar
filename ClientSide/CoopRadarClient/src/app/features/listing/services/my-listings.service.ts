import { Injectable, signal } from '@angular/core';

export interface ListingCompany {
  id: string;
  name: string;
  logoUrl?: string;
  count: number;
}

export interface ListingCityGroup {
  city: string;
  companies: ListingCompany[];
}

@Injectable({ providedIn: 'root' })
export class MyListingsService {
  private readonly cityGroupsSignal = signal<ListingCityGroup[]>([
    {
      city: 'Berlin',
      companies: [
        { id: 'berlin-1', name: 'Berlin Urban Homes', count: 12 },
        { id: 'berlin-2', name: 'Green Living Berlin', count: 8 },
        { id: 'berlin-3', name: 'Northside Cooperative', count: 10 },
        { id: 'berlin-4', name: 'Berlin Riverside Coop', count: 6 }
      ]
    },
    {
      city: 'Hamburg',
      companies: [
        { id: 'hamburg-1', name: 'Harbor Living Group', count: 9 },
        { id: 'hamburg-2', name: 'Alster Cooperative', count: 7 },
        { id: 'hamburg-3', name: 'South Harbor Homes', count: 11 }
      ]
    },
    {
      city: 'Munich',
      companies: [
        { id: 'munich-1', name: 'Bavaria Shared Living', count: 14 },
        { id: 'munich-2', name: 'Isar Valley Coop', count: 9 },
        { id: 'munich-3', name: 'Munich Fair Homes', count: 5 }
      ]
    },
    {
      city: 'Cologne',
      companies: [
        { id: 'cologne-1', name: 'Rhine City Coop', count: 8 },
        { id: 'cologne-2', name: 'Cologne Green Living', count: 7 },
        { id: 'cologne-3', name: 'West End Housing', count: 10 }
      ]
    },
    {
      city: 'Frankfurt',
      companies: [
        { id: 'frankfurt-1', name: 'Main River Homes', count: 13 },
        { id: 'frankfurt-2', name: 'Financial District Coop', count: 6 },
        { id: 'frankfurt-3', name: 'Frankfurt East Living', count: 9 }
      ]
    }
  ]);

  readonly cityGroups = this.cityGroupsSignal.asReadonly();
}
