import { Injectable } from '@angular/core';
import { Pattern } from './Pattern';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PatternService {

  constructor(private http: HttpClient) {}

  getPatterns(): Observable<Pattern[]> {
    return this.http.get<Pattern[]>('http://localhost:3000');
  }

  getPattern(id): Observable<Pattern> {
    return this.http.get<Pattern>(`http://localhost:3000/pattern/${id}`);
  }
}
