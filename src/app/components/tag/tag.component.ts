import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tag } from 'src/app/interfaces/tag.interface';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() tag: Tag = { id: 0, name: 'Tag Dummy'};
  @Output() removeTag = new EventEmitter<void>();

  onRemove(): void {
    this.removeTag.emit();
  }
}
