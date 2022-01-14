import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  constructor() { }

  getFavorites(): Observable<number[]> {

    // Grab 'favorites' array from LocalStorage
    let favorites 
    try {
      favorites = localStorage.getItem('favorites');
    } catch(e) {
      console.error('Error while attempting to retrieve favorites array from LocalStorage', e)
    }

    // If 'favorites' exists, dedupe
    // If it doesn't, create new array
    let favoritesArr: number[] | [];
    if (favorites) {
      favoritesArr = Array.from(new Set(JSON.parse(favorites)));
    } else {
      favoritesArr = [];
      try {
        localStorage.setItem('favorites', JSON.stringify(favoritesArr));
      } catch (e) {
        // Delegate to error handling service
        console.error('Error: attempting to initialize favorites array in LocalStorage unsuccessful, ', e)
      }
      
    }

    // Finally, return observable of favortiesArr
    return of(favoritesArr)
  }

  toggleFavorite(favoriteId: number) {
    // Grab 'favorites' array from LocalStorage
    let favorites 
    try {
      favorites = localStorage.getItem('favorites');
    } catch(e) {
      // Delegate to error handling service
      console.error('Error: attempting to retrieve favorites array in LocalStorage unsuccessful, ', e)
    }
    
    // If 'id' is included in 'favorites', remove it
    // If it is not, add it to 'favorites'
    if (favorites) {
      const favoritesArr = JSON.parse(favorites);
      const isFavorite = favoritesArr.includes(favoriteId);
      let newArray;
      if (isFavorite) {
        try {
          newArray = favoritesArr.filter((id: number) => id !== favoriteId)
          localStorage.setItem('favorites', JSON.stringify(newArray));
        } catch(e) {
          // Delegate to error handling service
          console.error(`Error: attempting to remove id: ${favoriteId} from favorites array in LocalStorage unsuccessful, `, e)
        }
        
      } else {
        newArray = [...favoritesArr, favoriteId]
        try {
          localStorage.setItem('favorites', JSON.stringify(newArray));
        } catch(e) {
          // Delegate to error handling service
          console.error(`Error: attempting to add id: ${favoriteId} to favorites array in LocalStorage unsuccessful, `, e)
        }
      }
    }
    
  }
}
