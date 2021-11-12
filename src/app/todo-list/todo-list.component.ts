import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../app.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[] = [];
  @Output() removeTaskEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeTask(id:number){
    this.removeTaskEmitter.emit(id)
  }
}
