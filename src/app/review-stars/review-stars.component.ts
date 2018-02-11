import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'review-stars',
  templateUrl: './review-stars.component.html',
  styleUrls: ['./review-stars.component.css']
})
export class ReviewStarsComponent implements OnInit {

  numbers: any[];

  @Input('starsNumber')
  starsNumber: number;

  ngOnInit() {
    this.numbers = Array(this.starsNumber).fill(0).map((x, i) => i);
  }

}
