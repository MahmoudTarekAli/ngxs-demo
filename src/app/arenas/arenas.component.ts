import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ArenaState} from './state/arena.state';
import {Arena} from './models/Arena';
import {GetTodos} from '../actions/todo.action';
import {GetArenas} from './state/arena.action';

@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.scss']
})
export class ArenasComponent implements OnInit {
  @Select(ArenaState.getTodoList) arenas: Observable<Arena[]>;
  arena: Arena  ;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetArenas());
  }

}
