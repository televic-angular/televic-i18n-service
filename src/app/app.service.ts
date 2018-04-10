import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './shared';

@Injectable()
export class AppService {

  constructor(private apiService: ApiService) { }

  // here the queryParams's type should be replaced
  getProfile(queryParams: any): Observable<any> {
    return this.apiService.get(`profileApiUrl`, {...queryParams});
  }

}
