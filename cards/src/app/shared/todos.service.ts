import { Injectable } from '@angular/core';


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
    public todos: ITodo[] =[
        {id: 1, title: "Купить хлеб", completed: true, date: new Date()},
        {id: 2, title: "Купить масло", completed: false, date: new Date()},
        {id: 3, title: "Купить яблоки", completed: true, date: new Date()},
    ]

    onChange(id: number) {
        const index = this.todos.findIndex( t => t.id === id)
        this.todos[index].completed = !this.todos[index].completed
    }
    
    remove(id: number) {
        
        this.todos = this.todos.filter( t => t.id !== id)
    }

}