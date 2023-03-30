import { Component, Input } from '@angular/core';
import { BasicCharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {
  @Input() characters: BasicCharacter[] | null = [];
}
