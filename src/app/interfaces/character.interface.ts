import { Gender } from '../helpers/enums/gender.enum';
import { Species } from '../helpers/enums/species.enum';
import { Status } from '../helpers/enums/status.enum';

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
