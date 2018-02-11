import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class HotelApiService extends DataService {
  constructor(http: HttpClient) {
    super('http://localhost:1337/hotel', http);
   }

}
