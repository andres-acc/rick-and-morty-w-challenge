import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BasicCharacter } from 'src/app/interfaces/character.interface';
import { basicCharacterMock } from 'src/app/mock/character.mock';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

  @Input() character: BasicCharacter = basicCharacterMock;
  characterSelected: FormControl = new FormControl(false);

  get isCharacterSelected(): boolean {
    return this.characterSelected.value;
  }

  get statusClass(): string {
    return this.character.status.toLocaleLowerCase();
  }
}
