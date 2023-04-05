import { Filters } from '../types/filters.types';
export interface AccordionItem {
  title: string,
  filterKey: Filters,
  content: string[],
  toggle: boolean,
}
