import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { BigInputModule } from './components/big-input/big-input.module';
import { CharacterCardModule } from './components/character-card/character-card.module';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [AppComponent, AccordionComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    BigInputModule,
    CharacterCardModule
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
