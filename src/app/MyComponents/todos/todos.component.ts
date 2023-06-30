import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  bool!: Boolean;
  localItem!: string | null;
  num!: number;
  ngOnInit(): void {
  }
  constructor(){
    setInterval(()=> { this.addTodo(true) }, 60000);
  }
  addTodo(Bool:Boolean){
    this.bool=Bool;
    this.num=Math.floor(Math.random() * (8 + 1) + 1)
  }
}