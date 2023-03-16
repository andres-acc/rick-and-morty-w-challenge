import { Component, Input } from '@angular/core';
import { ButtonItem } from 'src/app/interfaces/button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent  {
  @Input() content: ButtonItem = {name: 'Female'}
}
