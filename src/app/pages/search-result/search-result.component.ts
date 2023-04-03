import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BasicCharacterResponse } from '../../interfaces/character-response-data.interface';
import { BasicCharacter } from '../../interfaces/character.interface';
import { FilterParams } from '../../interfaces/filter-params.interface';
import { ApiService } from '../../services/api.service';
import { filtersPanel } from '../../constants/filters.constants';
import { FiltersService } from '../../services/filters.service';
import { Tag } from '../../interfaces/tag.interface';
import { Filters } from '../../types/filters.types';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  characters: BasicCharacter[] = [];
  currentPage: number = 1;
  pages: number = 0;
  charactersCount: number = 0;
  selectedFilters: Tag[] = [];
  readonly filtersPanel = filtersPanel;
  private unsubscribe$: Subject<null> = new Subject();

  constructor(
    private readonly service: ApiService,
    private readonly filtersService: FiltersService
  ) {}

  ngOnInit(): void {
    this.getCharacters(this.currentPage, this.filtersService.currentFilters);
    this.filtersService.filtersSubject$
    .pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.selectedFilters = Object.entries(
        this.filtersService.currentFilters)
        .filter((filter) => filter[1] !== '')
        .map(filter => {
          return { key: filter[0], name: filter[1] }
        });
        this.getCharacters(0, this.filtersService.currentFilters);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  get currentNameFilter(): string {
    return this.filtersService.currentFilters.name || '';
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

  removeFilter(tag: Tag): void {
    this.filtersService.removeFilter(tag.key as Filters);
  }
}
