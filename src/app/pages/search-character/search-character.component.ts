import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { FilterParams } from '../../interfaces/filter-params.interface';
import { BasicCharacter } from '../../interfaces/character.interface';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss'],
})
export class SearchCharacterComponent {
  currentInput: string = '';
  currentGender: string = '';
  currentSpecie: string = '';
  charactersList: BasicCharacter[] | null = [];
  characterResultCounter = 0;

  constructor(
    private readonly characterService: CharacterService,
    private readonly filtersService: FiltersService,
    private router: Router
  ) {}

  handleInputChange(input: string) {
    this.currentInput = input;
    this.getCharacters();
  }

  handleGenderChange(value: string) {
    this.currentGender = value;
    this.getCharacters();
  }

  handleSpecieChange(value: string) {
    this.currentSpecie = value;
    this.getCharacters();
  }

  goToResults(): void {
    this.filtersService.addFilter('name', this.currentInput);
    this.filtersService.addFilter('species', this.currentSpecie);
    this.filtersService.addFilter('gender', this.currentGender);
    this.router.navigateByUrl('/search-result');
  }

  private getCharacters(): void {
    const params: FilterParams = {
      gender: this.currentGender,
      name: this.currentInput,
      species: this.currentSpecie,
      status: '',
      type: '',
    };
    this.characterService.filterCharacters(params).subscribe({
      next: (res) => {
        this.charactersList = res.results.slice(0, 5);
        this.characterResultCounter = res.counter;
      },
      error: () => {
        this.charactersList = null;
        this.characterResultCounter = 0;
      },
    });
  }
}
