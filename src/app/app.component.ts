import { Component } from '@angular/core';
import { AccordionItem } from './interfaces/accordion.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  panels: AccordionItem[] = [{
    title: 'Género',
    content: ['Female', 'Male', 'Genderless', 'Unknown'],
    toggle: false,
  },
  {
    title: 'Especie',
    content: ['Female', 'Male', 'Genderless', 'Unknown'],
    toggle: false,
  },
  {
    title: 'Estado',
    content: ['Female', 'Male', 'Genderless', 'Unknown'],
    toggle: false,
  }];
}
