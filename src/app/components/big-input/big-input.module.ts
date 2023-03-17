import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BigInputComponent } from './big-input.component';

@NgModule({
  declarations: [BigInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [BigInputComponent]
})
export class BigInputModule {}
