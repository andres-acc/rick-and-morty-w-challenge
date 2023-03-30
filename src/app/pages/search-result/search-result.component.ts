import { Component, OnInit } from '@angular/core';
import { CharacterResponseData } from '../../interfaces/character-response-data.interface';
import { Character } from '../../interfaces/character.interface';
import { FilterParams } from '../../interfaces/filter-params.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  characters: Character[] = [];
  currentPage: number = 1;
  pages: number = 0;
  charactersCount: number = 0;

  constructor(private readonly service: ApiService) {}

  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  getCharacters(page: number, params: FilterParams = {}): void {
    this.service
      .filterCharacters(page, params)
      .subscribe((response: CharacterResponseData) => {
        this.characters = response.results;
        this.charactersCount = response.info.count;
        this.pages = response.info.pages;
      });
  }

  goToPage(page: number): void {
    if (this.currentPage === page) return;
    this.currentPage = page;
    this.getCharacters(page);
  }
}
