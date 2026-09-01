import { Component } from '@angular/core';
import { FilterSidebarComponent } from '../../../../shared/components/filter-sidebar/filter-sidebar';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [FilterSidebarComponent],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class NotificationsPage {}
