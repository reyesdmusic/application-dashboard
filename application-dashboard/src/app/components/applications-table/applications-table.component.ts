import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../../services/application.service' 
import { Application } from '../../../models/Application';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-applications-table',
  templateUrl: './applications-table.component.html',
  styleUrls: ['./applications-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0', transform: 'scaleY(0)' })),
      state('expanded', style({ height: '*', transform: 'scaleY(1)' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ApplicationsTableComponent implements OnInit {
  constructor(private applicationService: ApplicationService) {}
  displayedColumns: string[] = ['id', 'name', 'position', 'applied', 'experience', 'actions'];
  applications: Application[] = this.applicationService.getApplications();
  dataSource: MatTableDataSource<Application> = new MatTableDataSource(this.applications);
  isTableExpanded: boolean = false;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement ).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
