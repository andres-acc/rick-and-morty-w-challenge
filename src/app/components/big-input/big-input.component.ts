import { Component, Input } from '@angular/core';
import { Gender } from '../../helpers/enums/gender.enum';
import { Species } from '../../helpers/enums/species.enum';

@Component({
  selector: 'app-big-input',
  templateUrl: './big-input.component.html',
  styleUrls: ['./big-input.component.scss']
})
export class BigInputComponent {
  @Input() inputPlaceholder: string = 'Smith';
  @Input() addFiltersSelectors: boolean = true;

  readonly genderList = Gender;
  readonly speciesList = Species;
}
