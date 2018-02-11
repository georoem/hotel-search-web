import { Component, Input } from '@angular/core';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {

  @Input('hotelArray')
  hotelArray: any[];

}
