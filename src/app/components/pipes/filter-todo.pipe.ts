import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import { filterTodoType } from '../store/actions/filter.actions';

@Pipe({
  name: 'filterTodo',
})
export class FilterTodoPipe implements PipeTransform {
  transform(todos: Todo[], filter: filterTodoType): Todo[] {
    switch (filter) {
      case 'Pendientes':
        return todos.filter(x => !x.completado);
      case 'Completado':
        return todos.filter(x => x.completado);
      default:
        return todos;
    }
  }
}
