import { Character, BasicCharacter } from './character.interface';
import { ResponseProperty } from './response-property.interface';

export interface CharacterResponseData {
  info: ResponseProperty;
  results: Character[];
}

export interface BasicCharacterResponse {
  pages: number;
  counter: number;
  results: BasicCharacter[];
}
