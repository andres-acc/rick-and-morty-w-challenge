import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Gender } from 'src/app/helpers/enums/gender.enum';
import { Species } from 'src/app/helpers/enums/species.enum';
import { Status } from 'src/app/helpers/enums/status.enum';
import { BasicCharacter } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() character: BasicCharacter = {
    id: 10,
    name: 'Mr. Nimbus',
    image: 'https://rickandmortyapi.com/api/character/avatar/672.jpeg',
    species: Species.MythologicalCreature,
    gender: Gender.Male,
    status: Status.Alive
  }

  get isCharacterSelected(): boolean {
    return this.characterSelected.value;
  }

  get statusClass(): string {
    return this.character.status.toLocaleLowerCase();
  }

  characterSelected: FormControl = new FormControl(false);

}
