import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCharacterComponent } from './search-character.component';
import { SearchCharacterRoutingModule } from './search-character-routing.module';

@NgModule({
  declarations: [SearchCharacterComponent],
  imports: [CommonModule, SearchCharacterRoutingModule],
})
export class SearchCharacterModule {}
