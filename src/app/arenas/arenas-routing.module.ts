import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArenasComponent} from './arenas.component';


const routes: Routes = [
  {
    path: '',
    component: ArenasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArenasRoutingModule {
}
