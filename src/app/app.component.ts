import { Component } from '@angular/core';

export interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ListToDo'

  todos: Todo[] = [
    {
      id: 1,
      title: "test",
      description: "testing",
      completed: true,
    }
  ]

  createTask(taskName: string,
             taskDescription: string){
    this.todos.push(
      {
        id: this.todos.length,
        title: taskName,
        description: taskDescription,
        completed:true,
      }
    )
  }

  removeTask(id:number) {
    this.todos = this.todos.filter(elem=>elem.id!==id)
  }
}
