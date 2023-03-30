import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigInputModule } from 'src/app/components/big-input/big-input.module';
import { SearchCharacterComponent } from './search-character.component';
import { SearchCharacterRoutingModule } from './search-character-routing.module';
import { ApiService } from '../../services/api.service';
import { ResultListModule } from '../../components/result-list/result-list.module';
import { ButtonModule } from '../../components/button/button.module';

@NgModule({
  declarations: [SearchCharacterComponent],
  imports: [
    CommonModule,
    BigInputModule, 
    SearchCharacterRoutingModule,
    ResultListModule,
    ButtonModule
  ],
  providers: [
    ApiService
  ]
})
export class SearchCharacterModule {}
