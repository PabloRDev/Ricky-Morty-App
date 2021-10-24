import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersDetailRoutingModule } from './characters-detail-routing.module';
import { CharactersDetailContentComponent } from './components/characters-detail-content/characters-detail-content.component';

@NgModule({
  declarations: [CharactersDetailContentComponent],
  imports: [CommonModule, CharactersDetailRoutingModule],
})
export class CharactersDetailModule {}
