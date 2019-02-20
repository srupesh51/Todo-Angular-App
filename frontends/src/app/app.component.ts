import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { TodoService } from '../todo/todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private todoService: TodoService, public router: Router) {

   }
  // class method for toggling AddTodoBox in todo-list.component.html
  showAddTodoBox(e): void {
    e.preventDefault();
    this.todoService.showAddTodoBox = !this.todoService.showAddTodoBox;
  }
}