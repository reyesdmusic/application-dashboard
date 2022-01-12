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
  displayedColumns: string[] = ['id', 'name', 'position', 'applied', 'experience'];
  dataSource: Application[] = [];

  ngOnInit(): void {
    this.dataSource = this.applicationService.getApplications();
  }

}
