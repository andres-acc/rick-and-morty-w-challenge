import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-input',
  templateUrl: './big-input.component.html',
  styleUrls: ['./big-input.component.scss']
})
export class BigInputComponent {
  @Input() placeholder: string = 'Smith';
}
