import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Doctor } from '../_models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctorsUrl = 'https://149d40be-2cb3-410b-bf05-75d527e0ad3f.mock.pstmn.io' + '/api/Doctor/GetAllDoctors?currentPage=1&pageSize=10&isEmergencyDoctor=null&isSe7etakDoctor=null&specialityId=null&isActive=null&isOnline=null&doctorName=null';

  constructor(private http: HttpClient) {}

  getAllDoctors(): Observable<any> {
    return this.http.get(this.doctorsUrl);
  }

  addNewDoctor(image, payload: Doctor): Observable<any> {
    const formData = new FormData();
    // formData.append('pictureForm', image, image.name);
    // formData.append('name', payload.name);
    // formData.append('startDate', payload.startDate.toDateString());
    // formData.append('endDate', payload.endDate.toDateString());
    // formData.append('rank', payload.rank.toString());
    // formData.append('routeId', payload.routeId.toString());
    // formData.append('routeName', payload.routeName);

    return this.http.post(this.doctorsUrl, formData);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.doctorsUrl}/${id}`);
  }

  getDoctorById(id: number): Observable<any>{
    return this.http.get(`${this.doctorsUrl}/${id}`);
  }

  updateDoctor(image, payload: Doctor): Observable<any> {
    const formData = new FormData();
    // formData.append('pictureForm', image, image.name);
    // formData.append('id', payload.id.toString());
    // formData.append('name', payload.name);
    // formData.append('startDate', payload.startDate.toDateString());
    // formData.append('endDate', payload.endDate.toDateString());
    // formData.append('rank', payload.rank.toString());
    // formData.append('routeId', payload.routeId.toString());
    // formData.append('routeName', payload.routeName);

    return this.http.put(this.doctorsUrl, formData);
  }
}
