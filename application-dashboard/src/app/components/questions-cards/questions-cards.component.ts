import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions-cards',
  templateUrl: './questions-cards.component.html',
  styleUrls: ['./questions-cards.component.css']
})
export class QuestionsCardsComponent implements OnInit {
  @Input() questions: any;
  constructor() { }

  ngOnInit(): void {
  }

}
