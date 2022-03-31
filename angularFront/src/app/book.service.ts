import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Book {
  name: string;
  asignatura: String;
  dificultad: String;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any>('assets/book.json')
      .toPromise()
      .then(res => <Book[]>res.data)
      .then(data => { return data; });
    }
}