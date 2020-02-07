import { Component, OnInit } from '@angular/core';
import { MarcarTodosAction } from '../store/actions/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  marcarTodos(valor: boolean) {
    const action = new MarcarTodosAction(valor);
    this.store.dispatch(action);
  }
}
