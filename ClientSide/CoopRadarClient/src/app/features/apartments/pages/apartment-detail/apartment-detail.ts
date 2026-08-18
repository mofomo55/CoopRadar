import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentService } from '../../services/apartment.service';

@Component({
  selector: 'app-apartment-detail',
  standalone: true,
  templateUrl: './apartment-detail.html',
  styleUrl: './apartment-detail.css'
})
export class ApartmentDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly apartmentService = inject(ApartmentService);

  readonly apartment = computed(() => {
    const apartmentId = this.route.snapshot.paramMap.get('id') ?? '';
    return this.apartmentService.getById(apartmentId);
  });
}
