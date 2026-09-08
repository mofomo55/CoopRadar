import { Component } from '@angular/core';
import { FilterSidebarComponent } from '../../../../shared/components/filter-sidebar/filter-sidebar';

@Component({
  selector: 'app-filter-modal',
  standalone: true,
  imports: [FilterSidebarComponent],
  templateUrl: './filter-modal.html',
  styleUrl: './filter-modal.css'
})
export class FilterModalPage {}
