import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { FormControl, Validators } from '@angular/forms';
import * as fromTodo from '../../store/actions/todo.actions';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [],
})
export class TodoItemComponent implements OnInit {
  //#region  "Fields"

  @Input() todo: Todo;
  txtInputTodo: FormControl;
  editarTodoActive: boolean;
  @ViewChild('inputTodo', { static: false }) inputTodo: ElementRef;

  //#endregion

  constructor(public store: Store<AppState>) {}

  ngOnInit() {
    this.txtInputTodo = new FormControl('', Validators.required);
  }

  marcarTodo(valor: boolean) {
    const action = new fromTodo.MarcarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

  borrarTodo() {
    if (this.todo.completado) {
      return;
    }
    const action = new fromTodo.EliminarTodoAction({
      id: this.todo.id,
    });
    this.store.dispatch(action);
  }

  editarTodo() {
    if (this.todo.completado) {
      return;
    }

    this.editarTodoActive = true;
    setTimeout(() => {
      this.inputTodo.nativeElement.select();
    }, 1);
  }

  guardarTodo() {
    this.editarTodoActive = false;

    if (!this.txtInputTodo.valid) {
      return;
    }

    if (this.todo.texto === this.txtInputTodo.value) {
      return;
    }

    const action = new fromTodo.EditarTodoAction({
      id: this.todo.id,
      texto: this.txtInputTodo.value,
    });
    this.store.dispatch(action);
  }
}
