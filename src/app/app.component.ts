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
  pages: number = 10;
  currentPage: number = 1;

  handleInputChange(input: string) {
    console.log(input);
  }

  handleGenderChange(value: string) {
    console.log(value);
  }

  handleSpecieChange(value: string) {
    console.log(value);
  }

}
