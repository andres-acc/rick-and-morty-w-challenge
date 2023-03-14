import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCharacterComponent } from './search-character.component';
import { BigInputModule } from 'src/app/components/big-input/big-input.module';
import { SearchCharacterRoutingModule } from './search-character-routing.module';

@NgModule({
  declarations: [SearchCharacterComponent],
  imports: [
    CommonModule,
    BigInputModule, 
    SearchCharacterRoutingModule
  ],
})
export class SearchCharacterModule {}
