import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared';

@Injectable()
export class I18nServiceDemoService {

  constructor(private apiService: ApiService) { }

  exampleFunction(params): Observable<any> {
    // here the "restfulAPIUrl" provide by backend enginer
    return this.apiService.post('restfulAPIUrl', {...params});
  }

  exampleAgain(callback, queryParams) {
    this.apiService.get('restfulAPIURL', {...queryParams}).subscribe(res => {
      callback(this.dataAdapter(res));
    });
  }

  dataAdapter(res) {
    const result = {...res};
    // result adapter logic here ....
    result.whatever = '';
    return result;
  }

}
