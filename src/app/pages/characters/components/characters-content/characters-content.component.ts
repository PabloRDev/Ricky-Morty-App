import { Component, OnInit } from '@angular/core';
import { CharactersService } from './../../services/characters.service';
import { CharactersInterface } from '../../models/characters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters-content',
  templateUrl: './characters-content.component.html',
  styleUrls: ['./characters-content.component.scss'],
})
export class CharactersContentComponent implements OnInit {
  public characterList: CharactersInterface[] = [];
  public i = 1;

  constructor(
    private charactersService: CharactersService,
    private httpCall: HttpClient
  ) {}

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((element: any) => {
      const apiResults: CharactersInterface[] = element.results;
      const formattedResults = apiResults.map(
        ({ id, name, status, gender, image, species }) => ({
          id,
          name,
          status,
          gender,
          image,
          species,
          origin,
        })
      );
      this.characterList = formattedResults;
    });
  }
  nextPage() {
    this.i = this.i + 1;
    this.httpCall
      .get<any>(`https://rickandmortyapi.com/api/character?page=${this.i}`)
      .subscribe((finalList) => {
        this.characterList = finalList.results;
      });
  }
  previousPage() {
    this.i = this.i - 1;
    this.httpCall
      .get<any>(`https://rickandmortyapi.com/api/character?page=${this.i}`)
      .subscribe((finalList) => {
        this.characterList = finalList.results;
      });
  }
}
