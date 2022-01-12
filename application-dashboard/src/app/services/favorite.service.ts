import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  constructor() { }

  getFavorites(): Observable<number[]> {
    const favorites = localStorage.getItem('favorites');
    let favoritesArr: number[] | [];
    if (favorites) {
      favoritesArr = Array.from(new Set(JSON.parse(favorites)));
    } else {
      favoritesArr = [];
      localStorage.setItem('favorites', JSON.stringify(favoritesArr));
    }
    return of(favoritesArr)
  }

  toggleFavorite(favoriteId: number) {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      const favoritesArr = JSON.parse(favorites);
      const isFavorite = favoritesArr.includes(favoriteId);
      let newArray;
      if (isFavorite) {
        newArray = favoritesArr.filter((id: number) => id !== favoriteId)
        localStorage.setItem('favorites', JSON.stringify(newArray));
      } else {
        newArray = [...favoritesArr, favoriteId]
        localStorage.setItem('favorites', JSON.stringify(newArray));
      }
    }
    
  }
}
