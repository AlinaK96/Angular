import { Component, Input } from '@angular/core';
import { TodoService } from '../shared/todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor (
    public todoService: TodoService
  ){}

  onChange(id:number){
    this.todoService.onChange(id)
  }

  remove(id:number){
    this.todoService.remove(id)
  }

}
