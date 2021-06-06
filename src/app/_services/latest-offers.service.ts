import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { baseUrl } from 'src/environments/environment';
import { LatestOffer } from '../_models/latestOffers.model';

@Injectable({
  providedIn: 'root',
})
export class LatestOffersService {
  offersUrl = baseUrl + 'api/LatestOffers';

  constructor(private http: HttpClient) {}

  getAllOffers(): Observable<any> {
    return this.http.get(this.offersUrl);
  }

  addNewOffer(image, payload: LatestOffer): Observable<any> {
    const formData = new FormData();
    formData.append('pictureForm', image, image.name);
    formData.append('name', payload.name);
    formData.append('startDate', payload.startDate.toDateString());
    formData.append('endDate', payload.endDate.toDateString());
    formData.append('rank', payload.rank.toString());
    formData.append('routeId', payload.routeId.toString());
    formData.append('routeName', payload.routeName);

    return this.http.post(this.offersUrl, formData);
  }

  deleteOffer(id: number): Observable<any> {
    return this.http.delete(`${this.offersUrl}/${id}`);
  }

  getOfferById(id: number): Observable<any>{
    return this.http.get(`${this.offersUrl}/${id}`);
  }

  updateOffer(image, payload: LatestOffer): Observable<any> {
    const formData = new FormData();
    formData.append('pictureForm', image, image.name);
    formData.append('id', payload.id.toString());
    formData.append('name', payload.name);
    formData.append('startDate', payload.startDate.toDateString());
    formData.append('endDate', payload.endDate.toDateString());
    formData.append('rank', payload.rank.toString());
    formData.append('routeId', payload.routeId.toString());
    formData.append('routeName', payload.routeName);

    return this.http.put(this.offersUrl, formData);
  }
}
