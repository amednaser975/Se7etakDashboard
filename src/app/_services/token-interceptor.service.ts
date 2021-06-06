import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token') || 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOlsiNDE1OCIsIjUvMjYvMjAyMSAxMDowNDoxMyBBTSJdLCJuYmYiOjE2MjIwMjM0NTMsImV4cCI6MTYyNDYxNTQ1MywiaWF0IjoxNjIyMDIzNDUzfQ.pHGmXJdi326JXUSn0EM_mKvqOPhHtd6tmynYm_QDGk_pIecZJOniSnsgYPtHGlaZVmPEFxdwoGKAJfivd3vUVQ';

    let reqClone;

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      reqClone = req.clone({ headers });
    } else {
      reqClone = req;
    }

    return next.handle(reqClone);
  }
}
