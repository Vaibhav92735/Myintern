import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!:string;
  desc!:string;
  @Output() todoAdd: EventEmitter<Boolean> = new EventEmitter();
  constructor(){}
  ngOnInit(): void{
  }
  onSubmit(){
    const todo={
      sno:8,
      title:"",
      desc:"",
      active:false
    }
    this.todoAdd.emit(false)
  }
}
