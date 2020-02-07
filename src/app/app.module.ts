import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoFooterComponent } from './components/todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { TodoComponent } from './components/todo/todo.component';
// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';
import { environment } from '../environments/environment';

// forms
import { ReactiveFormsModule } from '@angular/forms';
import { FilterTodoPipe } from './components/pipes/filter-todo.pipe';
import { FilterTodofakePipe } from './components/pipes/filter-todofake.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoAddComponent,
    TodoItemComponent,
    TodoComponent,
    FilterTodoPipe,
    FilterTodofakePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers), // la estructura que tiene nuestro store
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production,
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
