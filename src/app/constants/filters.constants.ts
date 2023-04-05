import { AccordionItem } from '../interfaces/accordion.interface';
import { Gender } from '../helpers/enums/gender.enum';
import { Species } from '../helpers/enums/species.enum';
import { Status } from '../helpers/enums/status.enum';

export const filtersPanel: AccordionItem[] = [
  {
    title: 'Género',
    filterKey: 'gender',
    content: Object.values(Gender),
    toggle: true,
  },
  {
    title: 'Especie',
    filterKey: 'species',
    content: Object.values(Species),
    toggle: true,
  },
  {
    title: 'Estado',
    filterKey: 'status',
    content: Object.values(Status),
    toggle: true,
  }
];
