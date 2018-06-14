import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Card } from './../dashboard/models/card';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardService {
    constructor (private http: Http) {};

     getCardInfo(): Observable<Card[]> {
         return this.http.get('./assets/data.json')
                         .map((res: Response) => res.json())
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     };

}
