import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.scss']
})
export class PageButtonComponent {
  @Input() current?: boolean = false;
  @Input() dots?: boolean = false;
  @Input() number?: number;
  @Input() disabled?: boolean = false;
  @Input() rightArrow?: boolean = false;
  @Input() leftArrow?: boolean = false;

  @Output() clickEvent = new EventEmitter<number>();

  onClick(): void {
    this.clickEvent.emit(this.number);
  }
}
