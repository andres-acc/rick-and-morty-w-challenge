import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CharacterResponseData } from '../interfaces/character-response-data.interface';
import { Character } from '../interfaces/character.interface';
import { FilterParams } from '../interfaces/filter-params.interface';

@Injectable()
export class ApiService {
  private readonly API_URL = environment.API_URL;

  constructor(private readonly http: HttpClient) {}

  getAllCharacters(): Observable<CharacterResponseData> {
    return this.http.get<CharacterResponseData>(`${this.API_URL}/character`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.API_URL}/character/${id}`);
  }

  getMultipleCharacters(ids: number[]): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.API_URL}/character/${ids}`);
  }

  filterCharacters(params: FilterParams): Observable<CharacterResponseData> {
    return this.http.get<CharacterResponseData>(`${this.API_URL}/character`, {
      params: { ...params },
    });
  }
}
