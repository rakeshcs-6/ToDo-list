import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/todo-list"

  saveToDo(data: any) {
    return this.http.post(this.url, data)
  }

  listToDo() {
    return this.http.get(this.url)
  }

  deleteToDo(data: number) {
    return this.http.delete(`${this.url}/${data}`);
  }

}
