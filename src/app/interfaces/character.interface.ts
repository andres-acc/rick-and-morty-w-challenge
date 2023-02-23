import { Gender } from '../helpers/enums/gender.enum';
import { Species } from '../helpers/enums/species.enum';
import { Status } from '../helpers/enums/status.enum';

interface Place {
  name: string;
  url: string;
}

export interface BasicCharacter {
  id: number;
  name: string;
  species: Species;
  gender: Gender;
  image: string;
  status: Status;
}

export interface Character extends BasicCharacter {
  type: string;
  origin: Place;
  location: Place;
  episode: string[];
  url: string;
  created: Date;
}
