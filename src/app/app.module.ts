import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';
import { SharedModule, TranslateService, I18nModule } from './shared';

import { ApiService} from './shared';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { I18nServiceDemoModule } from './i18n-service-demo/i18n-service-demo.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    I18nServiceDemoModule,
    SharedModule,
    I18nModule,
    HttpModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [
    ApiService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
