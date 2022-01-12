import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityTableComponent } from './availability-table.component';

describe('AvailabilityTableComponent', () => {
  let component: AvailabilityTableComponent;
  let fixture: ComponentFixture<AvailabilityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilityTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
