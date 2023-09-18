import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../shared/todos.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loading: boolean = true
  constructor (
    public todoService: TodoService
  ){}

  ngOnInit(): void {
    this.todoService.fetchTodos()
      .pipe(delay(2000))
      .subscribe(() => {
        this.loading = false
    })
  }

  

  onChange(id:number){
    this.todoService.onChange(id)
  }

  remove(id:number){
    this.todoService.remove(id)
  }

}
