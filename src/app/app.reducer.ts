import { Todo } from './components/todo/models/todo.model';
import * as fromFilterTodo from './components/store/actions/filter.actions';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodoRecuder from './components/store/reducer/todo.reducer';
import * as fromFilterTodoReducer from './components/store/reducer/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: fromFilterTodo.filterTodoType;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodoRecuder.todoRecuder,
  filter: fromFilterTodoReducer.filterTodoReducer,
};
