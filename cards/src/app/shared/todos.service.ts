import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, tap } from 'rxjs';

export interface ITodo{
    id: number,
    title : string;
    completed:boolean;
    date?: any
}

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    public todos: ITodo[] =[]

    constructor (
        private http: HttpClient
    ){}

    fetchTodos(): Observable<ITodo[]>{
        return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
        .pipe(tap( todos => this.todos = todos ))
    }

    onChange(id: number) {
        const index = this.todos.findIndex( t => t.id === id)
        this.todos[index].completed = !this.todos[index].completed
    }
    
    remove(id: number) {
        
        this.todos = this.todos.filter( t => t.id !== id)
    }

    addToDo(todo: ITodo){
        this.todos.push(todo)
    }
}