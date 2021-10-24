import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersContentComponent } from './components/characters-content/characters-content.component';

@NgModule({
  declarations: [CharactersContentComponent],
  imports: [CommonModule, CharactersRoutingModule],
})
export class CharactersModule {}
