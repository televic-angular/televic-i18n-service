import { Component, OnInit } from '@angular/core';

import { TranslateService } from '../shared';
import { I18nServiceDemoService } from './i18n-service-demo.service';

@Component({
  selector: 'app-i18n-service-demo',
  templateUrl: './i18n-service-demo.component.html',
  styleUrls: ['./i18n-service-demo.component.sass']
})
export class I18nServiceDemoComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
    private i18nServiceDemoService: I18nServiceDemoService
  ) { }

  ngOnInit() {
    const translatedNameLabel = this.translateService.translateKey('i18nServiceDemo.name');
    // translatedNameLabel will be "姓名" when 'zh-CN';

    // example of using service to get api data 01:
    const someParams = {
      a: 1,
      b: 2
    };
    this.i18nServiceDemoService.exampleFunction(someParams).subscribe(res => {
      console.log(res);
    });

    // example of using service to get api data 02: with callback
    this.i18nServiceDemoService.exampleAgain(this.callbackFn, someParams);
  }

  callbackFn(res) {
    console.log(res);
  }

}
