import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsCardsComponent } from './questions-cards.component';

describe('QuestionsCardsComponent', () => {
  let component: QuestionsCardsComponent;
  let fixture: ComponentFixture<QuestionsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
