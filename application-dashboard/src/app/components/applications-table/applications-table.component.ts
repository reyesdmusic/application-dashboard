import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../../services/application.service' 
import { Application } from '../../../models/Application';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-applications-table',
  templateUrl: './applications-table.component.html',
  styleUrls: ['./applications-table.component.css']
})
export class ApplicationsTableComponent implements OnInit {
  constructor(private applicationService: ApplicationService) {
    this.dataSource = [];
    this.applications = [];
  }
  displayedColumns: string[] = ['id', 'name', 'position', 'applied', 'experience'];
  dataSource: MatTableDataSource<Application> | [];
  applications: Application[] | [];

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.applicationService.getApplications());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
