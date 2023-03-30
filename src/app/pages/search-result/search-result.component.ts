import { Component, OnInit } from '@angular/core';
import { BasicCharacterResponse } from '../../interfaces/character-response-data.interface';
import { BasicCharacter } from '../../interfaces/character.interface';
import { FilterParams } from '../../interfaces/filter-params.interface';
import { ApiService } from '../../services/api.service';
import { filtersPanel } from '../../constants/filters.constants';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  characters: BasicCharacter[] = [];
  currentPage: number = 1;
  pages: number = 0;
  charactersCount: number = 0;
  readonly filtersPanel = filtersPanel;

  constructor(private readonly service: ApiService) {}

  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  getCharacters(page: number, params: FilterParams = {}): void {
    this.service
      .filterCharacters(params, page)
      .subscribe((response: BasicCharacterResponse) => {
        this.characters = response.results;
        this.charactersCount = response.counter;
        this.pages = response.pages;
      });
  }

  goToPage(page: number): void {
    if (this.currentPage === page) return;
    this.currentPage = page;
    this.getCharacters(page);
  }

  onInputChange(name: string): void {
    this.getCharacters(1, { name });
  }
}
