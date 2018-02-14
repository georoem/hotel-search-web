import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class HotelApiService extends DataService {
  constructor(http: HttpClient) {
    super(environment.urlServices + 'hotel', http);
  }

  getByFilter(payload: any) {
    const options = {
      params: new HttpParams().set('name', payload.name).append('stars', payload.stars)
    };

    return super.getHttp().get(super.getUrl() + '/filter/', options)
      .map(response => response)
      .catch(super.handleError);
  }

}
