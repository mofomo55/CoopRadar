import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface CityCompanyItem {
  id: string | number;
  name: string;
  logoUrl?: string;
  count?: number;
}

@Component({
  selector: 'app-city-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-accordion.html',
  styleUrl: './city-accordion.css'
})
export class CityAccordionComponent {
  @Input() cityName = 'City';
  @Input() companies: Array<CityCompanyItem> = [];

  @Output() companySelected = new EventEmitter<CityCompanyItem>();

  isOpen = false;

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  selectCompany(company: CityCompanyItem): void {
    this.companySelected.emit(company);
  }
}
