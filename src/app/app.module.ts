import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { BigInputModule } from './components/big-input/big-input.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    BigInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
