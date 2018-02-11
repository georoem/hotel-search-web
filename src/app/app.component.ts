import { HotelApiService } from './services/hotel-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  hotels;

  filteredName: string;
  filteredStars: string[];

  constructor(private hotelApiService: HotelApiService) {
    hotelApiService.getAll().subscribe((response) => {
      this.hotels = response;
    });
  }

  onSearchName(name: string) {
    this.filteredName = name;
    this.filterHotels();
  }
  onStarsSelected(stars: string[]) {
    this.filteredStars = stars;
    this.filterHotels();
  }

  filterHotels() {
    const request = {
      name: this.filteredName ? this.filteredName : '',
      stars: this.filteredStars ? this.filteredStars : []
    }
    this.hotelApiService.getByFilter(request).subscribe((response) => {
      this.hotels = response;
    });
  }
}
