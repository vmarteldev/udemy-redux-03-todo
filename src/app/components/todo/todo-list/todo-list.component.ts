import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { Todo } from '../models/todo.model';
import { filterTodoType } from '../../store/actions/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filterNow: filterTodoType;
  constructor(private store: Store<AppState>) {
    this.store.subscribe(appState => {
      this.todos = appState.todos;
      this.filterNow = appState.filter;
    });
  }

  ngOnInit() {}
}
