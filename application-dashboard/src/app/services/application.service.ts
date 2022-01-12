import { Injectable } from '@angular/core';
import { Application } from '../../models/Application';
import { APPLICATIONS } from '../../mock-applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  getApplications(): Application[] {
    return APPLICATIONS
  }
}
