import {Arena} from '../models/Arena';

export class AddTodo {
  static readonly type = '[Arena] Add';

  constructor(public payload: Arena) {
  }
}

export class GetArenas {
  static readonly type = '[Arena] Get';
}

export class UpdateTodo {
  static readonly type = '[Arena] Update';

  constructor(public payload: Arena, public id: number) {
  }
}

export class DeleteTodo {
  static readonly type = '[Arena] Delete';

  constructor(public id: number) {
  }
}
