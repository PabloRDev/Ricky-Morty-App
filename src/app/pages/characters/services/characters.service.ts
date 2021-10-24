import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public ApiUrl: string = 'https://rickandmortyapi.com/api';
  public CharactersUrl: string = `${this.ApiUrl}/character`;

  constructor(private httpClient: HttpClient) {}

  public getAllCharacters() {
    return this.httpClient.get(this.CharactersUrl);
  }

  public getCharacter = (idCharacter: any) => {
    return this.httpClient.get(`${this.CharactersUrl}/${idCharacter}`);
  };
}
