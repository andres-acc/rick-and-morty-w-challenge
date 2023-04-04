import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultComponent } from './search-result.component';
import { SearchResultRoutingModule } from './search-result-routing.module';
import { BigInputModule } from '../../components/big-input/big-input.module';
import { AccordionModule } from '../../components/accordion/accordion.module';
import { CharacterCardModule } from '../../components/character-card/character-card.module';
import { PaginatorModule } from '../../components/paginator/paginator.module';
import { TagModule } from '../../components/tag/tag.module';
import { CharacterService } from 'src/app/services/character.service';

@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule, 
    SearchResultRoutingModule, 
    BigInputModule, 
    AccordionModule, 
    CharacterCardModule, 
    PaginatorModule,
    TagModule
  ],
  providers: [CharacterService]
})
export class SearchResultModule {}
