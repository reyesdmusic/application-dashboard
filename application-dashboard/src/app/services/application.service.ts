import { Injectable } from '@angular/core';
import { Application } from '../../models/Application';
import { APPLICATIONS } from '../../mock-applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }
  applications = APPLICATIONS;

  getApplications(): Application[] {
    return this.applications;
  }

  filterFavorites() {
    const favorites = localStorage.getItem('favorites');
    let favoritesArr: any;
    if (favorites) {
      favoritesArr = JSON.parse(favorites);
      this.applications = this.applications.filter(app => favoritesArr.includes(app.id))
    }
  }

  unfilterFavorites() {
    this.applications = APPLICATIONS;
  } 
}
