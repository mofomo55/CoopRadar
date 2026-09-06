import { Component } from '@angular/core';
import { ApartmentCardComponent } from '../../../../shared/components/apartment-card/apartment-card';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [ApartmentCardComponent],
  templateUrl: './favorite-list.html',
  styleUrl: './favorite-list.css'
})
export class FavoriteListPage {
  constructor(public readonly favoriteService: FavoriteService) {}
}
