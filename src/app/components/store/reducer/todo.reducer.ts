import * as fromTodo from '../actions/todo.actions';
import { Todo } from '../../todo/models/todo.model';

const todo1 = new Todo('Tarea 1');
const todo2 = new Todo('Tarea 2');
const todo3 = new Todo('Tarea 3');
const todo4 = new Todo('Tarea 4');
todo2.completado = true;
const estadoInicial: Todo[] = [todo1, todo2, todo3, todo4];
export function todoRecuder(
  state = estadoInicial,
  action: fromTodo.ActionsTodo,
): Todo[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    case fromTodo.MARCAR_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completado: !todo.completado,
          };
        }
        return todo;
      });

    case fromTodo.EDITAR_TODO:
      return state.map(todo => {
        if (todo.id === action.todo.id) {
          return {
            ...todo,
            texto: action.todo.texto,
          };
        }
        return todo;
      });

    case fromTodo.ELIMINAR_TODO:
      return state.filter(todo => {
        return todo.id !== action.todo.id;
      });

    case fromTodo.MARCAR_TODOS:
      return state.map(todo => {
        return {
          ...todo,
          completado: action.valor,
        };
      });

    case fromTodo.ELIMINAR_COMPLETADOS:
      return state.filter(todo => !todo.completado);

    default:
      return state;
  }
}
