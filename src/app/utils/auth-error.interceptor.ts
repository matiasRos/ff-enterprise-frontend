import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificacionesService } from '../services/utils/notificaciones.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { TOKEN_KEY, USER_KEY, removeData } from '../config/constants';
import { SeguridadService } from '../services/seguridad/seguridad.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private seguridadService: SeguridadService, private notificacionService: NotificacionesService, private ngspinner: NgxSpinnerService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(request)
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {

          if (error.status == 404 && error.error["detail"] != null) {
            this.ngspinner.hide();
            this.notificacionService.error.next(error.error["detail"]);
            this.router.navigate(['/']);
            return throwError(error.error["detail"]);
          }
          debugger
          // Server-side error
          if (error.status === 400 && typeof error.error === 'object') {
            // Handle field-specific errors
            errorMessage = this.handleFieldErrors(error.error);
          } else if (error.status === 401) {
            this.seguridadService.updateDataUser(null);
            removeData(TOKEN_KEY);
            removeData(USER_KEY);
            errorMessage = `Tu sesión ha expirado`;
            this.router.navigate(['/login', {}]);
          } else if (error.status === 403) {
            errorMessage = error.error.mensaje;
            // this.router.navigate(['/']);
          } else {
            // Handle general HTTP errors
            errorMessage = error.error.mensaje ? error.error.mensaje : "Ocurrió un error inesperado";
          }
        }
        // Aquí podrías agregar tu lógica para mostrar el error
        console.error(errorMessage);
        this.ngspinner.hide();

        this.notificacionService.error.next(errorMessage ? errorMessage : "Ocurrió un error inesperado");
        return throwError(errorMessage);
      })
    );
  }

  private handleFieldErrors(errorResponse: { [key: string]: string[] }): string {
    const fieldErrors = [];
    for (const [field, messages] of Object.entries(errorResponse)) {
      // For each field error, we push the message to the array.
      fieldErrors.push(`${messages.join(' ')}`);
    }
    // Join all field errors into a single string message.
    return fieldErrors.join('\n');
  }
}