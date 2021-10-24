import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailContentComponent } from './components/characters-detail-content/characters-detail-content.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersDetailContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersDetailRoutingModule {}
