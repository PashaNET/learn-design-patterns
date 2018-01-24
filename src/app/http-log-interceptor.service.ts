import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { LoaderComponent } from './loader/loader.component';
import { CommunicationService } from './communication.service';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpLogInterceptorService {

  constructor(private loader: LoaderComponent, private communicationService: CommunicationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.communicationService.sentRequest(true);

    return next.handle(request).do((ev: HttpEvent<any>) => {
      if (ev instanceof HttpResponse) {
        this.communicationService.sentRequest(false);
      }
    }); 
  }
}
