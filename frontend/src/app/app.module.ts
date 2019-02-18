import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoRoutingModule } from '../todo/todo.routing.module';
import { TodoService } from '../todo/todo.service';
import { TodoListComponent } from '../todo/todo-list.component';
import { TodoDetailComponent } from '../todo/todo-detail.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TodoListComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    TodoRoutingModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
