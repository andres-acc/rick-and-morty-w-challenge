import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultComponent } from './search-result.component';
import { SearchResultRoutingModule } from './search-result-routing.module';
import { BigInputModule } from '../../components/big-input/big-input.module';

@NgModule({
  declarations: [SearchResultComponent],
  imports: [CommonModule, SearchResultRoutingModule, BigInputModule],
})
export class SearchResultModule {}
