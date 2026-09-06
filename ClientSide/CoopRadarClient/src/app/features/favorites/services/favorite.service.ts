import { Injectable, computed, inject } from '@angular/core';
import { ApartmentService } from '../../apartments/services/apartment.service';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private readonly apartmentService = inject(ApartmentService);

  readonly list = computed(() =>
    this.apartmentService.list().filter((apartment) => apartment.isFavorite === true)
  );

  getById(id: string) {
    return this.list().find((apartment) => apartment.id === id);
  }
}
