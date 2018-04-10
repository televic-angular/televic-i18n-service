import { NgModule } from '@angular/core';

import { TranslateService } from './translate.service';
import { TranslateToken } from './translate-token';
import { TranslatePipe } from './translate.pipe';
import { I18nLangService } from './i18n-lang.service';

@NgModule({
  declarations: [
    TranslatePipe,
  ],
  exports: [
    TranslatePipe,
  ],
  providers: [
    TranslateService,
    I18nLangService
  ]
})
export class I18nModule {}
