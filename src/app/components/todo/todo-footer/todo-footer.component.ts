import { Component, OnInit } from '@angular/core';
import * as fromFilterTodo from '../../store/actions/filter.actions';
import * as fromTodo from '../../store/actions/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [],
})
export class TodoFooterComponent implements OnInit {
  filters: fromFilterTodo.filterTodoType[] = [
    'Todos',
    'Completado',
    'Pendientes',
  ];
  filterNow: fromFilterTodo.filterTodoType = 'Pendientes';
  countPendients = 0;
  constructor(private store: Store<AppState>) {
    this.store.subscribe(appState => {
      this.filterNow = appState.filter;
      this.contarPendientes(appState.todos);
    });
  }

  ngOnInit() {}

  filterTodo(filter: fromFilterTodo.filterTodoType) {
    const action = new fromFilterTodo.FilterTodoAction(filter);
    this.store.dispatch(action);
  }

  contarPendientes(todos: Todo[]) {
    this.countPendients = todos.filter(x => !x.completado).length;
  }

  clearCompleted() {
    const action = new fromTodo.EliminarCompletadosAction();
    this.store.dispatch(action);
  }
}
