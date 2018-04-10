import { TestBed, inject } from '@angular/core/testing';

import { I18nServiceDemoService } from './i18n-service-demo.service';

describe('I18nServiceDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18nServiceDemoService]
    });
  });

  it('should be created', inject([I18nServiceDemoService], (service: I18nServiceDemoService) => {
    expect(service).toBeTruthy();
  }));
});
