// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// /*
//   Generated class for the ProcessHttpmsgProvider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class ProcessHttpmsgProvider {

//   constructor(public http: HttpClient) {
//     console.log('Hello ProcessHttpmsgProvider Provider');
//   }

// }
//================================
//================================

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
 export class ProcessHttpmsgProvider {

   constructor(public http: HttpClient) {
     console.log('Hello ProcessHttpmsgProvider Provider');
   }

   public handleError(error: Response | any) {
    let errMsg: string;

    if (error.error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
