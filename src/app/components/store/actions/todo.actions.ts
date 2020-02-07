import { Action } from '@ngrx/store';
export const AGREGAR_TODO = '[TODO]-Agregar todo';
export const MARCAR_TODO = '[TODO]-Marcar todo';
export const EDITAR_TODO = '[TODO]-Editar todo';
export const ELIMINAR_TODO = '[TODO]-Eliminar todo';
export const MARCAR_TODOS = '[TODO]-Marcar todos';
export const ELIMINAR_COMPLETADOS = '[TODO]-Eliminar completados';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;
  constructor(public texto: string) {}
}

export class MarcarTodoAction implements Action {
  readonly type = MARCAR_TODO;
  constructor(public id: number) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;
  constructor(public todo: any) {}
}

export class EliminarTodoAction implements Action {
  readonly type = ELIMINAR_TODO;
  constructor(public todo: any) {}
}

export class EliminarCompletadosAction implements Action {
  readonly type = ELIMINAR_COMPLETADOS;
}

export class MarcarTodosAction implements Action {
  readonly type = MARCAR_TODOS;
  constructor(public valor: boolean) {}
}

export type ActionsTodo =
  | AgregarTodoAction
  | MarcarTodoAction
  | EditarTodoAction
  | EliminarTodoAction
  | MarcarTodosAction
  | EliminarCompletadosAction;
