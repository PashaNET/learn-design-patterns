import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CommunicationService {

  private requestSendedSource = new Subject<string>();

  requestSended$ = this.requestSendedSource.asObservable();

  sentRequest(status) {
    this.requestSendedSource.next(status);
  }
}
