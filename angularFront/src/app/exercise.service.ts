import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Exercise {
  nombre: string;
  enunciado: String;
  respuesta: String;
}

@Injectable({
  providedIn: 'root'
})
export class ExerciseService{

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any>('assets/exercises.json')
      .toPromise()
      .then(res => <Exercise[]>res.data)
      .then(data => { return data; });
    }
}