import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from '../loader/loader.service';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.loaderService.showLoader(); //sets loader as true when an http call occurs anywhere in the application
    return next.handle(req).pipe( finalize(() => this.loaderService.hideLoader()/* hides loader once the http call gets complete */))
  }
}
