import * as fromTodoFilter from '../actions/filter.actions';
import { ActionsFilter } from '../actions/filter.actions';

export function filterTodoReducer(
  state: fromTodoFilter.filterTodoType = 'Todos',
  action: ActionsFilter,
): fromTodoFilter.filterTodoType {
  switch (action.type) {
    case fromTodoFilter.FILTER:
      return action.filter;

    default:
      return state;
  }
}
