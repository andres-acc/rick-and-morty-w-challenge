import { AccordionItem } from '../interfaces/accordion.interface';
import { Gender } from '../helpers/enums/gender.enum';
import { Species } from '../helpers/enums/species.enum';
import { Status } from '../helpers/enums/status.enum';

export const filtersPanel: AccordionItem[] = [
  {
    title: 'Género',
    content: Object.values(Gender),
    toggle: true,
  },
  {
    title: 'Especie',
    content: Object.values(Species),
    toggle: true,
  },
  {
    title: 'Estado',
    content: Object.values(Status),
    toggle: true,
  }
];
