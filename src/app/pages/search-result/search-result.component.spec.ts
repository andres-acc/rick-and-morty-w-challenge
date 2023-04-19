import { of } from 'rxjs';
import { spyOn } from 'jest-mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { FiltersService } from 'src/app/services/filters.service';
import { SearchResultComponent } from './search-result.component';
import { BasicCharacterResponse } from 'src/app/interfaces/character-response-data.interface';
import { basicCharacterMock } from 'src/app/mock/character.mock';
import { Species } from 'src/app/helpers/enums/species.enum';
import { Tag } from 'src/app/interfaces/tag.interface';

const basicCharacterResponse: BasicCharacterResponse = {
  results: [basicCharacterMock],
  counter: 1,
  pages: 1,
};
const filterParams = { name: 'John' };
const page = 1;
describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;
  let characterService: CharacterService;
  let filtersService: FiltersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [FiltersService, CharacterService, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    characterService = TestBed.inject(CharacterService);
    filtersService = TestBed.inject(FiltersService);
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve characters and update properties', () => {
    spyOn(characterService, 'filterCharacters').mockReturnValue(
      of(basicCharacterResponse)
    );
    component.getCharacters(page, filterParams);
    expect(characterService.filterCharacters).toHaveBeenCalledWith(
      filterParams,
      page
    );
    expect(component.characters).toEqual([basicCharacterMock]);
    expect(component.charactersCount).toBe(1);
    expect(component.pages).toBe(1);
  });

  it('should call getCharacters with current page and current filters', () => {
    filtersService.currentFilters = {
      species: Species.Human,
    };
    const getCharactersSpy = jest.spyOn(component, 'getCharacters');
    component.ngOnInit();
    expect(getCharactersSpy).toHaveBeenCalledWith(
      component.currentPage,
      filtersService.currentFilters
    );
  });

  it('should set selectedFilters property correctly', () => {
    filtersService.currentFilters = {
      name: '',
      gender: 'male',
      status: '',
    };
    component['setFilters']();
    const expectedFilters: Tag[] = [
      { key: 'gender', name: 'male' },
      { key: 'status', name: '' },
    ];
    expect(component['selectedFilters']).toEqual(expectedFilters);
  });

  it('should set selectedFilters to an empty array when there are no filters', () => {
    filtersService.currentFilters = { name: '' };
    component['setFilters']();
    expect(component['selectedFilters']).toEqual([]);
  });

  it('should update current page number when goToPage is called', () => {
    const spy = spyOn(characterService, 'filterCharacters').mockReturnValue(
      of<BasicCharacterResponse>({
        results: [],
        counter: 0,
        pages: 0,
      })
    );
    component.goToPage(page);
    expect(component.currentPage).toBe(page);
    expect(spy).toHaveBeenCalledWith(
      {
        gender: '',
        name: '',
        species: '',
        status: '',
        type: '',
      },
      2
    );
  });

  it('should call getCharacters and add a filter on input change', () => {
    const spyGetCharacters = jest.spyOn(component, 'getCharacters');
    const spyAddFilter = jest.spyOn(filtersService, 'addFilter');
    component.onInputChange('Rick');
    expect(spyGetCharacters).toHaveBeenCalledWith(1, { name: 'Rick' });
    expect(spyAddFilter).toHaveBeenCalledWith('name', 'Rick');
  });
  it('should navigate to main page', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    component.goToMainPage();
    expect(router.navigateByUrl).toHaveBeenCalledWith('');
  });

  it('should remove filter from selected filters', () => {
    const tag: Tag = { key: 'gender', name: 'Male' };
    filtersService.addFilter('gender', 'Male');
    (component as any).setFilters();
    expect(component.selectedFilters.length).toBe(1);
    component.removeFilter(tag);
    expect(component.selectedFilters.length).toBe(0);
    expect(filtersService.currentFilters['gender']).toBe('');
  });
});
