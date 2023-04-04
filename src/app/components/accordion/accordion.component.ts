import { Component, Input } from '@angular/core';
import { AccordionItem } from '../../interfaces/accordion.interface';
import { FiltersService } from '../../services/filters.service';
import { Filters } from '../../types/filters.types';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent{
  @Input() panels: AccordionItem[] = [];

  constructor(private readonly filtersService: FiltersService) {}

  togglePanel(index:number) {
    this.panels[index].toggle = !this.panels[index].toggle;
  }

  selectUnselectFilter(filter: Filters, value: string): void {
    this.filtersService.addFilter(filter, value);
  }
}
