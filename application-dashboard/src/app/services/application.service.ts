import { Injectable } from '@angular/core';
import { Application } from '../../models/Application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }
  applications: Application[] = [];
  allApplications: Application[] = [];

  async getApplications(): Promise<Application[]> {
    return this.applications;
  }

  async getAllApplications(): Promise<Application[]> {
    try {
      const { APPLICATIONS } = await import('../../mock-applications');
      this.allApplications = APPLICATIONS;
      this.applications = this.allApplications;
    } catch (e) {
      // Delegate to error handling service
      console.error('Error: attempt to import mock-applications failed, ', e)
    }
    return this.applications;
  }

  filterFavorites() {
    let favorites 
    
    try {
      favorites = localStorage.getItem('favorites');
    } catch(e) {
      // Delegate to error handling service
      console.error('Error: attempt to get favorites from LocalStorage failed, ', e)
    }
    
    let favoritesArr: any;
    if (favorites) {
      favoritesArr = JSON.parse(favorites);
      this.applications = this.applications.filter(app => favoritesArr.includes(app.id))
    }
  }

  unfilterFavorites() {
    this.applications = this.allApplications;
  } 
}
