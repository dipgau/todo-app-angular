import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoInterface';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos = [
    {
      id: 0,
      item: 'Do Programming',
      checked: false
    },
    {
      id: 1,
      item: 'Play Guitar',
      checked: false
    },
    {
      id: 2,
      item: 'Walk few Kilometers',
      checked: false
    }
  ];
  item = '';
  btnClicked = false;
  indexList:number;
  newId = 2;

  constructor() {
   }

  ngOnInit(): void {
  }

  onInputChange(ev) {
    console.log(ev.target.value);
    this.item = ev.target.value;
   // this.btnClicked != this.btnClicked;
    /* this.todos.push(this.item);
    console.log(this.todos); */

  }

  onClickAddBtn() {
    this.newId = this.newId + 1;
    const newItem = {
      id: this.newId,
      item : this.item,
      checked: false
    };
    console.log(newItem.id);
    this.todos.push(newItem);
    this.item = "";
  }

  onCheckboxClicked(index:number) {
    this.todos.forEach(it => {
      if (index === it.id) {
        it.checked = !it.checked;
      }
    });
    console.log(index);
  }

  removeItem(i) {
    this.todos.forEach(it => {
      if (i === it.id) {
        this.todos.splice(i, 1);      }
    });
    console.log(i, "del clicked");
  }


}
