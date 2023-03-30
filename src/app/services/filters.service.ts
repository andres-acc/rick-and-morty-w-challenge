import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterParams } from '../interfaces/filter-params.interface';

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

  addFilter(filter: 'name' | 'status' | 'species' | 'type' | 'gender', value: string): void {
    this.currentFilters[filter] = value;
    this.filtersSubject$.next(true);
  };

  removeFilter(filter: 'name' | 'status' | 'species' | 'type' | 'gender'): void {
    this.currentFilters[filter] = '';
    this.filtersSubject$.next(true);
  }
}
