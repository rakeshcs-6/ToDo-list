import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todayString: string = new Date().toDateString();
  title = 'Todo-list';
  toDo!: FormGroup;
  collection!: any[];

  constructor(private formBuilder: FormBuilder, private todo: TodoService) {
  }
  ngOnInit(): void {
    this.toDo = this.formBuilder.group(
      {
        list: ['']
      }
    ),
      this.todo.listToDo().subscribe((res) => {
        this.collection = res as any[]
      })
  }

  save() {
    this.todo.saveToDo(this.toDo.value).subscribe((data) => {
      if (data) {
        this.toDo.reset()
        location.reload()
      } else {
        console.log("error")
      }
    })
  }

  deleteList(data: any) {
    console.log(data)
    this.collection.splice(data - 1, 1)
    this.todo.deleteToDo(data).subscribe((res) => {
      location.reload()
    })
  }
}
