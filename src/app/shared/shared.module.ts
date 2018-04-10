import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from './i18n';

@NgModule({
  imports: [
    CommonModule,
    I18nModule
  ],
  declarations: [],
  exports: [
    I18nModule
  ]
})
export class SharedModule { }
