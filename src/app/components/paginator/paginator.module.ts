import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator.component';
import { PageButtonComponent } from './page-button/page-button.component';

@NgModule({
  declarations: [PaginatorComponent, PageButtonComponent],
  imports: [CommonModule],
  exports: [PaginatorComponent, PageButtonComponent]
})
export class PaginatorModule {}
