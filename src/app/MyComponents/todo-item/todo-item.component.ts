import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  constructor(){ }
  ngOnInit(): void{
  }
  num1=Math.floor(Math.random() * (8 + 1) + 1)
  num2=Math.floor(Math.random() * (8 + 1) + 1)
  num3=Math.floor(Math.random() * (8 + 1) + 1)
  num4=Math.floor(Math.random() * (8 + 1) + 1)
  num5=Math.floor(Math.random() * (8 + 1) + 1)
  num6=Math.floor(Math.random() * (8 + 1) + 1)
}
