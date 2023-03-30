import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CharacterResponseData, BasicCharacterResponse } from '../interfaces/character-response-data.interface';
import { Character, BasicCharacter } from '../interfaces/character.interface';
import { FilterParams } from '../interfaces/filter-params.interface';

@Injectable()
export class ApiService {
  private readonly API_URL = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  getAllCharacters(page: number): Observable<CharacterResponseData> {
    return this.http.get<CharacterResponseData>(`${this.API_URL}/character?page=${page}`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.API_URL}/character/${id}`);
  }

  getMultipleCharacters(ids: number[]): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.API_URL}/character/${ids}`);
  }

  filterCharacters(params: FilterParams, page?: number): Observable<BasicCharacterResponse> {
    return this.http
      .get<CharacterResponseData>(`${this.API_URL}/character?page=${page}`, {
        params: { ...params },
      })
      .pipe(
        map((response) => {
          return {
            pages: response.info.pages,
            counter: response.info.count,
            results: response.results.map((character) => {
              const { image, name, gender, species, id, status } = character;
              return {
                image,
                name,
                gender,
                species,
                id,
                status,
              };
            })
          }
        })
      );
  }
}
