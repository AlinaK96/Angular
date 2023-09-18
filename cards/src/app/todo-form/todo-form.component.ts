import { Component } from '@angular/core';
import { ITodo, TodoService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title: string = ''

  constructor (private todoService: TodoService){}


  addToDo(){
    if(this.title !== ''){
      const todo: ITodo = {
        title: this.title,
        id: Date.now(),
        completed: false,
        date: new Date()
      }
      this.todoService.addToDo(todo)
      this.title = ''
    }
    
  }
}
