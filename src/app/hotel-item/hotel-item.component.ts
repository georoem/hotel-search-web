import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {

  @Input('hotelObject')
  hotelObject;

  constructor() { }

  ngOnInit() {
  }

}
