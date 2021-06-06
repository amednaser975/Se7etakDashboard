import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Area } from '../_models/area.model';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  areasUrl = baseUrl + 'api/Areas';

  constructor(private http: HttpClient) {}

  getAllAreas(): Observable<any> {
    return this.http.get(this.areasUrl);
  }

  getAreaById(id: number): Observable<any> {
    return this.http.get(`${this.areasUrl}/${id}`);
  }

  addArea(area: Area): Observable<any> {
    return this.http.post(this.areasUrl, area);
  }

  deleteArea(id: number): Observable<any> {
    return this.http.delete(`${this.areasUrl}/${id}`);
  }

  updateArea(area: Area): Observable<any> {
    return this.http.put(this.areasUrl, area);
  }

  changeActivationForArea(id: number, activationFlag: boolean): Observable<any> {
    return this.http.put(`${this.areasUrl}/${id}/${activationFlag}`, {});
  }
}
