import { Component, inject, input } from '@angular/core';
import { Apartment } from '../../../core/models/apartment.model';
import { ApartmentService } from '../../../features/apartments/services/apartment.service';

@Component({
  selector: 'app-apartment-card',
  standalone: true,
  templateUrl: './apartment-card.html',
  styleUrl: './apartment-card.css'
})
export class ApartmentCardComponent {
  private readonly apartmentService = inject(ApartmentService);

  apartment = input.required<Apartment>();

  toggleFavorite(): void {
    this.apartmentService.toggleFavorite(this.apartment().id);
  }
}
