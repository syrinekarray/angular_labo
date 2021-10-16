import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from './message/message.service';
import { Labo } from './labo-detail/labo';
import { resultat } from './resultat/resultat';
import { Test } from './tests/test';

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersUrl = 'api/users'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getResultbyTestId(id: number): Observable<resultat> {
    return this.http.get<resultat>('http://localhost:4000/resultat/test/' + id);
  }
  getAllResults(): Observable<resultat[]> {
    return this.http.get<resultat[]>('http://localhost:4000/resultat');
  }

  getAllTests(): Observable<Test[]> {
    return this.http.get<Test[]>('http://localhost:4000/test');
  }
  getTestById(id: number): Observable<Test> {
    return this.http.get<Test>('http://localhost:4000/test/' + id);
  }
  getLabo(): Observable<Labo> {
    return this.http.get<Labo>('http://localhost:4000/test');
  }
}
