import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { LatestService } from '../_models/latestService.model';

@Injectable({
  providedIn: 'root'
})
export class LatestServicesService {

  servicesUrl = baseUrl + 'api/LatestServices';

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<any> {
    return this.http.get(this.servicesUrl);
  }

  addNewService(image, payload: LatestService): Observable<any> {
    const formData = new FormData();
    formData.append('pictureForm', image, image.name);
    formData.append('name', payload.name);
    formData.append('startDate', payload.startDate.toDateString());
    formData.append('endDate', payload.endDate.toDateString());
    formData.append('rank', payload.rank.toString());
    formData.append('routeId', payload.routeId.toString());
    formData.append('routeName', payload.routeName);

    return this.http.post(this.servicesUrl, formData);
  }

  deleteService(id: number): Observable<any> {
    return this.http.delete(`${this.servicesUrl}/${id}`);
  }

  getServiceById(id: number): Observable<any>{
    return this.http.get(`${this.servicesUrl}/${id}`);
  }

  updateService(image, payload: LatestService): Observable<any> {
    const formData = new FormData();
    formData.append('pictureForm', image, image.name);
    formData.append('id', payload.id.toString());
    formData.append('name', payload.name);
    formData.append('startDate', payload.startDate.toDateString());
    formData.append('endDate', payload.endDate.toDateString());
    formData.append('rank', payload.rank.toString());
    formData.append('routeId', payload.routeId.toString());
    formData.append('routeName', payload.routeName);

    return this.http.put(this.servicesUrl, formData);
  }
}
