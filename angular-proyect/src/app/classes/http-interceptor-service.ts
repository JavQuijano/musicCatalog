import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class HttpInterceptorService implements HttpInterceptor{
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});

    if (!request.headers.has('Accept')) {
      request = request.clone({headers: request.headers.set('Accept', 'application/json')});
    }

    request = request.clone({headers: request.headers.set('Accept-Language', 'fr-FR')});

    return next.handle(request);

  }
}
