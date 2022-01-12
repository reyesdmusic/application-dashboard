import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../../services/application.service' 
import { Application } from '../../../models/Application';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-applications-table',
  templateUrl: './applications-table.component.html',
  styleUrls: ['./applications-table.component.css']
})
export class ApplicationsTableComponent implements OnInit {
  constructor(private applicationService: ApplicationService) {
    this.dataSource = new MatTableDataSource(this.applicationService.getApplications());
  }
  displayedColumns: string[] = ['id', 'name', 'position', 'applied', 'experience'];
  dataSource: MatTableDataSource<Application> | [];

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

}
