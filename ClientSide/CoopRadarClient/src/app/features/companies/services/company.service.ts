import { Injectable, signal } from '@angular/core';
import { Company } from '../../../core/models/company.model';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private readonly companies = signal<Company[]>([
    {
      id: 'c-1',
      name: 'WohnCoop Berlin',
      slug: 'wohncoop-berlin',
      city: 'Berlin',
      description: 'Affordable urban living solutions.'
    }
  ]);

  readonly list = this.companies.asReadonly();
}
