import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hotel-name-filter',
  templateUrl: './hotel-name-filter.component.html',
  styleUrls: ['./hotel-name-filter.component.css']
})
export class HotelNameFilterComponent implements OnInit {

  @Output()
  onSearchName = new EventEmitter<String>();

  searchName = '';

  isExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.onSearchName.emit(this.searchName);
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
