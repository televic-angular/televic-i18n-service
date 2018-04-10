import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TranslateResolver, TranslateDeactivator, TranslateToken } from '../shared';
import { I18nServiceDemoComponent } from './i18n-service-demo.component';

const i18nServiceRoutes: Routes = [
  {
    path: 'i18n-service',
    component: I18nServiceDemoComponent,
    resolve: [TranslateResolver],
    canDeactivate: [TranslateDeactivator]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(i18nServiceRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    TranslateResolver,
    TranslateDeactivator,
    {
      provide: TranslateToken,
      useValue: 'i18nServiceDemo'
    }
  ]
})
export class I18nServiceDemoRoutingModule { }
