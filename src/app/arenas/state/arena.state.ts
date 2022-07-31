import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Arena} from '../models/Arena';
import {AddTodo, DeleteTodo, GetArenas, UpdateTodo} from './arena.action';
import {ArenaService} from '../services/arena.service';
import {tap} from 'rxjs/operators';

export class ArenaStateModel {
  arenas: Arena[];
}

@State<ArenaStateModel>({
  name: 'arenas',
  defaults: {
    arenas: [],
  }
})
export class ArenaState {

  constructor(private arenaService: ArenaService) {
  }

  @Selector()
  static getTodoList(state: ArenaStateModel) {
    return state.arenas;
  }


  @Action(GetArenas)
  getTodos({getState, setState}: StateContext<ArenaStateModel>) {
    return this.arenaService.fetchTodos().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        arenas: result,
      });
    }));
  }

  @Action(AddTodo)
  addTodo({getState, patchState}: StateContext<ArenaStateModel>, {payload}: AddTodo) {
    return this.arenaService.addTodo(payload).pipe(tap((result) => {
      const state = getState();
      patchState({
        arenas: [...state.arenas, result]
      });
    }));
  }

  @Action(UpdateTodo)
  updateTodo({getState, setState}: StateContext<ArenaStateModel>, {payload, id}: UpdateTodo) {
    return this.arenaService.updateTodo(payload, id).pipe(tap((result) => {
      const state = getState();
      const todoList = [...state.arenas];
      const todoIndex = todoList.findIndex(item => item.id === id);
      todoList[todoIndex] = result;
      setState({
        ...state,
        arenas: todoList,
      });
    }));
  }


  @Action(DeleteTodo)
  deleteTodo({getState, setState}: StateContext<ArenaStateModel>, {id}: DeleteTodo) {
    return this.arenaService.deleteTodo(id).pipe(tap(() => {
      const state = getState();
      const filteredArray = state.arenas.filter(item => item.id !== id);
      setState({
        ...state,
        arenas: filteredArray,
      });
    }));
  }

}

