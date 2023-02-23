import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.scss']
})
export class PageButtonComponent {
  @Input() current?: boolean = true;
  @Input() dots?: boolean = false;
  @Input() number?: number = 1;
  @Input() disabled?: boolean = false;
  @Input() rightArrow?: boolean = false;
  @Input() leftArrow?: boolean = false;
}
