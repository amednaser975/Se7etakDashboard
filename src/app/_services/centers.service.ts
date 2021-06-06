import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Center } from '../_models/center.model';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  centerUrl = baseUrl + 'api/Center';

  constructor(private http: HttpClient) {}

  getAllCenters(): Observable<any> {
    return this.http.get(this.centerUrl);
  }

  getCenterById(id: number): Observable<any> {
    return this.http.get(`${this.centerUrl}/${id}`);
  }

  addCenter(center: Center): Observable<any> {
    return this.http.post(this.centerUrl, center);
  }

  deleteCenter(id: number): Observable<any> {
    return this.http.delete(`${this.centerUrl}/${id}`);
  }

  updateCenter(center: Center): Observable<any> {
    return this.http.put(this.centerUrl, center);
  }

}
