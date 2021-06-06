import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Test } from '../_models/test.model';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  testsUrl = baseUrl + 'api/Tests';
  testTypesUrl = baseUrl + 'api/TestTypes';

  constructor(private http: HttpClient) {}

  getAllTestTypes(): Observable<any> {
    return this.http.get(this.testTypesUrl);
  }

  getAllTests(): Observable<any> {
    return this.http.get(this.testsUrl);
  }

  addNewTest(test: Test): Observable<any> {
    return this.http.post(this.testsUrl, test);
  }

  deleteTest(id): Observable<any> {
    return this.http.delete(`${this.testsUrl}/${id}`);
  }

  getTestById(id): Observable<any> {
    return this.http.get(`${this.testsUrl}/${id}`);
  }

  updateTest(newTest: Test): Observable<any> {
    return this.http.put(this.testsUrl, newTest);
  }
}
