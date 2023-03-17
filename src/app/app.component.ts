import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
