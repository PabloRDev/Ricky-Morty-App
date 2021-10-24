import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/pages/characters/services/characters.service';

@Component({
  selector: 'app-characters-detail-content',
  templateUrl: './characters-detail-content.component.html',
  styleUrls: ['./characters-detail-content.component.scss'],
})
export class CharactersDetailContentComponent implements OnInit {
  public character: any;
  constructor(
    public charactersService: CharactersService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCharacter = params.get('idCharacter');

      this.charactersService
        .getCharacter(idCharacter)
        .subscribe((characterData) => {
          this.character = characterData;
        });
    });
  }
}
