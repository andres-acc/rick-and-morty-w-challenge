import { NgModule } from '@angular/core';

import { ResultListComponent } from './result-list.component';
import { CharacterResultBoxComponent } from './character-result-box/character-result-box.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ResultListComponent, CharacterResultBoxComponent],
  imports: [CommonModule],
  exports: [ResultListComponent]
})
export class ResultListModule {}
