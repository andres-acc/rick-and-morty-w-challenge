import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FilterParams } from '../../interfaces/filter-params.interface';
import { BasicCharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss'],
})
export class SearchCharacterComponent {

  currentInput: string = '';
  currentGender: string = '';
  currentSpecie: string = '';
  charactersList: BasicCharacter[] = [];

  constructor(private readonly apiService: ApiService) {}

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

  private getCharacters(): void {
    const params: FilterParams = {
      gender: this.currentGender,
      name: this.currentInput,
      species: this.currentSpecie,
      status: '',
      type: ''
    };
    this.apiService.filterCharacters(params)
      .subscribe({
        next: (res) => {
          this.charactersList = res.slice(0, 5);
        },
        error: () => {
          this.charactersList = [];
        }
      });
  }
}
