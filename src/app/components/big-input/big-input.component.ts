import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnInit 
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Gender } from '../../helpers/enums/gender.enum';
import { Species } from '../../helpers/enums/species.enum';

@Component({
  selector: 'app-big-input',
  templateUrl: './big-input.component.html',
  styleUrls: ['./big-input.component.scss']
})
export class BigInputComponent implements OnInit {
  @Input() inputPlaceholder: string = 'Smith';
  @Input() addFiltersSelectors: boolean = true;
  @Output() onInputChange: EventEmitter<string> = new EventEmitter();
  @Output() onSpecieSelectorChange: EventEmitter<string> = new EventEmitter();
  @Output() onGenderSelectorChange: EventEmitter<string> = new EventEmitter();

  searchControl: FormControl = new FormControl('');
  specieFormControl: FormControl = new FormControl('');
  genderFormControl: FormControl = new FormControl('');

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged()
    )
    .subscribe((value: string) => {
      if(value.trim().length > 3) {
        this.onInputChange.emit(value);
      }
    });
  }

  onChangeSpecie(): void {
    this.onSpecieSelectorChange.emit(this.specieFormControl.value);
  }
 
  onChangeGender(): void {
    this.onGenderSelectorChange.emit(this.genderFormControl.value);
  }

  readonly genderList = Gender;
  readonly speciesList = Species;
}
