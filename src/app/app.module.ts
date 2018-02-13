import { HotelNameFilterComponent } from './hotel-filters/hotel-name-filter/hotel-name-filter.component';
import { HotelStarFilterComponent } from './hotel-filters/hotel-star-filter/hotel-star-filter.component';
import { AmenitiesComponent } from './hotel-properties/amenities/amenities.component';
import { ReviewStarsComponent } from './hotel-properties/review-stars/review-stars.component';
import { HotelApiService } from './services/hotel-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelItemComponent } from './hotel-item/hotel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelItemComponent,
    ReviewStarsComponent,
    AmenitiesComponent,
    HotelStarFilterComponent,
    HotelNameFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    AngularSvgIconModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    HotelApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
