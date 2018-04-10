import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nServiceDemoComponent } from './i18n-service-demo.component';

describe('I18nServiceDemoComponent', () => {
  let component: I18nServiceDemoComponent;
  let fixture: ComponentFixture<I18nServiceDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nServiceDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nServiceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
