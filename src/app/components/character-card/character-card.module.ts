import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterCardComponent } from './character-card.component';

@NgModule({
  declarations: [CharacterCardComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CharacterCardComponent]
})
export class CharacterCardModule {}
