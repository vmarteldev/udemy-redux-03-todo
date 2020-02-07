import { Action } from '@ngrx/store';

export const FILTER = '[FILTER]-Todo';

export type filterTodoType = 'Todos' | 'Completado' | 'Pendientes';

export class FilterTodoAction implements Action {
  type = FILTER;
  constructor(public filter: filterTodoType) {}
}

export type ActionsFilter = FilterTodoAction;
