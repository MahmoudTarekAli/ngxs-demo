import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArenasRoutingModule } from './arenas-routing.module';
import { ArenasComponent } from './arenas.component';
import {NgxsModule} from '@ngxs/store';
import {ArenaState} from './state/arena.state';


@NgModule({
  declarations: [ArenasComponent],
  imports: [
    CommonModule,
    ArenasRoutingModule,
    NgxsModule.forFeature([ArenaState]),

  ]
})
export class ArenasModule { }
