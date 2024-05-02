import { HttpErrorResponse, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, catchError, finalize, map, throwError } from 'rxjs';
import { TOKEN_KEY, TOKEN_TEROS_KEY, getData } from '../config/constants';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = getData(TOKEN_KEY);
    const token_teros = localStorage.getItem(TOKEN_TEROS_KEY);
    let authRequest = request;

    if (token !== null && !request.url.includes('/TerosApis/') && !request.url.includes('/register/')) {
      authRequest = request.clone({ 
        setHeaders: {
          Authorization: `Token ${token}`,
        }
      });
    }

    if (token_teros !== null && request.url.includes('/TerosApis/') && !request.url.includes('/register/')) {
      authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token_teros}` 
        }
      });
    }


    return next.handle(authRequest).pipe(
      finalize(() => {

      })
    );
  }
}
