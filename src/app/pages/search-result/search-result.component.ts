import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BasicCharacterResponse } from '../../interfaces/character-response-data.interface';
import { BasicCharacter } from '../../interfaces/character.interface';
import { FilterParams } from '../../interfaces/filter-params.interface';
import { CharacterService } from '../../services/character.service';
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
    private readonly characterService: CharacterService,
    private readonly filtersService: FiltersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCharacters(this.currentPage, this.filtersService.currentFilters);
    this.setFilters();
    this.filtersService.filtersSubject$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.setFilters();
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

  goToMainPage(): void {
    this.router.navigateByUrl('');
  }

  getCharacters(page: number, params: FilterParams = {}): void {
    this.characterService
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
    this.getCharacters(page, this.filtersService.currentFilters);
  }

  onInputChange(name: string): void {
    this.getCharacters(1, { name });
    this.filtersService.addFilter('name', name);
  }

  removeFilter(tag: Tag): void {
    this.filtersService.removeFilter(tag.key as Filters);
  }

  private setFilters(): void {
    this.selectedFilters = Object.entries(this.filtersService.currentFilters)
      .filter((filter) => filter[1] !== '' && filter[0] !== 'name')
      .map((filter) => {
        return { key: filter[0], name: filter[1] };
      });
  }
}
