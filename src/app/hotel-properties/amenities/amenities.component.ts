import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent {

  @Input('amenityNames')
  amenityNames: any[];

}
