import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const profile = {
      name: 'Rockwang',
      age: 35,
      sex: 'male'
    };
    return profile;
  }

}
