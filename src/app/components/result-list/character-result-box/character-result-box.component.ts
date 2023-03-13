import { Component, Input } from '@angular/core';
import { Gender } from 'src/app/helpers/enums/gender.enum';
import { BasicCharacter } from 'src/app/interfaces/character.interface';
import { Species } from '../../../helpers/enums/species.enum';
import { Status } from '../../../helpers/enums/status.enum';

@Component({
  selector: 'app-character-result-box',
  templateUrl: './character-result-box.component.html',
  styleUrls: ['./character-result-box.component.scss']
})
export class CharacterResultBoxComponent {

  @Input() character: BasicCharacter = {
    id: 1,
    name: 'Rick Sanchez',
    species: Species.Human,
    gender: Gender.Male,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: Status.Alive
  };

}
