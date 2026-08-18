import { Component, input } from '@angular/core';
import { Apartment } from '../../../core/models/apartment.model';

@Component({
  selector: 'app-apartment-card',
  standalone: true,
  templateUrl: './apartment-card.html',
  styleUrl: './apartment-card.css'
})
export class ApartmentCardComponent {
  apartment = input.required<Apartment>();
}
