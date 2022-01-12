import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service' 
import { Application } from '../../../models/Application';

@Component({
  selector: 'app-applications-table',
  templateUrl: './applications-table.component.html',
  styleUrls: ['./applications-table.component.css']
})
export class ApplicationsTableComponent implements OnInit {
  constructor(private applicationService: ApplicationService) { }
  applications: Application[] = [];

  ngOnInit(): void {
    this.applications = this.applicationService.getApplications();
  }

}
