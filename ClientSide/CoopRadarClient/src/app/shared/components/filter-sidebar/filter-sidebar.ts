import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface FilterSidebarState {
  minRent: number | null;
  maxRent: number | null;
  cooperativeDeposit: number | null;
  roomCounts: number[];
  cooperativeCompanies: string[];
  cities: string[];
}

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-sidebar.html',
  styleUrl: './filter-sidebar.css'
})
export class FilterSidebarComponent {
  @Input() switchLabel = 'Enable Push Notifications';
  @Input() showSwitch = false;
  @Input() FilterBoxLabel = 'Filter Options';
  @Input() ButtonFilterText = 'Apply Filters';

  @Output() filtersApply = new EventEmitter<FilterSidebarState>();

  minRent: number | null = null;
  maxRent: number | null = null;
  cooperativeDeposit: number | null = null;
  selectedRooms: string[] = [];
  selectedCompanies: string[] = [];
  selectedCities: string[] = [];
  alertEnabled = true;

  readonly roomOptions = ['1', '2', '3', '4+'];
  readonly companyOptions = [
    'Wohnbau Wien',
    'WohnCoop Süd',
    'Vereinsheim',
    'Gemeinsam Wohnen',
    'Mieterhilfe',
    'Stadtbaugenossenschaft'
  ];
  readonly cityOptions = [
    'Vienna',
    'Graz',
    'Linz',
    'Salzburg',
    'Innsbruck',
    'Klagenfurt'
  ];

  toggleRoom(room: string): void {
    const index = this.selectedRooms.indexOf(room);

    if (index >= 0) {
      this.selectedRooms.splice(index, 1);
      return;
    }

    this.selectedRooms.push(room);
  }

  toggleAlertSwitch(): void {
    this.alertEnabled = !this.alertEnabled;
  }

  get shouldShowFilterFields(): boolean {
    return !this.showSwitch || this.alertEnabled;
  }

  resetAll(): void {
    this.minRent = null;
    this.maxRent = null;
    this.cooperativeDeposit = null;
    this.selectedRooms = [];
    this.selectedCompanies = [];
    this.selectedCities = [];
  }

  applyFilters(): void {
    const state: FilterSidebarState = {
      minRent: this.minRent ?? null,
      maxRent: this.maxRent ?? null,
      cooperativeDeposit: this.cooperativeDeposit ?? null,
      roomCounts: this.selectedRooms.map((room) => room === '4+' ? 4 : Number(room)),
      cooperativeCompanies: [...this.selectedCompanies],
      cities: [...this.selectedCities]
    };

    this.filtersApply.emit(state);
  }
}
