import {Component, OnInit} from '@angular/core';
import {TodoState} from '../states/todo.state';
import {Select, Store} from '@ngxs/store';
import {Todo} from '../models/Todo';
import {Observable} from 'rxjs';
import {DeleteTodo, GetTodos, SetSelectedTodo} from '../actions/todo.action';
import {ArenaState} from '../arenas/state/arena.state';
import {Arena} from '../arenas/models/Arena';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    @Select(TodoState.getTodoList) todos: Observable<Todo[]>;
  @Select(ArenaState.getTodoList) arenas: Observable<Arena[]>;

    constructor(private store: Store) {
    }

    ngOnInit() {
        this.store.dispatch(new GetTodos());
    }

    deleteTodo(id: number) {
        this.store.dispatch(new DeleteTodo(id));
    }

    editTodo(payload: Todo) {
        this.store.dispatch(new SetSelectedTodo(payload));
    }

}
