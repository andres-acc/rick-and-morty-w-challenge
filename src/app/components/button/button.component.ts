import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent  {
  @Input() content: string = 'Female';
  @Output() action = new EventEmitter<void>();

  buttonAction(): void {
    this.action.emit();
  }
}