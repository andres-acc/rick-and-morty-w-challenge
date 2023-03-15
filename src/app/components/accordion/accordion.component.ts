import { Component, Input } from '@angular/core';
import { AccordionItem } from 'src/app/interfaces/accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent{
  @Input() panels: AccordionItem[] = [];
  upArrow = 'assets/images/png/up-arrow.png';

  togglePanel(index:number) {
    this.panels[index].toggle = !this.panels[index].toggle;
  }
}
