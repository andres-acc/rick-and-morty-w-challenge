import { Character } from './character.interface';
import { ResponseProperty } from './response-property.interface';

export interface CharacterResponseData {
  info: ResponseProperty;
  results: Character[];
}
