import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { I18nModule, TranslateService } from '../shared';

import { I18nServiceDemoComponent } from './i18n-service-demo.component';
import { I18nServiceDemoRoutingModule } from './i18n-service-demo-routing.module';
import { I18nServiceDemoService } from './i18n-service-demo.service';
import { ApiService } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    I18nServiceDemoRoutingModule
  ],
  declarations: [I18nServiceDemoComponent],
  providers: [
    ApiService,
    TranslateService,
    I18nServiceDemoService
  ],
})
export class I18nServiceDemoModule { }
