import { Gender } from '../helpers/enums/gender.enum';
import { Species } from '../helpers/enums/species.enum';
import { Status } from '../helpers/enums/status.enum';

export interface FilterParams {
  name?: string;
  status?: Status;
  species?: Species;
  type?: string;
  gender?: Gender;
}
