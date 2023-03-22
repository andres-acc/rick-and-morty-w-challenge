import { Component, Input } from '@angular/core';
import { AccordionItem } from '../../interfaces/accordion.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent{
  @Input() panels: AccordionItem[] = [];

  togglePanel(index:number) {
    this.panels[index].toggle = !this.panels[index].toggle;
  }
}
