import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityAccordionComponent } from '../../../../shared/components/city-accordion/city-accordion';
import { MyListingsService } from '../../services/my-listings.service';

@Component({
  selector: 'app-my-listings-page',
  standalone: true,
  imports: [CommonModule, CityAccordionComponent],
  templateUrl: './my-listings.html',
  styleUrl: './my-listings.css'
})
export class MyListingsPage {
  private readonly myListingsService = inject(MyListingsService);

  readonly cityGroups = this.myListingsService.cityGroups;

  onCompanySelected(company: { name: string }): void {
    console.log('Selected company:', company.name);
  }
}
