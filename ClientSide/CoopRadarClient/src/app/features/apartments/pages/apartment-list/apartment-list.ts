import { Component } from '@angular/core';
import { ApartmentCardComponent } from '../../../../shared/components/apartment-card/apartment-card';
import { ApartmentService } from '../../services/apartment.service';

@Component({
  selector: 'app-apartment-list',
  standalone: true,
  imports: [ApartmentCardComponent],
  templateUrl: './apartment-list.html',
  styleUrl: './apartment-list.css'
})
export class ApartmentListPage {
  constructor(public readonly apartmentService: ApartmentService) {}
}
