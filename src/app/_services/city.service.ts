import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { City } from '../_models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cityUrl = baseUrl + 'api/Cities';

  constructor(private http: HttpClient) {}

  getAllCities(): Observable<any> {
    return this.http.get(this.cityUrl);
  }

  getCityById(id: number): Observable<any> {
    return this.http.get(`${this.cityUrl}/${id}`);
  }

  addCity(city: City): Observable<any> {
    return this.http.post(this.cityUrl, city);
  }

  deleteCity(id: number): Observable<any> {
    return this.http.delete(`${this.cityUrl}/${id}`);
  }

  updateCity(city: City): Observable<any> {
    return this.http.put(this.cityUrl, city);
  }

  changeActivationForCity(id: number, activationFlag: boolean): Observable<any> {
    return this.http.put(`${this.cityUrl}/${id}/${activationFlag}`, {});
  }

  getCitiesByCountryId(countryId: number): Observable<any> {
    return this.http.get(`${this.cityUrl}/GetCitiesByCountryId/${countryId}`);
  }
}
