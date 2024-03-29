import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { BigInputModule } from './components/big-input/big-input.module';
import { CharacterCardModule } from './components/character-card/character-card.module';
import { AccordionModule } from './components/accordion/accordion.module';
import { TagModule } from './components/tag/tag.module';
import { ButtonModule } from './components/button/button.module';
import { PaginatorModule } from './components/paginator/paginator.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BigInputModule,
    CharacterCardModule,
    AccordionModule,
    TagModule,
    ButtonModule,
    PaginatorModule
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
export class AppModule { }
