import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tag } from 'src/app/interfaces/tag.interface';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() tag: Tag = { key: 'name', name: 'Tag Dummy'};
  @Output() removeTag = new EventEmitter<Tag>();

  onRemove(): void {
    this.removeTag.emit(this.tag);
  }
}
