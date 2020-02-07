import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { AgregarTodoAction } from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [],
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo() {
    if (this.txtInput.invalid) {
      return;
    }
    if (!this.txtInput.value) {
      return;
    }

    // for (let index = 0; index < 50; index++) {
    //   const action = new AgregarTodoAction(
    //     this.txtInput.value + index.toString(),
    //   );
    //   this.store.dispatch(action);
    // }
    const action = new AgregarTodoAction(this.txtInput.value);
    this.store.dispatch(action);
    this.txtInput.reset();
  }
}
