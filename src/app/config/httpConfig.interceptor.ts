//httpConfig.interceptor.ts
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  loaderToShow: any;
  isLoading = false;
  constructor(
    private router: Router
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = null;


    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }

    //Authentication by setting header with token value
    if (token) {
      request = request.clone({ setHeaders: { 'Authorization': 'Token ' + token } });
    }


    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('INTERCEPTOR ERROR', error.status, error);
        if (error.status == 401) {
          localStorage.removeItem('authToken');
          localStorage.clear();
          this.router.navigate(['/auth/login']);
        }
        return throwError(error);
      }));
  }

}