import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { FavoriteService } from '../../services/favorite.service'  
import { Application } from '../../../models/Application';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-applications-table',
  templateUrl: './applications-table.component.html',
  styleUrls: ['./applications-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ transform: 'scaleY(0)', height: '0' })),
      state('expanded', style({ transform: 'scaleY(1)', height: '*' })),
      transition('expanded <=> collapsed', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('detailBtnExpand', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(90deg)' })),
      transition('expanded <=> collapsed', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ApplicationsTableComponent implements OnInit {
  constructor(private applicationService: ApplicationService, private favoriteService: FavoriteService) {}
  displayedColumns: string[] = ['expand', 'id', 'name', 'position', 'applied', 'experience', 'favorites'];
  applications: Application[] = this.applicationService.getApplications();
  dataSource: MatTableDataSource<Application> = new MatTableDataSource(this.applications);
  isTableExpanded: boolean = false;
  favorites: number[] = [];
  screenWidth: number = window.innerWidth;
  isMobile: boolean = this.screenWidth <= 850;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 850) {
      this.isMobile = false;
      this.displayedColumns = ['expand', 'id', 'name', 'position', 'applied', 'experience', 'favorites'];
    } else {
      this.isMobile = true;
      this.displayedColumns = ['expand', 'id', 'name', 'position', 'favorites'];
    }
  }
  
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getFavorites();
    this.getScreenSize();
  }

  getFavorites(): void {
    this.favoriteService.getFavorites().subscribe(favoritesArr => this.favorites = favoritesArr);
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement ).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleFavorite(id: number) {
    this.favoriteService.toggleFavorite(id);
    this.getFavorites();
    
  }

}
