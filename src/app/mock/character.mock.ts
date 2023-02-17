
import { Gender } from 'src/app/helpers/enums/gender.enum';
import { Status } from 'src/app/helpers/enums/status.enum';
import { Species } from 'src/app/helpers/enums/species.enum';
import { BasicCharacter } from 'src/app/interfaces/character.interface';

export const basicCharacterMock: BasicCharacter = {
  id: 10,
  name: 'Mr. Nimbus',
  image: 'https://rickandmortyapi.com/api/character/avatar/672.jpeg',
  species: Species.MythologicalCreature,
  gender: Gender.Male,
  status: Status.Alive
};
