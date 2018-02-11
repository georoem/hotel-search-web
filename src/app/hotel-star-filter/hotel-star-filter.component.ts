import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-star-filter',
  templateUrl: './hotel-star-filter.component.html',
  styleUrls: ['./hotel-star-filter.component.css']
})
export class HotelStarFilterComponent implements OnInit  {

  @Output()
  onStarsSelected = new EventEmitter<number[]>();

  startsSelected = [];
  isAllSelected = true;
  numbers: number[];
  isExpanded: boolean;

  constructor() { }

  ngOnInit() {
    this.numbers = Array(5).fill(0).map((x, i) => i + 1);
  }

  onCheckedAll() {
    this.startsSelected = [];
    this.isAllSelected = true;
  }

  onChecked(value: number, checked: boolean) {
    const index = this.startsSelected.indexOf(value);
    if (checked && index < 0) {
      this.startsSelected.push(value);
    } else if (index > -1) {
      this.startsSelected.splice(index, 1);
    }
    if (this.startsSelected.length === 0) {
      this.isAllSelected = true;
    } else {
      this.isAllSelected = false;
    }
    this.onStarsSelected.emit(this.startsSelected);
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
