import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-availability-table',
  templateUrl: './availability-table.component.html',
  styleUrls: ['./availability-table.component.css']
})
export class AvailabilityTableComponent implements OnInit {
  @Input() availability: any;
  constructor() { }
  

  ngOnInit(): void {
    this.availability = Object.entries(this.availability)
  }
}
