import { Component } from '@angular/core';
import { ICONS } from './constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent { 
  public icons = ICONS
}
