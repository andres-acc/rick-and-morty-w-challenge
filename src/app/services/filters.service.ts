import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterParams } from '../interfaces/filter-params.interface';
import { Filters } from '../types/filters.types';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  currentFilters: FilterParams = {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  }

  filtersSubject$: Subject<boolean> = new Subject();

  addFilter(filter: Filters, value: string): void {
    this.currentFilters[filter] = value;
    this.filtersSubject$.next(true);
  };

  removeFilter(filter: Filters): void {
    this.currentFilters[filter] = '';
    this.filtersSubject$.next(true);
  }
}
