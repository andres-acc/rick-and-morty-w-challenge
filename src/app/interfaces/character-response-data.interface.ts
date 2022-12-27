import { Character } from './character.interface';
import { Info } from './info.interface';

export interface CharacterResponseData {
  info: Info;
  results: Character[];
}
